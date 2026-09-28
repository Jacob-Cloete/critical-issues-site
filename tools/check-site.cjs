// Checks every page and script: JavaScript parses (including inline <script> blocks)
// and local links, stylesheets and scripts point at files that exist.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const skip = new Set(['.git', 'node_modules']);
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|js)$/.test(e.name)) files.push(p);
  }
})(root);

let failures = 0;
const fail = (file, msg) => { failures++; console.error(`FAIL ${path.relative(root, file)}: ${msg}`); };

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (file.endsWith('.js')) {
    try { new Function(text); } catch (e) { fail(file, e.message); }
    continue;
  }
  for (const [, attrs, body] of text.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/src=|type="(application\/ld\+json|module)"/.test(attrs)) continue;
    try { new Function(body); } catch (e) { fail(file, 'inline script: ' + e.message); }
  }
  for (const [, ref] of text.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(ref) || ref.includes("${")) continue; // skip external links and JS template placeholders
    const clean = ref.split('?')[0];
    const target = clean.startsWith('/') ? path.join(root, clean) : path.join(path.dirname(file), clean);
    const exists = fs.existsSync(target) && (fs.statSync(target).isFile() || fs.existsSync(path.join(target, 'index.html')));
    if (!exists) fail(file, `missing local file ${ref}`);
  }
}

console.log(`Checked ${files.length} files, ${failures} problem(s).`);
process.exit(failures ? 1 : 0);
