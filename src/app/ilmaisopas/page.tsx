import EmailLeadForm from "@/components/EmailLeadForm";

export const metadata = {
  title: "Ilmaiset Kipuoppaat & Kuntoutusohjeet — FT Säkkinen",
  description: "Lataa OMT-fysioterapeutti Janne Säkkisen ilmaiset täsmäoppaat purentavaivoihin, leukanivelen fysioterapiaan ja niskahuimaukseen.",
};

export default function IlmaisopasPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen">
      <EmailLeadForm />
    </div>
  );
}
