# Kickoff: site analytics builder for johnrandall.com (2026-10-13)

You build the visitor and download analytics for johnrandall.com. You work in `~/dev/johnrandall.com`. The orchestrator
watching you is `resume-orchestrator-ho3` (herdr workspace "JOB resume"); report to it at every step below with one short
message, and tell it at once when you need John's hands. John's words, 2026-10-13: "then have an agent build it. You watch.
We need to know who's downloading the resume." His original ask (2026-10-08): "I wanna know who hits the website, where
they're from, what their IP address is, what they download, all that good stuff so I know who's showing interest when."

Read first, in order: `dev-docs/2026-10-08-site-analytics-recommendation.md` (the survey, the recommendation and its build
order: a Cloudflare Worker on `johnrandall.com/*` that passes requests through and logs HTML pages and `/cv/*.pdf|.json`
hits to D1 with IP, city, region, country, ASN org, path and query tag; tagged links; a test route first), the handoff note
beside it, this repo's README and `hugo.toml`, and the global skills `cloudflare`, `wrangler`, `workers-best-practices`,
`durable-objects` (if relevant), `1password-credential-management`, `credential-manifest` (you will need ≥2 credentials:
declare them up front), `prepared-handoff` and `web-human` (for the steps only John can do), `undocumented-api-usage` (not
expected to apply). Skills live in `~/.claude/skills/`.

## Decisions already taken (defaults; John may change them)
- Option A from the recommendation (Worker → D1). No JS tag on the site. Nothing in this repo's content changes except, if
  John approves it, a short privacy notice page.
- Digest: a daily summary to John (new visitors by organisation/country, downloads by document and tag), delivered as a
  Pushover message AND written to `dev-docs/analytics/digests/YYYY-MM-DD.md` (gitignored if it holds IPs); raw rows stay
  in D1. If Pushover isn't reachable from a Worker cron, use a scheduled herdr-shepherd action on the Mac that queries D1
  (read the `herdr-shepherd` skill; subject home for the action is this repo).
- Privacy notice: draft one paragraph as `content/privacy/index.md` as a tracked proposal in a branch or an uncommitted
  file; John decides before it publishes.

## Build order
1. Credentials: check 1Password for an existing Cloudflare API token and its scopes (names only via the sanctioned path).
   Workers + D1 edit on zone `52205de820583d2d93c3f427a6948712` is needed. If no token fits, prepare the token-creation
   step for John per `prepared-handoff` (open the Cloudflare dashboard at the exact page in the agent browser, pre-select
   the template and scopes, title the tab `[JOHN] create token — johnrandall.com analytics`), and tell the orchestrator.
   Never type or paste the token into a message; John stores it in 1Password and you read it from there.
2. Worker + D1 in a new folder `analytics/` in this repo (wrangler project, schema, the Worker, tests), deployed first to
   a test route (`johnrandall.com/__analytics-test/*`), verified with a real request, then to `johnrandall.com/*`.
   Pass-through must be byte-exact for every path; logging only HTML and `/cv/*.pdf|.json`; use `ctx.waitUntil`.
3. Tagged links: a documented convention (`?t=<tag>`) and a tiny table of tags in `dev-docs/analytics/tags.md`.
4. The digest (above). 5. Verification by a FRESH subagent against the live site: a page view and a PDF download appear
   in D1 with IP, geo and ASN; pass-through unchanged (diff headers and bodies with and without the Worker, via the test
   route); the digest arrives. 6. Document in `dev-docs/analytics/README.md`: what runs where, how to query, how to turn it
   off (`wrangler delete`), the privacy notice decision.

Rules: confidential; nothing from `~/job-hunt-resume` here; commit your own files by pathspec with the trailer below;
push `origin` and `umbridge`; never force. Ask John (via the orchestrator) before anything outward beyond the Worker
deploy itself. 85% context rule applies; write a handoff note in `dev-docs/` first.

Co-Authored-By: <the model this session runs on> <noreply@anthropic.com>
Claude-Session-Id: <your own $CLAUDE_SESSION_ID>
Resume: claude --resume <your own $CLAUDE_SESSION_ID>
