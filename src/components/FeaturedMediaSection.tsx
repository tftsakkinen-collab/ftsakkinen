"use client";

import { ExternalLink, Newspaper, Award, Sparkles, Quote } from "lucide-react";

export default function FeaturedMediaSection() {
  const articles = [
    {
      publisher: "Apu.fi / A-lehdet",
      title: "Pakarakipu pahenee istuessa? Kokeile näitä fysioterapeutin suosittelemia harjoitteita",
      desc: "Pitkittynyt istuminen, rasitus tai pieni vamma voivat ärsyttää piriformis-lihasta. OMT-fysioterapeutti Janne Säkkinen antaa 5 täsmällistä itsehoitokeinoa pakarakivun lievittämiseen ja piriformis-syndrooman hoitoon.",
      quote: "Pitkittynyt istuminen ärsyttää piriformis-lihasta. Oikeilla liikehoidoilla ja fysioterapeuttisilla harjoitteilla hermopuristeesta ja kivusta päästään eroon.",
      url: "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
      badge: "Valtakunnallinen Media",
      category: "Pakarakipu & Piriformis",
      color: "from-red-500/20 to-transparent",
    },
    {
      publisher: "Kaleva.fi / Kaleva Media",
      title: "Jos naama pysyy peruslukemilla, venyttelet oikein",
      desc: "Kalevan asiantuntijahaastattelussa fysioterapeutti Janne Säkkinen avaa fysioterapian ja kehonhuollon perusperiaatteita: venyttelyn ei pidä sattua, vaan kasvojen tulee säilyä rentona harjoittelun aikana.",
      quote: "Jos naama menee irvistykseen, lihas reagoi suojajännityksellä. Venyttelyn ja kehonhuollon tulee aina tukea hermoston rauhoittumista.",
      url: "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
      badge: "Sanomalehti Kaleva",
      category: "Venyttely & Lihashuolto",
      color: "from-blue-500/20 to-transparent",
    },
    {
      publisher: "LinkedIn Professional Feature",
      title: "Asiantuntijayhteistyö: Fysioterapian & Kuntoutuksen Kehittäminen",
      desc: "Ammatillinen julkaisu ja asiantuntija-avaus fysioterapiakäytäntöjen, OMT-osaamisen ja terveydenhuollon yhteistyön kehittämisestä yhdessä alan huippuammattilaisten kanssa.",
      quote: "Lyötiin Mervi Niippalan kanssa päät yhteen – moniammatillinen yhteistyö on avain parhaisiin kuntoutustuloksiin.",
      url: "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/",
      badge: "LinkedIn Julkaisu",
      category: "Moniammatillinen Yhteistyö",
      color: "from-cyan-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Newspaper className="w-4 h-4 text-[#00AEEF]" />
            <span>Asiantuntija Mediassa &amp; Julkaisuissa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
            JANNE SÄKKINEN <span className="text-[#00AEEF]">MEDIASSA</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Lue FT Janne Säkkisen asiantuntija-artikkeleita ja haastatteluja valtakunnallisissa medioissa (Apu, Kaleva, ammatilliset verkostot).
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-[#000d21]/90 border border-[#0C66B4]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#00AEEF] transition-all duration-300 shadow-panel group hover:-translate-y-1 relative"
            >
              <div className="space-y-4">
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2 border-b border-[#0C66B4]/30 pb-4">
                  <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#00AEEF]" />
                    {art.publisher}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/30 text-[10px] font-semibold text-gray-300">
                    {art.badge}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#00AEEF] transition-colors">
                  {art.title}
                </h3>

                {/* Pull Quote */}
                <div className="p-4 rounded-xl bg-[#000a18] border-l-2 border-[#00AEEF] text-xs text-gray-300 italic space-y-1">
                  <div className="flex items-center gap-1 text-[#00AEEF] font-bold not-italic text-[10px]">
                    <Quote className="w-3 h-3" />
                    <span>Laina-tsitaatti artikkelista:</span>
                  </div>
                  <p className="leading-relaxed">"{art.quote}"</p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#0C66B4]/30">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#014489]/30 border border-[#00AEEF]/50 text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] transition-all duration-300 shadow-glow text-center group/btn"
                >
                  <span>Lue artikkeli julkaisusta</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Trust Banner */}
        <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#00AEEF] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Tutkittua tietoa &amp; kliinistä asiantuntijuutta</h4>
              <p className="text-xs text-gray-400">Janne Säkkinen toimii Oulun yliopiston luennoitsijana ja OMT-fysioterapian asiantuntijana.</p>
            </div>
          </div>
          <a
            href="/tietoa-minusta"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold hover:bg-[#00AEEF] hover:text-black transition-all"
          >
            Lue lisää Jannen taustasta →
          </a>
        </div>

      </div>
    </section>
  );
}
