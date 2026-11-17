import type { FilterOption } from "../types";

type Props<T extends string> = {
  label: string; // 読み上げ用のグループ名
  options: FilterOption<T>[];
  selected: T | "all";
  onSelect: (value: T | "all") => void;
  count: number;
};

/** 絞り込みボタンの列と、表示件数 */
export default function FilterButtons<T extends string>({ label, options, selected, onSelect, count }: Props<T>) {
  return (
    <>
      <div className="filter reveal" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`tabs__btn${option.value === selected ? " is-active" : ""}`}
            aria-pressed={option.value === selected}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="filter__count" aria-live="polite">
        {count} 種類
      </p>
    </>
  );
}
