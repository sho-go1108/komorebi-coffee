import { useEffect, useState } from "react";

/** 下にスクロールすると出てくる「ページの先頭へ」ボタン */
export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${isVisible ? " is-visible" : ""}`}
      aria-label="ページの先頭へ"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      ↑
    </button>
  );
}
