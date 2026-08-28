import { HeartPulse, Quote, Star, Sparkles } from "lucide-react";

export default function PatientTestimonialsSection() {
  const patientReviews = [
    {
      name: "TMD- ja purentapotilas",
      condition: "Leukakipu, Purentalihakset & Bruksismi",
      review: "Olin kärsinyt leukanivelen naksumisesta ja aamuisesta leuan kireydestä vuosia. Jannen OMT-fysioterapialla ja täsmällisillä leukanivelharjoitteilla leuan kireys ja säryt helpottivat täysin jo kolmessa viikossa.",
      stars: 5,
    },
    {
      name: "Selkäkipu- ja kuntoutuspotilas",
      condition: "Selkäleikkauksen jälkeinen kuntoutus",
      review: "Olin kärsinyt leikkauksen jälkeisestä selkäkivusta ja pelkäsin jo joutuvani uudelleen leikkauskierteeseen. Jannen tutkimuksen ja täsmällisten liikeohjeiden ansiosta normaali arki ja kivuton liikkuminen palasivat parissa kuukaudessa.",
      stars: 5,
    },
    {
      name: "Kroonisen selkäkivun potilas",
      condition: "Fasettilukot & Iskiaskipu",
      review: "Olen kärsinyt selkäkivuista vuosia ja aiemmin hoito oli vain oireiden peittelyä. Jannen perusteellisessa tutkimuksessa löydettiin vaivan syy, ja täsmällisillä liikeohjeilla selkäkivut kaikkosivat kokonaan ilman lääkkeitä.",
      stars: 5,
    },
    {
      name: "Työterveysasiakas (Kenttäasentaja)",
      condition: "Alaselkäkipu, Nostotekniikka & Harjoitteet",
      review: "Kävin vastaanotollasi alaselkäkipujen vuoksi. Opin ohjauksessasi oikean nostotavan, eikä alaselkäoireilua ole sen jälkeen juuri ollut. Jos oireita on ajoittain tuntunut, olen tehnyt fysioterapeutin voimisteluliikkeitä ja saanut niistä heti avun. Kiitos työstäsi – mahtavaa kun homma toimii!",
      stars: 5,
    },
    {
      name: "Työterveysasiakas",
      condition: "Niska-hartiakivut & Videoidut koti-ohjeet",
      review: "Monesti fysioterapiasta saa paperinipun, joka jää pöydälle lojumaan. Janne kuvasi täsmälliset kuntoutusliikkeet suoraan puhelimellani videolle minua varten! Täydellinen tapa varmistaa että liikkeet tekee kotona oikein.",
      stars: 5,
    },
    {
      name: "Etävastaanottopotilas",
      condition: "Alaraajasäteily & Niskakipu (Etähoito)",
      review: "En ollut aluksi varma etävastaanoton toimivuudesta, mutta se yllätti täysin. Janne osasi tutkia, demonstroida ja diagnosoida vaivani ruudun välityksellä virheettömästi. Ensimmäistä kertaa aikoihin minulla oli täysin kivuton päivä.",
      stars: 5,
    },
    {
      name: "Nivelrikkopotilas & Kestävyysurheilija",
      condition: "Polven nivelrikko & Lihasharjoittelu",
      review: "Sain Jannelta täsmälliset kuntosali- ja hallintaliikkeet kuluma- ja nivelrikkopolven hoitoon. Syksyllä pyöräilykin teki kipeää, mutta kohdennetun harjoittelun ansiosta pystyin juoksemaan puolimaratonin ilman polvikipuja!",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000814] via-[#001026] to-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <HeartPulse className="w-4 h-4 text-[#00AEEF]" />
            <span>Aitoja Potilaskokemuksia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            HOITOPOTILAIDEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KOKEMUKSIA</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Katso miten Janne Säkkisen OMT-fysioterapia, leukanivelhoito ja täsmälliset kuntoutusoppaat ovat auttaneet potilaita leukanivelen, purennan ja rankavaivojen hoidossa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientReviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 space-y-5 shadow-xl flex flex-col justify-between group text-center items-center backdrop-blur-md hover:-translate-y-1"
            >
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic text-center break-words font-normal">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 space-y-1.5 w-full text-center">
                <div className="text-sm font-bold text-white group-hover:text-[#00AEEF] transition-colors text-center">
                  {review.name}
                </div>
                <div className="text-xs text-[#00AEEF] font-semibold text-center px-2 py-0.5 rounded-full bg-[#014489]/30 inline-block border border-[#00AEEF]/20">
                  {review.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
