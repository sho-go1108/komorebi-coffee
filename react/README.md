# Komorebi Coffee（React + TypeScript 版）

HTML/CSS/JavaScript で作った [Komorebi Coffee](../README.md) を、**React + TypeScript** で作り直したバージョンです。
見た目と機能は HTML 版と同じで、中身の作り方を変えています。

## 使用技術

- React 19
- TypeScript
- React Router（ページの切り替え）
- Vite（開発サーバー・ビルド）

## HTML 版から変えたこと

| | HTML 版 | React 版 |
|---|---|---|
| ヘッダー・フッター | 3 つの HTML ファイルにコピー | `Header` / `Footer` コンポーネントを 1 つ作って共通化 |
| コーヒー豆・お菓子のカード | HTML に 8 回ずつ手書き | データ（`src/data/`）を `map()` で回して表示 |
| 絞り込み | JS で表示・非表示を手作業で切り替え | `useState` で選択中の値を持つだけで自動で切り替わる（`useFilter` フック） |
| ページの移動 | 普通のリンク（毎回ページを読み込み直す） | React Router で、読み込み直さずに切り替え |
| データの間違い | 気づきにくい | TypeScript の型（`src/types.ts`）でチェック |

例えば、コーヒー豆を 1 種類増やすときは `src/data/beans.ts` に 1 件追加するだけで、カード・絞り込み・件数・トップページの「○種類紹介」がすべて自動で更新されます。

## フォルダ構成

```
react/
├── index.html
├── public/images/        … イラスト（HTML 版と同じもの）
└── src/
    ├── main.tsx          … 入口。URL とページの対応（ルーティング）
    ├── types.ts          … データの型
    ├── utils.ts          … 価格の表示などの小さな関数
    ├── data/             … メニュー・コーヒー豆・お菓子のデータ
    ├── hooks/            … 自作フック（絞り込み・スクロール・フェードイン）
    ├── components/       … 部品（Header, BeanCard, SweetCard, FilterButtons など）
    ├── pages/            … ページ（Home, Coffee, Sweets, NotFound）
    └── styles/style.css  … スタイル（HTML 版とほぼ同じ）
```

## ローカルでの確認方法

```bash
cd react
pnpm install     # 初回のみ
pnpm run dev     # http://localhost:5173 がブラウザで開きます
```

| コマンド | 内容 |
|---|---|
| `pnpm run dev` | 開発サーバーを起動する |
| `pnpm run typecheck` | TypeScript の型チェックだけを行う |
| `pnpm run build` | 公開用のファイルを `dist/` に作る |
| `pnpm run preview` | `build` で作ったファイルをローカルで確認する |
