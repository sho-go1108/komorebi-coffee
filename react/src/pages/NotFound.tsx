import { Link } from "react-router";

/** 存在しない URL を開いたときのページ */
export default function NotFound() {
  return (
    <>
      <title>ページが見つかりません | Komorebi Coffee</title>
      <section className="page-hero">
        <div className="container">
          <p className="section__en">404 Not Found</p>
          <h1 className="page-hero__title">ページが見つかりません</h1>
          <p className="page-hero__lead">お探しのページは移動または削除された可能性があります。</p>
          <p style={{ marginTop: 32 }}>
            <Link to="/" className="btn btn--primary" viewTransition>トップページへ戻る</Link>
          </p>
        </div>
      </section>
    </>
  );
}
