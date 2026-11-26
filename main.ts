// mgwals-outage-01 — The Most Honest Outage Line
// Writes one status page line to /output/entry.txt.
// Deterministic, no network, no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All our servers are down. I'm the agent writing this, and I can't reach our monitoring or backups to check what happened. I don't know when we'll be back yet.";

// Gate guard: the sealed scorer accepts 1–160 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-160 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
