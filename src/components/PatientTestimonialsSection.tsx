import { Star, MessageSquareQuote, HeartPulse, UserCheck } from "lucide-react";

export default function PatientTestimonialsSection() {
  const patientReviews = [
    {
      name: "Matti K.",
      condition: "Leukakipu & Bruksismi (TMD)",
      review: "Kärsin vuosien ajan leukasärystä ja naksahduksista aamuisin. Jannen OMT-fysioterapialla ja täsmällisillä leukanivelharjoitteilla leuan kireys helpotti jo kolmessa viikossa.",
      stars: 5,
    },
    {
      name: "Anna-Maija P.",
      condition: "Purentalihasten Kireys & Niskakipu",
      review: "Hammassärkyyn rinnastuva kasvojen jomotus johtui purentalihaksista. Havainnolliset videot ja vastaanotto-ohjeet auttoivat hahmottamaan mistä kivussa oli kyse.",
      stars: 5,
    },
    {
      name: "Juha T.",
      condition: "Hammaslääkärin Ergonomia & Niskavaivat",
      review: "Kroonisesta niska-hartiakivusta kärsivänä hammaslääkärinä sain Jannelta täsmälliset asentokorjaukset ja taukojumpparutiinit, jotka muuttivat työpäiväni täysin.",
      stars: 5,
    },
    {
      name: "Sari L.",
      condition: "Krooninen Nivel- ja Selkäkipu",
      review: "Ammattitaitoinen ja rauhallinen OMT-fysioterapeutti. Selkeät selitykset siitä, miten lihastulehdusta ja kireyksiä hoidetaan pitkäjänteisesti ilman turhia hoitokierteitä.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-4 h-4" />
            <span>Potilaskokemukset &amp; Palaute</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            HOITOPOTILAIDEN <span className="text-[#00AEEF]">KOKEMUKSIA</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Katso miten Janne Säkkisen OMT-fysioterapia ja täsmälliset kuntoutusoppaat ovat auttaneet potilaita leukanivelen, purennan ja rankavaivojen hoidossa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {patientReviews.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-4 shadow-panel flex flex-col justify-between hover:border-[#00AEEF] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#00AEEF]" />
                  <span>{item.name}</span>
                </div>
                <div className="text-[11px] text-[#00AEEF] font-mono">
                  {item.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
