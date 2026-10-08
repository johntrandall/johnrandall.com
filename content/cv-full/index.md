---
# Generated file: do not edit by hand. It is regenerated from the CV source.
title: "Curriculum Vitae (Full)"
description: "Curriculum vitae of John Randall."
url: "/cv/full/"
pdf: "/cv/john-randall-cv-full.pdf"
pdf_pages: 7
words: 4327
json: "/cv/john-randall-cv-full.json"
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
<a href="/cv/john-randall-cv-full.pdf" title="PDF, 7 pages"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> PDF <small>(7 pages)</small></a>
<a href="/cv/john-randall-cv-full.json" title="JSON Resume"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> JSON Resume</a>
</p>
See also: [Abridged CV](/cv/)

Montclair, NJ · john@johnrandall.com · johnrandall.com
[linkedin.com/in/johntrandall](https://linkedin.com/in/johntrandall) · [github.com/johntrandall](https://github.com/johntrandall)

Senior full-stack, product-focused software engineer with proven experience providing technical and process leadership in highly collaborative environments. Eight years on small Ruby on Rails teams (BackerKit, OpsLevel), leading team process and planning, and training other engineers. Agentic engineer: builds AI-driven systems with coding agents under human-owned specs, review, and tests, with a human operator approving anything consequential. Mission-focused polymath with a background in software engineering, law and technology policy, and audio and media production.

## Engineering skills

**AI and agentic engineering:** AI coding agents, multi-agent orchestration, agent safety guardrails, MCP server development, LLM integration, human-in-the-loop workflows, scheduled autonomous agents

**Software engineering:** Ruby, Ruby on Rails, JavaScript, TypeScript, Python, PostgreSQL, MySQL, Redis, Elasticsearch, GraphQL, REST APIs, RSpec, pytest, background job processing, Heroku, AWS, Docker, GitLab CI, third-party API integration, private and undocumented APIs, web scraping

**People and process:** tech leadership, mentoring and training engineers, pair programming, code review, agile development, retrospectives, requirements writing, ticket sequencing and dependency planning, ticket and MR sizing, spike and proof-of-concept work, cross-team collaboration, architecture decision records

---

## Software engineering

### Independent Software Engineer · Oct 2025 – Present
*Agentic engineering: self-directed products, infrastructure, and open source · Montclair, NJ*

**Agent harness: letting AI agents work safely on real systems**
- **JRVIS**, AI-assisted information-flow system running administration across family finance and health, rental bookkeeping and property operations, household logistics, home automation, nonprofit IT, and self-hosted infrastructure. Underneath: a guarded multi-agent harness (324 agent skills, 35 roles, 47 pre-action policy hooks), with secrets released only through a credential manifest the human operator approves once.
  - **Intake and document sorting:** captures email, texts, scanned mail, and meeting notes; every item is triaged and filed by domain, with scans going through OCR and LLM classification into a reviewed document store (Info Sorter) scored against a labeled real-document corpus; agents do the follow-up, with a human operator approving anything consequential.
  - **Scheduled agents:** 34 run hourly to weekly across infrastructure monitoring and bookkeeping, behind run locks, entry gates, and smoke tests.
  - **Unified task tracking:** a design consolidating more than two dozen ad hoc trackers into one dynamic task tracker, modeling each domain as a state machine (bookkeeping, order fulfillment, 3D-printing workflows, and more), with a human-in-the-loop interface, an acceptance queue in which no agent can accept its own work, and kanban, Gantt, and dependency-chart views.
  - **Knowledge base and memory:** a personal knowledge-management system the agents read before they act: PARA-organized storage (10 domain drives and 2 intake drives), a DEVONthink document store with a hierarchical taxonomy and review queue, and Obsidian vaults; a layered knowledge model (research → decisions → procedures → agents) of 137 architecture decision records, 78 procedures, and 30 inventories under claim-confidence rules (Verified / Observed / Inferred); 324 reusable agent skills carrying the procedural knowledge; and a self-hosted memory server read at the start of every session.

**Business automation products**
- **Portal Gopher** signs into 19 vendors' secure websites and email accounts to collect bills and statements; security-focused, it draws credentials from programmatically provisioned password-manager environments and handles password and SMS two-factor logins.
- **Cratchit** does the bookkeeping: extracts data with LLMs under cost-control and routing rules, proposes QuickBooks entries for a human operator to approve, reconciles automatically, and escalates the rest to the human operator.
- Both built as products: generic engine separate from per-tenant configuration, JSON Schema contracts, tiered pytest suite run from git hooks, operational kill switches, and 16 architecture decision records.

**Self-hosted infrastructure**
- **Infrastructure as code:** 96 Docker stacks on a Synology NAS, deployed by GitOps through Portainer, linked over a Tailscale private network, and serving 69 MCP servers to the agents; governed by 137 architecture decision records.
- **macOS VM test lab:** ephemeral macOS virtual machines (Tart) for testing Mac software and agents, with a five-layer image architecture on a Mac host and a wrapper that lets agents clone, boot, test, and tear down VMs safely (per-clone macOS identities, destroy-protected VMs, lineage tracking for every clone). Hosted the OmniPlan and OmniGraffle reverse-engineering round-trips.

**Reverse engineering and agent tools**
- **OmniPlan and OmniGraffle file formats:** reverse-engineered commercial Mac apps' undocumented file formats, enabling agents to generate and edit files; published the OmniPlan format spec, Python tooling, and MCP server.
- **Visualization and diagrams as code:** C4 architecture models in Structurizr DSL, edited in c4hero, a visual C4 model editor (patched fork, upstream feature PR); Mermaid, D2, PlantUML, and Graphviz rendered to SVG on save; diagram-advisor agent with 29 diagram and visual-design skills and tools; Grafana dashboards over InfluxDB telemetry.

**Open source**
- 28 merged pull requests into 10 third-party projects:
  - Four into Intuit's official QuickBooks Online MCP server (schema validation, sub-account creation, account re-parenting, preserving line-level data on bill updates).
  - Eleven into a macOS Messages MCP server, including tested fixes for AppleScript-injection vulnerabilities and race conditions.

**Physical-world awareness for agents**
- Tablet-kiosk server with live two-way state, managing six desk tablets that agents use to show information or get attention.
- Photo awareness: recent photos with descriptions and OCR.
- Printer-fleet monitoring that notifies agent sessions, and agent-safe label printing.

### Career Break · Family gap year · Feb – Aug 2025
Backpacked nine countries and five continents, trekking New Zealand's Tongariro Alpine Crossing, Abel Tasman Coast Track, and Kepler Track; Cradle Mountain in Tasmania; the Torres del Paine W trek in Patagonia; the Salkantay trek to Machu Picchu; Menorca's Camí de Cavalls; hut to hut through the Italian Dolomites; and Scotland's West Highland Way, Skye, and Cairngorms. Taught three sons programming, math, and science on the road, with history and culture learned on site, from Inca ruins to Rome.

### JKRE · Co-Owner & Operator · 2016 – Present
*Real estate rental business · Montclair, NJ*

- Acquired four properties and built them into a rental business: long-term residences and a short-term vacation rental.
- Self-managed general contractor on renovations: hired and coordinated trades, and self-performed much of the work. Projects included roof replacements; kitchens, bathrooms, and basements; rewiring and electrical; smart-home installations; and landscaping, drainage, and flood remediation.
- From 2025, automated operations with AI agents and a human operator: Portal Gopher and Cratchit (see Independent Software Engineer, above) for bills and bookkeeping, plus agent workflows, working from the business's playbook, procedures, and property and vendor knowledge, that route issues to the on-call property manager and vendors through agent-drafted, owner-approved emails and task assignments, with automated tenant updates as issues resolve. Hands-off ownership on a monthly playbook: two hours a week.

### OpsLevel · Senior Software Developer · Jun 2022 – Sep 2023
*Internal developer portal / service catalog · Series A startup · Rails, MySQL, Redis, Elasticsearch · Toronto (remote)*

Joined three months after the $15M Series A; during the tenure the company shipped its largest-ever launch (Apr 2023) and the AWS Infrastructure Catalog (May 2023).

- Tech lead for Service Detection (launched Jan 2023): scanned customers' git repositories and fed detected services into the catalog, replacing hand-authored service definitions (in [OpsLevel's launch case study](https://www.opslevel.com/resources/build-your-catalog-with-service-detection), Duolingo imported 315 services, 97% of its architecture, in nine minutes).
- Set the team's tone on a siloed team with low-energy meetings and one engineer carrying the planning: made asking for help easy and embarrassment-free, moved discussion onto voice calls, drew out the quieter engineers, and made pair programming a habit where the team had been reluctant to pair, until team organization and technical planning were a group effort. Set the bar for ticket writing (clarity, completeness, and edge cases), so more work ran in parallel with less thrash.
- Led epic and sprint planning and execution for many sprints: introduced ticket sequencing that drove straight into the unknowns to de-risk each sprint up front; built the epic and ticket-dependency diagramming tool (a GitLab CI extension) that made the sequencing visible and became part of the team's process. Weeks after joining, planned the documentation-check epic (user stories and acceptance criteria covering success and failure modes, data-integrity rules, and a proof-of-concept spike), which became the company's model for epic planning.
- Tech lead for migrating search from one sprawling SQL query to Elasticsearch (Nov 2022): built the search layer with elasticsearch-rails, bulk indexing, and near real-time sync; rolled it out behind per-account feature flags with fallback to legacy search: ended timeouts on large catalogs and added relevance ranking and highlighting.
- Tech lead for AWS integrations (Infrastructure Catalog, spring 2023), a 12-week project bringing customers' AWS resources (EC2, ECS, EKS, RDS, Lambda, S3, and more) into the catalog. Designed its core architecture: an intermediate layer of integration source objects mapped into catalog entities, which the team reused for its relationships GraphQL API and which colleagues called the missing piece of the original proposal. Took the deep dives on tag-based ownership conflict resolution and the infrastructure-destroy system.
- Built OpsLevel Runner's priority scheduling, throttling, and failure handling (Redis-based locking); the Runner ran containerized analysis jobs against customers' repositories. Led the team's capacity GameDay for it: prepared the exercise, coordinated the war room, and set the approach later GameDays followed.
- Took on company-wide problems from an IC seat: wrote the proposals on dependency upgrades (well received by the staff engineers) and on unhappy-path error handling, which both shaped the team's patterns (and, for error handling, its work with Customer Success); cleared the overdue dependency-upgrade backlog with a colleague; shipped developer quality-of-life fixes (strong_migrations, test-runner, FrozenRecord validation).

### BackerKit · Senior Full-Stack Developer · Jun 2015 – Nov 2021
*Crowdfunding pledge management · Y Combinator seed, then self-funded · Rails, PostgreSQL, Redis, Heroku · San Francisco, CA (remote)*

- On an eight-developer team, transformed a fledgling Rails and JavaScript project into the leading crowdfunding pledge-management ecosystem:
  - **BackerKit Pledge Manager**: invented the post-crowdfunding-platform pledge-management industry; served 10,400 projects raising $340 million from 16.5 million backers, growing from 1,000 projects (Aug 2015) to 10,000 (Jul 2021).
  - **BackerKit Launch**, a direct-marketing tool that supported over 150 creators in driving $3 million in conversions via 21,000 pledges.
  - **BackerKit Marketing**, grown from a manual process to a full SaaS platform promoting projects from 1,100 creators and driving $32 million in conversions.
- Anchored the engineering team through growth from two to eight developers and six to 50 employees, as the second developer alongside the co-founding engineer: onboarded, mentored, and trained the new junior and mid-level engineers; refined the team's workflows as headcount grew while keeping its scrappy, iterative approach; contributed to quarterly goal-setting, feature shaping, sprint planning, and acceptance; and wrote the technical and dev-culture blog posts used in developer recruiting.
- Extended and hardened the Kickstarter and Indiegogo sync that imported projects, rewards, and backers into the Pledge Manager. Neither platform offered creators a public API, so the sync relied on web scraping, Kickstarter's mobile-app API (with creator-authorized OAuth and two-factor login), and internal GraphQL endpoints, with retries and error monitoring for when the platforms changed; campaign-discovery spiders fed Salesforce.
- BackerKit's developer on Kickstarter's partner GraphQL API (beta): shipped its first production phase (public project import, Mar 2019), mapped the backer data model for the authenticated phase, and gave Kickstarter's API team design feedback.
- Built and maintained API integrations with PayPal, Stripe, inventory and fulfillment systems, postage services, email delivery systems, Salesforce, and Facebook.
- Found and fixed the root causes of email-deliverability issues and built a system gathering deliverability statistics by client, time, and recipient domain, enabling previously impossible analysis of crowdfunding's unconventional email-sending patterns.
- Led the Rails 5.2 → 6.0 upgrade (2019); did the Ruby 2.6 → 2.7 (2020) and 2.7 → 3.0 (2021) upgrades. Moved CI to Semaphore 2.0, running the suite as nine parallel jobs.
- On a unified dev/DevOps team, pair-programmed by default; configured the testing tools, CI, and deployment pipelines behind daily Heroku deployments (AWS, Redis, PostgreSQL); fixed long-standing bugs, often unblocking dependency security updates.
- 3,399 commits, second-most in the codebase's history. Wrote 342 of the 1,176 spec files and 146 of the 613 migrations added 2015 – 2021.

### RelPro (formerly Relationship Capital Partners) · Web and QA Developer · Nov 2014 – Apr 2015
*New York, NY*

Brought agile and version-control practices to the team and backfilled unit and functional test suites from scratch for the RelationShip Prospector SaaS product (the Intern JavaScript test framework, Selenium Grid, and Leadfoot); built and deployed the responsive company website (Bootstrap on WordPress).

### Wayne Board of Education · Computer Technician · Summers 1996 – 1998
*Wayne, NJ*

Developed methods for using early voice-recognition software to help special-education students express themselves; trained teachers in its use. Cut technology costs by consolidating parts from non-functioning machines into usable systems.

---

## Law and technology policy

### Roosevelt Institute · Program Manager, Telecommunications Equality Project · Feb 2013 – Jan 2014
*New York, NY*

- Managed a policy agenda on network neutrality and equal access to high-speed internet infrastructure.
- United loose coalitions of advocacy groups against state telecommunications deregulation and anti-municipal-network bills driven by the American Legislative Exchange Council (ALEC).
- Coordinated a distributed team of telecommunications industry analysts, legal researchers, and advocates in public messaging and appeals to NY and NJ state utility commissions, resulting in the investigations sought into Verizon NY's illegal cross-subsidizations.
- Prepared Susan Crawford (Roosevelt Institute Fellow and Cardozo Law School professor; former co-lead of the Obama–Biden FCC transition team and Special Assistant to the President for Science, Technology, and Innovation Policy) for television, radio, and podcast appearances with same-day research memos, as her trusted deputy.
- Delivered same-day research for her major conference keynotes, law review articles, and bi-weekly columns for Wired, Bloomberg View, and the New York Times.
- Fielded press requests for political comment and technical consultation. Ghostwrote articles and opinion columns for major national publications.
- Wrote an opinion column that pressured Comcast to double internet access speeds for low-income families.

### Brooklyn Law Incubator and Policy (BLIP) Clinic · Senior Clinician and Post-Graduate Fellow · 2010 – 2013
*Brooklyn, NY*

- Lead organizer and technical director of the inaugural NYC Legal Hack-A-Thon, bringing lawyers and developers together on legal and policy problems.
- Co-drafted amicus brief to the U.S. Supreme Court (*Schwarzenegger v. EMA*, a First Amendment challenge to video game regulation).
- Enlisted the United Nations media department as a client and led a team advising it on the risks and benefits of releasing its media archive under Creative Commons licenses.
- Drafted early Terms of Service, End User License Agreement, and Privacy Policy for Diaspora, a federated social networking service, and the same documents, plus trademark applications and trademark and domain-name conflict demand letters, for startups and crowdfunding projects.
- Founded the PriView Project, a scalable, crowd-sourced architecture for rating website privacy policies to lower the cost of understanding them. Founded and led CREATE (Creative Rights Empowerment Achieved Through Education), an interactive copyright curriculum for arts-focused high schools; won grant funding.

### Legal Hackers · Co-Founder; Co-Organizer, NYC Legal Hackers meetup · 2012 – 2015
*New York, NY*

Monthly meetup of lawyers and technologists focused on technology-enabled, crowd-sourced solutions to legal-industry problems and tech- and cyber-law policy. Became the world's largest legal meetup group in its second year.

### American Civil Liberties Union (ACLU) · Project on Speech, Privacy & Technology · Legal Intern · Jan – Jun 2012
*New York, NY*

- Contributed to amicus briefs to the U.S. Supreme Court (*United States v. Alvarez*, challenging the Stolen Valor Act on First Amendment grounds) and the U.S. Court of Appeals for the Fourth Circuit (*In re Application of the United States of America for an Order Pursuant to 18 U.S.C. § 2703(d)*, on unsealing court orders demanding from Twitter the communications of hacker activists, foreign government officials, and WikiLeaks operatives).
- Identified and analyzed First and Fourth Amendment challenges to internet IP enforcement bills (SOPA, PIPA) for the national agenda.
- Wrote a memorandum on legal challenges to federal-employee speech pre-clearance requirements.

### Brooklyn Law School · Research Assistant, Teaching Assistant · Summer 2011 – Spring 2012
*Brooklyn, NY*

- Professor Jane Yakowitz (Research Assistant, Summer 2011; directed research, Spring 2012): authored "A Technical Primer to Web-Surfing for Privacy Wonks" while researching "The New Intrusion", which proposes a theoretical framework for harm analysis in privacy law.
- Professor Derek Bambauer (Teaching Assistant, Internet Law, Fall 2011; independent research, Spring 2012): researched online privacy, data-storage regulation, cyber-war, and online social networks; updated the Internet Law curriculum.
- Professor Jason Mazzone (Fall 2011): researched copyright enforcement and Digital Millennium Copyright Act (DMCA) notice-and-takedown abuse; contributed to marketing his book, *Copyfraud and Other Abuses of Intellectual Property Law*.

### MasurLaw · Summer Associate · Jun – Sep 2011
*New York, NY*

Wrote memoranda on the legal risks of business plans built on novel web-scraping technologies; researched case law on DMCA anti-circumvention provisions and the Computer Fraud and Abuse Act. Analyzed supporting documents, drafted demand letters, and managed client communications in a multi-contract, multi-party patent dispute. Drafted licensing and sponsorship contracts.

### Harvard University: Berkman Center for Internet and Society · Project Associate · May – Sep 2008
*Cambridge, MA*

Created a middle-school curriculum on copyright, fair use, and new-media literacy, and designed and produced web tools enabling students to use Creative Commons licenses, the public domain, and fair-use rights in their own creative work. Coordinated academics, designers, and interns. Conducted virtual field research on copyright and youth culture.

---

## Audio, music, and media production

### BrainPOP · Web Production Consultant, Sound Designer, Audio Engineer · Jun 2005 – May 2011
*New York, NY*

- Directed audio production for an award-winning educational website with over 12 million visits per month, used by 20% of U.S. school districts.
- Programmed interactive sound designs in ActionScript.
- Directed technical workflows for the New York and international production offices; designed content-management infrastructure.
- Designed sound to meet multiple accessibility needs for English-language learners, hearing-impaired students, and emergent readers. Contributed to educational content on civics, government, and legal issues.
- Honors: Webby Awards Official Honoree (Education, 2006); Adobe Showcase Site of the Day (2007); Flash Forward Film Festival Winner and Animation Award (2007); Interactive Media Awards Best in Class (2007); Technology & Learning Magazine Award of Excellence (2007).

### Freelance · Web & New Media Producer, Audio Producer, Music Producer, Sound Designer · 1999 – 2009
*Brooklyn, NY*

- Directed web development and media, audio, and music production for award-winning web, game, film, television, radio, podcast, and commercial music projects, mostly in education and civil- and human-rights advocacy. Clients included the ACLU, American Friends Service Committee (AFSC), Amnesty International, The Ella Baker Center for Human Rights, Columbia Law School's Human Rights Institute, Witness, and Human Rights Watch. Pro bono projects included TearItDown (Amnesty International), *I Can End Deportation*, and the pro bono films below.
- Recorded live shows by Freestyle Love Supreme, the improvisational hip-hop troupe co-founded by Lin-Manuel Miranda that later ran on Broadway (2019), and built them into the interactive and linear sound design of its promotional website (2006).
- Earlier: interactive multimedia for Saint Mary's Hospital, Hoboken ("Brain Storming", a Flash movie psychiatric nurses used to teach children about medication effects) and an online catalog of more than 2,000 products for Hartger's Jewelers, Wyckoff (1999 – 2000).
- **Film credits:**
  - Documentary features: *Peace of Mind* (1999, dir. Mark Landsman): mix; [Audience Award – Honorable Mention, Most Popular Documentary, Hamptons International Film Festival (1999), and Most Inspirational, Canyonlands Film Festival (2000)](https://www.imdb.com/title/tt0263849/awards/); *Independent Spirits: The Faith and John Hubley Story* (2002, PBS): mix assistant; *Seeds* (2004, dir. Joseph Boyle and Marjan Safinia): audio mix; *The World's Best Prom* (2006): mix; [*The Glorious Mustache Challenge*](https://www.imdb.com/title/tt0805538/fullcredits/) (2006, dir. Jay Della Valle): music composition and production, mix, and music supervision.
  - Documentary short films: *Books Not Bars* (2001, pro bono): sound cleanup and mix; *September 12th: Life After Tragedy* (2002): recording engineer, mix, and music production; *When Bones Talk* (2004, pro bono): sound cleanup and mix; *Rights on the Line: Vigilantes at the Border* (2005, pro bono, for the ACLU, AFSC, Witness, and Human Rights Watch): mix.
  - Feature: [*Brooklyn Lobster*](https://www.imdb.com/title/tt0401591/fullcredits/) (2005, presented by Martin Scorsese; dir. Kevin Jordan): mix and sound design; Official Selection at the Toronto and [Hamptons International Film Festivals](https://hamptonsfilmfest.org/views-from-long-island/), and [Long Island Audience Award at the Hamptons](https://www.liherald.com/stories/brooklyn-lobster-comes-ashore-director-is-hopeful-film-will-help-keep-family-business-alive,9248) (2005).
  - Short films: *747* (2005): mix; *Straight Down Flatbush* (2007): sound design and mix; *Learning to See* (2007): soundtrack composition and production, and mix.

### Grey Worldwide (WPP Group) · Lead Audio Engineer · Mar 2000 – Jun 2006
*New York, NY*

- Technical lead and senior audio engineer for the in-house audio department; hired, trained, and supervised interns and junior audio engineers. The department's revenue grew 350% over three years.
- Directed audio post-production for thousands of national television and radio spots, including Panasonic "Life is: Plasma" (Adweek Best Spots of the Month, June 2005) and Pringles "Hearts" (Ad Age Spot of the Week, Feb 12, 2006).
- Built a multi-user digital job-tracking system used by 19 staff for scheduling, estimates, invoicing, archive management, and version control.
- Served on Grey Global Group's Digital Asset Management committee and advised on deploying a digital production asset management system planned for over 10,000 users.

### WarpWhistle Music LLC · Co-Founder and Managing Partner · Mar 2005 – May 2006
*New York, NY*

Directed musicians, composers, audio engineers, producers, and sales representatives producing music for national radio and television advertising. Negotiated intellectual property contracts. Established and managed relationships with advertising agencies and post-production facilities. Built custom intranets to manage digital assets, including a client extranet and per-project composer access.

### The Jettsonz (Jettsonz Inc.) · Freelance Audio Engineer and Consultant · 2004 – 2005
*Newark, NJ*

- Music production, recording, and mix assistant on Nina Sky's "Move Ya Body" (feat. Jabba; Universal Records, 2004): [Billboard Hot 100 #4](https://www.billboard.com/artist/nina-sky/chart-history/hsi/), Hot Dance Airplay #1; [certified Gold in the US (RIAA)](https://www.riaa.com/gold-platinum/?tab_active=default-award&se=nina+sky) and UK (BPI), Platinum in New Zealand.
- Coordinated a recording-studio build, advising on $80,000 of equipment and construction purchases, and trained the production team to use it.
- Remixes of Ray Charles and Carlos Santana.

### RedRover · Founder, Manager, Composer, Touring Musician · 1995 – 2004
*Northern New Jersey*

Founded the band in high school; touring from 1999. Booked and managed media campaigns and two national tours. Negotiated recording contracts and music licensing. Performed original material in more than 450 appearances as indie/punk/emo vocalist and guitarist; produced recordings.

### Mad Squirrel Music · Composer and Audio Engineer · Apr 2000 – Apr 2002
*New York, NY*

Composed, programmed, performed, recorded, and mixed music and sound design for radio and TV.

---

## Education

### General Assembly · Web Development Immersive, 12 weeks · 2014

### Brooklyn Law School · J.D., cum laude · 2012
- Top 10% of class.
- Certificate in Intellectual Property, Media & Information Law.
- CALI Excellence for the Future Awards (highest grade in class): Internet Law; Intellectual Property Colloquium.
- Carswell Scholarship, Centennial Grant, Dean's Merit Scholarship.
- Webmaster, then Technology Secretary, Brooklyn Law School ACLU.
- Bar admission: New York and New Jersey (inactive).

### New York University · B.S. in Digital Communications & Media, magna cum laude · 2009
- Concentrations in Web Production and Video Game Design.
- Alpha Sigma Lambda Dean's Award for Excellence; University Honors Scholar; Dean's List.
- Student representative, School of Continuing and Professional Studies Strategic Planning Committee.
- President, Students for Free Culture at NYU; helped draft the Open University plan to persuade academic institutions to adopt free culture principles.

### Earlier coursework
Baruch College, CUNY (music technology, 2002); Drexel University (digital media, 1998 – 2000).

---

## Open source and published software

- [github.com/johntrandall](https://github.com/johntrandall)
- [**mcp-omniplan-jtr**](https://pypi.org/project/mcp-omniplan-jtr/) (PyPI, 2026): MCP server letting AI agents drive OmniPlan.
- [**oplx-format**](https://github.com/johntrandall/oplx-format) (specification, 2026) and [**oplx-tools**](https://pypi.org/project/oplx-tools/) (PyPI, 2026): community specification of OmniPlan's `.oplx` file format, with Python tools to generate, lint, and parse it.
- [**lash-installer**](https://pypi.org/project/lash-installer/) (PyPI, 2026), [**iterm-tmux-helpers**](https://github.com/johntrandall/iterm-tmux-helpers) (personal Homebrew tap, 2026), [**half-sheet-label**](https://github.com/johntrandall/half-sheet-label), [**ptouch-label**](https://github.com/johntrandall/ptouch-label), [**hither**](https://github.com/johntrandall/hither), [**claude-browser-pool**](https://github.com/johntrandall/claude-browser-pool), and other macOS and agent-tooling utilities.
- Ruby gems [amazon_order](https://github.com/kyamaguchi/amazon_order/pulls?q=is%3Apr+author%3Ajohntrandall+is%3Amerged) (multi-shipment orders, service orders, CSV export) and [rubyfocus](https://github.com/jyruzicka/rubyfocus/pull/5), 2018 – 2019.

---

## Publications and writing

- ["Comcast Profits from the Poor with Internet Essentials Deal"](https://www.salon.com/2013/07/10/comcasts_new_partner/), Next New Deal blog (Roosevelt Institute), distributed via Salon.com and others; named a Best Weekly Read by The Century Foundation (July 15, 2013).
- "Strategic Advice for a Presidential Contender Running in 2012: Exploring the Mechanisms and Effects of Social Networking and User-Generated Media on the 2008 Election", selected by Clay Shirky for publication on [BoingBoing.net](https://boingboing.net/2008/12/14/uncertainties-in-ama.html) (December 14, 2008).
- "A Technical Primer to Web-Surfing for Privacy Wonks" (2011).
- [Brief of Amici Curiae Entertainment Consumers Association et al.](https://web.archive.org/web/20120930131028/http://www.americanbar.org/content/dam/aba/publishing/preview/publiced_preview_briefs_pdfs_09_10_08_1448_RespondentAmCu6OrgsforConsumersRights.authcheckdam.pdf), [*Brown v. Entertainment Merchants Association*](https://www.supremecourt.gov/docketfiles/08-1448.htm) (filed as *Schwarzenegger v. EMA*), 564 U.S. 786 (2011), Supreme Court of the United States (co-drafted, BLIP clinic with Hughes Hubbard & Reed, 2010).
- Supporting research and editing:
  - Susan Crawford, "Response to Harold Furchtgott-Roth", *Federal Communications Law Journal*, Vol. 65, No. 3 (2013).
  - Susan Crawford and Robyn Mohr, [*Bringing Municipal High-Speed Internet Access to Leverett, Massachusetts*](https://cyber.harvard.edu/publications/2013/internet_to_leverett), Berkman Center Research Publication No. 26 (2013).
  - Jane Yakowitz, "The New Intrusion", [*Notre Dame Law Review*](https://scholarship.law.nd.edu/ndlr/vol88/iss1/5/), Vol. 88 (2012).
  - Gabriella Coleman, *Coding Freedom: The Ethics and Aesthetics of Hacking*, [Princeton University Press](https://press.princeton.edu/books/paperback/9780691144610/coding-freedom) (2013) (editing assistant, early drafts, 2009).
  - John Palfrey, Urs Gasser, Miriam Simun & Rosalie Fay Barnes, "Youth, Creativity, and Copyright in the Digital Age", [*International Journal of Learning and Media*](https://dash.harvard.edu/handle/1/3128762), Vol. 1, No. 2, MIT Press (2009).

## Lectures, talks, and panels

- Guest lectures, Issues in Telecommunications Law (Tom Agoston), New York University:
  - "What Digital Media Students Need to Know About Copyright Law and the CopyLeft Movement" (February 16, 2012).
  - "DRM and Copyright: The Erosion of Creative Rights" (December 13, 2007).
- "Is SOPA Constitutional?", panelist and debater, Brooklyn Law School (April 10, 2012).
- Presenter: CREATE copyright education program, the PriView Project, and LegalMobNYC (crowdsourcing legal resources for nonprofit missions), at the NYC Legal Hack-A-Thon, Brooklyn Law School (April 15, 2012).

## Conferences and events organized

- [NYC Legal Hack-A-Thon](https://legalhackers.org/our-story/), Brooklyn Law School (April 15, 2012): primary organizer, technical director, presenter, moderator.
- [Open Video Conference](https://cyber.harvard.edu/events/2009/06/openvideo) (inaugural), Open Video Alliance, NYU School of Law (June 19 – 20, 2009): technical stage director, producing the stage program.
- *Steal This Film!* screening and discussion with co-director Alan Toner, New York University (November 16, 2008): primary organizer and moderator.
- Lawrence Lessig, *Remix: Making Art and Commerce Thrive in the Hybrid Economy*, Computers & Society speaker series, New York University (November 9, 2008): co-organizer.

---

## Community and nonprofit work

### Montclair Ultimate Frisbee · Technical Advisor (volunteer) · Aug 2023 – Present
*501(c)(3) youth sports organization · Montclair, NJ*

- Brought the club onto Google Workspace free of charge through Google for Nonprofits (account verified August 2023).
- Built agent-run Google Workspace administration (accounts, groups, aliases and mail routing, a scheduled membership audit, and inbox triage onto a task board), with a human operator approving; every access change is emailed to the affected member.

### Montclair Community Pre-K · Vice Chair, Technology Committee (volunteer) · 2014 – 2017
*Nonprofit preschool · Montclair, NJ*

- Rolled out Google Apps for Education, trained staff on it, and migrated the school's file server to Google Drive.
- Advised on the school's network overhaul onto the district network; set up backups before the cutover.
- Advised on purchasing and deploying classroom, administrative, and teacher-collaboration technology. Helped select a student information system.

### Volunteer and advocacy

- Learning About Multimedia Project (LAMP): Associate Board member (2013 – 2015).
- Founder and executive producer of a local-access news show serving Wayne, NJ (1996 – 1998).
