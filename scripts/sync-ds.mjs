import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const canonicalDSPath = path.resolve(__dirname, "../src/design-system");
const targetDSPath = path.resolve(__dirname, "../../ptsakkinen/src/design-system");

function syncDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      syncDirectory(srcPath, destPath);
    } else {
      const srcContent = fs.readFileSync(srcPath, "utf-8");
      let destContent = "";
      if (fs.existsSync(destPath)) {
        destContent = fs.readFileSync(destPath, "utf-8");
      }

      if (srcContent !== destContent) {
        fs.writeFileSync(destPath, srcContent, "utf-8");
        console.log(`[sync-ds] Synced: ${entry.name}`);
      }
    }
  }
}

console.log("[sync-ds] Checking canonical design system synchronization...");
if (fs.existsSync(canonicalDSPath) && fs.existsSync(path.dirname(targetDSPath))) {
  syncDirectory(canonicalDSPath, targetDSPath);
  console.log("[sync-ds] Synchronization complete.");
} else {
  console.log("[sync-ds] Canonical or target path missing, skipping sync.");
}
