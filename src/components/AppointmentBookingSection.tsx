import { Calendar, ExternalLink, ShieldCheck, Building2, Stethoscope, ArrowUpRight, Phone, Mail } from "lucide-react";

export default function AppointmentBookingSection() {
  return (
    <section className="py-20 bg-[#000814] border-t border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Calendar className="w-4 h-4 text-[#67e8f9]" />
            <span>Vastaanotto ja ajanvaraus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Miten varaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">vastaanottoajan?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Janne Säkkinen ottaa vastaan potilaita kolmessa eri toimipisteessä: Terveystalolla, Norre Työterveydessä sekä Hammasvahdissa. Varaa aika kyseisen klinikan ajanvarausjärjestelmän kautta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1: Terveystalo */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-5 shadow-xl hover:border-[#00AEEF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center backdrop-blur-md group">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono text-[#67e8f9] bg-[#000814] px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Oulu &amp; Digi
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center group-hover:text-[#67e8f9] transition-colors">Terveystalo</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center break-words font-normal">
                OMT-fysioterapia ja purentaelimistön tutkimus. Varaa aika Terveystalon verkkoajanvarauksesta tai sovelluksesta hakusanalla ”Janne Säkkinen”.
              </p>
            </div>
            <a
              href="https://www.terveystalo.com/fi/haku/?q=Janne+S%C3%A4kkinen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#014489]/30 border border-[#0C66B4]/60 text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] hover:border-[#00AEEF] transition-all duration-300 text-center shadow-sm group/btn"
            >
              <span>Terveystalo: Janne Säkkinen</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Option 2: Norre Työterveys */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-5 shadow-xl hover:border-[#00AEEF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center backdrop-blur-md group">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono text-[#67e8f9] bg-[#000814] px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Työterveys
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center group-hover:text-[#67e8f9] transition-colors">Norre Työterveys</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center break-words font-normal">
                Purentaelimistön fysioterapia ja fysioterapiakonsultaatiot työterveysasiakkaille. Varaa aika Norren asiakasportaalin kautta.
              </p>
            </div>
            <a
              href="https://norre.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#014489]/30 border border-[#0C66B4]/60 text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] hover:border-[#00AEEF] transition-all duration-300 text-center shadow-sm group/btn"
            >
              <span>Norre Työterveys -sivut</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Option 3: Hammasvahti */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-5 shadow-xl hover:border-[#00AEEF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center backdrop-blur-md group">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono text-[#67e8f9] bg-[#000814] px-3 py-1 rounded-full border border-[#00AEEF]/30">
                  Hammaslääkäriasema
                </span>
              </div>
              <h3 className="text-xl font-bold text-white text-center group-hover:text-[#67e8f9] transition-colors">Hammasvahti Oulu</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center break-words font-normal">
                Purentaelimistön fysioterapia ja leukanivelvaivojen konsultaatiot yhteistyössä hammaslääkärien kanssa.
              </p>
            </div>
            <a
              href="https://www.hammasvahti.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#014489]/30 border border-[#0C66B4]/60 text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] hover:border-[#00AEEF] transition-all duration-300 text-center shadow-sm group/btn"
            >
              <span>Hammasvahti-ajanvaraus</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact info banner */}
        <div className="p-6 rounded-2xl bg-[#00122e]/60 border border-[#0C66B4]/40 text-center space-y-2 backdrop-blur-md">
          <p className="text-xs sm:text-sm text-slate-300">
            Yritys- ja koulutuskyselyissä voit olla suoraan yhteydessä sähköpostitse:{" "}
            <a href="mailto:tiedottajanne@gmail.com" className="text-[#67e8f9] hover:underline font-bold inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> tiedottajanne@gmail.com
            </a>{" "}
            tai puhelimitse:{" "}
            <a href="tel:+358413274967" className="text-[#67e8f9] hover:underline font-bold inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> 041 327 4967
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
