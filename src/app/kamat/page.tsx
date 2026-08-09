import type { Metadata } from "next";
import KamatClientContent from "./KamatClientContent";
import { BreadcrumbSchema } from "@/components/JsonLdSchemas";

export const metadata: Metadata = {
  title: "Suositellut Kuntoutusvälineet & Varusteet | FT Säkkinen",
  description:
    "Tutustu OMT-fysioterapeutti Janne Säkkisen suosittelemiin purentalihasten, leukanivelen, niskarangan ja selän kuntoutusvälineisiin sekä kuvausvarusteisiin.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/kamat",
    languages: {
      fi: "https://www.ftsakkinen.com/kamat",
      en: "https://www.ptsakkinen.com/gear",
      "x-default": "https://www.ftsakkinen.com/kamat",
    },
  },
  openGraph: {
    title: "Suositellut Kuntoutusvälineet & Varusteet | FT Säkkinen",
    description:
      "Tutustu OMT-fysioterapeutti Janne Säkkisen suosittelemiin purentalihasten, leukanivelen, niskarangan ja selän kuntoutusvälineisiin.",
    url: "https://www.ftsakkinen.com/kamat",
    siteName: "FT Säkkinen - OMT-Fysioterapeutti",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suositellut Kuntoutusvälineet & Varusteet | FT Säkkinen",
    description:
      "Tutustu OMT-fysioterapeutti Janne Säkkisen suosittelemiin purentalihasten, leukanivelen ja selän kuntoutusvälineisiin.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function KamatPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Etusivu", url: "https://www.ftsakkinen.com/" },
          { name: "Kuntoutusvälineet & Varusteet", url: "https://www.ftsakkinen.com/kamat" },
        ]}
      />
      <KamatClientContent />
    </>
  );
}
