export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  promiseDescription: string;
  categoryId: string;
  duration: string;
  publishedAt: string;
  thumbnailUrl?: string;
}

export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "fysioterapeutti-ruoka-kiputulehdus",
    youtubeId: "QW76j-RlQrw",
    title: "Fysioterapeutti: tämä ruoka pitää yllä kipua ja tulehdusta",
    promiseDescription: "Jos krooninen kipu ei parane hoidoista huolimatta, syynä voi olla piilevä krooninen tulehdus. Näin ruoka vaikuttaa kudosten paranemiseen.",
    categoryId: "tule-vaivat",
    duration: "07:01",
    publishedAt: "2024-07-24",
    thumbnailUrl: "https://i2.ytimg.com/vi/QW76j-RlQrw/hqdefault.jpg",
  },
  {
    id: "leukanivel-sormi-suuhun-piilokipu",
    youtubeId: "YKKgu3ZdNpA",
    title: "Sormi suuhun, leuka sivulle – näin löydetään leukanivelen piilokipu",
    promiseDescription: "Intraoraalinen palpaatio paljastaa kireydet, joita ei ole koskaan ennen koskettu. Tärkeimpiä TMD-fysioterapian käytännön taitoja.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-19",
    thumbnailUrl: "https://i2.ytimg.com/vi/YKKgu3ZdNpA/hqdefault.jpg",
  },
  {
    id: "leuan-alla-kolme-lihasta-palpaatio",
    youtubeId: "P-gSDH6IByQ",
    title: "Leuan alta löytyy kolme eri lihasta – osaatko erottaa ne palpaatiossa?",
    promiseDescription: "Masseter, mylohyoideus ja pterygoideus medialis. Miten erotat leuan alaosan lihakset ja palpoit ne oikein.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-20",
    thumbnailUrl: "https://i1.ytimg.com/vi/P-gSDH6IByQ/hqdefault.jpg",
  },
  {
    id: "leukanivelen-suun-avaus-mobilisointi",
    youtubeId: "N7IcS9YLcVY",
    title: "Millejä, ei metrejä – näin leukanivel mobilisoidaan kun suu ei lähde auki",
    promiseDescription: "Purentaelimistön traktiomobilisointi: haetaan alaspäin suuntautuva liike turvallisesti ilman väkivaltaista venytystä.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-22",
    thumbnailUrl: "https://i3.ytimg.com/vi/N7IcS9YLcVY/hqdefault.jpg",
  },
  {
    id: "leuan-alla-ja-suun-sisalla-sama-kohta",
    youtubeId: "ybyLbSDOwiI",
    title: "Sama kohta löytyy sekä leuan alta että suun sisältä – näin se tehdään",
    promiseDescription: "Digastricus ja geniohyoideus -vastinparin palpaatioreitti ulkoa ja suun sisältä käsin.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-21",
    thumbnailUrl: "https://i2.ytimg.com/vi/ybyLbSDOwiI/hqdefault.jpg",
  },
  {
    id: "fysioterapeutin-tmd-valineisto",
    youtubeId: "wW61YrBCT2A",
    title: "Hierontasauva, terassimatto ja sähköhammasharja – fysioterapeutin TMD-välineistö",
    promiseDescription: "Luovat ja edulliset kotihoito- ja terapiavälineet purentalihasten ja leukanivelen hoidossa.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-18",
    thumbnailUrl: "https://i4.ytimg.com/vi/wW61YrBCT2A/hqdefault.jpg",
  },
  {
    id: "leukanivelen-sivusuunnan-mittaus",
    youtubeId: "QACMtNl5qVA",
    title: "Puolikrouvin merkki spatulaan – näin mitataan leukanivelen sivusuunnan liike",
    promiseDescription: "Yksinkertainen ja tarkka tapa mitata leukanivelen lateral deviation spatula-työkalulla.",
    categoryId: "purenta-tmd",
    duration: "01:00",
    publishedAt: "2024-07-17",
    thumbnailUrl: "https://i2.ytimg.com/vi/QACMtNl5qVA/hqdefault.jpg",
  },
  {
    id: "nukahtaminen-silmien-liike-rentoutus",
    youtubeId: "n5BlU2e1psc",
    title: "Juuri ennen nukahtamista silmäsi tekevät tämän – ja sen voi tehdä tahallaan",
    promiseDescription: "Hitaat silmänliikkeet hermoston rauhoittamiseen ja nukahtamisen helpottamiseen.",
    categoryId: "ergonomia",
    duration: "01:00",
    publishedAt: "2024-07-26",
    thumbnailUrl: "https://i3.ytimg.com/vi/n5BlU2e1psc/hqdefault.jpg",
  },
];
