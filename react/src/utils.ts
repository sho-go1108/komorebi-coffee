/** 1200 → "¥1,200" */
export const yen = (price: number) => `¥${price.toLocaleString("ja-JP")}`;

/** "2026-11-10" → "2026.11.10" */
export const dotDate = (date: string) => date.replaceAll("-", ".");

/** public/images/ の画像のパス（公開先のサブフォルダにも対応） */
export const imagePath = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;
