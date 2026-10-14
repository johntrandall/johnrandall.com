// Decides what the analytics Worker records. Pure functions, no I/O, so
// test/classify.test.js can cover them with node:test.

const DOWNLOAD_PATH = /^\/cv\/.+\.(pdf|json)$/i;

// A hit is recorded when it is a download (/cv/*.pdf|.json) or an HTML page.
// CSS, JS, fonts and images are never recorded. Returns null for no record.
export function classify(method, pathname, contentType) {
  if (method !== 'GET' && method !== 'HEAD') return null;
  if (DOWNLOAD_PATH.test(pathname)) return 'download';
  if (/^text\/html/i.test(contentType || '')) return 'page';
  return null;
}

// The tag is the value of ?t= (the convention in dev-docs/analytics/tags.md).
// Trimmed and capped so a hostile query string cannot bloat the table.
export function tagOf(searchParams) {
  const raw = searchParams.get('t');
  return raw ? raw.trim().slice(0, 64) : null;
}

export function buildRow(request, response, kind, now = Date.now()) {
  const url = new URL(request.url);
  const cf = request.cf || {};
  const h = request.headers;
  return {
    ts: new Date(now).toISOString(),
    kind,
    method: request.method,
    path: url.pathname,
    tag: tagOf(url.searchParams),
    ip: h.get('CF-Connecting-IP'),
    city: cf.city ?? null,
    region: cf.region ?? null,
    country: cf.country ?? null,
    asn: cf.asn ?? null,
    as_org: cf.asOrganization ?? null,
    colo: cf.colo ?? null,
    referrer: (h.get('Referer') || '').slice(0, 300) || null,
    user_agent: (h.get('User-Agent') || '').slice(0, 300) || null,
    status: response.status,
  };
}

// IPv4 -> a.b.c.0; IPv6 -> first three groups + "::". Anything else -> null.
export function truncateIp(ip) {
  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) return ip.split('.').slice(0, 3).join('.') + '.0';
  if (ip.includes(':')) return ip.split(':').slice(0, 3).join(':') + '::';
  return null;
}
