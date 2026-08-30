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
    id: "leukanivel-tasmakurssi-29",
    name: "Eroon jäykästä leuasta (17 min Täsmäopas)",
    promiseDescription: "Kattava ja käytännönläheinen 17 minuutin videokurssi & itsehoito-opas leuan kiputilojen ja jäykkyyden helpottamiseen kotikonstein.",
    details: [
      "Leukanivelen anatomia, toiminta ja ongelmien luokittelu",
      "Nivel- ja lihasperäisten ongelmien erotus ja hoito",
      "Suun sulkijalihakset: anatomia ja tutkiminen",
      "Täsmälliset venyttely- ja huoltoharjoitteet",
      "Käytännön hoito-ohjeet ja huomioitavat seikat kotihoitoon",
    ],
    pricePlaceholder: "29 €",
    checkoutUrl: "https://buy.stripe.com/fZufZhgsYeUe01k7vT0Ny01",
    badge: "Täsmävideokurssi",
    isPlaceholder: false,
  },
  {
    id: "leukanivel-purenta-tmd",
    name: "Purentaelimistö & TMD-verkkovalmennus",
    promiseDescription: "Täydellinen leukanivelen, purentalihasten ja kasvojen kiputilojen strukturoitu kotikuntoutusohjelma.",
    details: [
      "Täsmälliset itsetestaus- ja hierontaliikkeet purentalihaksille",
      "Leukanivelen liikeratoja ja naksumista korjaavat harjoitteet",
      "Päivä- ja yöpurentajännityksen purkumenetelmät",
      "Oulun yliopistolla opetetut kliiniset protokollat",
    ],
    pricePlaceholder: "Tulossa",
    checkoutUrl: "#",
    badge: "Valmisteilla",
    isPlaceholder: true,
  },
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
    pricePlaceholder: "Tulossa",
    checkoutUrl: "#",
    badge: "Valmisteilla",
    isPlaceholder: true,
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
    pricePlaceholder: "Tulossa",
    checkoutUrl: "#",
    badge: "Valmisteilla",
    isPlaceholder: true,
  },
];
