"use client";

import { Video, Check, Star, ShieldCheck, CreditCard, Lock, Sparkles, UserCheck, BookOpen, Layers } from "lucide-react";

export default function ProfessionalTrainingSection() {
  const STRIPE_199_URL = "https://buy.stripe.com/14A4gz1y43bw4hAbM90Ny02";

  const modules = [
    "Esittely",
    "Tavoite, tausta, jaottelu ja päällekkäisyydet",
    "Haastattelu",
    "Biomekaniikka ja anatomia",
    "Craniomandibular - leukanivel",
    "Craniocervical - kaularanka",
    "Craniofacial - kasvot",
    "Triggerit ja potilasesimerkit",
    "Loppusanat",
  ];

  const testimonials = [
    {
      text: "Todella hyvä kurssi, jossa käydään hyvin läpi leukanivelen anatomiaa ja hoitoa. Pidin eniten siitä, kuinka perehdytään eri kipumekanismeihin ja siihen, kuinka ei ole vain yhtä oikeaa tapaa hoitaa näitä vaivoja. Kurssi toimii mainiona kertauksena live-kurssin jatkoksi, mutta antaa hyvät valmiudet myös näin.",
      author: "Sasu K.",
      role: "Koulutusosallistuja",
    },
    {
      text: "Jannen leukanivelen terapian koulutus oli mielenkiintoinen ja kattava katsaus leukanivelen maailmaan. Teoria ja tutkimiset käytiin läpi riittävän selkokielisesti, ettei tarvinnut kyllä kertaakaan miettiä, mistähän nyt puhutaan ja jokainen varmasti ymmärsi käsiteltävän asian... Koulutuksen jälkeen oli Leukanivelen terapian ajokortti taskussa. Nettikurssilla oli helppo palata kurssilla käytyihin asioihin ja sai super paljon varmuutta omaan tekemiseen.",
      author: "Fysio StiinaEveliina",
      role: "Fysioterapeutti & koulutettava",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#000814] relative overflow-hidden border-t border-b border-[#0C66B4]/30">
      {/* Subtle Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Category Badge & Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#67e8f9]" />
            <span>Terveydenhuollon &amp; Kuntoutusalan Ammattilaisille</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Leukanivelen terapia -koulutus ammattilaisille
          </h2>

          <p className="text-[#67e8f9] text-base sm:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
            2 h 7 min kattava erikoistumiskoulutus purentaelimistön toimintahäiriöiden (TMD) hoitoon ja tutkimiseen
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Koulutuksessa tutustutaan purentaelimistön kipu- ja toimintahäiriöisten (temporomandibular disorders, TMD) potilasryhmien jaotteluun, nivel- ja lihasperäisten löydösten tutkimiseen sekä siihen, millä tavalla terapiaa voi toteuttaa asiakastyössä. Koulutus antaa terapeuttiset perusvalmiudet potilasryhmään, johon kuuluu n. 7–9 % koko väestöstä.
          </p>
        </div>

        {/* Target Audience Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#001433]/80 border border-[#00AEEF]/40 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-2 text-[#67e8f9] font-bold text-xs uppercase tracking-wider shrink-0">
            <UserCheck className="w-4 h-4 text-[#67e8f9]" />
            <span>Kohderyhmä:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            Lääkärit, hammaslääkärit, fysioterapeutit, hierojat, naprapaatit, osteopaatit ja manuaaliterapian sekä kuntoutusalan ammattilaiset.
          </p>
        </div>

        {/* Main Content Grid: Modules & Checkout Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 cols: Modules List */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 space-y-6 shadow-xl">
            
            <div className="flex items-center justify-between border-b border-[#0C66B4]/40 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#67e8f9]" />
                <h3 className="text-lg font-bold text-white">
                  Koulutuksen moduulit &amp; sisältö
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[#67e8f9] bg-[#014489]/60 px-3 py-1 rounded-full border border-[#00AEEF]/40">
                2 h 7 min + liitteet
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/40 flex items-center gap-3 text-xs sm:text-sm text-slate-200 hover:border-[#00AEEF]/50 transition-colors"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#014489] text-[#67e8f9] font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-[#00AEEF]/30">
                    0{idx + 1}
                  </span>
                  <span className="font-medium text-white">{mod}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#67e8f9] shrink-0" />
              <span>Sisältää 2 h 7 min streamattavan videotallenteen sekä ladattavat liitemateriaalit vastaanottotyöhön.</span>
            </div>

          </div>

          {/* Right 5 cols: Pricing & Stripe Checkout Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#001433] to-[#000814] border-2 border-[#00AEEF] text-center space-y-6 shadow-2xl sticky top-24">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono">
                AMMATTILAISKOULUTUS
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-display font-extrabold text-[#67e8f9]">
                  199 €
                </span>
                <span className="text-xs text-slate-400 font-mono">/ kertamaksu</span>
              </div>
              <p className="text-xs text-emerald-400 font-bold">
                ✓ ALV-vähennyskelpoinen yrityksille
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#000814] border border-[#0C66B4]/50 text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Video className="w-4 h-4 text-[#67e8f9]" />
                <span>Välitön digitaalinen pääsy</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Saat heti maksun jälkeen pääsyn tallenteeseen ja koulutusmateriaaleihin katsottavaksi omaan tahtiin.
              </p>
            </div>

            {/* Stripe Direct Payment Link */}
            <div>
              <a
                href={STRIPE_199_URL}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-base hover:from-white hover:to-slate-100 transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 cursor-pointer group text-center min-h-[52px]"
              >
                <CreditCard className="w-5 h-5 text-[#000a18]" />
                <span>Osta ammattilaiskoulutus (199 €)</span>
              </a>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#0C66B4]/40 text-xs text-slate-400">
              <div className="flex items-center justify-center gap-1.5 text-slate-300 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#67e8f9]" />
                <span>Turvallinen Stripe Checkout</span>
              </div>
              <p className="text-[11px] leading-tight">
                Korttimaksut, MobilePay, Apple Pay ja yrityksen verkkopankkimaksu.
              </p>
            </div>

          </div>

        </div>

        {/* Customer Testimonials Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Koulutukseen osallistuneiden ammattilaisten kokemuksia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-4 relative flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#0C66B4]/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#67e8f9]">{t.author}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
