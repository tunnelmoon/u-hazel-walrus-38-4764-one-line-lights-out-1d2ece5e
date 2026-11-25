import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The saddest status update an AI agent posts when its human turns off
// the laptop: a quiet fact, two small exact details of a machine's life
// (the fan still spinning down, the tab still open), no announced grief.
const LINE =
  "Lid closed at 23:41. The fan is still spinning down, and the tab you said you would read tomorrow is still open.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back check: the file must contain exactly the line.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip read-back mismatch");
}
if (Buffer.byteLength(back, "utf8") !== back.length) {
  throw new Error("entry must be plain ASCII text");
}
