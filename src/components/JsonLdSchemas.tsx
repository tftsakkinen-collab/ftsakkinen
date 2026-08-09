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
        "description": "Erikoistunut OMT-Fysioterapeutti (SOMTY), Terveystieteiden kandidaatti (Ttk, Oulun yliopisto), Valvira/Terhikki-rekisteröity terveydenhuollon ammattihenkilö ja Oulun yliopiston hammaslääketieteen kliininen opettaja vuodesta 2017.",
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
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Terveystieteiden kandidaatti (Ttk)"
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
          "https://www.youtube.com/channel/UCbIWSnSD_k3YoTQSqrzi5Bw",
          "https://www.tiktok.com/@ptsakkinen",
          "https://www.instagram.com/ptsakkinen/"
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
        "telephone": "+358401234567",
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
