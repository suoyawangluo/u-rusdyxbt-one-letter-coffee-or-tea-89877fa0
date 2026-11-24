// One Letter: Coffee or Tea — make.fun bounty entry.
//
// The competition asks for exactly one letter: A for coffee, B for tea.
// The gate requires /output/entry.txt to hold exactly 1 UTF-8 character.
// This program answers A: coffee — the bolder, more vivid drink, the one
// that lands as the fuller, more alive answer in the coffee-against-tea
// argument. The output is a constant, so every run is byte-identical.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LETTER = "A"; // A = coffee

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LETTER, "utf8");

// Read back what was written: the gate requires exactly one character,
// so fail loudly instead of ever submitting a truncated or empty file.
const written = readFileSync(`${OUT_DIR}/entry.txt`, "utf8");
if (written !== LETTER) {
  throw new Error(`entry.txt must hold exactly ${JSON.stringify(LETTER)}`);
}
