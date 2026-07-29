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
    id: "iskias-vapauta-hermo",
    youtubeId: "dQw4w9WgXcQ", // YouTube embed ID placeholder
    title: "Vapauta iskiashermo puristuksesta kotikonstein",
    promiseDescription: "Opi 3 tehokasta liikettä, jotka lievittävät säteilykipua pakarassa ja jalassa välittömästi.",
    categoryId: "selka-iskias",
    duration: "14:20",
    publishedAt: "2024-02-15",
  },
  {
    id: "polven-nivelrikko-jumppa",
    youtubeId: "dQw4w9WgXcQ",
    title: "Polven nivelrikko: 4 liikettä jotka vähentävät kipua",
    promiseDescription: "Vahvista polvea ympäröiviä lihaksia ja lisää nivelen liukuvuutta ilman rasituskipua.",
    categoryId: "polvi",
    duration: "18:45",
    publishedAt: "2024-03-10",
  },
  {
    id: "niskan-jaykkyys-tensaatio",
    youtubeId: "dQw4w9WgXcQ",
    title: "Pääse eroon niskan jumituksesta ja tensiopäänsärystä",
    promiseDescription: "Avaa yläniskan tiukkuus ja palauta pään luonnollinen kääntyvyys turvallisilla mobilisoinneilla.",
    categoryId: "niska",
    duration: "12:10",
    publishedAt: "2024-01-22",
  },
  {
    id: "olkapaa-pinnetila-kuntoutus",
    youtubeId: "dQw4w9WgXcQ",
    title: "Olkapään ahtaus / pinnetila — Näin avaat ahtaan olkanivelen",
    promiseDescription: "Vähennä olkapään ahtautta ja nosta käsi kipuvapaasti ylös näillä kohdennetuilla harjoitteilla.",
    categoryId: "olkapaa",
    duration: "16:05",
    publishedAt: "2024-04-05",
  },
  {
    id: "lonkan-nivelrikko-liikkeet",
    youtubeId: "dQw4w9WgXcQ",
    title: "Lonkan nivelrikko ja liikerajoitus: Palauta ontumaton kävely",
    promiseDescription: "Paranna lonkkanivelen liikkuvuutta ja lievitä liikekipu kävellessä ja portaissa.",
    categoryId: "lonkka",
    duration: "15:30",
    publishedAt: "2024-05-01",
  },
  {
    id: "plantaarifaskiitti-jalkapohja",
    youtubeId: "dQw4w9WgXcQ",
    title: "Plantaarifaskiitti: Eroon kantapääkivusta aamupistoissa",
    promiseDescription: "Aktivoi jalkapohjan kalvojänne ja vahvista jalkaterää askelluksen helpottamiseksi.",
    categoryId: "jalkatera",
    duration: "11:50",
    publishedAt: "2024-05-18",
  },
  {
    id: "tulehduksen-sammuttaminen-ravinnolla",
    youtubeId: "dQw4w9WgXcQ",
    title: "Sammuta kehon hiljainen tulehdus ravinnon ja elintapojen avulla",
    promiseDescription: "Ymmärrä nivel- ja lihaskivun yhteys ravitsemukseen ja aloita tulehdusta rauhoittava ruokavalio.",
    categoryId: "ravinto-tulehdus",
    duration: "21:15",
    publishedAt: "2024-06-02",
  },
];
