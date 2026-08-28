import { MessageSquareQuote, Star, UserCheck, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const realTestimonials = [
    {
      category: "Leukanivelen Terapia -Koulutus",
      target: "Fysioterapeutit & Terveydenhuollon ammattilaiset",
      text: "Oli kyllä huippu kurssi, ihan innoissani pääsen nyt testaamaan hoitoa potilaille. Juuri tälläistä olen toivonutkin, että saan käytännön työkaluja! Verbaalisesta puolesta bonuspisteet Jannelle, selkeä ja kansanomainen tapa opettaa!",
      rating: 5,
    },
    {
      category: "HML Ergonomialuento",
      target: "Valmistuvat hammaslääkärit / Oulun yliopisto",
      text: "Mukavan energinen luennoitsija ja oli helppo keskittyä, kun ei ollut tylsää tasapaksua settiä! Upea setti, todella mielenkiintoinen. Olet erinomainen ja huumorintajuinen puhuja!",
      rating: 5,
    },
    {
      category: "Leukanivelen Terapia (2 pvää)",
      target: "TMD-Erikoiskoulutuksen osallistujat",
      text: "Raikas syventävä ja innostava kokonaisuus! Paljon tuttua asiaa, mutta moni asia tarkentui. Kahden päivän koulutus on erinomainen!",
      rating: 5,
    },
    {
      category: "Fyysisen Työkyvyn Optimointi",
      target: "Suun terveydenhuollon henkilöstö",
      text: "Kiinnostavin kaikista Denstalin etäluennoista, kiitos! Käytännönläheinen esitys!! Iso kiitos sinulle! Jatka samaan malliin.",
      rating: 5,
    },
    {
      category: "Ergonomia & Purentaelimistö",
      target: "Hammaslääketieteen opiskelija",
      text: "Innostava luento niin kuin aiemminkin. Pidän luennointityylistäsi. Tietää kenen vastaanotolle tulla, jos paikat alkaa juilimaan.",
      rating: 5,
    },
    {
      category: "Leukanivelen Terapia -Koulutus",
      target: "Koulutusosallistuja",
      text: "Kiitos kovasti selkokielisestä, rennosta ja asiantuntevasta opetuksesta ja koulutuspäivästä. Sopivan selkokielinen ja rohkaiseva koulutus!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <MessageSquareQuote className="w-4 h-4 text-[#00AEEF]" />
            <span>Aitoja koulutus- ja luentopalautteita</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            AITOJA PALAUTTEITA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KOULUTUKSISTA JA LUENNOILTA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Osallistujien ja opiskelijoiden antamia suoria palautteita Leukanivelen terapia -koulutuksista, Oulun yliopiston luennoilta ja ammattilaisseminaareista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/50 flex flex-col justify-between space-y-6 shadow-2xl shadow-cyan-950/30 hover:border-[#00AEEF] transition-all duration-300 text-center items-center backdrop-blur-md hover:-translate-y-1"
            >
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="text-xs font-bold text-[#00AEEF] bg-[#014489]/40 px-3 py-1 rounded-full uppercase tracking-wider text-center border border-[#00AEEF]/30">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-center gap-1 text-amber-400 pt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-200 italic leading-relaxed text-center break-words font-normal">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/40 flex items-center justify-center gap-2 text-xs text-slate-300 w-full text-center font-medium">
                <UserCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span className="font-bold text-white break-words text-center">
                  {item.target}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
