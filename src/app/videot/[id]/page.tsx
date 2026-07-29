import { FALLBACK_VIDEOS } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";

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

  // JSON-LD Schemas for AEO & SEO (Article, VideoObject, FAQPage)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": video.title,
      "description": video.promiseDescription,
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "worksFor": {
          "@type": "Organization",
          "name": "FT Säkkinen"
        },
        "description": "OMT-fysioterapeutti, Oulun yliopiston hammaslääketieteen tiedekunnan kouluttaja vuodesta 2017."
      },
      "publisher": {
        "@type": "Organization",
        "name": "FT Säkkinen",
        "url": "https://www.ftsakkinen.com"
      },
      "datePublished": video.publishedAt,
      "mainEntityOfPage": `https://www.ftsakkinen.com/videot/${video.id}`
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.promiseDescription,
      "thumbnailUrl": video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      "uploadDate": video.publishedAt,
      "duration": "PT07M01S",
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kauanko kestää, että ruokavaliomuutos vähentää nivel- ja jännekipua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ensimmäiset merkit energian palaamisesta ja aamujäykkyyden vähenemisestä havaitaan usein 2–4 viikon kuluessa säännöllisestä omega-3-rasvahappojen saannista ja ruokavalion rauhoittamisesta."
          }
        },
        {
          "@type": "Question",
          "name": "Korvaako tulehdusta lievittävä ruokavalio fysioterapian tai hoidot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ei korvaa. Ravinto ei korvaa mekaanista harjoittelua eikä fysioterapeutin tutkimusta, mutta se luo keholle biologisen alustan, jossa kudos pystyy palautumaan harjoittelusta."
          }
        },
        {
          "@type": "Question",
          "name": "Miksi omega-3-rasvahapot ovat niin tärkeitä tulehduksessa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keho tarvitsee EPA- ja DHA-rasvahappoja valmistaakseen tulehdusta sammuttavia välittäjäaineita (resolviineja ja protektiineja). Ilman niitä tulehduksen sammuttaminen on biologisesti vaikeaa."
          }
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      {/* Inject AEO Structured JSON-LD Data */}
      <Script
        id="json-ld-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back navigation */}
        <Link
          href="/videot"
          className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Takaisin videokirjastoon</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "Tuki- ja Liikuntaelimistö"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {video.title}
          </h1>

          {/* Author E-E-A-T Badge */}
          <div className="flex items-center gap-3 pt-2 text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-4">
            <span className="font-semibold text-white">Kirjoittanut Janne Säkkinen</span>
            <span>•</span>
            <span>OMT-fysioterapeutti, Oulun yliopiston kouluttaja</span>
            <span>•</span>
            <span>Julkaistu {video.publishedAt}</span>
          </div>
        </div>

        {/* AEO Direct Answer Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-3">
          <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>AEO-Tiivistelmä / Pikavastaus</span>
          </div>
          <p className="text-base text-gray-200 leading-relaxed font-medium">
            Pitkittynyt jänne-, nivel- tai selkäkipu voi johtua kehon matala-asteisesta kroonisesta tulehduksesta, joka herkyttää hermostoa ja hidastaa kudosten paranemista. Tehokkain tapa sammuttaa tämä hiljainen tulehdus on lisätä lautaselle rasvaista kalaa (omega-3), kasviksia eri väreissä ja neitsytoliiviöljyä (oleokantaali) sekä vähentää ultraprosessoitua ruokaa ja lisättyä sokeria.
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Main Article Body */}
        <article className="space-y-8 text-base leading-relaxed text-gray-300">
          
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              Mikä on matala-asteinen krooninen tulehdus?
            </h2>
            <p className="font-semibold text-gray-200">
              Matala-asteinen krooninen tulehdus on kehon immuunijärjestelmän jatkuva taustatila, joka ei aiheuta äkillistä punoitusta tai turvotusta, mutta pitää kudokset yliherkkinä.
            </p>
            <p>
              Toisin kuin akuutti tulehdus (kuten nyrjähtänyt nilkka, jossa hälytys soi ja korjausprosessi valmistuu viikossa), krooninen tulehdus toimii kuin taustalle päälle jäänyt liesi. Se ei näy päällepäin peilissä, mutta verikokeissa se näkyy lievästi kohonneina tulehdusarvoina. Tämä hiljainen tila on lääketieteessä yhdistetty krooniseen kipuun, nivelrikon etenemiseen ja hitaaseen palautumiseen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              Miksi krooninen tulehdus hidastaa kivun paranemista?
            </h2>
            <p className="font-semibold text-gray-200">
              Jatkuva tulehdustila herkyttää kehon kipujärjestelmää ja heikentää jänteiden sekä nivelten kykyä korjata itseään harjoittelun jälkeen.
            </p>
            <p>
              Kun keho käy vuodesta toiseen pienten kierrosten taustatulehduksessa, kipukynnys mataloituu ja pienikin mekaaninen rasitus tuntuu voimakkaampana kipuna. Fysioterapia ja täsmäharjoitteet eivät pääse vaikuttamaan optimaalisesti, koska solutason korjausjärjestelmä on ylikuormittunut.
            </p>
            
            <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Fysioterapeutin tärkeä havainto:
              </h3>
              <p className="text-xs text-gray-300">
                Et voi harjoitella tulehdusta pois, jos ruokit sitä jokaisella aterialla lisää. Ravinto luo pohjan, jolla mekaaninen harjoittelu tuottaa tulosta.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              3 tehokkainta ruokavaliomuutosta tulehduksen sammuttamiseen
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  1. Syö rasvaista kalaa vähintään 2 kertaa viikossa
                </h3>
                <p className="text-sm">
                  Lohi, makrilli ja sardiinit sisältävät korkeita pitoisuuksia EPA- ja DHA-omega-3-rasvahappoja. Kehosi käyttää näitä rasvahappoja raaka-aineena molekyyleille, jotka lähettävät keholle suoran biologisen pysäytyskäskyn tulehdukselle.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  2. Lisää eri värejä lautaselle jokaisella aterialla
                </h3>
                <p className="text-sm">
                  Jokaisen kasviksen ja marjan väripigmentti toimii kehon eri korjausreiteillä. Mustikan sininen, pinaatin vihreä ja paprikan oranssi antavat keholle eri työkalut tulehduksen hillitsemiseen.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-lg font-bold text-[#00AEEF] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  3. Vaihda pääasiallinen paistorasva neitsytoliiviöljyyn
                </h3>
                <p className="text-sm">
                  Extra-neitsytoliiviöljy sisältää luonnollista yhdistettä nimeltä oleokantaali. Oleokantaali vaikuttaa kehon tulehdusreitteihin samalla lempeällä mekanismilla kuin ibuprofeeni.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              Usein kysytyt kysymykset (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  Kauanko kestää, että ruokavaliomuutos vähentää nivel- ja jännekipua?
                </h3>
                <p className="text-sm text-gray-300">
                  Ensimmäiset merkit energian palaamisesta ja aamujäykkyyden vähenemisestä havaitaan usein 2–4 viikon kuluessa säännöllisestä omega-3-rasvahappojen saannista ja ruokavalion rauhoittamisesta. Kudostason paraneminen vie yleensä 6–12 viikkoa.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  Korvaako tulehdusta lievittävä ruokavalio fysioterapian tai hoidot?
                </h3>
                <p className="text-sm text-gray-300">
                  Ei korvaa. Ravinto ei korvaa mekaanista harjoittelua eikä fysioterapeutin tutkimusta, mutta se luo keholle biologisen alustan, jossa kudos pystyy palautumaan harjoittelusta ja hoidosta.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-2">
                <h3 className="font-bold text-white text-base">
                  Miksi omega-3-rasvahapot ovat niin tärkeitä tulehduksessa?
                </h3>
                <p className="text-sm text-gray-300">
                  Keho tarvitsee EPA- ja DHA-rasvahappoja valmistaakseen tulehdusta sammuttavia välittäjäaineita (resolviineja ja protektiineja). Ilman niitä tulehduksen sammuttaminen on biologisesti huomattavasti vaikeampaa.
                </p>
              </div>
            </div>
          </section>

          {/* Lead Magnet CTA Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Lataa ilmaiset kuntoutusoppaat PDF-muodossa</h3>
            <p className="text-sm text-gray-300 max-w-lg mx-auto">
              Saat heti pääsyn Janne Säkkisen viralliseen Google Drive -kansioon, johon päivitetään täsmälliset liike- ja kuntoutusoppaat.
            </p>
            <Link
              href="/ilmaisopas"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
            >
              <span>Lataa ilmaiset oppaat suoraan tästä</span>
            </Link>
          </div>

          <p className="text-xs text-gray-400 italic pt-4">
            Lääketieteellinen vastuuvapauslauseke: Tämä artikkeli on tarkoitettu vain koulutus- ja informaatiotarkoitukseen. Se ei korvaa terveydenhuollon ammattilaisen tekemää diagnoosia, yksilöllistä fysioterapia-arviota tai lääkärin hoitosuunnitelmaa.
          </p>

        </article>

      </div>
    </div>
  );
}
