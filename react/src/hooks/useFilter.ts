import { useMemo, useState } from "react";

/**
 * 一覧を絞り込むためのフック（コーヒー豆にもお菓子にも使える）
 *
 * @param items          絞り込む前の一覧
 * @param getCategories  1 件ごとのカテゴリーを取り出す関数
 */
export function useFilter<Item, Category extends string>(
  items: Item[],
  getCategories: (item: Item) => Category[]
) {
  const [selected, setSelected] = useState<Category | "all">("all");

  // selected か items が変わったときだけ計算し直す
  const filtered = useMemo(
    () => (selected === "all" ? items : items.filter((item) => getCategories(item).includes(selected))),
    [items, selected, getCategories]
  );

  return { selected, setSelected, filtered };
}
