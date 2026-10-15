# Task:    deploy the johnrandall.com analytics Worker (create D1 database, apply schema, wrangler deploy to the test route, then johnrandall.com/*)
# Why:     wrangler and the Cloudflare API need one token with Workers Scripts, D1 and Workers Routes edit
# Scope:   JRVIS Infra only: the single Cloudflare infra-agent token. Pushover (digest) will be added later by amendment.
# TTL:     ~2 h
CLOUDFLARE_API_TOKEN=op://JRVIS Infra/bw4ez6og6q7gmvgp6drqk7xvdu/credential
