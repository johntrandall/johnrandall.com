import { classify, buildRow, truncateIp } from './classify.js';

const INSERT = `INSERT INTO hits
  (ts, kind, method, path, tag, ip, city, region, country, asn, as_org, colo, referrer, user_agent, status)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export async function record(env, row) {
  await env.DB.prepare(INSERT)
    .bind(row.ts, row.kind, row.method, row.path, row.tag, row.ip, row.city, row.region,
      row.country, row.asn, row.as_org, row.colo, row.referrer, row.user_agent, row.status)
    .run();
}

export default {
  // Pass every request through to the origin unchanged; log afterwards.
  async fetch(request, env, ctx) {
    let upstream = request;
    // Test route only: PATH_PREFIX=/__analytics-test strips the prefix so the
    // test URL serves the real page, letting a verifier diff it against the
    // same path served without the Worker. Unset in production.
    if (env.PATH_PREFIX) {
      const url = new URL(request.url);
      if (url.pathname.startsWith(env.PATH_PREFIX)) {
        url.pathname = url.pathname.slice(env.PATH_PREFIX.length) || '/';
        upstream = new Request(url, request);
      }
    }
    const response = await fetch(upstream);
    try {
      const kind = classify(request.method, new URL(upstream.url).pathname,
        response.headers.get('Content-Type'));
      if (kind) {
        // Log the URL the visitor asked for, not the rewritten one.
        const row = buildRow(request, response, kind);
        ctx.waitUntil(record(env, row).catch((e) => console.error('analytics insert failed', e)));
      }
    } catch (e) {
      console.error('analytics failed', e);
    }
    return response;
  },

  // Retention: keep full IPs for 90 days, then truncate (IPv4 to /24, IPv6 to /48).
  async scheduled(_event, env) {
    const cutoff = new Date(Date.now() - 90 * 86400e3).toISOString();
    const { results } = await env.DB.prepare(
      'SELECT id, ip FROM hits WHERE ts < ? AND ip_truncated = 0 AND ip IS NOT NULL LIMIT 500',
    ).bind(cutoff).all();
    if (!results.length) return;
    const update = env.DB.prepare('UPDATE hits SET ip = ?, ip_truncated = 1 WHERE id = ?');
    await env.DB.batch(results.map((r) => update.bind(truncateIp(r.ip), r.id)));
  },
};
