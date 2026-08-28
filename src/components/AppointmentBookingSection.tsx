import { Calendar, ExternalLink, ShieldCheck, Building2, Stethoscope } from "lucide-react";

export default function AppointmentBookingSection() {
  return (
    <section className="py-16 bg-[#000a18] border-t border-b border-[#0C66B4]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Vastaanotto ja ajanvaraus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            Miten varaan <span className="text-[#00AEEF]">vastaanottoajan?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Janne Säkkinen ottaa vastaan potilaita kolmessa eri toimipisteessä: Terveystalolla, Norre Työterveydessä sekä Hammasvahdissa. Varaa aika kyseisen klinikan ajanvarausjärjestelmän kautta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1: Terveystalo */}
          <div className="p-7 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4 shadow-panel hover:border-[#00AEEF] transition-all flex flex-col justify-between text-center items-center">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#00AEEF] bg-[#014489]/30 px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Oulu &amp; Digi
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Terveystalo</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center break-words">
                OMT-fysioterapia ja purentaelimistön tutkimus. Varaa aika Terveystalon verkkoajanvarauksesta tai sovelluksesta hakusanalla ”Janne Säkkinen”.
              </p>
            </div>
            <a
              href="https://www.terveystalo.com/fi/haku/?q=Janne+S%C3%A4kkinen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#00AEEF] hover:underline pt-3 border-t border-[#0C66B4]/30 w-full text-center"
            >
              <span>Terveystalo: Janne Säkkinen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Option 2: Norre Työterveys */}
          <div className="p-7 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4 shadow-panel hover:border-[#00AEEF] transition-all flex flex-col justify-between text-center items-center">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#00AEEF] bg-[#014489]/30 px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Työterveys
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Norre Työterveys</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center break-words">
                Purentaelimistön fysioterapia ja fysioterapiakonsultaatiot työterveysasiakkaille. Varaa aika Norren asiakasportaalin kautta.
              </p>
            </div>
            <a
              href="https://norre.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#00AEEF] hover:underline pt-3 border-t border-[#0C66B4]/30 w-full text-center"
            >
              <span>Norre Työterveys -sivut</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Option 3: Hammasvahti */}
          <div className="p-7 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4 shadow-panel hover:border-[#00AEEF] transition-all flex flex-col justify-between text-center items-center">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-bold">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#00AEEF] bg-[#014489]/30 px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Hammaslääkäriasema
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center">Hammasvahti Oulu</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center break-words">
                Purentaelimistön fysioterapia ja leukanivelvaivojen konsultaatiot yhteistyössä hammaslääkärien kanssa.
              </p>
            </div>
            <a
              href="https://www.hammasvahti.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#00AEEF] hover:underline pt-3 border-t border-[#0C66B4]/30 w-full text-center"
            >
              <span>Hammasvahti-ajanvaraus</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/30 text-center space-y-2">
          <p className="text-xs text-gray-300">
            Yritys- ja koulutuskyselyissä voit olla suoraan yhteydessä sähköpostitse: <a href="mailto:tiedottajanne@gmail.com" className="text-[#00AEEF] hover:underline font-bold">tiedottajanne@gmail.com</a> tai puhelimitse: <a href="tel:+358413274967" className="text-[#00AEEF] hover:underline font-bold">041 327 4967</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
