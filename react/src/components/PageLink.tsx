import { Link } from "react-router";

type Props = {
  to: string;
  en: string;
  title: string;
  text?: string;
  variant?: "sweets" | "wide";
};

/** 別のページへ移動する大きなボタン */
export default function PageLink({ to, en, title, text, variant }: Props) {
  return (
    <Link to={to} className={`page-link reveal${variant ? ` page-link--${variant}` : ""}`} viewTransition>
      <span className="page-link__en">{en}</span>
      <span className="page-link__title">{title}</span>
      {text && <span className="page-link__text">{text}</span>}
      <span className="page-link__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
