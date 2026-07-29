export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "kaikki",
    name: "Kaikki videot",
    description: "Kaikki julkaistut fysioterapiavideot ja ohjeet.",
  },
  {
    id: "purenta-tmd",
    name: "Leukanivel & Purentaelimistö (TMD)",
    description: "Purentalihasten kireys, leukanivelen naksahdus, bruksismi ja kasvojen kiputilat.",
  },
  {
    id: "ergonomia",
    name: "Ergonomia & Työhyvinvointi",
    description: "Suun terveydenhuollon ja etätyön ergonomia, taukojumpat ja asennonhallinta.",
  },
  {
    id: "tule-vaivat",
    name: "Tuki- ja Liikuntaelimistö",
    description: "Tulehdus, niska-hartiaseutu, selkäkivut, olkapään ahtaus, polvi ja lonkka.",
  },
];
