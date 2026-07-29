import { FALLBACK_VIDEOS } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";
import { SITE_CONFIG } from "@/data/config";
import Link from "next/link";
import { ArrowLeft, Play, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return FALLBACK_VIDEOS.map((v) => ({
    id: v.id,
  }));
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = FALLBACK_VIDEOS.find((v) => v.id === params.id) || FALLBACK_VIDEOS[0];

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back navigation */}
        <Link
          href="/videot"
          className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Takaisin videokirjastoon</span>
        </Link>

        {/* Video Player Header Box */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#014489] border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "Fysioterapia"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            {video.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            {video.promiseDescription}
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboardwrite; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Notes & PDF Lead Magnet */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          <div className="md:col-span-8 space-y-6 text-gray-300 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Harjoitteiden suoritusohjeet</h2>
            <p>
              Tällä videolla fysioterapeutti Janne Säkkinen käy läpi tutkitut liikesarjat ja vaiheittaiset tekniikat. Harjoitteet on suunniteltu turvallisiksi kotona tehtäviksi.
            </p>
            
            <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Tärkeää huomioida harjoittelussa:
              </h3>
              <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
                <li>Tee liikkeet rauhallisella ja hallitulla tempolla.</li>
                <li>Lievä venytyksen tunne on normaalia, mutta pistävä kipu ei kuulu harjoitteluun.</li>
                <li>Jos oireesi pahenevat, keskeytä liike ja hakeudu asiantuntijan arvioon.</li>
              </ul>
            </div>
          </div>

          {/* Lead Magnet PDF Sidebar Card */}
          <div className="md:col-span-4">
            <div className="p-6 rounded-2xl bg-[#000d21] border border-[#00AEEF]/40 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Lataa videon PDF-ohje</h3>
              <p className="text-xs text-gray-300">
                Saat videon liikesarjat, toistomäärät ja kuvallisen ohjeen suoraan sähköpostiisi Beacons-sivun kautta.
              </p>
              <a
                href={SITE_CONFIG.beaconsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
              >
                <span>Lataa PDF (Beacons.ai)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
