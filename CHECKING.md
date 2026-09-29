# Keeping the numbers right

Four audits (Sept 2026) found 100+ mistakes. Almost all fell into five kinds, and each kind now has a guard.

| Kind of mistake | Guard |
| --- | --- |
| A figure changed in one place but not the others | `tools/facts.cjs` holds the canonical value of every figure that appears more than once. `check-data` fails if any place disagrees. |
| A derived number typed by hand (a ring, a rank, a range) drifted from its inputs | `check-data` recomputes them: ladder headroom must come from charted points, rank circles must sit where their numbers say, "unchanged" 2010 rings must sit on today's dot, rows must fit their group's band, and counts ("25 fields", "sixteen problems") must match the data. |
| Who/where lists that don't match their organisations | `check-data` derives the types and regions from the named organisations and fails on any mismatch. |
| Dead or moved sources | `tools/check-links.cjs` runs every Monday (GitHub Action "Link check") and emails on failure. |
| Outdated facts (new records, new report editions, companies pivoting) | No script catches these. Re-audit every few months: every "record", "latest", "today" or year claim needs a fresh search. |

## When you change a number

1. If it's in `tools/facts.cjs`, change it there first.
2. Run `node tools/check-site.cjs && node tools/check-data.cjs`. The output lists every place that still shows the old value.
3. Mark estimates with "(est.)". Every roadmap stage needs an `https` source that states the figure in its `m` field.

CI runs both checks on every pull request.
