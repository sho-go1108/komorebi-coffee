import type { Bean } from "../types";
import { yen } from "../utils";
import Meter from "./Meter";

// 焙煎度によってカード上部の色を変える
const headVariant = (bean: Bean) => {
  if (bean.roasts.length > 1) return "mediumdark";
  return bean.roasts[0];
};

export default function BeanCard({ bean }: { bean: Bean }) {
  return (
    <li className="bean-card is-filtered-in" id={bean.id}>
      <div className={`bean-card__head bean-card__head--${headVariant(bean)}`}>
        {bean.badge && (
          <span className={`bean-card__badge${bean.badge.variant ? ` bean-card__badge--${bean.badge.variant}` : ""}`}>
            {bean.badge.label}
          </span>
        )}
        <p className="bean-card__origin">{bean.origin}</p>
        <h3 className="bean-card__name">{bean.name}</h3>
        <span className="bean-card__roast">{bean.roastLabel}</span>
      </div>

      <div className="bean-card__body">
        <p className="bean-card__desc">{bean.description}</p>
        <ul className="notes">
          {bean.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <dl className="taste">
          <div><dt>酸味</dt><dd><Meter value={bean.taste.acidity} /></dd></div>
          <div><dt>苦味</dt><dd><Meter value={bean.taste.bitterness} /></dd></div>
          <div><dt>コク</dt><dd><Meter value={bean.taste.body} /></dd></div>
        </dl>
        <p className="bean-card__price">
          <span>1杯 {yen(bean.cupPrice)}</span>
          <span>豆 100g {yen(bean.beansPrice)}</span>
        </p>
      </div>
    </li>
  );
}
