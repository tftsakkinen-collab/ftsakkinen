export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: "kaikki", name: "Kaikki videot", description: "Katso kaikki fysioterapiavideot" },
  { id: "niska", name: "Niska", description: "Niskan jäykkyys, päänsärky ja niskan kuntoutus" },
  { id: "olkapaa", name: "Olkapää", description: "Kiertäjäkalvosimen vaivat, pinnetilat ja olkakipu" },
  { id: "selka-iskias", name: "Selkä / Iskias", description: "Alaselkäkipu, iskiasoireet ja välilevyvaivat" },
  { id: "polvi", name: "Polvi", description: "Polvikipu, nivelrikko ja linjausvaivat" },
  { id: "lonkka", name: "Lonkka", description: "Lonkan nivelrikko, limapussin tulehdus ja liikerajoitteet" },
  { id: "jalkatera", name: "Jalkaterä", description: "Plantaarifaskiitti, vaivaisenluu ja jalkapohjan kipu" },
  { id: "ravinto-tulehdus", name: "Ravinto & tulehdus", description: "Tulehduksen sammuttaminen ravinnolla ja elintavoilla" },
];
