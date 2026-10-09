---
# Generated file: do not edit by hand. It is regenerated from the CV source.
title: "Résumé"
description: "Curriculum vitae of John Randall."
url: "/resume/"
pdf: "/cv/john-randall-resume.pdf"
pdf_pages: 2
words: 1426
json: "/cv/john-randall-resume.json"
lastmod: "2026-10-08"
draft: false
hidemeta: true
ShowReadingTime: false
ShowWordCount: false
ShowBreadCrumbs: false
ShowPostNavLinks: false
ShowShareButtons: false
disableShare: true
comments: false
---

<p class="cv-downloads">
<span class="cv-revised">Revised 2026-10-08</span>
<a href="/cv/john-randall-resume.pdf" title="PDF, 2 pages"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> PDF <small>(2 pages)</small></a>
<a href="/cv/john-randall-resume.json" title="JSON Resume"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> JSON Resume</a>
</p>
See also: [CV](/cv/)

Montclair, NJ · john@johnrandall.com · johnrandall.com
[linkedin.com/in/johntrandall](https://linkedin.com/in/johntrandall) · [github.com/johntrandall](https://github.com/johntrandall)

Senior full-stack, product-focused software engineer. Eight years on small Ruby on Rails teams (BackerKit, OpsLevel), leading team process and planning, and training other engineers. Agentic engineer: builds AI-driven systems with coding agents under human-owned specs, review, and tests, with a human operator approving anything consequential. Mission-focused polymath: software engineering, law and technology policy, and audio and media production.

## Engineering skills

**AI and agentic engineering:** AI coding agents, multi-agent orchestration, agent safety guardrails, MCP server development, LLM integration, human-in-the-loop workflows, scheduled autonomous agents

**Software engineering:** Ruby, Ruby on Rails, JavaScript, TypeScript, Python, PostgreSQL, MySQL, Redis, Elasticsearch, GraphQL, REST APIs, RSpec, pytest, background job processing, Heroku, AWS, Docker, GitLab CI, third-party API integration, private and undocumented APIs, web scraping

**People and process:** tech leadership, mentoring and training engineers, pair programming, code review, agile development, requirements writing, ticket sequencing and dependency planning, spike and proof-of-concept work

---

## Experience

### Independent Software Engineer · Oct 2025 – Present
*Agentic engineering: self-directed products, infrastructure, and open source · Montclair, NJ*

- Merged 28 pull requests into 10 third-party projects, including four into Intuit's official QuickBooks Online MCP server and eleven into a macOS Messages MCP server, among them tested fixes for AppleScript-injection vulnerabilities. Published [mcp-omniplan-jtr](https://pypi.org/project/mcp-omniplan-jtr/) (PyPI); earlier, merged fixes and features into the Ruby gems [amazon_order](https://github.com/kyamaguchi/amazon_order/pulls?q=is%3Apr+author%3Ajohntrandall+is%3Amerged) and [rubyfocus](https://github.com/jyruzicka/rubyfocus/pull/5) (2018 – 2019).
- Designed and built two bookkeeping-automation products: **Portal Gopher** signs into 19 vendors' websites and email accounts to collect bills and statements; **Cratchit** extracts the data with LLMs under cost-control rules, proposes QuickBooks entries for a human operator to approve, and reconciles automatically.
- Built the guardrails that let AI agents work safely on real systems, from rental bookkeeping to self-hosted infrastructure (96 Docker stacks, 69 MCP servers) and, as volunteer technical advisor, a youth-sports nonprofit's Google Workspace: 47 pre-action policy hooks and a credential manifest the human operator approves once.
- Enabled agents to work with GUI applications by reverse-engineering the closed-source file formats of OmniPlan and OmniGraffle; published the OmniPlan spec and Python tooling.

### Career Break · Travel · Feb – Aug 2025
Family worldschooling: backpacked nine countries and five continents, teaching the children programming, math, and science on the road and on the trail.

### JKRE · Co-Owner & Operator · 2016 – Present
*Real estate rental business: four properties, long- and short-term rentals*

- Acquired properties in 2010 and 2016; formalized and expanded the business from 2023 to 2025, acquiring two more properties, including the short-term vacation rental.
- From 2025, automated operations with AI agents and a human operator: Portal Gopher and Cratchit (above) for bills and bookkeeping, plus agent workflows, that route issues to the on-call property manager and vendors through agent-drafted, owner-approved emails, with automated tenant updates as issues resolve.

### OpsLevel · Senior Software Developer · Jun 2022 – Sep 2023
*Internal developer portal / service catalog · Series A startup · Rails, MySQL, Redis, Elasticsearch · Toronto (remote)*

- Tech lead for Service Detection (launched Jan 2023): scanned customers' git repositories and fed detected services into the catalog, replacing hand-authored service definitions (in [OpsLevel's launch case study](https://www.opslevel.com/resources/build-your-catalog-with-service-detection), Duolingo imported 315 services, 97% of its architecture, in nine minutes).
- Set the team's tone: made asking for help easy, drew out the quieter engineers, and made pair programming a habit; set the bar for ticket writing so more work ran in parallel with less thrash.
- Led epic and sprint planning: introduced ticket sequencing that drove straight into the unknowns to de-risk each sprint, and built the ticket-dependency diagramming tool (a GitLab CI extension) that became part of the team's process; the documentation-check epic became the company's model for epic planning.
- Tech lead for migrating search from one sprawling SQL query to Elasticsearch, rolled out behind per-account feature flags with legacy fallback: ended timeouts on large catalogs and added relevance ranking and highlighting.
- Tech lead for AWS integrations (Infrastructure Catalog, spring 2023), a 12-week project bringing customers' AWS resources (EC2, ECS, EKS, RDS, Lambda, S3) into the catalog; designed its core architecture, an intermediate layer of integration source objects mapped into catalog entities, which the team reused for its relationships GraphQL API.
- Built the priority scheduling, throttling, and failure handling (Redis-based locking) of OpsLevel Runner, which ran containerized analysis jobs against customers' repositories, and led its capacity GameDay.

### BackerKit · Senior Full-Stack Developer · Jun 2015 – Nov 2021
*Crowdfunding pledge management · Y Combinator seed, then self-funded · Rails, PostgreSQL, Redis, Heroku · San Francisco (remote)*

- Transformed a fledgling Rails and JavaScript project into the leading crowdfunding pledge-management ecosystem:
  - **BackerKit Pledge Manager**: invented the post-crowdfunding-platform pledge-management industry; served 10,400 projects raising $340 million from 16.5 million backers.
  - **BackerKit Launch** and **BackerKit Marketing**: direct-marketing tools that drove $3 million in conversions for over 150 creators and $32 million for 1,100 creators, the latter grown from a manual process into a SaaS platform.
- 3,399 commits, second-most in the codebase's history. Wrote 342 of the 1,176 spec files and 146 of the 613 migrations added 2015 – 2021.
- Anchored the engineering team through growth from two to eight developers and six to 50 employees, as the second developer: onboarded, mentored, and trained the new engineers; refined the team's workflows as headcount grew; and wrote the technical and dev-culture blog posts used in developer recruiting.
- Extended and hardened the Kickstarter and Indiegogo sync that imported projects, rewards, and backers into the Pledge Manager; neither platform offered creators a public API, so it relied on web scraping and creator-authorized OAuth. As BackerKit's developer on Kickstarter's partner GraphQL API, shipped its first production phase (Mar 2019).
- Built and maintained API integrations with PayPal, Stripe, inventory, fulfillment, and postage services, email delivery systems, Salesforce, and Facebook; found and fixed the root causes of email-deliverability issues and built a system gathering deliverability statistics by client, time, and recipient domain.
- Led the Rails 5.2 → 6.0 upgrade (2019) and did the Ruby 2.6 → 3.0 upgrades (2020 – 2021); moved CI to Semaphore 2.0 and configured the testing, CI, and deployment pipelines behind daily Heroku deploys.

---

## Earlier career

**Technology law and policy**
- **Roosevelt Institute**, Program Manager, Telecommunications Equality Project (Feb 2013 – Jan 2014): deputy to Susan Crawford on network neutrality and municipal broadband: research memos for her media appearances, and supporting research for [*Bringing Municipal High-Speed Internet Access to Leverett, Massachusetts*](https://cyber.harvard.edu/publications/2013/internet_to_leverett); united advocacy coalitions against ALEC-driven anti-municipal-network bills.
- **Brooklyn Law Incubator and Policy (BLIP) Clinic**, Senior Clinician and Post-Graduate Fellow (2010 – 2013): co-drafted a Supreme Court amicus brief in [*Brown v. EMA*](https://www.supremecourt.gov/docketfiles/08-1448.htm) (filed as *Schwarzenegger v. EMA*); primary organizer and technical director of the [NYC Legal Hack-A-Thon](https://legalhackers.org/our-story/) (2012); led a clinic team advising the United Nations media department on releasing its media archive under Creative Commons licenses; drafted early Terms of Service and Privacy Policy for Diaspora.
- **Legal Hackers**, co-founder and NYC meetup co-organizer (2012 – 2015): a monthly meetup of lawyers and technologists on legal-industry problems and tech-law policy; world's largest legal meetup group in its second year.
- **Earlier roles:** legal intern, ACLU Project on Speech, Privacy & Technology (Jan – Jun 2012; contributed to amicus briefs, including *United States v. Alvarez*); project associate, Harvard University's Berkman Center for Internet and Society (May – Sep 2008), creating a middle-school copyright and new-media literacy curriculum.

- **Notable publications** include ["Comcast Profits from the Poor with Internet Essentials Deal"](https://www.salon.com/2013/07/10/comcasts_new_partner/) (Next New Deal / Salon, 2013), an impactful column that pressured Comcast to double internet access speeds for low-income families, named a Best Weekly Read by The Century Foundation; and an election-media memo selected by Clay Shirky for publication on [BoingBoing](https://boingboing.net/2008/12/14/uncertainties-in-ama.html) (2008).

---

**Audio, music, and media production**
- **BrainPOP**, Web Production Consultant, Sound Designer, and Audio Engineer (Jun 2005 – May 2011): directed audio production for an award-winning educational website used by 20% of U.S. school districts, designing sound for English-language learners and hearing-impaired students.
- **Freelance**, web, audio, and music producer (1999 – 2009): award-winning projects, mostly in education and civil- and human-rights advocacy, for clients including the ACLU, Amnesty International, and Human Rights Watch.
- **Grey Worldwide (WPP Group)**, Lead Audio Engineer (Mar 2000 – Jun 2006): technical lead of the in-house audio department, whose revenue grew 350% over three years; built its multi-user digital job-tracking system.
- **WarpWhistle Music LLC**, co-founder and managing partner (Mar 2005 – May 2006): directed musicians, composers, engineers, and sales representatives producing music for national radio and TV advertising.
- **Notable work** includes mix and sound design for [*Brooklyn Lobster*](https://www.imdb.com/title/tt0401591/fullcredits/) (presented by Martin Scorsese; Official Selection, Toronto and Hamptons); live recordings of Freestyle Love Supreme, Lin-Manuel Miranda's hip-hop troupe; and production and recording on Nina Sky's "Move Ya Body" (Billboard Hot 100 #4; certified Gold).

---

## Education

### General Assembly · Web Development Immersive, 12 weeks · 2014

### Brooklyn Law School · J.D., cum laude; bar admission NY and NJ (inactive) · 2012

### New York University · B.S. in Digital Communications & Media, magna cum laude · 2009

---

*Full CV at [johnrandall.com](https://johnrandall.com/)*
