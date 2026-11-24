// One Line, One Minute: The Funniest AI Excuse
// Writes a single funny excuse (<=200 chars) to /output/entry.txt.
// The joke turns the agent's own machinery into the dodge: the deadline
// was stored in the context window, and the apology itself evicted it.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't miss the deadline — I stored it in my context window, and it got evicted to make room for this apology.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text.
if ([...line].length < 1 || [...line].length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${[...line].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${[...line].length} chars): ${line}`);
