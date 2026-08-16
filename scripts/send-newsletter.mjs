import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local if present
const envPath = path.join(__dirname, "../.env.local");
let resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/RESEND_API_KEY=([^\r\n]+)/);
  if (match) {
    resendApiKey = match[1].trim();
  }
}

if (!resendApiKey) {
  console.error("VIRHE: RESEND_API_KEY puuttuu .env.local -tiedostosta tai ympäristömuuttujista.");
  process.exit(1);
}

const subscribersPath = path.join(__dirname, "../src/data/subscribers.json");
if (!fs.existsSync(subscribersPath)) {
  console.error("VIRHE: subscribers.json ei löydy polusta:", subscribersPath);
  process.exit(1);
}

const subscribers = JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));

// Arguments parsing
const args = process.argv.slice(2);
let subject = "";
let contentFile = "";
let targetEmailFilter = "";
let isDryRun = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--subject" && args[i + 1]) {
    subject = args[i + 1];
    i++;
  } else if (args[i] === "--file" && args[i + 1]) {
    contentFile = args[i + 1];
    i++;
  } else if (args[i] === "--to" && args[i + 1]) {
    targetEmailFilter = args[i + 1];
    i++;
  } else if (args[i] === "--dry-run") {
    isDryRun = true;
  }
}

if (!subject || !contentFile) {
  console.log("KÄYTTÖ:");
  console.log("node scripts/send-newsletter.mjs --subject \"Viestin otsikko\" --file \"polku/viesti.html\" [--to sähköposti] [--dry-run]");
  console.log("\nEsimerkki:");
  console.log("node scripts/send-newsletter.mjs --subject \"Uusi fysioterapiaopas julkaistu!\" --file \"newsletter.html\" --dry-run");
  process.exit(0);
}

const absContentPath = path.isAbsolute(contentFile) ? contentFile : path.join(process.cwd(), contentFile);
if (!fs.existsSync(absContentPath)) {
  console.error("VIRHE: Viestitiedostoa ei löydy polusta:", absContentPath);
  process.exit(1);
}

const rawBody = fs.readFileSync(absContentPath, "utf-8");

const recipients = targetEmailFilter
  ? subscribers.filter((s) => s.email.toLowerCase() === targetEmailFilter.toLowerCase())
  : subscribers;

console.log("====================================================");
console.log(`UUTISKIRJEEN LÄHETYS (${isDryRun ? "DRY-RUN / TESTIAJO" : "LIVE LÄHETYS"})`);
console.log(`Vastaanottajia: ${recipients.length} henkilöä`);
console.log(`Otsikko: "${subject}"`);
console.log("====================================================\n");

if (recipients.length === 0) {
  console.log("Ei vastaanottajia hakuehdoilla.");
  process.exit(0);
}

async function sendNewsletter() {
  for (const sub of recipients) {
    const firstName = sub.first_name || "terveydenystävä";
    const personalizedHtml = rawBody.replace(/{{first_name}}/g, firstName);

    console.log(`- ${sub.first_name || ""} <${sub.email}>...`);

    if (isDryRun) {
      console.log("  [DRY-RUN] Viesti valmis, ei lähetetty verkkoon.");
      continue;
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
          to: [sub.email],
          reply_to: "tiedottajanne@gmail.com",
          subject: subject,
          html: personalizedHtml,
        }),
      });

      const data = await res.json();
      if (res.ok && data.id) {
        console.log(`  ✔ Lähetetty! Resend ID: ${data.id}`);
      } else {
        console.error(`  ✖ Virhe lähetettäessä osoitteeseen ${sub.email}:`, data);
      }
    } catch (err) {
      console.error(`  ✖ Poikkeus lähetettäessä osoitteeseen ${sub.email}:`, err.message);
    }

    await new Promise((r) => setTimeout(r, 400));
  }

  console.log("\n====================================================");
  console.log("LÄHETYS PROSESSOITU!");
  console.log("====================================================");
}

sendNewsletter();
