import { Calendar, ExternalLink, ShieldCheck, Building2, Stethoscope, ArrowUpRight, Phone, Mail, AlertCircle } from "lucide-react";
import { BOOKING_PARTNERS_FI, BOOKING_DISCLAIMER_FI } from "@/data/booking-partners";

export default function AppointmentBookingSection() {
  return (
    <section id="ajanvaraus" className="py-16 md:py-24 bg-[#000814] border-t border-b border-[#0C66B4]/30 relative overflow-hidden">
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
          
          {/* Important Booking Disclaimer */}
          <div className="p-4 rounded-2xl bg-[#014489]/30 border border-[#00AEEF]/40 text-[#67e8f9] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 max-w-2xl mx-auto shadow-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{BOOKING_DISCLAIMER_FI}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOOKING_PARTNERS_FI.map((partner) => (
            <div
              key={partner.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-5 shadow-xl hover:border-[#00AEEF] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center items-center backdrop-blur-md group"
            >
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                    {partner.id === "terveystalo" && <Building2 className="w-7 h-7" />}
                    {partner.id === "norre" && <ShieldCheck className="w-7 h-7" />}
                    {partner.id === "hammasvahti" && <Stethoscope className="w-7 h-7" />}
                  </div>
                  {partner.badge && (
                    <span className="text-[11px] font-mono text-[#67e8f9] bg-[#000814] px-3 py-1 rounded-full border border-[#00AEEF]/30">
                      {partner.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white text-center group-hover:text-[#67e8f9] transition-colors">{partner.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center break-words font-normal">
                  {partner.description}
                </p>
              </div>
              <a
                href={partner.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-xl bg-[#014489]/40 border border-[#0C66B4] text-white font-semibold text-xs hover:bg-[#00AEEF] hover:text-[#000a18] hover:border-[#00AEEF] transition-all duration-300 text-center shadow-sm group/btn cursor-pointer"
              >
                <span>Varaa aika: {partner.name}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Contact info banner */}
        <div className="p-6 rounded-2xl bg-[#00122e]/60 border border-[#0C66B4]/40 text-center space-y-2 backdrop-blur-md">
          <p className="text-xs sm:text-sm text-slate-300">
            Yritys- ja koulutuskyselyissä voit olla suoraan yhteydessä sähköpostitse:{" "}
            <a href="mailto:tiedottajanne@gmail.com" className="text-[#67e8f9] hover:underline font-bold inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> tiedottajanne@gmail.com
            </a>{" "}
            tai puhelimitse yleisiin tiedusteluihin:{" "}
            <a href="tel:+358413274967" className="text-[#67e8f9] hover:underline font-bold inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> 041 327 4967
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
