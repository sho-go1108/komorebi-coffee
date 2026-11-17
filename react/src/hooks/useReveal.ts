import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * class="reveal" の要素が画面に入ったら is-visible を付けて、ふわっと表示するフック
 * ページが変わるたびに、新しいページの要素を監視し直す
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal:not(.is-visible)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect(); // ページを離れたら監視をやめる
  }, [pathname]);
}
