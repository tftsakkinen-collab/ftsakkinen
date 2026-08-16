import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const subscribersPath = path.join(__dirname, "../src/data/subscribers.json");

console.log("====================================================");
console.log("SYN KRONOIDAAN SÄHKÖPOSTITILAAJAT (LOCAL & GITHUB)");
console.log("====================================================\n");

let localSubscribers = [];
if (fs.existsSync(subscribersPath)) {
  try {
    localSubscribers = JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));
  } catch (e) {
    console.error("Virhe luettaessa paikallista subscribers.json -tiedostoa:", e.message);
  }
}

let githubToken = process.env.GITHUB_TOKEN;
const envPath = path.join(__dirname, "../.env.local");
if (!githubToken && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/GITHUB_TOKEN=([^\r\n]+)/);
  if (match) {
    githubToken = match[1].trim();
  }
}

async function syncWithGitHub() {
  const owner = "tftsakkinen-collab";
  const repo = "ftsakkinen";
  const filePath = "src/data/subscribers.json";
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`;

  try {
    const headers = githubToken ? { Authorization: `Bearer ${githubToken}` } : {};
    const res = await fetch(url, { headers });

    if (res.ok) {
      const remoteSubscribers = await res.json();
      console.log(`✔ Haettu GitHubista ${remoteSubscribers.length} tilaajaa.`);

      let addedCount = 0;
      for (const remoteSub of remoteSubscribers) {
        const idx = localSubscribers.findIndex(
          (s) => s.email.toLowerCase() === remoteSub.email.toLowerCase()
        );
        if (idx === -1) {
          localSubscribers.push(remoteSub);
          addedCount++;
        } else {
          localSubscribers[idx] = { ...localSubscribers[idx], ...remoteSub };
        }
      }

      fs.writeFileSync(subscribersPath, JSON.stringify(localSubscribers, null, 2), "utf-8");
      console.log(`✔ Synkronoitu uusia tilaajia GitHubista: ${addedCount} kpl.`);
    } else {
      console.log("ℹ GitHub etätiedostoa ei pystytty lataamaan suoraan (status: " + res.status + "). Käytetään paikallista listaa.");
    }
  } catch (err) {
    console.warn("Huomio: Verkko- tai GitHub-synkronointi epäonnistui:", err.message);
  }

  console.log("\n----------------------------------------------------");
  console.log(`YHTEENSÄ REKISTERÖITYJÄ TILAAJIA: ${localSubscribers.length} KPL`);
  console.log("----------------------------------------------------");

  localSubscribers.forEach((sub, index) => {
    console.log(
      `${index + 1}. ${sub.first_name || ""} ${sub.last_name || ""} <${sub.email}> | Lähde: ${sub.source || "Website"} | Päivä: ${sub.date_added || "-"}`
    );
  });
  console.log("----------------------------------------------------\n");
}

syncWithGitHub();
