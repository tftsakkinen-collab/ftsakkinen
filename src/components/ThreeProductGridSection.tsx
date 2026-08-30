"use client";

import ProductCard, { ProductCardData } from "./ProductCard";

export default function ThreeProductGridSection() {
  const products: ProductCardData[] = [
    {
      id: "leukanivel-tasmakurssi-29",
      name: "Eroon jäykästä leuasta -videokurssi",
      audienceTag: "Kuluttajat · Itsehoito",
      isB2B: false,
      duration: "17 min video + PDF-opas",
      price: "29 €",
      description: "17 minuutin täsmävideokurssi & kotihoito-opas leukanivelen ja lihaskireyden nopeaan helpottamiseen.",
      details: [
        "Leukanivelen anatomia & luokittelu",
        "Nivel- ja lihasoireiden erotus",
        "Suun sulkijalihasten tutkiminen",
        "Täsmälliset venyttelyharjoitteet",
      ],
      ctaText: "Osta videokurssi (29 €)",
      ctaUrl: "https://buy.stripe.com/fZufZhgsYeUe01k7vT0Ny01",
      badge: "Suosittu pikastartti",
    },
    {
      id: "puristus-pois-49",
      name: "Purenta & Niska Reset (Puristus Pois)",
      audienceTag: "Kuluttajat · 8 Viikkoa",
      isB2B: false,
      duration: "56 videota · ~5 min/pv",
      price: "49 €",
      regularPrice: "149 €",
      description: "Kahdeksan viikon strukturoitu valmennusohjelma leuan puristukseen, yläniskan jumiin ja iltapäiväpäänsärkyyn.",
      details: [
        "56 päivittäistä ohjausvideota",
        "Sähköpostiohjaus joka aamu klo 6:30",
        "Tulostettava PDF-työkirja & mittari",
        "14 päivän riskitön takuu",
      ],
      ctaText: "Lunasta paikkasi (49 €)",
      ctaUrl: "https://buy.stripe.com/fZuaEX5OkdQag0i9E10Ny00",
      badge: "Founding Member -49 €",
    },
    {
      id: "ammattilaiskoulutus-199",
      name: "Leukanivelen terapia -koulutus",
      audienceTag: "B2B · Ammattilaisille",
      isB2B: true,
      duration: "2 h 7 min + liitemateriaalit",
      price: "199 €",
      description: "Täydellinen erikoistumiskoulutus SOTE- ja terveysalan ammattilaisille TMD-vaivojen tutkimiseen ja hoitoon.",
      details: [
        "9 laajaa opetusmoduulia",
        "Tutkiminen, biomekaniikka, triggerit",
        "ALV-vähennyskelpoinen yrityksille",
        "Fysioterpeutit, osteopaatit, hammaslääkärit",
      ],
      ctaText: "Osta ammattilaiskoulutus (199 €)",
      ctaUrl: "https://buy.stripe.com/14A4gz1y43bw4hAbM90Ny02",
      badge: "B2B -erikoiskoulutus",
    },
  ];

  return (
    <section id="tuotteet" className="py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
            VERTAILE JA VALITSE SOPIVIN
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Kaikki kuntoutustuotteet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">rinnakkain</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Vertaa tuotteiden kestoa, sisältöä ja kohderyhmää yhdellä silmäyksellä ilman monimutkaisia taulukoita.
          </p>
        </div>

        {/* 3 Cards Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
