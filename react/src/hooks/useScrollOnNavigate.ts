import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

/**
 * ページを移動したときのスクロール位置を調整するフック
 * - URL に #menu などが付いていれば、その場所までスクロール
 *   （同じページ内ならなめらかに、別のページからなら一瞬で）
 * - 付いていなければ、ページの一番上へ
 */
export function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const isSamePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (hash) {
      // 新しいページが描画されるのを待ってからスクロールする
      requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: isSamePage ? "smooth" : "instant" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
}
