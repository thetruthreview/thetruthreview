import sharp from "sharp";

/**
 * Villora's offer page ships a single bottle render, so the package art on
 * /villora is composed from it here: one bottle in front, the rest fanning
 * back - smaller and a little higher as they recede, matching the pack shots
 * the other brands supply.
 *
 *   node scripts/villora-packs.mjs <folder-with-bottle.webp>
 */
const SRC = `${process.argv[2]}/bottle.webp`;
const OUT = "public/villora/images";

const base = await sharp(SRC).trim({ threshold: 1 }).toBuffer();
const { width: W0, height: H0 } = await sharp(base).metadata();

async function pack(n, frontH, file) {
  const frontW = Math.round(frontH * (W0 / H0));
  const front = Math.floor((n - 1) / 2); // the one in focus, left of centre
  const step = Math.round(frontW * 0.54);
  const shrink = 0.095; // each step back
  const lift = 0.075; // each step back sits this much higher

  const b = [];
  for (let i = 0; i < n; i++) {
    const d = Math.abs(i - front);
    const s = 1 - shrink * d;
    b.push({
      d,
      w: Math.round(frontW * s),
      h: Math.round(frontH * s),
      cx: (i - front) * step,
      lift: Math.round(frontH * lift * d),
    });
  }

  const minX = Math.min(...b.map((x) => x.cx - x.w / 2));
  const maxX = Math.max(...b.map((x) => x.cx + x.w / 2));
  const W = Math.round(maxX - minX) + 8;
  const H = frontH + 8;

  const layers = b
    .sort((p, q) => q.d - p.d) // farthest first, front bottle last
    .map(async (x) => ({
      input: await sharp(base).resize(x.w, x.h).png().toBuffer(),
      left: Math.round(x.cx - x.w / 2 - minX) + 4,
      top: H - x.h - 4 - x.lift,
    }));

  await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(await Promise.all(layers))
    .webp({ quality: 90 })
    .toFile(`${OUT}/${file}`);
  console.log(file.padEnd(26), `${W}x${H}`);
}

await pack(6, 620, "villora-hero.webp");
await pack(6, 460, "villora-6-bottles.webp");
await pack(4, 460, "villora-4-bottles.webp");
await pack(2, 460, "villora-2-bottles.webp");
await sharp(base).resize({ height: 900 }).webp({ quality: 90 }).toFile(`${OUT}/villora-bottle.webp`);
console.log("villora-bottle.webp        single");
