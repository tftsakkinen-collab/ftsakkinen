export interface Program {
  id: string;
  name: string;
  promiseDescription: string;
  details: string[];
  pricePlaceholder: string;
  checkoutUrl: string;
  badge?: string;
  isPlaceholder?: boolean;
}

export const PROGRAMS: Program[] = [
  {
    id: "huimaus-niskasta",
    name: "Huimaus niskasta -ohjelma",
    promiseDescription: "Selvitä cervikogeenisen huimauksen syy ja korjaa niskaperäinen tasapainohäiriö ammattilaisen selkeällä itsetestaus- ja kuntoutusohjelmalla.",
    details: [
      "Täydellinen niska-huimaustestisto ja syiden kartoitus",
      "Vaiheittain etenevät täsmäliikkeet niska-hartiaseudulle",
      "Videomuotoiset tekniikkaohjeet ja liikesuoritukset",
      "Eroon epävarmasta olosta liikkumisessa",
    ],
    pricePlaceholder: "[PLACEHOLDER: Hinta 79 €]",
    checkoutUrl: "[PLACEHOLDER: PAYTRAIL_CHECKOUT_URL]",
    badge: "Suosittu verkkovalmennus",
  },
  {
    id: "polvi-lonkka-nivelrikko",
    name: "Polven ja lonkan nivelrikko -ohjelma",
    promiseDescription: "Lievitä nivelsärkyä, vahvista nivelten tukilihaksia ja palauta liikkumisen varmuus ilman jatkuvaa kipulääkitystä.",
    details: [
      "Turvallinen ja tutkittuun tietoon perustuva jumppa-ohjelma",
      "Nivelvoitelua lisäävät ja rustoa säästävät harjoitteet",
      "Soveltuu eri tasoisille nivelrikko-oireille",
      "Selkeät viikko-ohjelmat kotikuntoutukseen",
    ],
    pricePlaceholder: "[PLACEHOLDER: Hinta 89 €]",
    checkoutUrl: "[PLACEHOLDER: PAYTRAIL_CHECKOUT_URL]",
    badge: "Kliinisesti testattu",
  },
  {
    id: "tuleva-ohjelma",
    name: "Tuleva valmennusohjelma",
    promiseDescription: "Valmisteilla oleva uusi täsmäohjelma tuki- ja liikuntaelimistön suorituskyvyn palauttamiseen.",
    details: [
      "Syventävä uusi aihepiiri tuki- ja liikuntaelinvaivoihin",
      "Liity sähköpostilistalle kuullaksesi julkaisusta ensimmäisenä",
    ],
    pricePlaceholder: "[PLACEHOLDER: Tulossa pian]",
    checkoutUrl: "#",
    badge: "Tulossa",
    isPlaceholder: true,
  },
];
