import Script from "next/script";

export function PersonPhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Physician"],
        "@id": "https://www.ftsakkinen.com/#janne-sakkinen",
        "name": "Janne Säkkinen",
        "givenName": "Janne",
        "familyName": "Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti & Ergonomiakouluttaja",
        "description": "Erikoistunut OMT-Fysioterapeutti (SOMTY), Valvira/Terhikki-rekisteröity terveydenhuollon ammattihenkilö ja Oulun yliopiston hammaslääketieteen kliininen opettaja vuodesta 2017.",
        "url": "https://www.ftsakkinen.com/tietoa-minusta",
        "image": "https://www.ftsakkinen.com/janne-sakkinen.jpg",
        "worksFor": {
          "@type": "MedicalBusiness",
          "@id": "https://www.ftsakkinen.com/#organization",
          "name": "Tiedottajanne Oy",
          "legalName": "Tiedottajanne Oy",
          "identifier": "3305813-7",
          "vatID": "FI33058137"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Oulun yliopisto (Lääketieteellinen tiedekunta)"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Suomen OMT-fysioterapeutit ry (SOMTY)"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Valvira / Terhikki Rekisteröity Terveydenhuollon Ammattihenkilö"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "SOMTY Sertifioitu OMT-Fysioterapeutti"
          }
        ],
        "knowsAbout": [
          "Leukanivelvaivat (TMD / TMJ)",
          "Purentalihasten rentoutus & Masseter",
          "Niskarangan fysioterapia & Päänsärky",
          "Lantionpohjan fysioterapia & Virtsankarkailu",
          "Hammaslääkärien & Työelämän Ergonomia"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "sameAs": [
          "https://anna.fi/hyvinvointi/ilmainen-muutos",
          "https://anna.fi/hyvinvointi/sankymokat",
          "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
          "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
          "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/",
          "https://www.youtube.com/@ft_sakkinen",
          "https://www.instagram.com/sakkinenjanne",
          "https://www.tiktok.com/@sakkinenjanne",
          "https://www.ptsakkinen.com/"
        ],
        "subjectOf": [
          {
            "@type": "NewsArticle",
            "headline": "Tämä muutos parantaisi lähes jokaisen suomalaisen hyvinvointia – se ei maksa mitään, mutta harva on siihen valmis",
            "url": "https://anna.fi/hyvinvointi/ilmainen-muutos",
            "datePublished": "2026-09-01",
            "publisher": {
              "@type": "Organization",
              "name": "Anna.fi / Otavamedia"
            },
            "about": ["Istumatyö", "Selkäkipu", "Työergonomia", "Fysioterapia"]
          },
          {
            "@type": "NewsArticle",
            "headline": "Fysioterapeutti paljastaa mokat, jotka moni tekee sänkyostoksilla – hotelleista ei kannata ottaa mallia",
            "url": "https://anna.fi/hyvinvointi/sankymokat",
            "datePublished": "2026-08-28",
            "publisher": {
              "@type": "Organization",
              "name": "Anna.fi / Otavamedia"
            },
            "about": ["Nukkumisergonomia", "Niskakipu", "Tyynyn valinta", "Fysioterapia"]
          },
          {
            "@type": "NewsArticle",
            "headline": "Pakarakipu pahenee istuessa? Kokeile näitä fysioterapeutin suosittelemia harjoitteita",
            "url": "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
            "publisher": {
              "@type": "Organization",
              "name": "Apu.fi / A-lehdet"
            }
          },
          {
            "@type": "NewsArticle",
            "headline": "Jos naama pysyy peruslukemilla, venyttelet oikein",
            "url": "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
            "publisher": {
              "@type": "Organization",
              "name": "Kaleva Media"
            }
          }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.ftsakkinen.com/#organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "identifier": "3305813-7",
        "vatID": "FI33058137",
        "url": "https://www.ftsakkinen.com/",
        "telephone": "+358413274967",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "location": [
          {
            "@type": "Place",
            "name": "Terveystalo Oulu & Kempele",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          },
          {
            "@type": "Place",
            "name": "Norre Työterveys Oulu",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          },
          {
            "@type": "Place",
            "name": "Hammasvahti Oulu",
            "address": { "@type": "PostalAddress", "addressLocality": "Oulu", "addressCountry": "FI" }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="person-physician-jsonld-fi"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id={`breadcrumb-jsonld-fi-${items.length}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
