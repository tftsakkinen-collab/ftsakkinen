export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface WorkExperienceItem {
  title: string;
  organization: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  instructorOrOrg: string;
  year: string;
}

export const CV_DATA_FI = {
  name: "Janne Säkkinen",
  title: "OMT-Fysioterapeutti & Työfysioterapeutti",
  location: "Oulu",

  degrees: [
    {
      degree: "OMT-fysioterapeutti (2.5 vuotta)",
      institution: "Suomen Ortopedisen Manuaalisen Terapian Yhdistys (SOMTY)",
      duration: "1/2018 – 8/2020",
      description: "Tuki- ja liikuntaelimistön fysioterapian ylin erikoistumistutkinto.",
    },
    {
      degree: "Fysioterapian koulutusohjelma (3.5 vuotta)",
      institution: "Rovaniemen Ammattikorkeakoulu (RAMK)",
      duration: "9/2007 – 12/2010",
      description: "Fysioterapeutin tutkinto.",
    },
    {
      degree: "Sähköalan perustutkinto, Elektroniikka-asentaja (3 vuotta)",
      institution: "Koillis-Pohjanmaan Ammattioppilaitos",
      duration: "8/2001 – 5/2004",
    },
  ] as EducationItem[],

  workExperience: [
    {
      title: "Työfysioterapeutti (Ammatinharjoittaja)",
      organization: "Norre Työterveys — Kempele",
      period: "4.2.2025 – jatkuu",
    },
    {
      title: "Kurssikouluttaja (Leukanivelen terapia -koulutus)",
      organization: "Pohjois-Pohjanmaan kesäyliopisto ja muut yhteisöt",
      period: "2024 – jatkuu",
    },
    {
      title: "Työfysioterapeutti (Digityöterveys)",
      organization: "Terveystalo",
      period: "21.8.2023 – jatkuu",
    },
    {
      title: "Vieraileva luennoitsija & ergonomia-asiantuntija",
      organization: "Oulun Yliopisto, hammaslääketiede",
      period: "1.1.2017 – jatkuu",
    },
    {
      title: "Työfysioterapeutti (Työterveys)",
      organization: "Terveystalo",
      period: "1.1.2014 – jatkuu",
    },
    {
      title: "Työfysioterapeutti",
      organization: "Terveystalo",
      period: "20.8.2012 – 31.12.2013",
    },
    {
      title: "Työfysioterapeutti (Sijaisuus)",
      organization: "Kotkan Työterveys Oy",
      period: "2.1.2012 – 17.8.2012",
    },
    {
      title: "Fysioterapeutti (Avoterveydenhuolto)",
      organization: "Kotkan Kaupunki",
      period: "17.1.2011 – 31.12.2011",
    },
  ] as WorkExperienceItem[],

  certifications: [
    { title: "Visuo-vestibulaariset taidot suorituskyvyssä", instructorOrOrg: "Vesa Tabell, Tampereen kesäyliopisto", year: "2026" },
    { title: "Toiminnallinen neurologia", instructorOrOrg: "Vesa Tabell, Tampereen kesäyliopisto", year: "2025" },
    { title: "Mulligan Lower & Upper Quadrant Course", instructorOrOrg: "David Yuval & Toni Jääskeläinen, Mulligan Suomi", year: "2022–2023" },
    { title: "Kipufysioterapian koulutuskokonaisuus (Modulit 1–5)", instructorOrOrg: "Suomen Fysioterapeutit", year: "2021–2022" },
    { title: "Faskia Manipulaatio Stecco", instructorOrOrg: "Tiina Lahtinen-Suopanki, SOMTY", year: "2020–2021" },
    { title: "Kinetic Control Muscles Synergies to Low Back and Hip", instructorOrOrg: "Kari Niemi, SOMTY", year: "2018, 2020" },
    { title: "Suoravastaanotto", instructorOrOrg: "Terveystalo", year: "2019" },
    { title: "Maitland Level 1 -kurssi", instructorOrOrg: "Jukka Kangas, IMTA", year: "2017" },
    { title: "Somatic Fysio (Modulit 1–4)", instructorOrOrg: "Jarmo Ahonen, Somatic Center Finland", year: "2016" },
    { title: "Ft purentaelimien toimintahäiriöissä (TMD)", instructorOrOrg: "Tuija Mänttäri, SOMTY", year: "2015" },
    { title: "MET technique (Cervical, Thoracic & Lumbar Spine)", instructorOrOrg: "Darren Higgins, FYSI ry", year: "2014" },
    { title: "Työterveyshuollon koulutus", instructorOrOrg: "Työterveyslaitos", year: "2013" },
    { title: "McKenzie (MDT) -menetelmä (Osa A)", instructorOrOrg: "Tuija Siitonen", year: "2012" },
    { title: "Neurologinen fysioterapia", instructorOrOrg: "Riitta Sairanen", year: "2011" },
    { title: "Selkärangan tutkimisen ja hoidon peruskurssi (C1/C2)", instructorOrOrg: "SOMTY", year: "2011" },
  ] as CertificationItem[],

  references: [
    { name: "Marja-Liisa Laitala", title: "EHL, Oulun yliopisto, Hammaslääketiede" },
    { name: "Neela Säily-Moilanen", title: "Asiakkuuspäällikkö, Työterveys Virta" },
    { name: "Timo Virtanen", title: "Johtava TTL, Kotkan Työterveys Oy" },
    { name: "Marja Koskinen", title: "Osastonhoitaja, Kotkan kaupunki" },
    { name: "Kaisa Turpeeniemi", title: "Yliopettaja, FT, RAMK" },
  ],
};
