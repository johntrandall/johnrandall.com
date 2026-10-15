// Daily digest: pure formatting over rows from D1, kept apart from I/O for testing.

const BOT = /bot|crawl|spider|slurp|preview|monitor|proofpoint|mimecast|barracuda|zscaler|curl|python-requests|headless/i;

export function isBot(userAgent) {
  return !userAgent || BOT.test(userAgent);
}

// rows: hits from the last day. Returns { title, message } for Pushover, plus markdown for the file.
export function buildDigest(rows, now = new Date()) {
  const humans = rows.filter((r) => !isBot(r.user_agent) && !r.path.startsWith('/__analytics-test'));
  const bots = rows.length - humans.length;
  const visitors = new Map();
  for (const r of humans) {
    const key = r.ip || 'unknown';
    const v = visitors.get(key) || { ip: key, where: [r.city, r.region, r.country].filter(Boolean).join(', '),
      org: r.as_org || 'unknown network', tags: new Set(), pages: 0, downloads: new Set() };
    if (r.tag) v.tags.add(r.tag);
    if (r.kind === 'download') v.downloads.add(r.path.split('/').pop()); else v.pages += 1;
    visitors.set(key, v);
  }
  const list = [...visitors.values()].sort((a, b) => b.downloads.size - a.downloads.size || b.pages - a.pages);
  const lines = list.map((v) => {
    const parts = [`${v.org} (${v.where || 'location unknown'})`];
    if (v.tags.size) parts.push(`tag ${[...v.tags].join('+')}`);
    parts.push(`${v.pages} page${v.pages === 1 ? '' : 's'}`);
    if (v.downloads.size) parts.push(`downloaded ${[...v.downloads].join(', ')}`);
    return parts.join(' · ');
  });
  const date = now.toISOString().slice(0, 10);
  const header = `${list.length} visitor${list.length === 1 ? '' : 's'}, ${humans.length} hits` + (bots ? `, ${bots} bot/test hits folded` : '');
  const markdown = `# Site digest ${date}\n\n${header}\n\n${lines.map((l) => `- ${l}`).join('\n') || '- none'}\n`;
  let message = `${header}\n${lines.join('\n')}`;
  if (message.length > 1000) message = message.slice(0, 997) + '...';
  return { title: `johnrandall.com ${date}`, message, markdown, quiet: list.length === 0 };
}
