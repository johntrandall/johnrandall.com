CREATE TABLE IF NOT EXISTS hits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,            -- ISO 8601 UTC
  kind TEXT NOT NULL,          -- 'page' | 'download'
  method TEXT NOT NULL,
  path TEXT NOT NULL,
  tag TEXT,                    -- ?t= value, see dev-docs/analytics/tags.md
  ip TEXT,
  ip_truncated INTEGER NOT NULL DEFAULT 0,  -- 1 once the 90-day retention job has truncated ip
  city TEXT, region TEXT, country TEXT,
  asn INTEGER, as_org TEXT, colo TEXT,
  referrer TEXT, user_agent TEXT,
  status INTEGER
);
CREATE INDEX IF NOT EXISTS hits_ts ON hits (ts);
CREATE INDEX IF NOT EXISTS hits_path_ts ON hits (path, ts);
