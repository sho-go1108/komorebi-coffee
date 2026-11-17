import { Link } from "react-router";
import type { Sweet } from "../types";
import { findBean } from "../data/beans";
import { imagePath, yen } from "../utils";

// カテゴリーによって画像の背景色を変える
const imgVariant = (sweet: Sweet) => {
  if (sweet.categories.includes("seasonal")) return " sweet-card__img--seasonal";
  if (sweet.categories.includes("baked")) return " sweet-card__img--baked";
  return "";
};

export default function SweetCard({ sweet }: { sweet: Sweet }) {
  const bean = findBean(sweet.pairingBeanId);

  return (
    <li className="sweet-card is-filtered-in">
      <div className={`sweet-card__img${imgVariant(sweet)}`}>
        <img src={imagePath(sweet.image)} alt={sweet.name} width={320} height={240} loading="lazy" />
        {sweet.badge && (
          <span className={`sweet-card__badge${sweet.badge.variant ? ` sweet-card__badge--${sweet.badge.variant}` : ""}`}>
            {sweet.badge.label}
          </span>
        )}
      </div>

      <div className="sweet-card__body">
        <h3 className="sweet-card__name">{sweet.name}</h3>
        <p className="sweet-card__desc">{sweet.description}</p>
        {bean && (
          <p className="sweet-card__pair">
            合わせたいコーヒー
            {/* コーヒーページの、その豆のカードまで移動する */}
            <Link to={`/coffee#${bean.id}`} viewTransition>
              {bean.name}
            </Link>
          </p>
        )}
        <p className="sweet-card__price">{yen(sweet.price)}</p>
      </div>
    </li>
  );
}
