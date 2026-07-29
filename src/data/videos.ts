export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  promiseDescription: string;
  categoryId: string;
  duration: string;
  publishedAt: string;
}

export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "leukanivelen-naksahdus-kuntoutus",
    youtubeId: "dQw4w9WgXcQ",
    title: "Leukanivelen naksahdus & lukkiutuminen — 3 vaihetta kuntoutukseen",
    promiseDescription: "Opi purentaelimistön ja leukanivelen täsmäliikkeet naksahduksen ja kireyden lievittämiseen.",
    categoryId: "purenta-tmd",
    duration: "18:30",
    publishedAt: "2024-03-15",
  },
  {
    id: "purentalihasten-koti-hieronta",
    youtubeId: "dQw4w9WgXcQ",
    title: "Purentalihasten (Masseter & Temporalis) faskiakäsittely ja koti-hieronta",
    promiseDescription: "Lievitä hampaiden narskuttelun (bruksismi) ja leuan puristamisen aiheuttamaa poskikipua.",
    categoryId: "purenta-tmd",
    duration: "14:15",
    publishedAt: "2024-04-10",
  },
  {
    id: "niskahuimaus-ylaniskan-kireys",
    youtubeId: "dQw4w9WgXcQ",
    title: "Yläniskan kireys ja niskahuimaus — Eroon epävarmasta olosta",
    promiseDescription: "Syvien niskan koukistajien vahvistaminen ja tasapainoaistimuksen palauttaminen OMT-ohjein.",
    categoryId: "niska-huimaus",
    duration: "19:10",
    publishedAt: "2024-02-20",
  },
  {
    id: "tensapaansarky-ylaniska-avaus",
    youtubeId: "dQw4w9WgXcQ",
    title: "Eroon jännityspäänsärystä: Yläniskan syvien lihasten vahvistaminen",
    promiseDescription: "Pääse eroon ohimolla ja takaraivolla jyskyttävästä jännityksestä turvallisilla mobilisoinneilla.",
    categoryId: "niska-huimaus",
    duration: "12:45",
    publishedAt: "2024-01-18",
  },
  {
    id: "suun-terveydenhuolto-ergonomia",
    youtubeId: "dQw4w9WgXcQ",
    title: "Fyysisen työkyvyn optimointi etätyössä ja suun terveydenhuollossa",
    promiseDescription: "Asennon hallinta ja ergonomiset korjausliikkeet valmistuville ja työelämässä oleville.",
    categoryId: "ergonomia",
    duration: "24:15",
    publishedAt: "2024-05-12",
  },
  {
    id: "niska-hartia-taukojumppa",
    youtubeId: "dQw4w9WgXcQ",
    title: "Niska-hartiaseudun jumit etätyössä: 5 minuutin täsmätaukojumppa",
    promiseDescription: "Nopea ja tehokas liikesarja työpäivän lomassa suoritettavaksi ilman välineitä.",
    categoryId: "ergonomia",
    duration: "08:30",
    publishedAt: "2024-05-28",
  },
  {
    id: "iskias-pakaran-kireys-vapauta",
    youtubeId: "dQw4w9WgXcQ",
    title: "Iskias ja pakaran kireys: Vapauta iskiashermo turvallisesti",
    promiseDescription: "Opi liikuttamaan iskiashermoa ja poistamaan säteilykipu pakarasta ja reidestä.",
    categoryId: "tule-vaivat",
    duration: "15:20",
    publishedAt: "2024-06-05",
  },
  {
    id: "polven-nivelrikko-harjoitteet",
    youtubeId: "dQw4w9WgXcQ",
    title: "Polven ja lonkan nivelrikko — Kivuton liikkuminen ja vahvistus",
    promiseDescription: "Lisää nivelvoitelua ja vahvista reisimuskulatuuria ilman rasituskipua.",
    categoryId: "tule-vaivat",
    duration: "21:00",
    publishedAt: "2024-06-18",
  },
];
