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

// STRICTLY ONLY LONG-FORM YOUTUBE VIDEOS (ZERO SHORTS, ZERO 1-MIN VIDEOS)
export const FALLBACK_VIDEOS: Video[] = [
  {
    id: "fysioterapeutti-ruoka-kiputulehdus",
    youtubeId: "QW76j-RlQrw",
    title: "Fysioterapeutti: tämä ruoka pitää yllä kipua ja tulehdusta",
    promiseDescription: "Jos krooninen kipu ei parane hoidoista huolimatta, syynä voi olla piilevä krooninen tulehdus — ja se mitä syöt.",
    categoryId: "tule-vaivat",
    duration: "07:01",
    publishedAt: "2024-07-24",
    thumbnailUrl: "https://i2.ytimg.com/vi/QW76j-RlQrw/hqdefault.jpg",
    isShort: false,
  },
];
