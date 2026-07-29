import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Oikeudelliset tiedot</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            TIETOSUOJA JA <span className="text-[#00AEEF]">VASTUUVAPAUSLAUSUMA</span>
          </h1>
        </div>

        <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 space-y-8 text-gray-300 text-sm leading-relaxed">
          
          {/* Medical Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
              1. Lääketieteellinen vastuuvapauslausuma (Medical Disclaimer)
            </h2>
            <p>
              Tämän sivuston ({SITE_CONFIG.domain}) ja siihen liittyvien sosiaalisen median kanavien (mukaan lukien YouTube-kanava FT Säkkinen) sisältö on tuotettu yksinomaan koulutukselliseen ja tiedolliseen tarkoitukseen.
            </p>
            <p>
              Sivustolla esitetyt tiedot, harjoitteet tai ohjeet eivät muodosta fysioterapeutti-potilassuhdetta eikä niitä tule pitää yksilöllisenä lääketieteellisenä diagnoosina tai hoitosuunnitelmana. Ota aina yhteyttä pätevään terveydenhuollon ammattilaiseen ennen uuden harjoitusohjelman aloittamista tai jos kärsit vakavista oireista.
            </p>
            <p>
              Keskeytä harjoitteet välittömästi, mikäli tunnet kipua, huimausta, pahoinvointia tai muita poikkeavia oireita.
            </p>
          </section>

          {/* Privacy & GDPR */}
          <section className="space-y-3 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-xl font-bold text-white">2. Tietosuojaseloste ja GDPR</h2>
            <p>
              Noudatamme toiminnassamme EU:n yleistä tietosuoja-asetusta (GDPR). Keräämme henkilötietoja (kuten sähköpostiosoitteita) ainoastaan käyttäjän suostumuksella ilmaisien oppaiden toimittamista ja valmennusviestintää varten Beacons.ai -palvelun kautta.
            </p>
            <p>
              Tietoja ei luovuteta kolmansille osapuolille markkinointitarkoituksiin. Sinulla on milloin tahansa oikeus pyytää tietojesi tarkastamista tai poistamista rekisteristä.
            </p>
          </section>

          {/* Cookie Policy */}
          <section className="space-y-3 pt-6 border-t border-[#0C66B4]/30">
            <h2 className="text-xl font-bold text-white">3. Evästekäytäntö (Cookies)</h2>
            <p>
              Sivustolla käytetään välttämättömiä evästeitä sivuston teknisen toimivuuden varmistamiseksi. Emme käytä seurantaevästeitä ilman käyttäjän nimenomaista hyväksyntää.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
