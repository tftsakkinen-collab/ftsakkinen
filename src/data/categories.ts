export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "purenta-tmd",
    name: "Leukanivel & Purentaelimistö (TMD)",
    description: "Purentalihasten kireys, leukanivelen naksahdus, bruksismi ja kasvojen kiputilat.",
  },
  {
    id: "niska-huimaus",
    name: "Niska- & Niskahuimaus",
    description: "Yläniskan patomekaniikka, niskahuimaus, epävarma olo ja tensiopäänsärky.",
  },
  {
    id: "ergonomia",
    name: "Ergonomia & Työhyvinvointi",
    description: "Suun terveydenhuollon ja etätyön ergonomia, taukojumpat ja asennonhallinta.",
  },
  {
    id: "tule-vaivat",
    name: "Tuki- ja Liikuntaelimistö",
    description: "Iskias, selkäkivut, olkapään ahtaus, polven ja lonkan nivelrikko.",
  },
];
