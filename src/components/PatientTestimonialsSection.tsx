import { HeartPulse, MessageSquare } from "lucide-react";

export default function PatientTestimonialsSection() {
  // Real patient testimonials will be inserted here once provided
  const patientReviews: Array<{ name: string; condition: string; review: string; stars: number }> = [];

  return (
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4" />
            <span>Potilaskokemukset &amp; Palaute</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
            HOITOPOTILAIDEN <span className="text-[#00AEEF]">KOKEMUKSIA</span>
          </h2>
        </div>

        {/* Neutral Placeholder Container until real patient quotes are delivered */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 text-center space-y-3 shadow-panel">
          <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Asiakaspalautteet lisätään pian</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Hoitopotilaiden aitoja kokemuksia ja palautteita OMT-fysioterapiasta julkaistaan tähän osioon pikapuoliin.
          </p>
        </div>
      </div>
    </section>
  );
}
