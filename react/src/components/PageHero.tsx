import type { ReactNode } from "react";
import { Link } from "react-router";

type Props = {
  en: string;
  title: string;
  breadcrumb: string;
  variant?: "coffee" | "sweets";
  children: ReactNode; // リード文
};

/** 下層ページの一番上（パンくずリスト・タイトル・リード文） */
export default function PageHero({ en, title, breadcrumb, variant, children }: Props) {
  return (
    <section className={`page-hero${variant ? ` page-hero--${variant}` : ""}`}>
      <div className="container">
        <nav className="breadcrumb" aria-label="パンくずリスト">
          <Link to="/" viewTransition>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <p className="section__en">{en}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{children}</p>
      </div>
    </section>
  );
}
