import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Logo from "./Logo";

// ナビの項目。to が "/#..." のものはトップページ内の場所へのリンク
const navItems = [
  { label: "Concept", to: "/#concept" },
  { label: "Menu", to: "/#menu" },
  { label: "Coffee", to: "/coffee", page: true },
  { label: "Sweets", to: "/sweets", page: true },
  { label: "Access", to: "/#access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // スクロールしたらヘッダーに背景を付ける
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページが変わったらスマホ用メニューを閉じる
  useEffect(() => setIsOpen(false), [location]);

  // メニューが開いている間は背景をスクロールさせない・Esc で閉じる
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className={`header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="header__inner">
        <Link to="/" className="logo" aria-label="Komorebi Coffee トップへ" viewTransition>
          <Logo />
          <span className="logo__text">Komorebi Coffee</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav${isOpen ? " is-open" : ""}`} id="nav">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.page ? (
                  // NavLink は今いるページのとき aria-current="page" を自動で付けてくれる
                  <NavLink to={item.to} viewTransition>
                    {item.label}
                  </NavLink>
                ) : (
                  <Link to={item.to} viewTransition>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/#contact" className="nav__cta" viewTransition>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
