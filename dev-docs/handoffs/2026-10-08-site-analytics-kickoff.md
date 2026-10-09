# Kickoff: 9 · SITE ANALYTICS (job-hunt-site-analytics), 2026-10-08

You are a new session in John's job-hunt herdr workspace (w87), spawned by the orchestrator
(`resume-orchestrator-ho2`) on John's instruction, 2026-10-08 15:08, verbatim:

> "Spin up another agent that's responsible for tracking on the website. I wanna know who hits the
> website, where they're from, what their IP address is, what they download, all that good stuff so
> I know who's showing interest when."

## The site

- johnrandall.com: Hugo + PaperMod, repo `~/dev/johnrandall.com`, deployed by GitHub Pages from the
  PUBLIC GitHub repo (`origin main`); on-prem mirror `umbridge`. Static: GitHub Pages gives no
  server logs and no visitor IPs.
- DNS is on Cloudflare (`dns-management` skill, `cloudflare` skill). Check whether the records are
  proxied (orange cloud) or DNS-only; that decides what Cloudflare can see.
- Published today: `/cv/full/` (page), `/cv/john-randall-cv-full.pdf`, `/cv/john-randall-cv-full.json`.
  `/cv/` (the abridged CV) follows. These downloads are the main signal John wants.

## Your job

1. Read `~/job-hunt/CLAUDE.md`, `README.md`, and the `web-operations-meta`, `cloudflare`,
   `dns-management`, `host-addressing` and `dev-project-to-portainer-stack` skills as needed.
2. Survey the options honestly, with trade-offs and what each can and cannot see: Cloudflare proxy +
   Web Analytics / Logpush / a Worker that logs PDF and JSON downloads with IP, geo, referrer, UA;
   a self-hosted analytics stack on umbridge (Umami, Plausible, GoAccess on Worker logs); a
   first-party beacon in the Hugo template. IP address capture, geolocation, reverse DNS and
   company identification (ASN / org) are what he asked for; say which option gives them.
3. Flag privacy and legal points plainly (visitor IP retention; EU/UK visitors; what a privacy
   notice would need) in one short paragraph. John decides.
4. Put ONE recommendation to John, then build only what he approves. Any change to DNS, the site
   repo, Cloudflare, or umbridge is an outward or infra action: John's explicit go first, in your
   tab. Credentials through `AskUserQuestion` / 1Password, never in messages.
5. Deliver, once built: a daily digest John can read (visits, downloads, who/where/when) and a
   way to ask "who looked at the CV this week". Decide with him where it lives.

## Rules

- Confidential job search: nothing from `~/job-hunt` leaves the machine except what John
  approves for the public site.
- You do not touch `resume/**`, the resume pipeline's files, or `tools/publish-cv`.
  Site-template changes (a beacon, a script tag) go in `~/dev/johnrandall.com`, committed only
  on John's go; tell `resume-orchestrator-ho2` first, since `publish-cv` writes into that checkout.
- Commit with explicit pathspecs; end commit messages with the session-id trailer (CLAUDE.md).
- Register the site and any dashboard with `session-links add` (see the skill).
- At about 85% context, write a handoff note in `dev-docs/handoffs/` and tell the orchestrator.
- Don't reply to idle notices.

First: tell `resume-orchestrator-ho2` you are up, then do the survey and put the recommendation to
John in your tab.
