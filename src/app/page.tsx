import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 6);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Koulutukset & Työhistoria */}
      <TrainingsSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Luento- ja Koulutuspalautteet */}
      <TestimonialsSection />

      {/* 5. YouTube-videokirjasto & integraatio */}
      <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <PlayCircle className="w-4 h-4" />
                <span>YouTube-videokirjasto</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
                KAIKKI PITKÄT <span className="text-[#00AEEF]">FYSIOTERAPIAVIDEOT</span>
              </h2>
            </div>

            <Link
              href="/videot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C66B4]/20 border border-[#0C66B4] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all shadow-panel shrink-0"
            >
              <span>Katso koko videokirjasto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* YouTube Video Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. Oma Sisäänrakennettu Sähköpostin Keräys & Ilmaiset Oppaat */}
      <EmailLeadForm />
    </div>
  );
}
