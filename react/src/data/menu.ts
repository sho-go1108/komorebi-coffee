import type { MenuCategory, News } from "../types";

// トップページのメニュー（タブごと）
export const menu: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      { name: "Komorebi ブレンド", description: "ナッツとチョコのような甘み。当店の定番。", price: 550 },
      { name: "エチオピア イルガチェフェ", tag: "浅煎り", description: "レモンティーのような華やかな香り。", price: 650 },
      { name: "グアテマラ アンティグア", tag: "中煎り", description: "キャラメルの甘さとやわらかな酸味。", price: 600 },
      { name: "マンデリン", tag: "深煎り", description: "力強いコクとハーブのような余韻。", price: 600 },
      { name: "カフェラテ", description: "エスプレッソと北海道産ミルク。オーツミルクにも変更可（+¥50）。", price: 600 },
      { name: "水出しアイスコーヒー", description: "12時間かけて抽出した、すっきりとした一杯。", price: 600 },
    ],
  },
  {
    id: "drink",
    label: "Drink",
    items: [
      { name: "ほうじ茶ラテ", description: "京都の焙じ茶を使った、香ばしいラテ。", price: 600 },
      { name: "自家製レモネード", description: "国産レモンを蜂蜜で漬け込みました。", price: 580 },
      { name: "季節のフルーツソーダ", description: "旬の果物でつくるシロップのソーダ割り。", price: 650 },
      { name: "オーガニック紅茶", description: "アールグレイ / ダージリン / カモミール", price: 550 },
    ],
  },
  {
    id: "food",
    label: "Food & Sweets",
    items: [
      { name: "ベイクドチーズケーキ", description: "しっとり濃厚。深煎りコーヒーと好相性。", price: 550 },
      { name: "季節のフルーツタルト", tag: "数量限定", description: "旬の果物をたっぷりのせた、サクサクのタルト。", price: 680 },
      { name: "スコーン（2個）", description: "プレーン・紅茶。クロテッドクリームとジャム添え。", price: 520 },
      { name: "本日のサンドイッチ", description: "自家製パンでつくる、日替わりのサンドイッチ。", price: 850 },
      { name: "モーニングセット", tag: "8:00–11:00", description: "トースト・ゆで卵・サラダ＋お好きなドリンク。", price: 900 },
    ],
  },
];

export const news: News[] = [
  { date: "2026-11-10", category: "Menu", text: "冬季限定「ジンジャーシナモンラテ」の提供を始めました。" },
  { date: "2026-10-28", category: "Event", text: "11月23日（月・祝）にハンドドリップ教室を開催します。" },
  { date: "2026-10-01", category: "Beans", text: "新しい豆「コロンビア ウィラ」が入荷しました。" },
  { date: "2026-09-15", category: "Info", text: "年末年始の営業日についてのお知らせ。" },
];

export const gallery = [
  { image: "gallery-latte.svg", alt: "チューリップのラテアートを描いたカフェラテ", caption: "ラテアートも一杯ずつ丁寧に", large: true },
  { image: "gallery-beans.svg", alt: "スクープに盛られた焙煎したてのコーヒー豆", caption: "焙煎したての豆" },
  { image: "gallery-cake.svg", alt: "お皿にのったベイクドチーズケーキ", caption: "手づくりの焼き菓子" },
  { image: "gallery-window.svg", alt: "光が差し込む窓辺のテーブル席", caption: "光が差し込む窓辺の席" },
  { image: "gallery-drip.svg", alt: "ケトルでお湯を注ぐハンドドリップ", caption: "ハンドドリップ" },
];

export const shopInfo = [
  { label: "店名", value: "Komorebi Coffee（コモレビ コーヒー）" },
  { label: "住所", value: "〒000-0000 東京都○○区△△ 1-2-3" },
  { label: "アクセス", value: "○○駅 東口から徒歩5分" },
  { label: "営業時間", value: "8:00 – 18:00（L.O. 17:30）" },
  { label: "定休日", value: "毎週水曜日・第3木曜日" },
  { label: "席数", value: "18席（テラス4席）／全席禁煙" },
];
