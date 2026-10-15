#!/usr/bin/env node
// Writes dev-docs/analytics/digests/YYYY-MM-DD.md from the last N hours of D1 hits.
// Needs CLOUDFLARE_API_TOKEN in the environment (credential-manifest or `op run`).
// Usage: node analytics/bin/site-digest.mjs [hours=24]
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { buildDigest } from '../src/digest.js';

const hours = Number(process.argv[2] || 24);
const since = new Date(Date.now() - hours * 3600e3).toISOString();
const out = execFileSync('npx', ['wrangler', 'd1', 'execute', 'johnrandall-analytics', '--remote', '--json',
  '--command', `SELECT * FROM hits WHERE ts >= '${since}' ORDER BY ts`],
  { cwd: new URL('..', import.meta.url).pathname, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const rows = JSON.parse(out)[0].results;
const d = buildDigest(rows);
const dir = new URL('../../dev-docs/analytics/digests/', import.meta.url).pathname;
mkdirSync(dir, { recursive: true });
const file = `${dir}${d.markdown.split('\n')[0].replace('# Site digest ', '')}.md`;
writeFileSync(file, d.markdown);
console.log(file);
