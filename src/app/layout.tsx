import type { Metadata } from "next";
import { Luckiest_Guy, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
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
    <html lang="fi" className={`${luckiestGuy.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#000a18] text-white selection:bg-[#00AEEF] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
