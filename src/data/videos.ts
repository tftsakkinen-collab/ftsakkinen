export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  promiseDescription: string;
  categoryId: string;
  duration: string;
  publishedAt: string;
  thumbnailUrl?: string;
  isShort?: boolean;
}

// Strictly Janne Säkkinen's REAL published YouTube videos (Zero fake/invented titles)
export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "fysioterapeutti-ruoka-kiputulehdus",
    youtubeId: "QW76j-RlQrw",
    title: "Fysioterapeutti: tämä ruoka pitää yllä kipua ja tulehdusta",
    promiseDescription: "Jos krooninen kipu ei parane hoidoista huolimatta, syynä voi olla piilevä krooninen tulehdus — ja se mitä syöt.",
    categoryId: "tule-vaivat",
    duration: "07:01",
    publishedAt: "2024-07-24",
    thumbnailUrl: "https://i2.ytimg.com/vi/QW76j-RlQrw/hqdefault.jpg",
    isShort: false,
  },
  {
    id: "leukanivel-sormi-suuhun-piilokipu",
    youtubeId: "YKKgu3ZdNpA",
    title: "Sormi suuhun, leuka sivulle – näin löydetään leukanivelen piilokipu",
    promiseDescription: "Intraoraalinen palpaatio tarkoittaa, että sormi menee suun sisälle — viistopinta ylöspäin, leuka oikealle, ja sormen kärki löytää kohdan jota ei ole koskaan ennen koskettu.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-19",
    thumbnailUrl: "https://i2.ytimg.com/vi/YKKgu3ZdNpA/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "leuan-alla-kolme-lihasta-palpaatio",
    youtubeId: "P-gSDH6IByQ",
    title: "Leuan alta löytyy kolme eri lihasta – osaatko erottaa ne palpaatiossa?",
    promiseDescription: "Masseter ei ole vain posken lihas — se löytyy myös leuan alta. Kaksi kolmasosaa leuan altapinnasta täyttyy mylohyoideuksesta, etuosassa on digastricus ja takalaita kuuluu pterygoideus medialikselle.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-20",
    thumbnailUrl: "https://i1.ytimg.com/vi/P-gSDH6IByQ/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "leukanivelen-suun-avaus-mobilisointi",
    youtubeId: "N7IcS9YLcVY",
    title: "Millejä, ei metrejä – näin leukanivel mobilisoidaan kun suu ei lähde auki",
    promiseDescription: "Kun suu ei meinaa lähteä auki, ei revitä väkisin. Aloitetaan helluttelulla poskinivelestä, haetaan traktio alaspäin — ja kun peukalo saadaan suuhun, liu'utetaan leukaa varovasti.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-22",
    thumbnailUrl: "https://i3.ytimg.com/vi/N7IcS9YLcVY/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "leuan-alla-ja-suun-sisalla-sama-kohta",
    youtubeId: "ybyLbSDOwiI",
    title: "Sama kohta löytyy sekä leuan alta että suun sisältä – näin se tehdään",
    promiseDescription: "Digastricus kiinnittyy leuan alle keskilinjan viereen — ja sen vastinpari geniohyoideus löytyy suun sisältä täsmälleen samasta kohdasta.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-21",
    thumbnailUrl: "https://i2.ytimg.com/vi/ybyLbSDOwiI/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "fysioterapeutin-tmd-valineisto",
    youtubeId: "wW61YrBCT2A",
    title: "Hierontasauva, terassimatto ja sähköhammasharja – fysioterapeutin TMD-välineistö",
    promiseDescription: "Asiakkaat naureskelevatkin vastaanotolla kun näkevät välineistön. Mutta jokainen niistä on terapiaväline. Sähköhammasharja + piinipullo — ja asiakas pystyy tekemään oman hoitonsa kotona.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-18",
    thumbnailUrl: "https://i4.ytimg.com/vi/wW61YrBCT2A/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "leukanivelen-sivusuunnan-mittaus",
    youtubeId: "QACMtNl5qVA",
    title: "Puolikrouvin merkki spatulaan – näin mitataan leukanivelen sivusuunnan liike",
    promiseDescription: "Spatulan reunaan piirretään puolikrouvin merkki — se on kaikki mitä tarvitset leukanivelen sivusuunnan liikelaajuuden mittaamiseen.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-17",
    thumbnailUrl: "https://i2.ytimg.com/vi/QACMtNl5qVA/hqdefault.jpg",
    isShort: true,
  },
  {
    id: "nukahtaminen-silmien-liike-rentoutus",
    youtubeId: "n5BlU2e1psc",
    title: "Juuri ennen nukahtamista silmäsi tekevät tämän – ja sen voi tehdä tahallaan",
    promiseDescription: "Unilaboratoriossa se näkyy joka ikinen kerta: juuri ennen nukahtamista silmät alkavat tehdä hitaita, vaakasuuntaisia liikkeitä. Hidas silmänliike on tutkitusti merkki nukahtamisesta.",
    categoryId: "ergonomia",
    duration: "01:00",
    publishedAt: "2024-07-26",
    thumbnailUrl: "https://i3.ytimg.com/vi/n5BlU2e1psc/hqdefault.jpg",
    isShort: true,
  },
];
