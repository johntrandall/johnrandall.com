# Task:    johnrandall.com analytics dashboard in the existing Grafana on umbridge
# Why:     install the Infinity datasource plugin (if missing), create a datasource that queries
#          the D1 database through Cloudflare's REST API, and import a dashboard JSON
# Scope:   JRVIS Infra only. Cloudflare infra-agent token (D1 read via REST); Grafana admin login (umbridge).
# TTL:     ~1 h
CLOUDFLARE_API_TOKEN=op://JRVIS Infra/bw4ez6og6q7gmvgp6drqk7xvdu/credential
GRAFANA_USER=op://JRVIS Infra/Grafana - Umbridge - infra-agent/username
GRAFANA_PASSWORD=op://JRVIS Infra/Grafana - Umbridge - infra-agent/password
