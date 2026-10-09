# Site analytics for johnrandall.com — recommendation (awaiting John's go)

What this is: the survey and the single recommendation that 9 · SITE ANALYTICS
put to John on 2026-10-08, kept so a successor can build it without
re-deriving anything. Nothing below is built. Every step after "John's go"
is an outward or infra action and needs his explicit go first.

John's ask (2026-10-08 15:08, verbatim): "I wanna know who hits the website,
where they're from, what their IP address is, what they download, all that
good stuff so I know who's showing interest when."

## The deciding fact (Verified 2026-10-08)

johnrandall.com and www are **already proxied by Cloudflare** (orange cloud).
`dig` returns Cloudflare anycast (104.21.10.233, 172.67.164.204), and
`curl -I https://johnrandall.com/cv/john-randall-cv-full.pdf` returns both
`server: cloudflare` / `cf-ray` and `x-github-request-id`. So every request,
including a direct PDF or JSON download, passes Cloudflare's edge before it
reaches GitHub Pages. GitHub Pages itself gives no logs. www 301s to the apex
at Cloudflare. The site carries no analytics tag today.

## Options

| Option | IP | Geo | Company / network (ASN org) | PDF/JSON downloads | Touches site repo |
|---|---|---|---|---|---|
| **A. Cloudflare Worker → D1** | ✅ full | ✅ city/region/country | ✅ `request.cf.asOrganization` on every hit | ✅ every fetch, even a direct link with no page view | No |
| B. Cloudflare Web Analytics | ❌ | country | ❌ | ❌ | JS tag |
| C. Cloudflare Logpush | ✅ | ✅ | ✅ | ✅ | No — Enterprise plan only |
| D. Umami / Plausible on umbridge | ❌ (no IPs by design) | country | ❌ | only clicks made from the site | JS tag + exposing umbridge publicly |
| E. Matomo on umbridge / homemade beacon | ✅ | ✅ | via lookup | only clicks made from the site | JS tag + exposed endpoint |

Downloads decide it. A recruiter who opens the PDF from a link in an email never
runs page JavaScript, so only the edge (A or C) sees that hit.

## Recommendation: A, plus tagged links

1. **A Worker on route `johnrandall.com/*`.** It passes each request through to
   origin unchanged (`fetch(request)`). For HTML pages and `/cv/*.pdf|.json`
   only (no CSS, JS or images), it writes one D1 row in `ctx.waitUntil`: time,
   path, query tag, IP (`CF-Connecting-IP`), city, region, country, ASN and AS
   organization, referrer, user agent and status. Wrap the logging in
   try/catch, and set the route to fail open so a Worker fault never takes the
   site down. Traffic fits the free Workers tier (100k requests/day); check
   current D1 free limits at build time.
2. **Tagged links.** For example, `johnrandall.com/cv/full/?r=acme`; the PDF
   takes the same `?r=` tag. The Worker records the tag. This is the only
   reliable way to tell **who** looked. IP-to-company lookups mostly return
   ISPs, mobile carriers or Zscaler, and give the real company only for large
   employers on their own network. Side signal: when corporate email security
   (Proofpoint, Mimecast) fetches a link, that shows the company's mail system
   received it.
3. **Query command.** A local command (for example `site-visitors --since 7d
   --path /cv`) reads D1 through the Cloudflare API and does reverse DNS at
   query time. It answers "who looked at the CV this week".
4. **Daily digest** from the same command: visits and downloads, plus
   who/where/when, with known bots folded into one line.
5. **Code location:** a new **private** repo (Forgejo on umbridge), not the public
   site repo. Nothing changes under `~/dev/johnrandall.com`, so `publish-cv`
   and the designer's `layouts/` are unaffected.
6. **Credential:** the existing 1Password "Cloudflare" API Token (JRVIS Infra)
   is DNS-edit only. A new token is needed: Workers Scripts edit, Workers Routes
   edit (zone 52205de820583d2d93c3f427a6948712) and D1 edit. John creates it in
   the dashboard and stores it in 1Password; ask for it through AskUserQuestion,
   never in a message.

## Privacy and legal (John decides; not legal advice)

IP addresses are personal data under GDPR/UK GDPR. If EU or UK recruiters
visit, logging and identifying individuals needs a lawful basis (legitimate
interest is arguable), a short privacy notice and a retention limit. The
proposal: full IPs for 90 days, then truncated; data kept off GitHub. The
Worker sets no cookies and runs no client script, so no cookie banner is
needed. The NJ and CA privacy laws have thresholds a personal site does not
meet. The notice would be a footer link to a three-line page (what is logged,
why, how long, how to ask for deletion). That is a site change, so coordinate
with resume-orchestrator-ho2 and the site designer (job-hunt-site-design owns
`layouts/`) first.

## Open questions put to John

1. Go on A + tagged links? (new Cloudflare token, Worker route on the live
   site, D1 database, private repo)
2. Privacy notice: add it (a site change) or skip it?
3. Where should the daily digest land: a Markdown file in `~/job-hunt`
   (gitignored), an email to John, Pushover, or a card on the Job Hunt Trello
   board?

## What John's go starts (build order)

1. John creates the scoped token and stores it in 1Password; the agent reads it
   through AskUserQuestion / `op`.
2. Create the private repo, the Worker and the D1 schema; `wrangler deploy` to a
   test route first (e.g. `johnrandall.com/__analytics-test`), then to
   `johnrandall.com/*`.
3. Verify: fetch a page and the PDF with `?r=test`, confirm the rows land, and
   confirm the response bytes and headers are unchanged.
4. Build the query command and the digest; register the dashboard/repo with
   `session-links add`.
5. If approved, add the privacy notice, after telling the orchestrator.
6. Retention job (truncate IPs after 90 days), as a Worker Cron Trigger.

---
Written by 9 · SITE ANALYTICS, 2026-10-08.
Claude-Session-Id: f0dacb3f-cc90-40c3-a453-24b995fa7ab5
