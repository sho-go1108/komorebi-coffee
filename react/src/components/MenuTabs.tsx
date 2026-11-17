import { useRef, useState, type KeyboardEvent } from "react";
import { menu } from "../data/menu";
import { yen } from "../utils";

/** トップページのメニュー（タブで Coffee / Drink / Food を切り替え） */
export default function MenuTabs() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 左右の矢印キーでタブを移動する
  const onKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + menu.length) % menu.length;
    setActiveId(menu[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <div className="tabs reveal" role="tablist" aria-label="メニューカテゴリ">
        {menu.map((category, i) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              className={`tabs__btn${isActive ? " is-active" : ""}`}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(category.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {menu.map((category) => (
        <div
          key={category.id}
          className="menu__panel"
          id={`panel-${category.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${category.id}`}
          hidden={category.id !== activeId}
        >
          <ul className="menu__list">
            {category.items.map((item) => (
              <li className="menu__item" key={item.name}>
                <div>
                  <h3>
                    {item.name}
                    {item.tag && <em className="tag">{item.tag}</em>}
                  </h3>
                  <p>{item.description}</p>
                </div>
                <span className="menu__price">{yen(item.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
