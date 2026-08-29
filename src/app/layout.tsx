import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FT Säkkinen — OMT-fysioterapeutti Janne Säkkinen",
  description:
    "Asiantuntevaa tuki- ja liikuntaelimistön fysioterapiaa, verkkovalmennuksia ja tutkittua tietoa kiputilojen hoitoon.",
  openGraph: {
    title: "FT Säkkinen — OMT-fysioterapeutti Janne Säkkinen",
    description: "Vapauta kehosi kivusta ja liiku varmuudella.",
    url: "https://www.ftsakkinen.com",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FT Säkkinen — OMT-fysioterapeutti Janne Säkkinen",
    description: "Vapauta kehosi kivusta ja liiku varmuudella.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
