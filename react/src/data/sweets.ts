import type { FilterOption, Sweet, SweetCategory } from "../types";

// お菓子のデータ。image は public/images/ の中のファイル名
export const sweets: Sweet[] = [
  {
    id: "montblanc",
    name: "和栗のモンブラン",
    description:
      "熊本県産の和栗をたっぷり使った、甘さ控えめのモンブラン。中にはサクサクのメレンゲが入っています。",
    image: "sweet-montblanc.svg",
    categories: ["seasonal", "cake"],
    badge: { label: "11月限定" },
    pairingBeanId: "komorebi-blend",
    price: 720,
  },
  {
    id: "tart",
    name: "季節のフルーツタルト",
    description: "今の時期はいちじくと洋梨。カスタードとアーモンドクリームの 2 層仕立てです。",
    image: "sweet-tart.svg",
    categories: ["seasonal", "cake"],
    badge: { label: "数量限定" },
    pairingBeanId: "ethiopia",
    price: 680,
  },
  {
    id: "cheesecake",
    name: "ベイクドチーズケーキ",
    description:
      "クリームチーズを贅沢に使った、しっとり濃厚な一品。底のザクザクしたクッキー生地がアクセント。",
    image: "sweet-cheesecake.svg",
    categories: ["cake"],
    badge: { label: "人気 No.1", variant: "popular" },
    pairingBeanId: "mandheling",
    price: 550,
  },
  {
    id: "chocolat",
    name: "ガトーショコラ",
    description: "カカオ 70% のチョコレートで焼いた、ほろ苦い大人の味。軽くホイップした生クリームを添えて。",
    image: "sweet-chocolat.svg",
    categories: ["cake"],
    pairingBeanId: "guatemala",
    price: 580,
  },
  {
    id: "pudding",
    name: "昔ながらの固めプリン",
    description: "卵の味がしっかりした、固めの蒸し焼きプリン。ほろ苦いカラメルソースが決め手です。",
    image: "sweet-pudding.svg",
    categories: ["cake"],
    pairingBeanId: "brazil",
    price: 480,
  },
  {
    id: "scone",
    name: "スコーン（2個）",
    description:
      "外はサクッ、中はふんわり。プレーンと紅茶の 2 種類に、クロテッドクリームとジャムを添えて。",
    image: "sweet-scone.svg",
    categories: ["baked"],
    pairingBeanId: "komorebi-blend",
    price: 520,
  },
  {
    id: "financier",
    name: "焦がしバターのフィナンシェ",
    description: "しっかり焦がしたバターとアーモンドの香ばしさ。手みやげにも人気です。",
    image: "sweet-financier.svg",
    categories: ["baked"],
    badge: { label: "持ち帰りOK", variant: "takeout" },
    pairingBeanId: "colombia",
    price: 280,
  },
  {
    id: "cookie",
    name: "自家製クッキー（3枚）",
    description: "チョコチップ・くるみ・コーヒーの 3 種類。コーヒー味には当店の豆を使っています。",
    image: "sweet-cookie.svg",
    categories: ["baked"],
    badge: { label: "持ち帰りOK", variant: "takeout" },
    pairingBeanId: "brazil",
    price: 380,
  },
];

export const sweetFilters: FilterOption<SweetCategory>[] = [
  { value: "all", label: "All" },
  { value: "cake", label: "ケーキ" },
  { value: "baked", label: "焼き菓子" },
  { value: "seasonal", label: "季節限定" },
];
