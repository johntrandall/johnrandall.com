import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';
import { classify, tagOf, truncateIp, buildRow } from '../src/classify.js';

test('classify: pages, downloads, and everything else', () => {
  assert.equal(classify('GET', '/cv/', 'text/html; charset=utf-8'), 'page');
  assert.equal(classify('GET', '/', 'text/html'), 'page');
  assert.equal(classify('GET', '/cv/john-randall-cv-full.pdf', 'application/pdf'), 'download');
  assert.equal(classify('GET', '/cv/resume.json', 'application/json'), 'download');
  assert.equal(classify('GET', '/CV/X.PDF', 'application/pdf'), 'download'); // case-insensitive; a 404 is still logged, with its status
  assert.equal(classify('GET', '/css/site.css', 'text/css'), null);
  assert.equal(classify('GET', '/fonts/a.woff2', 'font/woff2'), null);
  assert.equal(classify('POST', '/cv/', 'text/html'), null);
  assert.equal(classify('GET', '/x', null), null);
});

test('tagOf trims and caps', () => {
  assert.equal(tagOf(new URLSearchParams('t=acme')), 'acme');
  assert.equal(tagOf(new URLSearchParams('t=')), null);
  assert.equal(tagOf(new URLSearchParams('x=1')), null);
  assert.equal(tagOf(new URLSearchParams('t=' + 'a'.repeat(200))).length, 64);
});

test('truncateIp', () => {
  assert.equal(truncateIp('203.0.113.77'), '203.0.113.0');
  assert.equal(truncateIp('2001:db8:abcd:12::1'), '2001:db8:abcd::');
  assert.equal(truncateIp('garbage'), null);
});

function fakeEnv(extra = {}) {
  const calls = [];
  const env = {
    ...extra,
    DB: { prepare: () => ({ bind: (...a) => ({ run: async () => { calls.push(a); } }) }) },
  };
  return { env, calls };
}

async function run(url, { headers = {}, upstream, env: extra } = {}) {
  const { env, calls } = fakeEnv(extra);
  const waits = [];
  const seen = [];
  globalThis.fetch = async (req) => { seen.push(req.url); return upstream; };
  const req = new Request(url, { headers });
  Object.defineProperty(req, 'cf', { value: { city: 'Newark', region: 'New Jersey', country: 'US', asn: 7922, asOrganization: 'Comcast' } });
  const res = await worker.fetch(req, env, { waitUntil: (p) => waits.push(p) });
  await Promise.all(waits);
  return { res, calls, seen };
}

test('pass-through returns the very same response object', async () => {
  const upstream = new Response('body', { status: 200, headers: { 'Content-Type': 'text/html', 'X-Odd': '1' } });
  const { res } = await run('https://johnrandall.com/cv/?t=acme', { upstream });
  assert.equal(res, upstream);
});

test('logs a page hit with ip, geo, asn and tag', async () => {
  const upstream = new Response('x', { headers: { 'Content-Type': 'text/html' } });
  const { calls } = await run('https://johnrandall.com/cv/?t=acme', {
    upstream, headers: { 'CF-Connecting-IP': '203.0.113.9', 'User-Agent': 'UA' } });
  assert.equal(calls.length, 1);
  const [ts, kind, method, path, tag, ip, city, region, country, asn, asOrg] = calls[0];
  assert.deepEqual([kind, method, path, tag, ip, city, region, country, asn, asOrg],
    ['page', 'GET', '/cv/', 'acme', '203.0.113.9', 'Newark', 'New Jersey', 'US', 7922, 'Comcast']);
  assert.ok(ts.endsWith('Z'));
});

test('logs a pdf download; ignores css', async () => {
  const pdf = await run('https://johnrandall.com/cv/a.pdf?t=x', { upstream: new Response('p', { headers: { 'Content-Type': 'application/pdf' } }) });
  assert.equal(pdf.calls.length, 1);
  assert.equal(pdf.calls[0][1], 'download');
  const css = await run('https://johnrandall.com/css/a.css', { upstream: new Response('c', { headers: { 'Content-Type': 'text/css' } }) });
  assert.equal(css.calls.length, 0);
});

test('a failing insert never affects the response', async () => {
  const { env } = fakeEnv();
  env.DB = { prepare: () => { throw new Error('d1 down'); } };
  globalThis.fetch = async () => new Response('ok', { headers: { 'Content-Type': 'text/html' } });
  const waits = [];
  const res = await worker.fetch(new Request('https://johnrandall.com/'), env, { waitUntil: (p) => waits.push(p) });
  await Promise.allSettled(waits);
  assert.equal(await res.text(), 'ok');
});

test('test prefix is stripped upstream but the logged path keeps it', async () => {
  const { calls, seen } = await run('https://johnrandall.com/__analytics-test/cv/', {
    env: { PATH_PREFIX: '/__analytics-test' },
    upstream: new Response('x', { headers: { 'Content-Type': 'text/html' } }) });
  assert.deepEqual(seen, ['https://johnrandall.com/cv/']);
  assert.equal(calls[0][3], '/__analytics-test/cv/');
});

import { buildDigest, isBot } from '../src/digest.js';

test('digest folds bots, groups by ip, flags downloads', () => {
  const rows = [
    { ip: '1.1.1.1', user_agent: 'Mozilla/5.0', kind: 'page', path: '/cv/', tag: 'acme', city: 'Newark', region: 'NJ', country: 'US', as_org: 'Acme Corp' },
    { ip: '1.1.1.1', user_agent: 'Mozilla/5.0', kind: 'download', path: '/cv/a.pdf', tag: null, city: 'Newark', region: 'NJ', country: 'US', as_org: 'Acme Corp' },
    { ip: '2.2.2.2', user_agent: 'Googlebot/2.1', kind: 'page', path: '/', tag: null },
    { ip: '3.3.3.3', user_agent: 'Mozilla/5.0', kind: 'page', path: '/__analytics-test/cv/', tag: 'selftest' },
  ];
  const d = buildDigest(rows, new Date('2026-10-16T12:00:00Z'));
  assert.match(d.message, /1 visitor, 2 hits, 2 bot\/test hits folded/);
  assert.match(d.message, /Acme Corp .* tag acme · 1 page · downloaded a\.pdf/);
  assert.equal(d.quiet, false);
  assert.equal(buildDigest([]).quiet, true);
  assert.equal(isBot(null), true);
});
