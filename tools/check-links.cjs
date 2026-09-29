// Fetches every external link on the site (page links and roadmap sources)
// and reports ones that are dead. Sites that block robots (401/403/429) are
// listed as warnings to check by hand, not failures.
// Run: node tools/check-links.cjs   (a weekly GitHub Action also runs it)
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const urls = new Map();
for (const file of ['index.html', 'notes/index.html']) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  for (const [, u] of text.matchAll(/(?:href="|src:')(https:\/\/[^"'\s]+)["']/g)) {
    if (/fonts\.(googleapis|gstatic)\.com/.test(u)) continue;
    const clean = u.replace(/&amp;/g, '&');
    if (!urls.has(clean)) urls.set(clean, file);
  }
}

async function check(url) {
  const opts = { redirect: 'follow', signal: AbortSignal.timeout(20000),
    headers: { 'user-agent': 'Mozilla/5.0 (link check for jacobcloete.pro)' } };
  try {
    let r = await fetch(url, { ...opts, method: 'HEAD' });
    if (r.status >= 400) r = await fetch(url, { ...opts, method: 'GET' });
    return r.status;
  } catch (e) { return e.name === 'TimeoutError' ? 'timeout' : 'error: ' + (e.cause?.code || e.message); }
}

(async () => {
  let dead = 0, blocked = 0;
  const list = [...urls];
  for (let i = 0; i < list.length; i += 8) {
    await Promise.all(list.slice(i, i + 8).map(async ([url, file]) => {
      const s = await check(url);
      if (typeof s === 'number' && s < 400) return;
      if ([401, 403, 429].includes(s)) { blocked++; console.warn(`WARN ${file}: ${s} (blocks robots, check by hand) ${url}`); }
      else { dead++; console.error(`FAIL ${file}: ${s} ${url}`); }
    }));
  }
  console.log(`Checked ${urls.size} links: ${dead} dead, ${blocked} to check by hand.`);
  process.exit(dead ? 1 : 0);
})();
