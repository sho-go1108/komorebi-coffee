import type { Bean, FilterOption, Roast } from "../types";

// コーヒー豆のデータ。豆を増やすときは、ここに 1 件追加するだけでよい
export const beans: Bean[] = [
  {
    id: "komorebi-blend",
    name: "Komorebi ブレンド",
    origin: "Blend",
    roastLabel: "中深煎り",
    roasts: ["medium", "dark"],
    badge: { label: "定番" },
    description:
      "ブラジルとコロンビアをベースに、エチオピアで香りを添えた当店の看板ブレンド。毎日飲んでも飽きない味です。",
    notes: ["ナッツ", "ミルクチョコ", "キャラメル"],
    taste: { acidity: 2, bitterness: 3, body: 3 },
    cupPrice: 550,
    beansPrice: 900,
  },
  {
    id: "ethiopia",
    name: "エチオピア イルガチェフェ",
    origin: "Ethiopia",
    roastLabel: "浅煎り",
    roasts: ["light"],
    badge: { label: "人気" },
    description:
      "標高 2,000m の小規模農家が育てた豆。レモンティーのような爽やかさと、花のような香りが広がります。",
    notes: ["レモン", "ジャスミン", "紅茶"],
    taste: { acidity: 5, bitterness: 1, body: 2 },
    cupPrice: 650,
    beansPrice: 1200,
  },
  {
    id: "kenya",
    name: "ケニア ニエリ",
    origin: "Kenya",
    roastLabel: "浅煎り",
    roasts: ["light"],
    description:
      "ジューシーで力強い酸味が特徴。冷めるにつれて甘みが増し、ベリーのような余韻が続きます。",
    notes: ["カシス", "ブラッドオレンジ", "黒糖"],
    taste: { acidity: 5, bitterness: 2, body: 3 },
    cupPrice: 700,
    beansPrice: 1300,
  },
  {
    id: "colombia",
    name: "コロンビア ウィラ",
    origin: "Colombia",
    roastLabel: "中煎り",
    roasts: ["medium"],
    badge: { label: "New", variant: "new" },
    description:
      "10月に入荷した新しい豆。赤いリンゴのような甘酸っぱさと、なめらかな口当たりが魅力です。",
    notes: ["赤リンゴ", "ブラウンシュガー", "はちみつ"],
    taste: { acidity: 3, bitterness: 2, body: 3 },
    cupPrice: 600,
    beansPrice: 1000,
  },
  {
    id: "guatemala",
    name: "グアテマラ アンティグア",
    origin: "Guatemala",
    roastLabel: "中煎り",
    roasts: ["medium"],
    description:
      "火山灰の土壌で育った豆。キャラメルのような甘さと、オレンジのようなやわらかい酸味があります。",
    notes: ["キャラメル", "カカオ", "オレンジ"],
    taste: { acidity: 3, bitterness: 3, body: 3 },
    cupPrice: 600,
    beansPrice: 1000,
  },
  {
    id: "brazil",
    name: "ブラジル セラード",
    origin: "Brazil",
    roastLabel: "中深煎り",
    roasts: ["medium", "dark"],
    description:
      "酸味が少なく、香ばしくてまろやか。カフェラテにしてもおいしい、やさしい味わいです。",
    notes: ["ピーナッツ", "ミルクチョコ", "トースト"],
    taste: { acidity: 1, bitterness: 3, body: 3 },
    cupPrice: 550,
    beansPrice: 850,
  },
  {
    id: "mandheling",
    name: "マンデリン",
    origin: "Indonesia",
    roastLabel: "深煎り",
    roasts: ["dark"],
    description:
      "スマトラ島の豆を深く焙煎。重厚なコクとハーブのような独特の余韻は、チーズケーキと相性抜群です。",
    notes: ["ダークチョコ", "ハーブ", "スパイス"],
    taste: { acidity: 1, bitterness: 5, body: 5 },
    cupPrice: 600,
    beansPrice: 1000,
  },
  {
    id: "decaf",
    name: "デカフェ コロンビア",
    origin: "Colombia / Decaf",
    roastLabel: "中煎り",
    roasts: ["medium"],
    badge: { label: "カフェインレス" },
    description:
      "水だけでカフェインを 99.9% 取り除いた豆。夜や妊娠中の方にも、おいしいコーヒーを楽しんでほしくて。",
    notes: ["ミルクティー", "アーモンド", "はちみつ"],
    taste: { acidity: 2, bitterness: 2, body: 3 },
    cupPrice: 600,
    beansPrice: 1100,
  },
];

export const roastFilters: FilterOption<Roast>[] = [
  { value: "all", label: "All" },
  { value: "light", label: "浅煎り" },
  { value: "medium", label: "中煎り" },
  { value: "dark", label: "深煎り" },
];

/** id から豆を探す（お菓子ページの「合わせたいコーヒー」で使う） */
export const findBean = (id: string) => beans.find((bean) => bean.id === id);
