# johnrandall.com analytics

Purpose: who visits johnrandall.com, from where, and what they download, so John knows who is
showing interest and when (John, 2026-10-08). For anyone who builds, debugs or turns off the
analytics, and for agents that publish documents or change links on this site.

## What runs where
- **Cloudflare Worker `johnrandall-analytics`** on route `johnrandall.com/*` (account
  `67cc1358f5869075d2abbcf4cc18df1a`). It passes every request to the origin unchanged
  (`fetch(request)`, the same response object back) and, after the response, writes one row to
  D1 for HTML pages and for `/cv/*.pdf` and `/cv/*.json`. Writes run in `ctx.waitUntil`, inside
  try/catch: a logging fault never changes a response. No cookies, no script on the site, no
  change to the site's content or templates.
- **D1 database `johnrandall-analytics`** (id `90dc45b5-5bad-499f-976c-ab8523f205ef`), table `hits`:
  time, kind (`page` | `download`), path, `?t=` tag, IP, city, region, country, ASN, AS
  organisation, colo, referrer, user agent, status. Schema: `analytics/schema.sql`.
- **Test copy `johnrandall-analytics-test`** on `johnrandall.com/__analytics-test/*`. It strips that
  prefix before fetching the origin, so `/__analytics-test/cv/` serves `/cv/`; compare it with the
  live path to check pass-through. Its rows keep the prefix in `path`.
- **Crons (UTC)**: `0 12 * * *` sends the daily digest by Pushover (skipped when empty; secrets
  `PUSHOVER_TOKEN` / `PUSHOVER_USER` come from the 1Password item "Pushover - JRVIS Health
  Check"); `17 4 * * *` truncates IPs older than 90 days (IPv4 to /24, IPv6 to /48).
- **Local digest file**: `node analytics/bin/site-digest.mjs [hours]` writes
  `dev-docs/analytics/digests/YYYY-MM-DD.md` (gitignored: it describes visitors).
- **Tagged links**: `?t=<tag>`; convention and the table of tags in [tags.md](tags.md).

Code: `analytics/` (`src/index.js` Worker, `src/classify.js`, `src/digest.js`, `test/`, `wrangler.jsonc`).
Tests: `cd analytics && npm test`.

## Credential
Deploys use the account-wide 1Password item "Cloudflare - API Token (infra-agent)" (JRVIS Infra, field
`credential`). Do not ask John for another token. Fetch it through the `credential-manifest` skill
(manifest: `analytics/manifests/analytics-build.env.tpl`), then `cd analytics && npx wrangler deploy`
(`--env test` for the test route). Recorded in admin-technical: `inventories/Services-Inventory.md`,
section "Cloudflare Workers (public edge)".

## Query it
```
cd analytics && set -a && source <manifest env file> && set +a
npx wrangler d1 execute johnrandall-analytics --remote --command \
  "SELECT ts,kind,path,tag,ip,city,country,as_org FROM hits WHERE kind='download' ORDER BY id DESC LIMIT 20"
```
Bots and security scanners (Proofpoint, Mimecast, Zscaler, crawlers) appear in raw rows; the digest folds them.

## Turn it off
`cd analytics && npx wrangler delete` (live Worker) and `npx wrangler delete --env test`. The route goes
with the Worker; the site is served directly again. D1 rows stay until the database is deleted
(`npx wrangler d1 delete johnrandall-analytics`).

## Verified
Pass-through on the test route: PDF body byte-identical (1,159,300 bytes), headers equal apart from
per-request ones; HTML differs only by Cloudflare's per-request email-obfuscation token. Live
smoke test 2026-10-15: all site pages 200, unknown paths 404 as before. Rows land with IP, geo and ASN.
Independent black-box check by a fresh verifier (2026-10-15, no credentials): status, bytes and headers
equal live vs test prefix for pages, both PDFs, JSON, CSS and a 404; redirects, HEAD, Range (206) and query
strings unchanged; about 100 requests each way without a Worker-caused error. Its 189 tagged requests
(`verifier-1792080124*`) all appear in D1 with IP, country and ASN. 404 HTML pages are also logged as
`page` rows with status 404 (scanner noise); filter on `status = 200` when counting real visits.

## Privacy
IP addresses are personal data (GDPR/UK GDPR). Retention is 90 days full, then truncated. The
site shows no notice today. A proposed notice is in [privacy-notice-proposal.md](privacy-notice-proposal.md);
John decides whether it publishes (it is a site change: the page would be `content/privacy/index.md`
and a footer link, coordinated with the site designer who owns `layouts/`).

## For other agents working on this site
Do not remove or rename `/cv/*.pdf|.json` paths without telling John: the downloads are the
signal. New links John sends out should carry a `?t=` tag and a row in [tags.md](tags.md). The
publish script and templates need no change for analytics.
