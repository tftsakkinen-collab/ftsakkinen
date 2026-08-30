import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
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
    <html lang="fi" className={roboto.variable}>
      <body className={`${roboto.className} min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
