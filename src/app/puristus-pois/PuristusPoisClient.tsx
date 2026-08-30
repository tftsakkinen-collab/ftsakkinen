"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Check,
  X,
  CreditCard,
  Lock,
  UserCheck,
  BookOpen,
  Calendar,
  Flame,
  Clock,
  Activity,
  Award,
} from "lucide-react";

export default function PuristusPoisClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCheckout = () => {
    // Redirect to checkout or contact for pilot group spot reservation
    window.location.href = "https://buy.stripe.com/test_placeholder_puristuspois";
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const forumQuotes = [
    "Mikä mua voi enää auttaa kun kiskosta ei tunnu olevan mitään apua?",
    "Päivällä leuat tuntuvat olevan koko ajan jännityksessä.",
    "Aamulla kun herään, olen yhtä väsynyt kuin illallakin.",
    "Kädetkin tuntuu ihan puutuneilta jatkuvasti, niskatkin jumissa.",
    "Lääkärit ovat olleet asiallisia, mutta hekään eivät oikein osaa auttaa.",
    "Tuntuu välillä niin kurjalta, kun on kivut päällä ja tuntuu, ettei kukaan ymmärrä.",
    "Meitä bruksaajia pitäisi olla paljon, yllättävän vähän vain törmää aiheeseen.",
  ];

  const faqs = [
    {
      q: "Mulla on ollut tämä 10 vuotta. Voiko kahdeksan viikkoa muuttaa mitään?",
      a: "Kahdeksan viikkoa ei poista kymmenen vuoden asentotottumusta. Sanon sen suoraan. Se, mitä kahdeksan viikkoa riittää tekemään, on että lopetat arvailun: tiedät mistä oireesi tulee, mitä sille tehdään ja milloin asia kuuluu lääkärille. Useimmilla myös poskiarkuus ja puristusprosentti liikkuvat tuossa ajassa. Päänsärkypäivät ovat ketjun viimeinen lenkki ja liikkuvat hitaimmin.",
    },
    {
      q: "Mulla on kisko. Pitääkö se lopettaa?",
      a: "Ei. Kisko suojaa hampaita ja se tehtävä jää voimaan. Tämä kurssi tulee sen rinnalle, ei tilalle. Purentakiskoon liittyvät päätökset tekee hammaslääkärisi.",
    },
    {
      q: "Mulla on diagnosoitu migreeni. Onko tästä hyötyä?",
      a: "Mahdollisesti — mutta eri tavalla kuin luulet. Viikolla 7 käydään läpi tapaus, jossa 'kuusi migreeniä kuukaudessa' osoittautui kahdeksi migreeniksi ja neljäksi niskaperäiseksi päänsäryksi. Kurssi ei hoida migreeniä eikä koske lääkitykseesi. Se voi auttaa erottamaan ne toisistaan — ja se on tieto, jonka voit viedä lääkärillesi.",
    },
    {
      q: "Mulla on nivelrikko / rakenteellinen muutos leukanivelessä.",
      a: "Lihaskontrolliin, asentoon ja hermoston vireystilaan voi vaikuttaa siitä huolimatta. Nämä harjoitteet ovat kevyitä eivätkä kuormita niveltä. Jos sinulla on diagnosoitu nivelmuutos, kysy varmuuden vuoksi hoitavalta taholtasi ennen aloitusta.",
    },
    {
      q: "Kuinka paljon aikaa tämä oikeasti vie?",
      a: "Video noin 5 min — muutama mekanismipäivä on 6–7 min, koska niissä on enemmän kerrottavaa. Päivän tehtävä 1–3 min. Mittauspäivinä 10 min. Yhteensä alle 10 minuuttia päivässä. Ja viikosta 8 eteenpäin ylläpito on alle kaksi minuuttia.",
    },
    {
      q: "Entä jos jään jälkeen?",
      a: "Et jää. 56 päivää ei ole aikataulu vaan 56 mahdollisuutta. Materiaali on käytössäsi pysyvästi, ja automaatiossa on palautusviesti, joka lähtee kun jätät päiviä väliin. Sen otsikko on 'Et ole jäljessä.'",
    },
    {
      q: "Miksi maksaisin, kun YouTubessa on ilmaisia videoita — myös sinun?",
      a: "YouTube antaa harjoitteita. Se ei anna järjestystä, mittareita, päivittäistä toimitusta eikä sitä että sinä oikeasti teet kahdeksan viikkoa. Tutkimuksessa, jossa ihmisille annettiin ohjattu ohjelma ilmaiseksi työajalla, vain 27 % teki sen. Tämän tuotteen arvo on se toimitus, ei tieto.",
    },
    {
      q: "Korvaako tämä fysioterapiakäynnin?",
      a: "Ei. Ja sanon sen suoraan: tutkimuksissa käsillä tehty hoito on ollut niskaperäisen päänsäryn kivunlievityksessä vahvempi kuin pelkkä harjoittelu. Ne ovat eri työkaluja. Käsittely tuo nopeamman helpotuksen; se mitä teet 40 tuntia viikossa ratkaisee pysyykö se. Jälkimmäistä ei kukaan voi tehdä puolestasi. Jos harkitset fysioterapiaa, mene sinne tämän kurssin kanssa — et sen sijasta.",
    },
    {
      q: "Onko tämä suomeksi?",
      a: "Kyllä. Kaikki materiaali on suomeksi.",
    },
    {
      q: "Mitä jos oireeni eivät muutu?",
      a: "Päivä 54 käsittelee juuri sitä. Siinä käydään läpi kolme tilannetta ja jokaiseen konkreettinen seuraava askel. Ja sinulla on silloin kahdeksan viikon dokumentoitu data itsestäsi, jonka voit viedä vastaanotolle. Kukaan ei tule vastaanotolle sellaisen kanssa — se lyhentää arviointia merkittävästi.",
    },
  ];

  return (
    <div className="bg-[#000814] text-slate-100 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-black">
      
      {/* 1. HERO */}
      <section className="relative py-20 lg:py-32 border-b border-[#0C66B4]/30 overflow-hidden bg-gradient-to-b from-[#000814] via-[#00122e] to-[#000814]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/10 rounded-full blur-[180px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#67e8f9]" />
            <span>Kahdeksan Viikon Valmennusohjelma</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Hampaasi koskettavat juuri nyt toisiaan.
            </h1>
            <p className="text-2xl sm:text-4xl font-display font-bold text-[#67e8f9]">
              Eikä niiden pitäisi.
            </p>
          </div>

          <div className="pt-4 pb-2 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#67e8f9] uppercase block">
              PURISTUS POIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Leuka lepoon, niska liikkeelle.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Kahdeksan viikon ohjelma näyttöpäätetyötä tekevälle, jonka leuka puristaa, niska on jumissa ja pää särkee iltapäivisin — eikä kukaan ole osannut selittää miksi.
          </p>

          <div className="p-4 rounded-2xl bg-[#001433]/60 border border-[#0C66B4]/50 max-w-2xl mx-auto text-sm text-slate-200 font-medium">
            Noin viisi minuuttia päivässä. 56 videota. Yksi mekanismi, joka selittää ne kaikki.
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tunnistus"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#014489]/50 border border-[#0C66B4] text-white font-bold text-base hover:bg-[#014489] hover:border-[#00AEEF] transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
            >
              <span>Lue lisää</span>
              <ArrowDown className="w-5 h-5 text-[#67e8f9]" />
            </a>

            <a
              href="#hinta"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 cursor-pointer min-h-[52px]"
            >
              <Flame className="w-5 h-5 text-[#000a18]" />
              <span>Pilottiryhmä — 49 € · 10 paikkaa</span>
            </a>
          </div>

          {/* Instructor Badge */}
          <div className="pt-8 border-t border-[#0C66B4]/30 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#00AEEF] overflow-hidden bg-black shrink-0">
                <img src="/janne.jpg" alt="Janne Säkkinen" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-white">FT Säkkinen</span>
            </div>
            <span>·</span>
            <span>Janne Säkkinen, OMT-fysioterapeutti</span>
            <span>·</span>
            <span>purentafysioterapiaan erikoistunut</span>
            <span>·</span>
            <span>luennoi hammaslääketieteessä Oulun yliopistossa</span>
          </div>

        </div>
      </section>

      {/* 2. TUNNISTUS */}
      <section id="tunnistus" className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Tunnistatko jonkin näistä?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Nämä ovat suoria lainauksia suomalaisilta keskustelupalstoilta. Toiset ihmiset, sama asia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {forumQuotes.map((quote, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#001433]/70 border border-[#0C66B4]/40 text-slate-200 text-sm italic relative shadow-sm"
              >
                &ldquo;{quote}&rdquo;
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[#00183d]/90 border-2 border-[#00AEEF]/60 space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-[#67e8f9]">
              Se viimeinen on tärkein.
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Tämä vaiva on yksinäinen tavalla, jota ulkopuolinen ei ymmärrä. Se ei näy päälle. Se ei ole vakava. Sitä ei voi näyttää kenellekään.
            </p>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Ja siksi ihmiset kärsivät siitä vuosia kertomatta kenellekään muulle kuin lääkärille, joka ei löydä mitään.
            </p>
          </div>

        </div>
      </section>

      {/* 3. MEKANISMI */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
              SE, MITÄ KUKAAN EI OLE KERTONUT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Miksi hammaslääkäri katsoo leukaa eikä löydä mitään
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#00122e] border border-[#0C66B4]/50 space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>Kuvittele vanha talo, jossa on etuovi ja takaovi — mutta vain yksi ovikello.</p>
            <p>Kello soi. Juokset etuovelle. Ei ketään. Kello soi taas. Juokset takaovelle. Ei ketään siinäkään.</p>
            <p className="font-bold text-white text-lg">Aivosi ovat tuossa talossa.</p>
            <p>
              Leukasi hermot ja niskasi ylimmän osan hermot päättyvät aivorungossa samoihin soluihin. Kun sieltä tulee viesti, aivot eivät pysty täysin erottamaan, kumpi soitti.
            </p>
            <p>
              Siksi niskan jumi voi tuntua ohimossa. Siksi hampaan seudun kipu voi tulla lihaksesta, ei hampaasta. Siksi korva voi kolottaa, vaikka korvassa ei ole mitään.
            </p>
            <p className="font-semibold text-[#67e8f9]">
              Se ei ole sattumaa eikä se ole päässäsi. Se on anatomiaa — ja se on ollut anatomian kirjoissa vuosikymmeniä.
            </p>
          </div>

          {/* Stat Box */}
          <div className="p-8 rounded-3xl bg-[#014489]/30 border-2 border-[#00AEEF] text-center space-y-3 shadow-[0_0_30px_rgba(0,174,239,0.2)]">
            <div className="text-4xl sm:text-6xl font-display font-extrabold text-[#67e8f9]">
              88,4 %
            </div>
            <p className="text-white text-base sm:text-lg font-bold max-w-xl mx-auto">
              Näin suuri osa jännityspäänsärkyä sairastavista raportoi myös niskakipua. Ilman päänsärkyä olevilla luku on 56,7 %.
            </p>
            <p className="text-xs text-slate-300 italic font-mono">
              Väestötutkimus, n = 797
            </p>
          </div>

          <div className="space-y-3 text-slate-200 text-sm sm:text-base">
            <p>
              Leuka, niska ja päänsärky eivät ole kolme ongelmaa. Ne ovat yksi järjestelmä, jolla on yksi ylikuormittunut hälytyslinja.
            </p>
            <p className="font-bold text-white text-lg">
              Ja siksi yhden alueen hoitaminen ei ole riittänyt.
            </p>
          </div>

        </div>
      </section>

      {/* 3b. KOLMAS ASIA */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
              KOLMAS ASIA, JOSTA KUKAAN EI PUHU
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Sinä et purista leukaasi. Rintakehäsi puristaa sitä puolestasi.
            </h2>
          </div>

          {/* Interactive 10s Test Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#00183d] border-2 border-[#0C66B4] space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#67e8f9] text-xs font-bold">
              Kokeile tämä nyt (kestää 10 sekuntia)
            </div>
            <p className="text-white text-base sm:text-lg font-bold">
              Laita käsi rintalastan päälle. Painu vähän kasaan — niin kuin istuisit kahdeksatta tuntia näytön ääressä.
            </p>
            <p className="text-slate-300 text-sm">Katso, mitä pääsi teki.</p>
            <p className="text-[#67e8f9] text-lg font-bold">
              Se meni eteen itsestään. Etkä sinä käskenyt sitä.
            </p>
          </div>

          <div className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              Selkärankasi yläosassa, siinä kohdassa mihin kätesi juuri on, on neljä nikamaa, jotka jumittuvat istumatyössä ensimmäisenä. Kun ne eivät enää ojennu, jonkun on ojennuttava niiden puolesta — muuten katseesi osoittaisi lattiaan. Se joku on niskasi ylin osa, ja se maksaa laskun koko työpäivän ajan.
            </p>
            <p>
              Ja samalla tapahtuu toinen asia. Kun rintakehän yläosa painuu kasaan, kaulan etupuoli lyhenee ja <strong className="text-white">vetää alaleukaasi taaksepäin ja alas</strong> — juuri siihen suuntaan, missä leukanivelen takaosassa on kehon hermorikkainta kudosta.
            </p>
            <p className="font-semibold text-white">
              Siksi leukasi on kireä iltapäivällä, vaikka et ole tehnyt sillä mitään.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#001433] border-2 border-[#00AEEF]/60 space-y-4">
            <h3 className="text-lg font-bold text-white">
              Ja tästä seuraa se, mikä tekee tästä kurssista erilaisen kuin mikään, mitä olet kokeillut:
            </h3>
            <p className="text-slate-200 text-sm">
              Jos leukaharjoitteet eivät ole auttaneet sinua, se ei välttämättä johdu siitä, että teit ne väärin. Se voi johtua siitä, että aloitit väärästä päästä.
            </p>
            <p className="text-[#67e8f9] text-base sm:text-lg font-extrabold">
              Tämä kurssi ei ala leuasta. Se alkaa siitä, mistä ketju oikeasti lähtee.
            </p>
          </div>

        </div>
      </section>

      {/* 4. MIKSI KISKO EI RIITTÄNYT */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Kisko ei ollut väärä. Se oli yksi viidestä.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Jos olet käyttänyt purentakiskoa etkä ole saanut siitä apua, sinua ei ole huijattu.
            </p>
          </div>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              Kiskolla on tehtävä, ja se tehtävä on <strong className="text-white">hampaiden suojaaminen</strong>. Siihen se on hyvä hoito ja se tekee sen luotettavasti.
            </p>
            <p>
              Mutta kisko ei muuta sitä, kuinka usein sinä puristat päivällä. Se ei muuta pääsi asentoa näytön ääressä. Se ei laske hermostosi vireystilaa. Ja se on suussasi yöllä — se ei korjaa päivääsi.
            </p>
            <p>Sinä sait yhden osan. Loput neljä ovat jääneet antamatta.</p>
            <p className="text-[#67e8f9] font-bold text-lg">Tämä kurssi on niitä neljää.</p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#0C66B4]/60 bg-[#001433]">
                  <th className="p-4 font-bold text-white">Mitä olet ehkä jo maksanut</th>
                  <th className="p-4 font-bold text-[#67e8f9]">Hinta</th>
                  <th className="p-4 font-bold text-white">Mitä se hoiti</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0C66B4]/30 bg-[#000d21]">
                <tr>
                  <td className="p-4 font-semibold text-white">Purentakisko</td>
                  <td className="p-4 text-slate-300 font-mono">500–800 €</td>
                  <td className="p-4 text-slate-300">Hampaat. Ei puristamista.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Botuliinihoito</td>
                  <td className="p-4 text-slate-300 font-mono">~400 € / 3–6 kk</td>
                  <td className="p-4 text-slate-300">Oiretta. Toistuva kulu.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Fysioterapiakäynnit</td>
                  <td className="p-4 text-slate-300 font-mono">50–90 € × 20 = 1 000–1 800 €</td>
                  <td className="p-4 text-slate-300">Auttaa — mutta 40 viikkotuntia jatkuu.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Hieronta</td>
                  <td className="p-4 text-slate-300 font-mono">50–70 € / kerta</td>
                  <td className="p-4 text-slate-300">Muutama päivä helpotusta.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. MIKSI TÄMÄ ON ERILAINEN */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ongelma ei ole tieto. Ongelma on se, ettei kukaan jaksa tehdä.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Vuonna 2025 julkaistussa tutkimuksessa toimistotyöntekijöille annettiin 12 viikon ohjattu niska–hartia-ohjelma. Työpaikalla. Työajalla. Ilmaiseksi.
            </p>
            <p className="text-slate-200 text-sm">
              Tulos oli hyvä: <strong className="text-white">päänsäryn esiintyvyys putosi yli puoleen</strong> ja päänsärkypäivien määrä laski.
            </p>
          </div>

          {/* Research Stat Box */}
          <div className="p-8 rounded-3xl bg-[#001433] border-2 border-[#00AEEF] text-center space-y-3">
            <div className="text-4xl sm:text-6xl font-display font-extrabold text-[#67e8f9]">
              27 %
            </div>
            <p className="text-white text-base font-bold max-w-lg mx-auto">
              Vain tämä osuus osallistujista teki harjoitteet suositellulla tiheydellä. 21 % teki niitä korkeintaan kerran viikossa.
            </p>
            <p className="text-xs text-slate-300 italic font-mono">
              NEXpro, The Journal of Headache and Pain, 2025
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-200 text-sm sm:text-base">
              He tiesivät mitä tehdä. He eivät tehneet.
            </p>
            <h3 className="text-xl font-extrabold text-[#67e8f9]">
              Ja siksi tämä kurssi on rakennettu toisin päin.
            </h3>
            <p className="text-slate-300 text-sm">
              Se ei myy sinulle tietoa — tietoa on YouTube täynnä, ja suuri osa siitä on minun. Se myy sinulle sen, että sinä oikeasti teet 56 päivää putkeen:
            </p>

            <ul className="space-y-3 text-slate-200 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                <span><strong className="text-white">Viisi minuuttia päivässä.</strong> Ei koskaan enempää. Yksi asia kerrallaan.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                <span><strong className="text-white">Sähköposti joka aamu klo 6:30.</strong> Sinun ei tarvitse muistaa mitään.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                <span><strong className="text-white">Yksi mittari, joka näyttää muutoksen.</strong> Numero, joka laskee, motivoi enemmän kuin mikään kannustuslause.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                <span><strong className="text-white">Palautuspolku, ei häpeää.</strong> Kun jätät kolme päivää väliin — ja jätät — saat viestin, jonka otsikko on <em>&ldquo;Et ole jäljessä.&rdquo;</em></span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. PURISTUSMITTARI */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
              KURSSIN YDINTYÖKALU
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Et voi lopettaa tapaa, jota et huomaa
            </h2>
          </div>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              Kysy itseltäsi: <strong className="text-white">kuinka monta kertaa tänään olet purrut hampaita yhteen?</strong>
            </p>
            <p>
              Et tiedä. Enkä minäkään tietäisi itsestäni. Eikä kukaan tiedä. Ja se on koko ongelman ydin.
            </p>
            <p>
              Tutkimuksessa valveilla tapahtuvaa purentaa on selvitetty näin: puhelin piippaa satunnaisina hetkinä, ja ihminen merkitsee yhdellä napautuksella, mitä hänen leukansa teki juuri sillä sekunnilla.
            </p>
            <p>Ei hoitoa. Ei harjoitteita. Pelkkä merkintä.</p>
          </div>

          {/* EMA Research Stat Box */}
          <div className="p-8 rounded-3xl bg-[#014489]/40 border-2 border-[#00AEEF] text-center space-y-3">
            <div className="text-4xl sm:text-6xl font-display font-extrabold text-[#67e8f9]">
              38 % → 26 %
            </div>
            <p className="text-white text-base font-bold max-w-lg mx-auto">
              Puristushetkien osuus laski — pelkästä seuraamisesta.
            </p>
            <p className="text-xs text-slate-300 italic font-mono">
              EMA-tutkimusten katsaus, J Clin Med 2023
            </p>
          </div>

          <div className="space-y-3 text-slate-200 text-sm sm:text-base">
            <p>
              Tämä on kurssin ensimmäisen viikon työkalu. <strong className="text-white">Puristusmittari.</strong> Viisi merkintää päivässä.
            </p>
            <p>
              Se on syy siihen, että näet muutoksen ennen kuin olet tehnyt yhtään &ldquo;hoitoa&rdquo; — ja se on ainoa mittari, joka tekee näkymättömästä näkyvän.
            </p>
          </div>

        </div>
      </section>

      {/* 7. KOLME NAPPIA */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <p className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest">
              KAIKKI KAHDEKSAN VIIKKOA PALAUTUU KOLMEEN KÄSKYYN
            </p>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Hengitä. Nyökkää. Nosta.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Ne ovat ilmaisia, ne ovat aina mukanasi ja ne toimivat kahdeksassa sekunnissa. Aina tässä järjestyksessä — koska tässä järjestyksessä keho vastaa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Hengitä */}
            <div className="p-6 rounded-3xl bg-[#001433] border-2 border-amber-500/60 space-y-3 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                🟨 1 · HENGITÄ
              </div>
              <h3 className="text-lg font-bold text-white">Hengitys alas</h3>
              <p className="text-xs text-slate-300">Sisään kolme, ulos kuusi.</p>
              <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-800">
                Laskee koko järjestelmän hälytystasoa. Kiristyneessä hermostossa lihasharjoite ei tartu — siksi tämä on ensin.
              </p>
            </div>

            {/* 2. Nyökkää */}
            <div className="p-6 rounded-3xl bg-[#001433] border-2 border-emerald-500/60 space-y-3 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                🟩 2 · NYÖKKÄÄ
              </div>
              <h3 className="text-lg font-bold text-white">Takaraivo pitkäksi</h3>
              <p className="text-xs text-slate-300">Pikkuruinen kyllä. Viisi sekuntia.</p>
              <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-800">
                Kurssin vaikein harjoite, koska se on niin pieni. Vapauttaa yläniskan puristuksen.
              </p>
            </div>

            {/* 3. Nosta */}
            <div className="p-6 rounded-3xl bg-[#001433] border-2 border-sky-500/60 space-y-3 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                🟦 3 · NOSTA
              </div>
              <h3 className="text-lg font-bold text-white">Kieli kattoon</h3>
              <p className="text-xs text-slate-300">Hampaat irti.</p>
              <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-800">
                Ottaa työn pois purentalihaksilta — ja on ainoa näistä kolmesta, joka on päällä myös silloin kun nukut.
              </p>
            </div>

          </div>

          <div className="p-8 rounded-3xl bg-[#00183d] border-2 border-[#00AEEF] text-center space-y-4 shadow-xl">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
              JA SE YKSI LAUSE, JONKA MUISTAT VUODEN PÄÄSTÄ
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#67e8f9]">
              Kieli kattoon, hampaat irti.
            </h3>
            <p className="text-slate-200 text-sm font-semibold max-w-xl mx-auto">
              Kahdeksan viikkoa käytetään siihen, että opit tekemään ne ilman että ajattelet.
            </p>
          </div>

        </div>
      </section>

      {/* 8. MITÄ SAAT */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Kurssin sisältö
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>56 videota, noin viisi minuuttia kukin</span>
              </h3>
              <p className="text-xs text-slate-300">Yksi ajatus, yksi tekeminen, joka päivä. Ei täytettä. Katsottavissa pysyvästi.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Sähköpostiohjaus joka aamu</span>
              </h3>
              <p className="text-xs text-slate-300">Klo 6:30. Video, päivän tehtävä ja yksi kysymys. Sinun ei tarvitse muistaa mitään.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Työkirja (PDF, tulostettava)</span>
              </h3>
              <p className="text-xs text-slate-300">Mittaustaulukot, puristusmittari, kipukartta, päiväkaava, minimiannos, palautusprotokolla.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Puristusmittari</span>
              </h3>
              <p className="text-xs text-slate-300">Kurssin ydintyökalu. Mittaus viikoittain, kahdeksan mittauspistettä.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Kuusi mittaria ennen ja jälkeen</span>
              </h3>
              <p className="text-xs text-slate-300">Puristusprosentti · päänsärkypäivät · suun avautuminen · niskan kierto · poskiarkuus · aamuoire.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Neljä livestriimiä</span>
              </h3>
              <p className="text-xs text-slate-300">Viikoilla 2, 4, 6 ja 8. Mukana myös tallenteina — myös työpisteklinikka, jossa käydään läpi osallistujien omat työpistekuvat.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Yhteisö</span>
              </h3>
              <p className="text-xs text-slate-300">Ihmisiä, joilla on täsmälleen sama outo oire kuin sinulla.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/40 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9]" />
                <span>Sertifikaatti omilla luvuillasi</span>
              </h3>
              <p className="text-xs text-slate-300">Päivä 1, päivä 28, päivä 56 rinnakkain.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 9. VIIKKO VIIKOLTA */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Viikko viikolta
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#0C66B4]/60 bg-[#001433]">
                  <th className="p-4 font-bold text-[#67e8f9] w-20">Viikko</th>
                  <th className="p-4 font-bold text-white w-48">Aihe</th>
                  <th className="p-4 font-bold text-slate-200">Mitä opit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0C66B4]/30 bg-[#000814]">
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">1</td>
                  <td className="p-4 font-bold text-white">Yhteinen hälytyslinja</td>
                  <td className="p-4 text-slate-300">Miksi leuka ja niska ovat sama järjestelmä. Kolme nappia. Ensimmäinen mittaus.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">2</td>
                  <td className="p-4 font-bold text-white">Purentalihakset</td>
                  <td className="p-4 text-slate-300">Löydät oman arkan kohtasi ja opit avaamaan sen kahdessa minuutissa.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">3</td>
                  <td className="p-4 font-bold text-white">Yläniska</td>
                  <td className="p-4 text-slate-300">Se puuttuva puolisko, josta kukaan ei ole kertonut. Kurssin tärkein harjoite.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">4</td>
                  <td className="p-4 font-bold text-white">Integraatio</td>
                  <td className="p-4 text-slate-300">Kaikki yhdessä. Oma päivä- ja iltakaava. Puolimatkan mittaus.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">5</td>
                  <td className="p-4 font-bold text-white">Hermosto ja stressi</td>
                  <td className="p-4 text-slate-300">Miksi &ldquo;koeta rentoutua&rdquo; ei ole neuvo — ja mikä on.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">6</td>
                  <td className="p-4 font-bold text-white">Työpiste</td>
                  <td className="p-4 text-slate-300">Se 40 tuntia viikossa, joka määrää enemmän kuin harjoitteet.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">7</td>
                  <td className="p-4 font-bold text-white">Kuusi tapausta</td>
                  <td className="p-4 text-slate-300">Kuusi erilaista ihmistä. Löydät itsesi, ja saat oman painopisteesi.</td>
                </tr>
                <tr>
                  <td className="p-4 font-extrabold text-[#67e8f9]">8</td>
                  <td className="p-4 font-bold text-white">Se, mikä jää</td>
                  <td className="p-4 text-slate-300">Minimiannos, kuukausihuolto ja se mitä tehdään kun oireet palaavat.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 10. KUKA OPETTAA */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#00AEEF] overflow-hidden bg-black shrink-0 shadow-[0_0_25px_rgba(0,174,239,0.4)]">
              <img src="/janne.jpg" alt="Janne Säkkinen OMT" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
                KUKA OPETTAA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Janne Säkkinen
              </h2>
              <p className="text-xs text-slate-300 font-semibold mt-1">
                OMT-Fysioterapeutti (SOMTY 2018–2020) · Fysioterapeutti AMK (RAMK 2007–2010) · Oulun yliopiston lääketieteellisen täydennyskoulutuksen kouluttaja (2017–)
              </p>
            </div>
          </div>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed p-6 rounded-3xl bg-[#00122e] border border-[#0C66B4]/40">
            <p>
              Olen fysioterapeutti ja OMT-erikoisfysioterapeutti Oulusta. Olen tehnyt potilastyötä yli 15 vuotta ja teen sitä edelleen joka viikko — en referoi muiden työtä, vaan otan vastaan näitä samoja vaivoja.
            </p>
            <p>
              Olen erikoistunut purentaelimistön fysioterapiaan ja kaularangan yläosan tutkimiseen. <strong className="text-white">Luennoin hammaslääketieteen opiskelijoille Oulun yliopistossa</strong> ja koulutan muita ammattilaisia.
            </p>
            <p>
              Ja kaikki tämä kokemus on yhdessä ihmisessä — ei tiimissä, jonka kokemus on laskettu yhteen.
            </p>
            <p className="text-[#67e8f9] font-bold">
              Tämä kurssi on se, mitä käyn läpi vastaanotolla — paitsi että vastaanotolla siihen on 45 minuuttia, ja tässä on kahdeksan viikkoa.
            </p>
          </div>

        </div>
      </section>

      {/* 11. HOITOSUOSITUS TUKENA */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
              VIRALLINEN KÄYPÄ HOITO -LINJAUS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Tämä ei ole vaihtoehtohoitoa
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#001433] border-2 border-[#00AEEF]/50 space-y-4">
            <p className="text-slate-300 text-sm">Suomen virallinen hoitosuositus purentaelimistön toimintahäiriöihin sanoo suoraan:</p>
            
            <blockquote className="border-l-4 border-[#00AEEF] pl-4 italic text-white text-base sm:text-lg">
              &ldquo;Potilas voi tehdä paljon itse vähentämällä kuormittavia elämäntapoja, miettimällä ryhtiä ja asentojaan sekä pyrkimällä hyvään stressinhallintaan.&rdquo;
            </blockquote>
            
            <p className="text-xs text-slate-300 font-mono">
              — <strong>Käypä hoito -suositus</strong>, päivitystiedotteen otsikko: <em>&ldquo;Potilaalla on tärkeä rooli purentaelimistön vaivojen hoidossa&rdquo;</em>
            </p>
          </div>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              Noin puolella aikuisväestöstä on joskus TMD-oireita. Noin 10 % saa diagnosoidun, hoitoa vaativan TMD:n.
            </p>
            <p className="font-bold text-white">
              Suositus siis kertoo, että juuri tällaiselle on paikka. Kukaan ei vain ole paketoinut sitä kunnolla.
            </p>
          </div>

        </div>
      </section>

      {/* 12. KENELLE — JA KENELLE EI */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Suitable */}
            <div className="p-8 rounded-3xl bg-[#00122e] border-2 border-emerald-500/60 space-y-6">
              <h3 className="text-xl font-extrabold text-emerald-400 flex items-center gap-2">
                <Check className="w-6 h-6" />
                <span>Tämä on sinulle, jos</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Leukasi puristaa, niskasi on jumissa tai pääsi särkee iltapäivisin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Olet kokeillut kiskoa, hierontaa tai lääkkeitä ilman pysyvää tulosta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Teet näyttöpäätetyötä</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Haluat ymmärtää <strong className="text-white">miksi</strong>, et vain saada listaa harjoitteista</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Sinulla on viisi minuuttia päivässä</span>
                </li>
              </ul>
            </div>

            {/* Not Suitable */}
            <div className="p-8 rounded-3xl bg-[#00122e] border-2 border-rose-500/60 space-y-6">
              <h3 className="text-xl font-extrabold text-rose-400 flex items-center gap-2">
                <X className="w-6 h-6" />
                <span>Älä osta tätä, jos</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Odotat että katsot videot etkä tee mitään — tämä ei toimi katsomalla</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Haluat että joku korjaa sinut. Minä opetan, sinä teet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span>Sinulla on jokin alla olevista oireista — silloin tarvitset ensin tutkimukset, et kurssia</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 13. PUNAISET LIPUT */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-rose-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>🚩 PUNAISET LIPUT — TÄRKEÄ TURVALLISUUSTIETO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Käy ensin lääkärissä, jos sinulla on
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Suurin osa leuka- ja niskaoireista on lihasperäisiä ja hyvänlaatuisia. Mutta fysioterapeutin ensimmäinen tehtävä on tunnistaa se pieni osa, joka ei kuulu hänelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Category 1 */}
            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/50 space-y-3">
              <h3 className="text-base font-bold text-rose-200">
                1 · Verenkierron varoitusmerkit — viisi D:tä ja kolme N:ää
              </h3>
              <p className="text-xs text-rose-300 font-semibold">
                Näiden kanssa ei harjoitella, ei venytetä eikä käsitellä niskaa. Hakeudu päivystykseen. Erityisesti jos taustalla on äkillinen, uusi ja poikkeuksellisen kova niska- tai päänsärky:
              </p>
              <ul className="text-xs text-slate-200 space-y-1 font-mono">
                <li>• <strong>D</strong> puhe puuroutuu · <strong>D</strong> nieleminen ei onnistu</li>
                <li>• <strong>D</strong> kaksoiskuvat · <strong>D</strong> voimakas huimaus</li>
                <li>• <strong>D</strong> äkillinen kaatuminen ilman tajunnan menetystä</li>
                <li>• <strong>N</strong> pahoinvointi · <strong>N</strong> puutuminen kasvoissa/raajassa · <strong>N</strong> silmävärve</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/50 space-y-3">
              <h3 className="text-base font-bold text-rose-200">
                2 · Selkäydin- ja hermojuurioireet
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• <strong>etenevä voimattomuus</strong> kädessä tai jalassa</li>
                <li>• <strong>kömpelyys</strong> — tavarat putoilevat, käsiala muuttuu, napit eivät onnistu</li>
                <li>• <strong>kävelyn epävarmuus</strong> tai tasapainon heikkeneminen</li>
                <li>• <strong>puutuminen, joka noudattaa selvää aluetta</strong> kädessä</li>
                <li>• <strong>rakon tai suolen toiminnan muutos</strong></li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/50 space-y-3">
              <h3 className="text-base font-bold text-rose-200">
                3 · Yläniskan epävakaus
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• <strong>niskan vamma taustalla</strong> — kolari, whiplash, kaatuminen</li>
                <li>• tunne, että <strong>&ldquo;pää ei pysy paikallaan&rdquo;</strong> tai on irti vartalosta</li>
                <li>• <strong>nielun oireet tai palan tunne, joka muuttuu pään asennon mukana</strong></li>
                <li>• <strong>voimakas huimaus tai pahoinvointi nimenomaan pään kierrosta</strong></li>
                <li>• tulehduksellinen nivelsairaus, kuten nivelreuma</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/50 space-y-3">
              <h3 className="text-base font-bold text-rose-200">
                4 · Leuan ja pään oireet
              </h3>
              <ul className="text-xs text-slate-200 space-y-1.5">
                <li>• <strong>Leuka lukossa</strong> — suu ei aukea tai ei mene kiinni</li>
                <li>• <strong>Purenta muuttunut yhtäkkiä</strong> ilman selvää syytä</li>
                <li>• <strong>Turvotusta, kuumetta tai kuumotusta</strong> leuan/kasvojen alueella</li>
                <li>• <strong>Terävä, sähköiskumainen kasvokipu</strong> kosketuksesta</li>
                <li>• <strong>Uusi tai luonteeltaan muuttunut päänsärky</strong> (erityisesti &gt;50v)</li>
                <li>• <strong>Päänsärky, joka herättää yöllä</strong> tai pahenee makuulla/yskiessä</li>
                <li>• <strong>Selittämätöntä laihtumista</strong> tai yleistilan laskua</li>
                <li>• <strong>Äskettäinen isku päähän tai niskaan</strong></li>
              </ul>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4] text-center text-sm font-bold text-white">
            Jos joku näistä täsmää, ensimmäinen asia ei ole tämä kurssi. Se on ajanvaraus. <span className="text-[#67e8f9]">Kurssi odottaa kyllä.</span>
          </div>

        </div>
      </section>

      {/* 14. HINTA */}
      <section id="hinta" className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold text-[#67e8f9] uppercase tracking-widest block">
              PILOTTIRYHMÄN ERIKOISHINTA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Ensimmäinen ryhmä: 49 €
            </h2>
            <p className="text-base text-slate-300 font-medium">
              Ja kerron suoraan, miksi se on noin halpa.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#001433] border-2 border-[#00AEEF]/60 space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>Tämä on ensimmäinen kerta, kun tämä ohjelma vedetään läpi. Minä tarvitsen teiltä kolme asiaa, joita minulla ei vielä ole:</p>
            <ol className="list-decimal list-inside space-y-1 font-bold text-white">
              <li>Viikoittaiset mittaukset</li>
              <li>Loppukyselyn</li>
              <li>Luvan käyttää tuloksia nimettömänä</li>
            </ol>
            <p>
              Se on kauppa, ei alennus. Te saatte koko ohjelman selvästi halvemmalla kuin mitä se tulee maksamaan, ja minä saan tietää, mikä toimii.
            </p>
            <p className="text-[#67e8f9] font-bold">
              Tämä hinta on vain tälle ryhmälle eikä se palaa.
            </p>
          </div>

          {/* How it proceeds */}
          <div className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-3">
            <h3 className="text-base font-bold text-white">Miten tämä etenee</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-200">
              <li><strong className="text-white">Maksat paikkasi</strong> (Stripe — kortti tai MobilePay).</li>
              <li><strong className="text-white">Saat heti vahvistussähköpostin</strong> ja työkirjan PDF:nä.</li>
              <li><strong className="text-white">Kun kymmenen paikkaa on täynnä</strong>, ilmoitan aloituspäivän — ja päivä 1 lähtee liikkeelle.</li>
            </ol>
            <p className="text-xs text-slate-400 italic pt-2">
              Aloitus on kaikilla sama päivä. Se on tarkoituksellista: te kuljette samaa päivää samaan aikaan, ja siksi yhteisössä on jotain mistä puhua.
            </p>
          </div>

          {/* Includes List */}
          <div className="p-8 rounded-3xl bg-[#00183d] border-2 border-[#00AEEF] space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white border-b border-[#0C66B4]/50 pb-4">
              Mitä 49 € sisältää
            </h3>
            
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>56 videota, noin viisi minuuttia kukin — käytössäsi pysyvästi</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Työkirja (PDF, tulostettava)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Puristusmittari ja kuusi mittaria ennen/jälkeen</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Sähköpostiohjaus joka aamu, 56 päivää</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Yhteisö</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Neljä livestriimiä + tallenteet</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Työpisteklinikka omalla kuvallasi</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#67e8f9] shrink-0" />
                <span>Sertifikaatti omilla luvuillasi</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#0C66B4]/50 space-y-4">
              <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                Ei mitään karsittu. Ohut pilotti tuottaisi ohutta tietoa, ja tieto on koko pointti.
              </p>
              <p className="text-sm font-semibold text-slate-200">
                Kertamaksu. Ei jatkuvaa veloitusta.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-200 text-xs font-bold">
                Paikkoja: 10. Ei markkinointinumero — se on se määrä, jonka kanssa minä ehdin oikeasti vastata jokaiselle. Ensimmäinen ryhmä saa enemmän minun aikaani kuin yksikään myöhempi ryhmä.
              </div>
              <p className="text-xs font-bold text-[#67e8f9]">
                Kun kymmenen paikkaa on täynnä, myynti sulkeutuu ja kurssi käynnistyy.
              </p>
            </div>

            {/* Price Comparison */}
            <div className="pt-4 border-t border-[#0C66B4]/50 text-xs text-slate-300 space-y-1">
              <p className="font-bold text-white">Vertailun vuoksi — mitä olet ehkä jo maksanut:</p>
              <p>Purentakisko <strong>500–800 €</strong> · Botuliinihoito <strong>~400 € / 3–6 kk</strong> · 20 fysioterapiakäyntiä <strong>1 000–1 800 €</strong></p>
              <p className="text-[#67e8f9] font-bold text-sm pt-2">
                Tämä maksaa vähemmän kuin yksi fysioterapiakäynti.
              </p>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-lg hover:from-white hover:to-slate-100 transition-all shadow-[0_0_35px_rgba(0,174,239,0.6)] flex items-center justify-center gap-3 cursor-pointer min-h-[52px]"
            >
              <CreditCard className="w-6 h-6 text-[#000a18]" />
              <span>Ota paikkasi — 49 €</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#67e8f9]" />
                Stripe &amp; MobilePay
              </span>
              <span>•</span>
              <span>14 päivän takuu</span>
              <span>•</span>
              <span>10 paikkaa</span>
            </div>

          </div>

        </div>
      </section>

      {/* 15. TAKUU */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000814]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="p-8 rounded-3xl bg-[#001433] border-2 border-emerald-500/60 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100 % RISKITTÖMÄT EHODOT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              14 päivän takuu — yhdellä ehdolla
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Jos olet katsonut ensimmäisen viikon videot ja tehnyt puristusmittarin, ja koet ettei tämä ole sinua varten — saat rahat takaisin. Ei kysymyksiä.
            </p>

            <div className="p-4 rounded-xl bg-[#000814] border border-emerald-500/40 text-emerald-300 text-sm font-bold">
              Ehto on se, että olet tehnyt viikon 1.
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Se on siellä tarkoituksella. Ensimmäinen viikko on se, jossa saat oman lähtölukusi ja opit kolme nappia. Ennen sitä et voi tietää, toimiiko tämä sinulle.
            </p>

            <p className="text-white font-bold text-sm">
              Ja jos teet viikon 1 etkä koe saavasi mitään — silloin en halua rahojasi.
            </p>
          </div>

        </div>
      </section>

      {/* 16. USEIN KYSYTYT */}
      <section className="py-20 border-b border-[#0C66B4]/30 bg-[#000d21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Usein kysytyt kysymykset
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#001433] border border-[#0C66B4]/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#67e8f9] transition-colors cursor-pointer min-h-[52px]"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#67e8f9] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#0C66B4]/30 bg-[#000814]/50 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 17. VIIMEINEN OSIO */}
      <section className="py-24 bg-gradient-to-b from-[#000d21] via-[#00183d] to-[#000814] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00AEEF]/15 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Kahdeksan viikon päästä
          </h2>

          <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
            <p>Sinä et ole kivuton. En lupaa sitä.</p>
            <p>
              Mutta sinä tiedät, mistä oireesi tulevat. Sinä tiedät, mitä tehdä kun ne alkavat. Ja sinä tiedät, milloin asia ei kuulu sinulle vaan lääkärille.
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#67e8f9] pt-2">
              Sinä lakkaat olemasta oman kehosi arvoituksen edessä avuton.
            </p>
            <p className="text-sm text-slate-300 italic pt-2">
              Se on se, mitä yritän saada aikaan jokaisella vastaanotolla, jonka pidän.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-xl hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_40px_rgba(0,174,239,0.7)] cursor-pointer inline-flex items-center justify-center gap-3 min-h-[56px]"
            >
              <Flame className="w-6 h-6 text-[#000a18]" />
              <span>Ota paikkasi — 49 €</span>
            </button>

            <p className="text-xs text-slate-400 font-medium">
              14 päivän takuu · kertamaksu · materiaali pysyy sinulla · 10 paikkaa
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
