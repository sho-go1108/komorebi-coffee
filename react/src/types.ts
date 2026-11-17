// =========================================================
// サイト全体で使うデータの「型」
// 型を決めておくと、データの書き間違いを TypeScript が教えてくれる
// =========================================================

/** 焙煎度（絞り込みに使う値） */
export type Roast = "light" | "medium" | "dark";

/** 1 〜 5 の段階評価 */
export type Level = 1 | 2 | 3 | 4 | 5;

/** トップページのメニュー 1 品 */
export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tag?: string; // 「浅煎り」「数量限定」など（なくてもよい）
};

/** トップページのメニューのタブ 1 つ分 */
export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

/** コーヒー豆 */
export type Bean = {
  id: string;
  name: string;
  origin: string;
  roastLabel: string; // 表示用（「中深煎り」など）
  roasts: Roast[]; // 絞り込み用（中深煎りは medium と dark の両方）
  badge?: { label: string; variant?: "new" };
  description: string;
  notes: string[];
  taste: { acidity: Level; bitterness: Level; body: Level };
  cupPrice: number;
  beansPrice: number; // 100g あたり
};

/** お菓子の種類（絞り込みに使う値） */
export type SweetCategory = "cake" | "baked" | "seasonal";

/** お菓子 */
export type Sweet = {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: SweetCategory[];
  badge?: { label: string; variant?: "popular" | "takeout" };
  pairingBeanId: Bean["id"]; // 合わせたいコーヒー（Bean の id）
  price: number;
};

/** お知らせ */
export type News = {
  date: string; // "2026-11-10" の形式
  category: string;
  text: string;
};

/** 絞り込みボタン 1 つ分 */
export type FilterOption<T extends string> = {
  value: T | "all";
  label: string;
};
