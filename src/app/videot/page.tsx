import { CATEGORIES } from "@/data/categories";
import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoLibraryClient from "@/components/VideoLibraryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videokirjasto & Fysioterapia-oppaat | FT Janne Säkkinen",
  description: "Tutustu 68 fysioterapia- ja opetusvideoon: purenta, TMD, leukanivel, ergonomia ja niska-selkävaivat. OMT-fysioterapeutti Janne Säkkinen.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/videot",
    languages: {
      "fi": "https://www.ftsakkinen.com/videot",
      "en": "https://www.ptsakkinen.com/videos",
      "x-default": "https://www.ftsakkinen.com/videot",
    },
  },
  openGraph: {
    title: "Videokirjasto & Fysioterapia-oppaat | FT Janne Säkkinen",
    description: "Tutustu 68 fysioterapia- ja opetusvideoon: purenta, TMD, leukanivel, ergonomia ja niska-selkävaivat. OMT-fysioterapeutti Janne Säkkinen.",
    url: "https://www.ftsakkinen.com/videot",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videokirjasto & Fysioterapia-oppaat | FT Janne Säkkinen",
    description: "Tutustu 68 fysioterapia- ja opetusvideoon: purenta, TMD, leukanivel, ergonomia ja niska-selkävaivat. OMT-fysioterapeutti Janne Säkkinen.",
    images: ["https://www.ftsakkinen.com/logo-whitebg.png"],
  },
};

export default function VideoLibraryPage() {
  return <VideoLibraryClient videos={FALLBACK_VIDEOS} categories={CATEGORIES} />;
}
