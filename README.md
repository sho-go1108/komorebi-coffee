# Komorebi Coffee

架空のカフェ「Komorebi Coffee」の Web サイトです。ポートフォリオ用に制作しました。

## 概要

自家焙煎のスペシャルティコーヒーと手づくりの焼き菓子を出す、小さな街のカフェを想定した 1 ページ構成のサイトです。

## 使用技術

- HTML5
- CSS3（CSS Grid / Flexbox / カスタムプロパティ / アニメーション）
- JavaScript（フレームワークなし）
- Vite（ローカル開発サーバーとしてのみ使用）

## 主な機能・工夫した点

- **レスポンシブ対応**：PC・タブレット・スマホで見やすいレイアウト
- **スマホ用ハンバーガーメニュー**
- **メニューのタブ切り替え**（キーボードの左右キーでも操作可能）
- **スクロールに合わせたフェードイン**（Intersection Observer）
- **お問い合わせフォームの入力チェック**（デモのため実際には送信されません）
- **自作の SVG イラスト**（ギャラリー・地図）と CSS で描いたコーヒーカップ
- **アクセシビリティへの配慮**：aria 属性、`prefers-reduced-motion` 対応

## フォルダ構成

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── favicon.svg
    ├── gallery-*.svg   … ギャラリーのイラスト
    └── map.svg         … アクセスの地図
```

> ギャラリーの画像は `images/` に写真（.jpg など）を置き、`index.html` の `src` を書き換えると差し替えられます。

## ローカルでの確認方法

### pnpm（Vite 開発サーバー）

```bash
pnpm install   # 初回のみ
pnpm run dev   # http://localhost:5173 がブラウザで開きます
```

### VS Code の Live Server

1. 拡張機能「Live Server」をインストール（フォルダを開くと推奨が表示されます）
2. `index.html` を右クリック →「Open with Live Server」

## 備考

店名・住所・メニューなどはすべて架空のものです。
