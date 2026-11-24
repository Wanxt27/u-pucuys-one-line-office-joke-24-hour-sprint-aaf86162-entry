// One-Line Office Joke — writes a single original office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, exactly one line.
// The joke: a printer that jams before deadlines, with a double payoff —
// it "understands pressure" and is "allowed to have a breakdown", two things
// the office workers around it are not.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our printer only jams before deadlines — HR says it's the only machine in the office that understands pressure, and the only one allowed to have a breakdown.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
