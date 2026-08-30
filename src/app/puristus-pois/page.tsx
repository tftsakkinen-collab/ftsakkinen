import { Metadata } from "next";
import PuristusPoisClient from "./PuristusPoisClient";

export const metadata: Metadata = {
  title: "PURISTUS POIS — Leuka lepoon, niska liikkeelle | FT Säkkinen",
  description:
    "Kahdeksan viikon ohjelma näyttöpäätetyötä tekevälle, jonka leuka puristaa, niska on jumissa ja pää särkee iltapäivisin — eikä kukaan ole osannut selittää miksi. Janne Säkkinen, OMT-fysioterapeutti.",
  openGraph: {
    title: "PURISTUS POIS — Leuka lepoon, niska liikkeelle | FT Säkkinen",
    description:
      "Noin viisi minuuttia päivässä. 56 videota. Yksi mekanismi, joka selittää ne kaikki. Pilottiryhmä 49 €.",
    url: "https://www.ftsakkinen.com/puristus-pois",
    siteName: "FT Säkkinen",
    locale: "fi_FI",
    type: "website",
  },
};

export default function PuristusPoisPage() {
  return <PuristusPoisClient />;
}
