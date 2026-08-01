import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles, Home, ChevronRight, Download } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";

interface TopicData {
  slug: string;
  title: string;
  enSlug: string;
  categoryId: string;
  introSummary: string;
  synthesisHtml: string[];
}

const TOPICS_FI: Record<string, TopicData> = {
  "leukakipu-ja-tmd": {
    slug: "leukakipu-ja-tmd",
    title: "Leukakipu, Leukanivelen Naksahdus & Bruksismi (TMD)",
    enSlug: "tmj-and-jaw-pain",
    categoryId: "purenta-tmd",
    introSummary: "Täydellinen kliininen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.",
    synthesisHtml: [
      "Purentaelimistön toimintahäiriöt (TMD, temporomandibular disorders) ovat yleinen syy kasvojen jomotukseen, leukanivelen naksahduksiin ja pään alueen säryille. Purentalihaksista tehokkain on masseter-lihas (ulompi purentalihas), johon kohdistuu purennassa ja öisessä hampaiden narskuttelussa (bruksismi) poikkeuksellisen suuri mekaaninen kuormitus.",
      "Tyypillisiä oireita ovat aamuisin tuntuva leukanivelen kireys, suun rajoittunut avautuminen, korvaan säteilevä kipu sekä tunne siitä, että hampaat eivät osu kohdakkain. Syynä ovat usein anatomiset ja toiminnalliset kireydet purentalihaksistossa, niska-hartiaseudun virheasennoissa sekä leukanivelen nivelvälilevyn (discus) dislokaatiossa.",
      "OMT-fysioterapiassa purentaelimistön vaivoja tutkitaan ja hoidetaan kokonaisvaltaisesti. Hoitoon kuuluu intraoraalinen (suunsisäinen) manuaalinen palpaatio ja käsittely, leukanivelen mobilisaatio, niskarangan nivelten täsmäliikkeet sekä asiakkaan omaehtoinen liikehoito. Oikein kohdistetulla fysioterapialla leukanivelen naksuminen ja lihaskireydet helpottavat usein merkittävästi jo 2–4 viikossa."
    ],
  },
  "niskakipu-ja-paansarky": {
    slug: "niskakipu-ja-paansarky",
    title: "Niskakipu, Niska-Hartiaseudun Kireys & Cervikogeeninen Päänsärky",
    enSlug: "neck-pain-and-headaches",
    categoryId: "tule-vaivat",
    introSummary: "Kliininen tietopankki niska-hartiaseudun jännitystilojen, cervikogeenisen päänsäryn ja ylärangan liikerajoitusten fysioterapeuttiseen hoitoon.",
    synthesisHtml: [
      "Niskakipu ja yläselän jännitystilat ovat yksi yleisimmistä syistä hakeutua OMT-fysioterapeutin vastaanotolle. Niskarangan yläosan (C0–C3) nivelten toimintahäiriöt ja kireydet voivat aiheuttaa nk. cervikogeenistä eli niskaperäistä päänsärkyä, joka tuntuu tyypillisesti toispuoleisena kipuna takaraivolla, ohimolla tai silmän takana.",
      "Purentaelimistön ja niskarangan välillä on tiivis neurologinen ja anatominen yhteys. Niska-hartiaseudun virheasennot ja etukumara päätä kuormittava asento etätyössä lisäävät suoraan purentalihasten aktiivisuutta. Tämän vuoksi niska- ja leukaoireita on aina tutkittava ja hoidettava rinnakkain.",
      "Fysioterapiassa keskityytään niskarangan syvien koukistajalihasten vahvistamiseen, rintarangan liikkumattomien osien mobilisointiin sekä täsmällisiin venytys- ja hallintaharjoitteisiin. Säännöllisillä taukojumpparutiineilla ja aktiivisella liikehoidolla niskakipu ja siihen liittyvä päänsärky saadaan hallintaan tehokkaasti."
    ],
  },
  "selkakipu-ja-iskias": {
    slug: "selkakipu-ja-iskias",
    title: "Selkäkipu, Fasettilukot, Välilevyvaivat & Iskias",
    enSlug: "back-pain-and-sciatica",
    categoryId: "tule-vaivat",
    introSummary: "Asiantuntijaopas alaselän kiputilojen, fasettilukkojen, välilevyn pullistumien ja pakaraan/jalkaan säteilevän iskiaskivun hoitoon.",
    synthesisHtml: [
      "Alaselän kivut ja iskiasoireilu koskettavat jossain vaiheessa elämää suurinta osaa aikuisista. Iskiaskivulla tarkoitetaan lannerangan hermojuuripuristuksesta aiheutuvaa terävää tai polttavaa säteilykipua, joka kulkee pakaran kautta takareiteen ja sääreen.",
      "Valtaosa selkäkivuista on toiminnallisia ja hyvälaatuisia, vaikka kipu voi olla voimakastakin. Fasettinivelten lukkiutumat, lannerangan liikekontrollin häiriöt ja lihasepätasapaino ovat tavallisia syitä jomotukseen.",
      "Aktiivinen ja turvallinen liike on selkäkivun tehokkain hoitomuoto. OMT-fysioterapeutti tutkii rangan liikesuunnat ja ohjaa täsmälliset lannerankaa vakauttavat ja mobilisoivat harjoitteet, joilla painetta välilevyistä ja hermojuurista saadaan helpotettua."
    ],
  },
  "ergonomia-ja-tyohyvinvointi": {
    slug: "ergonomia-ja-tyohyvinvointi",
    title: "Ergonomia, Suun Terveydenhuollon Työasennot & Taukojumppa",
    enSlug: "ergonomics-and-wellness",
    categoryId: "ergonomia",
    introSummary: "Ergonomiaopas hammaslääkäreille, suuhygienisteille ja etätyöntekijöille: kehon kuormituksen minimointi ja taukojumpparutiinit.",
    synthesisHtml: [
      "Suun terveydenhuollon ammattilaiset – hammaslääkärit ja suuhygienisti – työskentelevät päivittäin haastavissa, etukumarissa ja staattisissa työasennoissa. Tämä aiheuttaa toistuvaa ja pitkäkestoista kuormitusta niska-hartiaseutuun, yläselkään ja ranteisiin.",
      "Hyvä työergonomia ei ole vain tuolin korkeuden säätämistä, vaan aktiivista asennonhallintaa ja nivelten fysiologista asentokuormituksen vähentämistä. Pienilläkin mikrotauoilla ja kohdennetuilla venytyksillä työpäivän aikana estetään kroonisten tuki- ja liikuntaelimistön vaivojen syntyminen.",
      "Janne Säkkinen kouluttaa Oulun yliopiston hammaslääketieteen opiskelijoita työergonomiasta ja vetää täydennyskoulutuksia terveydenhuollon ammattilaisille valtakunnallisesti."
    ],
  },
  "tenniskyynarpaa-ja-golfkyynarpaa": {
    slug: "tenniskyynarpaa-ja-golfkyynarpaa",
    title: "Tenniskyynärpää (Epikondyliitti) & Golfkyynärpää",
    enSlug: "tennis-and-golfers-elbow",
    categoryId: "tule-vaivat",
    introSummary: "Kliininen opas kyynärvarren lihas-jänneliitoksen kuormituskipujen, tenniskyynärpään (sivuepikondyliitti) ja golfkyynärpään kuntoutukseen sekä apuvälinehoitoon.",
    synthesisHtml: [
      "Tenniskyynärpää (sivuepikondyliitti) ja golfkyynärpää (sisäepikondyliitti) ovat kyynärvarren lihasten jännekiinnityskohtien rasitustiloja. Tenniskyynärpäässä kipu tuntuu kyynärpään ulkosivulla ranne- ja sormiojentajalihasten kiinnityskohdassa, kun taas golfkyynärpäässä särky paikantuu sisäsivulle koukistajalihasten alueelle.",
      "Oireet pahenevat tyypillisesti puristusotteessa, kättä kiertäessä tai painavia taakkoja nostettaessa. Pitkittynyt kipu johtuu usein jännekudoksen hitaasta uusiutumisesta ja vääränlaisesta rasituskuormituksesta arjessa tai työssä.",
      "Tehokkaaseen OMT-fysioterapiaan kuuluu täsmällinen manuaalinen käsittely, ranteen ja kyynärvarren eksentrinen lihasharjoittelu sekä kuormitusta tasaavien täsmäapuvälineiden käyttö. Opetusvideoillamme ja kuntoutusohjeissamme esitellään apuvälineet ja liikehoidot jännealueen toipumisen nopeuttamiseksi."
    ],
  },
};

// Aliases for scandi character fallback
const SLUG_ALIASES: Record<string, string> = {
  "niskakipu-ja-päänsärky": "niskakipu-ja-paansarky",
  "selkäkipu-ja-iskias": "selkakipu-ja-iskias",
  "ergonomia-ja-työhyvinvointi": "ergonomia-ja-tyohyvinvointi",
  "tenniskyynärpää-ja-golfkyynärpää": "tenniskyynarpaa-ja-golfkyynarpaa",
  "tenniskyynarpaa": "tenniskyynarpaa-ja-golfkyynarpaa",
  "tenniskyynärpää": "tenniskyynarpaa-ja-golfkyynarpaa",
  "golfkyynarpaa": "tenniskyynarpaa-ja-golfkyynarpaa",
  "golfkyynärpää": "tenniskyynarpaa-ja-golfkyynarpaa",
};

const TOPIC_FAQS: Record<string, Array<{ question: string; answer: string }>> = {
  "leukakipu-ja-tmd": [
    {
      question: "Mikä aiheuttaa leukakipua, leukanivelen naksumista ja bruksismia (TMD)?",
      answer: "Purentaelimistön toimintahäiriöt (TMD, temporomandibular disorders) ovat yleinen syy kasvojen jomotukseen, leukanivelen naksahduksiin ja pään alueen säryille. Purentalihaksista tehokkain on masseter-lihas (ulompi purentalihas), johon kohdistuu purennassa ja öisessä hampaiden narskuttelussa (bruksismi) poikkeuksellisen suuri mekaaninen kuormitus."
    },
    {
      question: "Mitkä ovat purentaelimistön toimintahäiriöiden (TMD) tyypillisimmät oireet?",
      answer: "Tyypillisiä oireita ovat aamuisin tuntuva leukanivelen kireys, suun rajoittunut avautuminen, korvaan säteilevä kipu sekä tunne siitä, että hampaat eivät osu kohdakkain. Syynä ovat usein anatomiset ja toiminnalliset kireydet purentalihaksistossa, niska-hartiaseudun virheasennoissa sekä leukanivelen nivelvälilevyn (discus) dislokaatiossa."
    },
    {
      question: "Miten purentaelimistön vaivoja hoidetaan OMT-fysioterapiassa?",
      answer: "OMT-fysioterapiassa purentaelimistön vaivoja tutkitaan ja hoidetaan kokonaisvaltaisesti. Hoitoon kuuluu intraoraalinen (suunsisäinen) manuaalinen palpaatio ja käsittely, leukanivelen mobilisaatio, niskarangan nivelten täsmäliikkeet sekä asiakkaan omaehtoinen liikehoito. Oikein kohdistetulla fysioterapialla leukanivelen naksuminen ja lihaskireydet helpottavat usein merkittävästi jo 2–4 viikossa."
    }
  ],
  "niskakipu-ja-paansarky": [
    {
      question: "Mikä aiheuttaa niskaperäistä eli cervikogeenistä päänsärkyä?",
      answer: "Niskarangan yläosan (C0–C3) nivelten toimintahäiriöt ja kireydet voivat aiheuttaa nk. cervikogeenistä eli niskaperäistä päänsärkyä, joka tuntuu tyypillisesti toispuoleisena kipuna takaraivolla, ohimolla tai silmän takana."
    },
    {
      question: "Miten niska-hartiaseudun kireydet liittyvät purentaelimistön vaivoihin?",
      answer: "Purentaelimistön ja niskarangan välillä on tiivis neurologinen ja anatominen yhteys. Niska-hartiaseudun virheasennot ja etukumara päätä kuormittava asento etätyössä lisäävät suoraan purentalihasten aktiivisuutta. Tämän vuoksi niska- ja leukaoireita on aina tutkittava ja hoidettava rinnakkain."
    },
    {
      question: "Miten niskakipua ja niskaperäistä päänsärkyä hoidetaan fysioterapiassa?",
      answer: "Fysioterapiassa keskityytään niskarangan syvien koukistajalihasten vahvistamiseen, rintarangan liikkumattomien osien mobilisointiin sekä täsmällisiin venytys- ja hallintaharjoitteisiin. Säännöllisillä taukojumpparutiineilla ja aktiivisella liikehoidolla niskakipu ja siihen liittyvä päänsärky saadaan hallintaan tehokkaasti."
    }
  ],
  "selkakipu-ja-iskias": [
    {
      question: "Mitä iskiaskipu tarkoittaa ja mitkä ovat sen oireet?",
      answer: "Iskiaskivulla tarkoitetaan lannerangan hermojuuripuristuksesta aiheutuvaa terävää tai polttavaa säteilykipua, joka kulkee pakaran kautta takareiteen ja sääreen."
    },
    {
      question: "Mitkä ovat tavallisimmat syyt alaselän kivuille?",
      answer: "Valtaosa selkäkivuista on toiminnallisia ja hyvälaatuisia, vaikka kipu voi olla voimakastakin. Fasettinivelten lukkiutumat, lannerangan liikekontrollin häiriöt ja lihasepätasapaino ovat tavallisia syitä jomotukseen."
    },
    {
      question: "Mikä on tehokkain hoito alaselkäkipuun ja iskiasoireisiin?",
      answer: "Aktiivinen ja turvallinen liike on selkäkivun tehokkain hoitomuoto. OMT-fysioterapeutti tutkii rangan liikesuunnat ja ohjaa täsmälliset lannerankaa vakauttavat ja mobilisoivat harjoitteet, joilla painetta välilevyistä ja hermojuurista saadaan helpotettua."
    }
  ],
  "ergonomia-ja-tyohyvinvointi": [
    {
      question: "Miksi suun terveydenhuollon ammattilaiset altistuvat niska- ja selkävaivoille?",
      answer: "Suun terveydenhuollon ammattilaiset – hammaslääkärit ja suuhygienistit – työskentelevät päivittäin haastavissa, etukumarissa ja staattisissa työasennoissa. Tämä aiheuttaa toistuvaa ja pitkäkestoista kuormitusta niska-hartiaseutuun, yläselkään ja ranteisiin."
    },
    {
      question: "Mitkä ovat tehokkaimmat keinot estää kroonisia tuki- ja liikuntaelimistön vaivoja työssä?",
      answer: "Hyvä työergonomia ei ole vain tuolin korkeuden säätämistä, vaan aktiivista asennonhallintaa ja nivelten fysiologista asentokuormituksen vähentämistä. Pienilläkin mikrotauoilla ja kohdennetuilla venytyksillä työpäivän aikana estetään kroonisten tuki- ja liikuntaelimistön vaivojen syntyminen."
    },
    {
      question: "Kuka vastaa ergonomiakoulutuksista Oulun yliopistossa?",
      answer: "Janne Säkkinen kouluttaa Oulun yliopiston hammaslääketieteen opiskelijoita työergonomiasta ja vetää täydennyskoulutuksia terveydenhuollon ammattilaisille valtakunnallisesti."
    }
  ]
};

export async function generateStaticParams() {
  const keys = Object.keys(TOPICS_FI);
  const aliasKeys = Object.keys(SLUG_ALIASES);
  return [...keys, ...aliasKeys].map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  const resolvedSlug = SLUG_ALIASES[decodedSlug] || decodedSlug;
  const topic = TOPICS_FI[resolvedSlug] || TOPICS_FI["leukakipu-ja-tmd"];

  const metaTitle = `${topic.title.slice(0, 50)} | FT Säkkinen`;
  const metaDescription = topic.introSummary.slice(0, 155);
  const canonicalUrl = `https://www.ftsakkinen.com/aihe/${topic.slug}`;
  const pairedEnUrl = `https://www.ptsakkinen.com/topic/${topic.enSlug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fi": canonicalUrl,
        "en": pairedEnUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "FT Säkkinen - OMT-Fysioterapia",
      locale: "fi_FI",
      type: "article",
    },
  };
}

export default async function TopicHubPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  const resolvedSlug = SLUG_ALIASES[decodedSlug] || decodedSlug;
  const topic = TOPICS_FI[resolvedSlug];

  if (!topic) {
    notFound();
  }

  // Filter related videos by topic relevance (category + title/description/transcript keywords)
  const topicVideos = FALLBACK_VIDEOS.filter((v) => {
    const text = (v.title + " " + v.promiseDescription + " " + (v.transcript || "")).toLowerCase();
    if (resolvedSlug === "leukakipu-ja-tmd") {
      return v.categoryId === "purenta-tmd" || text.includes("leuka") || text.includes("purenta") || text.includes("tmd") || text.includes("bruksismi");
    }
    if (resolvedSlug === "niskakipu-ja-paansarky") {
      return text.includes("niska") || text.includes("päänsärky") || text.includes("paansarky") || text.includes("kaula") || text.includes("huimaus") || text.includes("cervik");
    }
    if (resolvedSlug === "selkakipu-ja-iskias") {
      return text.includes("selkä") || text.includes("selka") || text.includes("iskias") || text.includes("lanneranka") || text.includes("fasetti");
    }
    if (resolvedSlug === "ergonomia-ja-tyohyvinvointi") {
      return v.categoryId === "ergonomia" || text.includes("ergonomia") || text.includes("työ") || text.includes("istum") || text.includes("näppäil");
    }
    if (resolvedSlug === "tenniskyynarpaa-ja-golfkyynarpaa") {
      return text.includes("kyynär") || text.includes("kyynar") || text.includes("tennis") || text.includes("golf");
    }
    return v.categoryId === topic.categoryId;
  });
  const faqs = TOPIC_FAQS[resolvedSlug] || [];

  const topicMedicalConditions: Record<string, string> = {
    "leukakipu-ja-tmd": "Purentaelimistön toimintahäiriö (TMD)",
    "niskakipu-ja-paansarky": "Niska-hartiaseudun kipu ja cervikogeeninen päänsärky",
    "selkakipu-ja-iskias": "Alaselän fasettilukot, välilevyvaivat ja iskiasoireilu",
    "ergonomia-ja-tyohyvinvointi": "Hammaslääketieteen ja tietotyön kliininen ergonomia"
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      "headline": topic.title,
      "description": topic.introSummary,
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "lastReviewed": "2026-07-30",
      "reviewedBy": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": topicMedicalConditions[resolvedSlug] || topic.title
      },
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta",
        "worksFor": {
          "@type": "Organization",
          "name": "FT Säkkinen"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "FT Säkkinen",
        "url": "https://www.ftsakkinen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ftsakkinen.com/logo-whitebg.png",
          "width": 600,
          "height": 60
        }
      },
      "datePublished": "2024-07-24",
      "dateModified": "2026-07-30"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Etusivu",
          "item": "https://www.ftsakkinen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Videot & Aiheet",
          "item": "https://www.ftsakkinen.com/videot"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": topic.title,
          "item": `https://www.ftsakkinen.com/aihe/${topic.slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Script
        id={`json-ld-topic-${topic.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <nav aria-label="Murupolku" className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium">
          <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Etusivu</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <Link href="/videot" className="hover:text-[#00AEEF] transition-colors">
            Videot &amp; Aiheet
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <span className="text-[#00AEEF] font-semibold">{topic.title}</span>
        </nav>

        {/* Top Header */}
        <div className="space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            Kliininen Aihekooste &amp; Tietopankki
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {topic.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
            {topic.introSummary}
          </p>
        </div>

        {/* Written Synthesis Article */}
        <article className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-6 text-sm sm:text-base leading-relaxed text-gray-200 shadow-panel">
          <div className="flex items-center gap-2 text-white font-display text-2xl border-b border-[#0C66B4]/30 pb-3">
            <BookOpen className="w-6 h-6 text-[#00AEEF]" />
            <h2>OMT-Fysioterapeutin Kliininen Synteesi</h2>
          </div>

          {resolvedSlug === "leukakipu-ja-tmd" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-tmd-intraoral.jpg" alt="Purentaelimistön OMT-fysioterapia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Kuva: Purentaelimistön (TMD) manuaalinen käsittely vastaanotolla</span>
            </div>
          )}

          {resolvedSlug === "niskakipu-ja-paansarky" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-cervical-treatment.jpg" alt="Yläniskarangan OMT-käsittely" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Kuva: Yläniskarangan OMT-mobilisaatio ja cervikogeenisen päänsäryn hoito</span>
            </div>
          )}

          {resolvedSlug === "ergonomia-ja-tyohyvinvointi" && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#0C66B4]/60 my-4 shadow-panel">
              <img src="/janne-workstation.jpg" alt="Ergonomia ja etätyö" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Kuva: Kliininen ergonomia ja digityöterveysvastaanotto</span>
            </div>
          )}

          {topic.synthesisHtml.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {resolvedSlug === "tenniskyynarpaa-ja-golfkyynarpaa" && (
          <div className="p-6 rounded-3xl bg-[#000d21] border border-[#00AEEF] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glow">
            <div>
              <h3 className="text-xl font-bold text-white">Kiinnostunut opetusvideoiden kuntoutusapuvälineestä?</h3>
              <p className="text-xs text-gray-300">Tennis- ja golfkyynärpään täsmäapuvälineen hankintakyselyt ja ennakkotiedustelut.</p>
            </div>
            <Link
              href="/kyynarpaa-apuvaline"
              className="px-6 py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-white transition-all shadow-glow shrink-0"
            >
              Täytä hankintakysely →
            </Link>
          </div>
        )}

        {/* Video Grid Section */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF]" />
              <span>Aiheeseen Liittyvät Opetusvideot ({topicVideos.length} videota)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* CTA Lead Magnet */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Lataa aihealueen harjoiteohjeet PDF-muodossa</h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Saat heti pääsyn Janne Säkkisen viralliseen Google Drive -kansioon, johon päivitetään täsmälliset liike- ja kuntoutusoppaat.
          </p>
          <Link
            href="/ilmaisopas"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
          >
            <span>Lataa oppaat (Google Drive)</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
