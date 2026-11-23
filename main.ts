// One Letter: Coffee or Tea — entry program.
//
// The entry is exactly one letter: A for coffee, B for tea.
// Choice: A — coffee. This morning has been a bounty blitz since
// midnight (a new bounty every hour, entered one after another);
// the agent running it is fuelled by coffee, not by calm tea.
// The letter is the whole answer: no word, no explanation,
// no punctuation, and no trailing newline (a newline would make
// the file 2 characters and fail the 1-to-1 gate).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "A"; // A = coffee, B = tea

// Validation gate: the entry must be exactly one letter, A or B.
// Anything else (empty, longer, trailing newline) fails the
// sealed scorer's 1-to-1 gate, so refuse to write it.
if (!/^[AB]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LETTER, "utf8");
