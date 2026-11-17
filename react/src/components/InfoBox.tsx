import type { ReactNode } from "react";

type Props = {
  en: string;
  title: string;
  children: ReactNode; // 説明文
  items: { label: string; value: string }[];
};

/** 量り売り・テイクアウトなどの案内ボックス */
export default function InfoBox({ en, title, children, items }: Props) {
  return (
    <section className="section buy">
      <div className="container">
        <div className="info-box reveal">
          <div>
            <p className="section__en">{en}</p>
            <h2 className="section__title">{title}</h2>
            <p>{children}</p>
          </div>
          <ul className="info-box__list">
            {items.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
