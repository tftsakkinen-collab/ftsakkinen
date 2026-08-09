import { FALLBACK_VIDEOS } from "../src/data/videos";
import fs from "fs";
import path from "path";

console.log("=== FI SITE VIDEO VERIFICATION ===");
console.log(`Total Videos in videos.ts: ${FALLBACK_VIDEOS.length}`);

const withTranscripts = FALLBACK_VIDEOS.filter((v) => v.transcript && v.transcript.length > 50).length;
console.log(`Videos with full transcript: ${withTranscripts} / ${FALLBACK_VIDEOS.length}`);

const llmsPath = path.join(__dirname, "../public/llms.txt");
if (fs.existsSync(llmsPath)) {
  const content = fs.readFileSync(llmsPath, "utf-8");
  const match = content.match(/kaikista (\d+) kuntoutusvideosta/);
  console.log(`llms.txt header states count: ${match ? match[1] : "N/A"}`);
}

console.log("=== VERIFICATION COMPLETE ===");
