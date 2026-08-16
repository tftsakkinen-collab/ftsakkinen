import fs from "fs";
import path from "path";

const videoTitle = process.argv[2] || "Leukanivelen Ensiapuopas ja Kuntoutus";
const videoUrl = process.argv[3] || "https://www.youtube.com/watch?v=P1lZdpluD64";

console.log("====================================================");
console.log("AUTOMAATTINEN SOME-PROMO & UUTISKIRJE-PROMPTI");
console.log("====================================================\n");

console.log(`📌 Aihe/Video: "${videoTitle}"`);
console.log(`🔗 Linkki: ${videoUrl}\n`);

const instagramPost = `
🦷 UUSI OPASTUSJULKAISU: ${videoTitle}

Kärsitkö leukanivelen naksumisesta, purentajännityksestä tai aamuisesta päänsärystä? OMT-Fysioterapeutti Janne Säkkinen käy uudessa opasvideossa läpi täsmälliset kotiharjoitteet leukanivelen ja yläniskan huoltoon!

👉 Katso opasvideo suoraan YouTubesta (linkki biossa tai osoitteessa ftsakkinen.com)
📁 Ladattavat kirjalliset kuntoutusoppaat löydät myös Google Drivesta!

#leukanivel #purentaelimistö #fysioterapia #omp #terveys #oulufysioterapia #kuntoutus
`;

const facebookPost = `
🎬 UUSI FYSIOTERAPIAOPAS: ${videoTitle}

Olen julkaissut uuden perusteellisen opasvideon leukanivelen ja niska-hartiaseudun oireiden hoitoon!

Videossa käydään läpi:
✅ Miten leukanivelen jännitys ja naksuminen syntyvät
✅ Miten leukanivel- ja yläniskaoireet erotetaan toisistaan
✅ Kliiniset kotiharjoitteet ja rentoutustekniikat

Katso video YouTubesta tästä linkistä:
${videoUrl}

📁 Lataa myös ilmaiset kirjalliset kuntoutusohjeet kotisivuiltani: https://www.ftsakkinen.com
`;

const linkedinPost = `
💡 Kliininen fysioterapiaopas: ${videoTitle}

Purentaelimistön toimintahäiriöt (TMD), leukanivelen naksuminen ja yläniskan kireydet ovat yksi yleisimmistä työikäisten jännityspäänsärynhaiheuttajista.

Uudella fysioterapia-videollani käsittelen näiden vaivojen tutkimista ja kuntoutusta OMT-fysioterapian näkökulmasta.

Katso perusteellinen opasvideo YouTubessa: ${videoUrl}

#fysioterapia #tmd #kuntoutus #työhyvinvointi #terveys
`;

console.log("----------------------------------------------------");
console.log("📸 INSTAGRAM POSTAUSLUONNOS:");
console.log("----------------------------------------------------");
console.log(instagramPost);

console.log("----------------------------------------------------");
console.log("📘 FACEBOOK POSTAUSLUONNOS:");
console.log("----------------------------------------------------");
console.log(facebookPost);

console.log("----------------------------------------------------");
console.log("💼 LINKEDIN POSTAUSLUONNOS:");
console.log("----------------------------------------------------");
console.log(linkedinPost);

console.log("====================================================");
console.log("❓ HALUATKO LÄHETTÄÄ TÄSTÄ SÄHKÖPOSTITIEDOTTEEN TILAAJILLE?");
console.log("====================================================");
console.log("Aja seuraava komento lähettääksesi automaatiokirjeen tilaajalistan sähköposteihin:");
console.log(`node scripts/broadcast-new-video.mjs --title "${videoTitle}" --dry-run`);
console.log("====================================================\n");
