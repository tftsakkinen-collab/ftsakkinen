"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, FileText, Video, Download, ArrowLeft, Loader2, ExternalLink, ShieldCheck } from "lucide-react";

function KiitosContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(false);

  // Materiaali-URL:t ostajalle
  const pdfDownloadUrl = "/materials/leukanivel-tmd-luentodiat.pdf";
  const youtubeVideoUrl = "https://youtu.be/PgWCB_zcCX8";

  useEffect(() => {
    async function verify() {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/verify-session?session_id=${sessionId}`);
        const data = await res.json();

        if (data.paid) {
          setVerified(true);
          setCustomerEmail(data.customerEmail);
          setDemoMode(!!data.demoMode);
        }
      } catch (err) {
        console.error("Verification failed", err);
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-[#00AEEF] animate-spin" />
        <p className="text-gray-300 font-medium">Vahvistetaan maksua ja alustetaan materiaaleja...</p>
      </div>
    );
  }

  if (!sessionId && !verified) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-6">
        <div className="p-8 rounded-3xl bg-[#000d21] border border-red-900/50 space-y-4">
          <h1 className="text-2xl font-bold text-white">Maksusessiota ei löytynyt</h1>
          <p className="text-gray-300 text-sm">
            Jos olet jo ostanut kurssimateriaalin, tarkista sähköpostisi tai ota yhteyttä asiakastukeen.
          </p>
          <Link
            href="/aihe/leukakipu-ja-tmd"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AEEF] text-white font-bold text-sm hover:bg-[#33c2ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Palaa materiaalisivulle</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 space-y-8">
      {/* Onnistumisikkuna */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#001433] to-[#000d21] border border-[#00AEEF]/50 space-y-6 text-center shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
            KIITOS OSTOKSESTASI!
          </h1>
          <p className="text-emerald-400 font-semibold text-base sm:text-lg">
            Maksusi on vahvistettu onnistuneesti.
          </p>
          {customerEmail && (
            <p className="text-gray-400 text-xs sm:text-sm">
              Ostokuitti ja vahvistus on lähetetty osoitteeseen: <span className="text-white font-medium">{customerEmail}</span>
            </p>
          )}
          {demoMode && (
            <div className="inline-block mt-2 px-3 py-1 rounded bg-amber-900/40 border border-amber-600/50 text-amber-300 text-xs">
              Kehitystila (Demo Mode): Testimokulinkit näkyvissä.
            </div>
          )}
        </div>

        <hr className="border-[#0C66B4]/30 my-6" />

        {/* Materiaalien lataus- ja katseluosio */}
        <div className="space-y-6 text-left">
          <h2 className="text-xl font-display text-white tracking-wide text-center">
            SINULLE VARATUT MATERIAALIT:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kortti 1: PDF Luentodiat */}
            <div className="p-6 rounded-2xl bg-[#000814] border border-[#0C66B4]/60 space-y-4 flex flex-col justify-between hover:border-[#00AEEF]/60 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">1. PDF-Luentodiat</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Täydellinen kliininen teoriamateriaali, anatomiset kuvaukset, TMD-luokitus ja tutkintakaaviot.
                </p>
              </div>

              <a
                href={pdfDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#00AEEF] hover:bg-[#33c2ff] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Lataa PDF-diaesitys</span>
              </a>
            </div>

            {/* Kortti 2: YouTube Videolinkki */}
            <div className="p-6 rounded-2xl bg-[#000814] border border-[#0C66B4]/60 space-y-4 flex flex-col justify-between hover:border-[#00AEEF]/60 transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">2. Opetusvideomateriaali</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Opetusvideot ja käytännön tekniikkatallenteet, jotka liittyvät suoraan luentodiojen sisältöön.
                </p>
              </div>

              <a
                href={youtubeVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Avaa YouTube-videomateriaali</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ohjeistus & Tuki */}
        <div className="p-4 rounded-xl bg-[#000814]/60 border border-gray-800 text-xs text-gray-400 space-y-2 text-center mt-6">
          <div className="flex items-center justify-center gap-1.5 text-gray-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tallenna tämä sivu tai lataa tiedostot talteen.</span>
          </div>
          <p>
            Jos sinulla on kysyttävää materiaaleista tai tarvitset apua, ota yhteyttä:{" "}
            <a href="mailto:janne@ftsakkinen.com" className="text-[#00AEEF] underline">
              janne@ftsakkinen.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Palaa FT Säkkinen -etusivulle</span>
        </Link>
      </div>
    </div>
  );
}

export default function KiitosPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Suspense fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-[#00AEEF] animate-spin" />
        </div>
      }>
        <KiitosContent />
      </Suspense>
    </div>
  );
}
