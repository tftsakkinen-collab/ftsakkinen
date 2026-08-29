import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import { UserCheck, Award, Stethoscope, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Subtle Flare */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#014489]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Professional Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#0C66B4]/60 shadow-2xl shadow-cyan-950/30 group">
              <Image
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen OMT-fysioterapeutti kliinisessä työssä"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-transparent to-transparent opacity-70" />

              {/* Authority Proof Banner on card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 rounded-2xl bg-[#000e24]/90 border border-[#00AEEF]/60 backdrop-blur-xl flex items-center justify-center gap-2 text-[#67e8f9] text-xs font-bold shadow-lg">
                <Award className="w-4 h-4 shrink-0 text-[#67e8f9]" />
                <span className="text-center">{SITE_CONFIG.authorityProofs.appointments}</span>
              </div>
            </div>
          </div>

          {/* Story & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Asiantuntemukseni tausta</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight break-words">
              RATKAISUJA KIPUUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KLIINISELLÄ KOKEMUKSELLA</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 flex items-start gap-3.5 shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                <UserCheck className="w-6 h-6 text-[#67e8f9] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">OMT-Fysioterapeutti (SOMTY 2018–2020)</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Erikoistunut TMD-purentafysioterapiaan (2015) &amp; TULE-vaivoihin</p>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 flex items-start gap-3.5 shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                <Award className="w-6 h-6 text-[#67e8f9] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Akateeminen kouluttaja</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{SITE_CONFIG.authorityProofs.teaching}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#00AEEF]/50 flex items-start gap-3.5 shadow-sm sm:col-span-2 hover:border-[#00AEEF] transition-colors">
                <Stethoscope className="w-6 h-6 text-[#67e8f9] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Valvira &amp; Terhikki -rekisteröinti</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{SITE_CONFIG.authorityProofs.valvira}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
