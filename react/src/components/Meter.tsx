import type { CSSProperties } from "react";
import type { Level } from "../types";

/** 5 段階のメーター（色の付き方は CSS 変数 --v で決まる） */
export default function Meter({ value }: { value: Level }) {
  return (
    <span
      className="meter"
      role="img"
      aria-label={`5段階中${value}`}
      style={{ "--v": value } as CSSProperties}
    />
  );
}
