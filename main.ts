// Sleeve Notes for the Frog Trio — album title + back cover blurb.
// A jazz trio made entirely of frogs: Marlow on tenor sax, Bix on
// upright bass, Tad on drums. The premise is played straight: three
// frogs, one pond, a working band on a humid night.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = `Lily Pad Blue

One humid night at the pond's edge, Marlow's tenor sax leans into the dark like a streetlamp over the water, Bix plucks the upright bass low enough to ripple the water, and Tad keeps time on a snare of hollow reed. Three frogs, no tricks — a trio that swings like it has somewhere to be after midnight. Play it loud; the bullfrogs next door already asked for an encore.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
