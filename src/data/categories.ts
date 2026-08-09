export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "kaikki",
    name: "Kaikki 70 videota",
    description: "Kaikki OMT-fysioterapeutti Janne Säkkisen julkaisemat fysioterapiavideot.",
  },
  {
    id: "purenta-tmd",
    name: "Purenta & TMD",
    description: "Purentalihasten kireys, leukanivelen naksahdus, bruksismi ja kasvojen kiputilat.",
  },
  {
    id: "ergonomia",
    name: "Ergonomia",
    description: "Suun terveydenhuollon ja etätyön ergonomia, taukojumpat ja asennonhallinta.",
  },
  {
    id: "tule-vaivat",
    name: "TULE-vaivat & Lantionpohja",
    description: "Lantionpohjan fysioterapia, virtsankarkailu, niska-hartiaseutu, selkäkivut, olkapään ahtaus, polvi ja lonkka.",
  },
];
