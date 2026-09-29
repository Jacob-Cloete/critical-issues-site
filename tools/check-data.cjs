// Checks the site's data for the kinds of mistake past audits kept finding:
// numbers typed in one place that disagree with the data they come from,
// who/where lists that don't match their named organisations, rank charts
// with gaps or misplaced circles, and 2010 rings on a different basis from today.
// Run: node tools/check-data.cjs   (CI runs it on every pull request)
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const home = read('index.html');
const notes = read('notes/index.html');

let failures = 0;
const fail = (where, msg) => { failures++; console.error(`FAIL ${where}: ${msg}`); };

// Pull a `const NAME={...}` or `[...]` literal out of a page and evaluate it.
function literal(text, name) {
  const m = text.match(new RegExp(`const ${name}=([\\[{])`));
  if (!m) throw new Error(`const ${name} not found`);
  const open = m[1], close = open === '{' ? '}' : ']';
  let i = m.index + m[0].length - 1, depth = 0, q = null;
  for (let j = i; j < text.length; j++) {
    const c = text[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return new Function(`return ${text.slice(i, j + 1)}`)();
  }
  throw new Error(`const ${name} is not closed`);
}
const words = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const num = s => words.includes(s.toLowerCase()) ? words.indexOf(s.toLowerCase()) : Number(s.replace(/,/g, ''));

// ---------- Ladders (L): every point on its axis, gap tied to charted points ----------
const L = literal(home, 'L');
const KINDS = new Set(['now', 'lab', 'mile', 'limit', 'tlim', 'ref', 'then']);
for (const [k, d] of Object.entries(L)) {
  const lo = Math.min(d.a, d.b), hi = Math.max(d.a, d.b);
  for (const [v, kind, label, tier] of d.pts) {
    if (!(v >= lo && v <= hi)) fail(`L.${k}`, `"${label}" (${v}) is off the axis ${d.a}–${d.b}`);
    if (!KINDS.has(kind)) fail(`L.${k}`, `"${label}" has unknown kind "${kind}"`);
    if (!(tier >= 0 && tier <= 4)) fail(`L.${k}`, `"${label}" has tier ${tier} (0–4 allowed)`);
  }
  for (const g of d.gap)
    if (!d.pts.some(p => p[0] === g)) fail(`L.${k}.gap`, `${g} is not one of the charted points, so the headroom figure can drift`);
  if (!/data-k="/.test(home) || !home.includes(`data-k="${k}"`)) fail(`L.${k}`, 'no .ladder element renders it');
}

// ---------- Roadmaps (R) and who/where (W) ----------
const R = literal(home, 'R');
const W = literal(home, 'W');
const TYPES = new Set(['startup', 'university', 'industry', 'government lab', 'research institute', 'policy']);
const tyBlock = home.match(/const TY=\{([^}]*)\}/);
if (tyBlock) for (const t of TYPES) if (!tyBlock[1].includes(t.includes(' ') ? `'${t}'` : `${t}:`)) fail('TY', `type "${t}" has no display label`);
for (const [k, d] of Object.entries(R)) {
  const ids = new Set(d.st.map(s => s.id));
  for (const s of d.st) {
    const at = `R.${k}.${s.id}`;
    for (const f of ['t', 'm', 'w', 'tech', 'who', 'b', 'src']) if (!s[f]) fail(at, `missing field ${f}`);
    if (s.src && !/^https:\/\//.test(s.src)) fail(at, `source is not an https link: ${s.src}`);
    const yr = String(s.w).match(/^(\d{4})(?:–(\d{4})|\+)$/);
    if (!yr) fail(at, `dates "${s.w}" should look like 2026–2030 or 2035+`);
    else if (yr[2] && +yr[2] < +yr[1]) fail(at, `dates "${s.w}" end before they start`);
  }
  for (const [a, b] of d.e) if (!ids.has(a) || !ids.has(b)) fail(`R.${k}.e`, `arrow ${a}→${b} points at a missing stage`);
  const w = W[k];
  if (!w) { fail(`W.${k}`, 'roadmap has no who/where entry'); continue; }
  for (const id of ids) if (!w.st[id]) fail(`W.${k}`, `stage ${id} has no who/where entry`);
  for (const id of Object.keys(w.st)) if (!ids.has(id)) fail(`W.${k}`, `entry ${id} has no roadmap stage`);
  for (const [id, x] of Object.entries(w.st)) {
    const at = `W.${k}.${id}`;
    const types = new Set(), regions = new Set();
    for (const org of x.x) {
      const m = org.match(/\(([^,()]+), ([^()]+)\)\s*$/);
      if (!m) { fail(at, `"${org}" should end with (type, region)`); continue; }
      if (!TYPES.has(m[1])) fail(at, `"${org}" has unknown type "${m[1]}"`);
      types.add(m[1]);
      m[2].split(' / ').forEach(r => regions.add(r.trim()));
    }
    const same = (a, b) => a.size === b.size && [...a].every(v => b.has(v));
    if (!same(new Set(x.d), types))
      fail(at, `types [${x.d}] should match the named organisations [${[...types]}]`);
    if (!same(new Set(x.w), regions))
      fail(at, `regions [${x.w}] should match the named organisations [${[...regions]}]`);
  }
}

// ---------- Ranking chart: complete ranks, circles where the numbers say ----------
const rank = home.slice(home.indexOf('class="rankc"'), home.indexOf('</svg>', home.indexOf('class="rankc"')));
const COLS = { 250: 'headroom', 445: 'bottleneck', 640: 'value' };
const Y0 = 66, DY = 30, TIER_GAP = 20, VALUE_TIERS = [5, 12]; // last rank of each money tier but the lowest
const byCol = { headroom: [], bottleneck: [], value: [] };
const groups = [...rank.matchAll(/<g class="[^"]*">([\s\S]*?)<\/g>/g)].map(m => m[1]);
for (const g of groups) {
  const name = (g.match(/class="nm">([^<]+)</) || [])[1] || '?';
  for (const [, cx, cy, n] of g.matchAll(/<circle cx="(\d+)" cy="(\d+)"[^>]*\/><text[^>]*class="rn">([^<]+)</g)) {
    const col = COLS[cx];
    if (!col) continue;
    byCol[col].push(n);
    // The value column leaves a gap between its three money tiers (ranks 1–5, 6–12, 13–16).
    const tierGap = col === 'value' ? TIER_GAP * VALUE_TIERS.filter(t => +n > t).length : 0;
    if (/^\d+$/.test(n) && +cy !== Y0 + DY * +n + tierGap) fail(`ranking ${name}`, `${col} circle shows ${n} but is drawn at y=${cy}, not ${Y0 + DY * +n + tierGap}`);
  }
}
const nProblems = groups.length;
for (const col of ['bottleneck', 'value']) {
  const got = byCol[col].map(Number).sort((a, b) => a - b).join(',');
  const want = Array.from({ length: nProblems }, (_, i) => i + 1).join(',');
  if (got !== want) fail(`ranking ${col}`, `ranks should be 1–${nProblems} once each, got ${got}`);
}
const hr = byCol.headroom.filter(n => /^\d+$/.test(n)).map(Number).sort((a, b) => a - b);
if (hr.some((n, i) => n !== i + 1)) fail('ranking headroom', `numbered ranks should run 1–${hr.length} with no gaps, got ${hr}`);
if (byCol.headroom.length !== nProblems) fail('ranking headroom', `${byCol.headroom.length} circles for ${nProblems} problems`);
const countWord = w => /^\d+$/.test(w) || words.includes(w.toLowerCase());
for (const [file, text] of [['index.html', home], ['notes/index.html', notes]])
  for (const m of text.matchAll(/\b(\w+) problems ranked|\branks (\w+) problems/gi)) {
    const w = m[1] || m[2];
    if (countWord(w) && num(w) !== nProblems) fail(file, `"${m[0]}" but the ranking chart has ${nProblems}`);
  }

// ---------- Notes headroom chart ----------
const rows = literal(notes, 'rows');
const THEN = literal(notes, 'THEN');
const BAND = { big: r => r[2] > 3, mid: r => r[2] >= 1.5 && r[3] <= 4, near: r => r[3] < 2 };
const BAND_TITLE = { big: 'more than 3×', mid: '1.5–4×', near: 'under 2×' };
const titles = notes.match(/const titles=\{([^}]*)\}/)[1];
for (const [g, t] of Object.entries(BAND_TITLE)) if (!titles.includes(`${g}:'`) || !new RegExp(`${g}:'[^']*${t}'`).test(titles))
  fail('notes titles', `group "${g}" title should say ${t} (the band this check enforces)`);
const labels = new Set();
for (const r of rows) {
  const [label, , lo, hi, group] = r;
  labels.add(label);
  if (!(lo > 0 && hi >= lo)) fail(`notes row ${label}`, `range ${lo}–${hi} is not low–high`);
  if (!BAND[group]) fail(`notes row ${label}`, `unknown group ${group}`);
  else if (!BAND[group](r)) fail(`notes row ${label}`, `${lo}–${hi}× is outside its group "${group}" (${BAND_TITLE[group]})`);
}
for (const [label, [v, note]] of Object.entries(THEN)) {
  const r = rows.find(r => r[0] === label);
  if (!r) { fail(`THEN ${label}`, 'no chart row with this name'); continue; }
  const dot = Math.sqrt(r[2] * r[3]);
  if (/unchanged/i.test(note) && Math.abs(v / dot - 1) > 0.05)
    fail(`THEN ${label}`, `says "unchanged" but the ring (${v}) is ${(v / dot).toFixed(2)}× today's dot (${dot.toFixed(2)})`);
  if (/worse/i.test(note) && !(v < dot))
    fail(`THEN ${label}`, `says today is worse, so the 2010 ring (${v}) must sit below today's headroom (${dot.toFixed(2)})`);
}
for (const [file, text] of [['index.html', home], ['notes/index.html', notes]])
  for (const m of text.matchAll(/\b(\d+|\w+) (?:engineering )?fields\b/gi))
    if ((/^\d+$/.test(m[1]) || words.includes(m[1].toLowerCase())) && num(m[1]) !== rows.length)
      fail(file, `"${m[0]}" but the notes chart has ${rows.length} rows`);

// ---------- Key figures repeated across the site (tools/facts.cjs) ----------
const FACTS = require('./facts.cjs');
const pages = { home, notes };
for (const f of FACTS) {
  for (const [page, re, step, show = v => v] of f.places) {
    const m = pages[page].match(re);
    if (!m) { fail(`fact "${f.name}"`, `pattern ${re} not found on ${page}; update tools/facts.cjs if the wording changed`); continue; }
    const want = Math.round(show(f.value) / step) * step, got = Number(m[1].replace(/,/g, ''));
    if (Math.abs(got - want) > step * 1e-6) fail(`fact "${f.name}"`, `${page} shows ${m[1]} ("${m[0].slice(0, 60)}"), expected ${+want.toPrecision(6)}`);
  }
}

console.log(`Checked ${Object.keys(L).length} ladders, ${Object.values(R).reduce((n, d) => n + d.st.length, 0)} roadmap stages, ` +
  `${nProblems} ranked problems, ${rows.length} headroom rows and ${FACTS.length} repeated figures: ${failures} problem(s).`);
process.exit(failures ? 1 : 0);
