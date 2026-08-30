import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const canonicalDSPath = path.resolve(__dirname, "../src/design-system");

const targetProjects = [
  { name: "ptsakkinen", path: path.resolve(__dirname, "../../ptsakkinen/src/design-system"), brandFile: "brand.sakkinen.css" },
  { name: "tiedottajanne", path: path.resolve(__dirname, "../../tiedottajanne/src/design-system"), brandFile: "brand.sakkinen.css" },
  { name: "kirjaajanne-web", path: path.resolve(__dirname, "../../kirjaajanne-web/src/design-system"), brandFile: "brand.kirjaajanne.css" },
  { name: "gearspot-web", path: path.resolve(__dirname, "../../../projektit/gearspot-web/src/design-system"), brandFile: "brand.vuokraajanne.css" },
  { name: "oulun-jujutsu-redesign", path: path.resolve(__dirname, "../../oulun-jujutsu-redesign/design-system"), brandFile: "brand.jujutsu.css" },
];

function syncDirectory(src, dest, targetBrandFile) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      syncDirectory(srcPath, destPath, targetBrandFile);
    } else {
      // Do not overwrite brand.<nimi>.css with another project's brand file
      if (entry.name.startsWith("brand.") && entry.name !== targetBrandFile && entry.name !== "brand.sakkinen.css") {
        continue;
      }

      const srcContent = fs.readFileSync(srcPath, "utf-8");
      let destContent = "";
      if (fs.existsSync(destPath)) {
        destContent = fs.readFileSync(destPath, "utf-8");
      }

      if (srcContent !== destContent) {
        fs.writeFileSync(destPath, srcContent, "utf-8");
        console.log(`[sync-ds] Synced ${entry.name} -> ${dest}`);
      }
    }
  }
}

console.log("[sync-ds] Synchronizing design system across all 6 projects...");
for (const target of targetProjects) {
  if (fs.existsSync(canonicalDSPath) && fs.existsSync(path.dirname(target.path))) {
    syncDirectory(canonicalDSPath, target.path, target.brandFile);
    console.log(`[sync-ds] Synced to ${target.name}`);
  } else {
    console.log(`[sync-ds] Target path missing for ${target.name}, skipping.`);
  }
}
console.log("[sync-ds] Multi-repo design system sync complete.");
