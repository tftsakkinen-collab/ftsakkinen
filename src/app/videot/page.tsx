import { CATEGORIES } from "@/data/categories";
import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoLibraryClient from "@/components/VideoLibraryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OMT-Fysioterapian Videokirjasto | 68 Videoartikkelia | FT Säkkinen",
  description: "Kaikki 68 OMT-fysioterapeutti Janne Säkkisen opetusvideota ja AEO-optimoidut blogiartikkelit purennasta, leukanivelestä, ergonomiasta ja TULE-vaivoista.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/videot",
    languages: {
      "fi": "https://www.ftsakkinen.com/videot",
      "en": "https://www.ptsakkinen.com/videos",
      "x-default": "https://www.ftsakkinen.com/videot",
    },
  },
  openGraph: {
    title: "OMT-Fysioterapian Videokirjasto | 68 Videoartikkelia | FT Säkkinen",
    description: "Kaikki 68 OMT-fysioterapeutti Janne Säkkisen opetusvideota ja AEO-optimoidut blogiartikkelit purennasta, leukanivelestä, ergonomiasta ja TULE-vaivoista.",
    url: "https://www.ftsakkinen.com/videot",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMT-Fysioterapian Videokirjasto | 68 Videoartikkelia | FT Säkkinen",
    description: "Kaikki 68 OMT-fysioterapeutti Janne Säkkisen opetusvideota ja AEO-optimoidut blogiartikkelit purennasta, leukanivelestä, ergonomiasta ja TULE-vaivoista.",
    images: ["https://www.ftsakkinen.com/logo-whitebg.png"],
  },
};

export default function VideoLibraryPage() {
  return <VideoLibraryClient videos={FALLBACK_VIDEOS} categories={CATEGORIES} />;
}
