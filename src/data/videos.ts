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
    isShort: false,
  },
  {
    id: "leukanivelen-naksahdus-kuntoutus",
    youtubeId: "QW76j-RlQrw",
    title: "Leukanivelen naksahdus & lukkiutuminen — 3 vaihetta kuntoutukseen",
    promiseDescription: "Opi purentaelimistön ja leukanivelen täsmäliikkeet naksahduksen ja kireyden lievittämiseen.",
    categoryId: "purenta-tmd",
    duration: "18:30",
    publishedAt: "2024-03-15",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
  {
    id: "purentalihasten-koti-hieronta",
    youtubeId: "QW76j-RlQrw",
    title: "Purentalihasten (Masseter & Temporalis) faskiakäsittely ja koti-hieronta",
    promiseDescription: "Lievitä hampaiden narskuttelun (bruksismi) ja leuan puristamisen aiheuttamaa poskikipua.",
    categoryId: "purenta-tmd",
    duration: "14:15",
    publishedAt: "2024-04-10",
    thumbnailUrl: "/hero-bg.jpg",
    isShort: false,
  },
  {
    id: "tensapaansarky-ylaniska-avaus",
    youtubeId: "QW76j-RlQrw",
    title: "Eroon jännityspäänsärystä: Niskan ja pään alueen rentoutus",
    promiseDescription: "Pääse eroon ohimolla ja takaraivolla jyskyttävästä jännityksestä turvallisilla mobilisoinneilla.",
    categoryId: "ergonomia",
    duration: "12:45",
    publishedAt: "2024-01-18",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
  {
    id: "suun-terveydenhuolto-ergonomia",
    youtubeId: "QW76j-RlQrw",
    title: "Fyysisen työkyvyn optimointi etätyössä ja suun terveydenhuollossa",
    promiseDescription: "Asennon hallinta ja ergonomiset korjausliikkeet valmistuville ja työelämässä oleville.",
    categoryId: "ergonomia",
    duration: "24:15",
    publishedAt: "2024-05-12",
    thumbnailUrl: "/hero-bg.jpg",
    isShort: false,
  },
  {
    id: "niska-hartia-taukojumppa",
    youtubeId: "QW76j-RlQrw",
    title: "Niska-hartiaseudun jumit etätyössä: 5 minuutin täsmätaukojumppa",
    promiseDescription: "Nopea ja tehokas liikesarja työpäivän lomassa suoritettavaksi ilman välineitä.",
    categoryId: "ergonomia",
    duration: "08:30",
    publishedAt: "2024-05-28",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
  {
    id: "iskias-pakaran-kireys-vapauta",
    youtubeId: "QW76j-RlQrw",
    title: "Iskias ja pakaran kireys: Vapauta iskiashermo turvallisesti",
    promiseDescription: "Opi liikuttamaan iskiashermoa ja poistamaan säteilykipu pakarasta ja reidestä.",
    categoryId: "tule-vaivat",
    duration: "15:20",
    publishedAt: "2024-06-05",
    thumbnailUrl: "/hero-bg.jpg",
    isShort: false,
  },
  {
    id: "polven-nivelrikko-harjoitteet",
    youtubeId: "QW76j-RlQrw",
    title: "Polven ja lonkan nivelrikko — Kivuton liikkuminen ja vahvistus",
    promiseDescription: "Lisää nivelvoitelua ja vahvista reisimuskulatuuria ilman rasituskipua.",
    categoryId: "tule-vaivat",
    duration: "21:00",
    publishedAt: "2024-06-18",
    thumbnailUrl: "/janne-sakkinen.jpg",
    isShort: false,
  },
];
