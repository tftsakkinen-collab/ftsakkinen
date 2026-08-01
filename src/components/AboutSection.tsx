import { SITE_CONFIG } from "@/data/config";
import { UserCheck, Award, Stethoscope } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Professional Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#0C66B4] shadow-panel group">
              <img
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen OMT-fysioterapeutti kliinisessä työssä"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-60" />

              {/* Single Authority Proof Banner on card */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-[#000d21]/90 border border-[#00AEEF] backdrop-blur-md flex items-center justify-center gap-2 text-[#00AEEF] text-xs font-bold shadow-glow">
                <Award className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.authorityProofs.appointments}</span>
              </div>
            </div>
          </div>

          {/* Story & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
              <span>Asiantuntemukseni tausta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              RATKAISUJA KIPUUN <span className="text-[#00AEEF]">KLIINISELLÄ KOKEMUKSELLA</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Olen Janne Säkkinen, erikoistunut OMT-fysioterapeutti yli 15 vuoden kliinisellä kokemuksella. Erikoistumiseni ytimessä on tuki- ja liikuntaelimistön monimutkaisten kiputilojen ja toimintahäiriöiden ratkaiseminen.
              </p>
              <p>
                Kliinisessä työssäni kohtaan päivittäin asiakkaita, jotka kärsivät iskiaksesta, niska- ja olkapäävaivoista, nivelrikosta sekä pitkittyneistä kiputiloista. Tavoitteeni on purkaa kipumekanismit selkeiksi, ymmärrettäviksi askeleiksi ja antaa sinulle täsmälliset työkalut kehosi kuntouttamiseen.
              </p>
              <p>
                Opetan fysioterapeutteja ja hammaslääketieteen opiskelijoita Oulun yliopistolla sekä jaan tutkittua tietoa YouTube-kanavallani. Haluan varmistaa, että saat aina luotettavaa, tieteellisesti perusteltua ohjausta.
              </p>
            </div>

            {/* Authority Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0C66B4]/10 border border-[#0C66B4]/40 flex items-start gap-3">
                <UserCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-sm">OMT-Fysioterapeutti (SOMTY 2018–2020)</h3>
                  <p className="text-xs text-gray-400 mt-1">Erikoistunut TMD-purentafysioterapiaan (2015) &amp; TULE-vaivoihin</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0C66B4]/10 border border-[#0C66B4]/40 flex items-start gap-3">
                <Award className="w-6 h-6 text-[#00AEEF] shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-sm">Akateeminen kouluttaja</h3>
                  <p className="text-xs text-gray-400 mt-1">{SITE_CONFIG.authorityProofs.teaching}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
