#!/usr/bin/env node
/**
 * Writes src/lib/page-dates.json: for every page, the date of the last commit
 * that touched its source file. The sitemap reads it as <lastmod>.
 *
 * Runs automatically before `npm run build` (see the "prebuild" script).
 *
 * Why git and not the file's mtime: a fresh checkout — which is what the
 * deploy builds from — gives every file the same timestamp, so mtime would
 * report that the whole site changed at once. The commit date is the real one.
 *
 * If git is unavailable (a deploy that builds from a tarball, say), the
 * existing JSON is left untouched rather than overwritten with nothing.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(root, "src/lib/page-dates.json");

/** Route -> the source file(s) whose last change is that page's last change. */
const PAGES = {
  "/": ["src/app/page.tsx", "src/lib/investigations.ts"],
  "/reviews": ["src/app/reviews/page.tsx", "src/lib/investigations.ts"],
  "/about": ["src/app/about/page.tsx"],
  "/methodology": ["src/app/methodology/page.tsx"],
  "/contact": ["src/app/contact/page.tsx"],
  "/disclaimer": ["src/app/disclaimer/page.tsx"],
  "/privacy": ["src/app/privacy/page.tsx"],
  "/terms": ["src/app/terms/page.tsx"],
  "/best-brain-supplement": ["src/app/best-brain-supplement/page.tsx", "src/lib/best-brain.ts"],
  // Static landing pages served from /public.
  "/breathizen": ["public/breathizen/index.html"],
  "/sodapeak": ["public/sodapeak/index.html"],
  "/sodatide": ["public/sodatide/index.html"],
  "/vapocept": ["public/vapocept/index.html"],
  "/memohoney": ["public/memohoney/index.html"],
  "/slimtide": ["public/slimtide/index.html"],
  "/gelagen": ["public/gelagen/index.html"],
  "/dentavive": ["public/dentavive/index.html"],
  "/sugardefender": ["public/sugardefender/index.html"],
  "/nervealive": ["public/nervealive/index.html"],
};

/** Date (YYYY-MM-DD) of the last commit touching this file, or null. */
function lastCommitDate(file) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

const dates = {};
let found = 0;

for (const [route, files] of Object.entries(PAGES)) {
  // The newest of the files that make up the page.
  const d = files.map(lastCommitDate).filter(Boolean).sort().pop();
  if (d) {
    dates[route] = d;
    found++;
  }
}

if (found === 0) {
  console.warn("page-dates: git gave no dates; keeping the existing file.");
  process.exit(0);
}

const json = JSON.stringify(dates, null, 2) + "\n";
const previous = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
if (json === previous) {
  console.log(`page-dates: up to date (${found} pages).`);
} else {
  writeFileSync(OUT, json);
  console.log(`page-dates: wrote ${found} dates to src/lib/page-dates.json`);
}
