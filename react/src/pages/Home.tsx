import { Link } from "react-router";
import MenuTabs from "../components/MenuTabs";
import PageLink from "../components/PageLink";
import ContactForm from "../components/ContactForm";
import { gallery, news, shopInfo } from "../data/menu";
import { beans } from "../data/beans";
import { sweets } from "../data/sweets";
import { dotDate, imagePath } from "../utils";

export default function Home() {
  return (
    <>
      {/* React 19 では <title> をコンポーネントの中に書ける */}
      <title>Komorebi Coffee | 木漏れ日のような、やさしい一杯を。</title>

      {/* ===== ヒーロー ===== */}
      <section className="hero">
        <div className="hero__leaves" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="hero__content">
          <p className="hero__en">Specialty Coffee &amp; Bake</p>
          <h1 className="hero__title">木漏れ日のような、<br />やさしい一杯を。</h1>
          <p className="hero__lead">
            自家焙煎のコーヒーと、毎朝焼き上げる焼き菓子。<br />
            窓辺の光とともに、ゆっくりとした時間をどうぞ。
          </p>
          <div className="hero__buttons">
            <Link to="/#menu" className="btn btn--primary">メニューを見る</Link>
            <Link to="/#access" className="btn btn--ghost">アクセス</Link>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="cup">
            <div className="cup__steam"><span></span><span></span><span></span></div>
            <div className="cup__body"><div className="cup__coffee"></div></div>
            <div className="cup__handle"></div>
            <div className="cup__saucer"></div>
          </div>
        </div>
        <Link to="/#concept" className="hero__scroll" aria-label="下へスクロール">Scroll</Link>
      </section>

      {/* ===== コンセプト ===== */}
      <section className="section concept" id="concept">
        <div className="container concept__grid">
          <div className="concept__text reveal">
            <p className="section__en">Concept</p>
            <h2 className="section__title">一杯のコーヒーで、<br />一日を少しやさしく。</h2>
            <p>Komorebi Coffee は、住宅街の角にある小さなカフェです。世界各地の農園から届く生豆を、店内の焙煎機で少量ずつ焼き上げています。</p>
            <p>豆の個性を引き出すため、一杯ずつハンドドリップで。コーヒーに合う焼き菓子も、毎朝キッチンで手づくりしています。</p>
            <ul className="concept__points">
              <li><strong>自家焙煎</strong><span>週2回、少量ずつ焙煎</span></li>
              <li><strong>ハンドドリップ</strong><span>注文ごとに一杯ずつ</span></li>
              <li><strong>手づくり菓子</strong><span>国産小麦と季節の果物</span></li>
            </ul>
          </div>
          <div className="concept__image reveal" aria-hidden="true">
            <div className="art art--roaster">
              <div className="art__sun"></div>
              <div className="art__window"></div>
              <div className="art__plant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== メニュー ===== */}
      <section className="section menu" id="menu">
        <div className="container">
          <div className="section__head reveal">
            <p className="section__en">Menu</p>
            <h2 className="section__title">メニュー</h2>
            <p className="section__desc">表示価格はすべて税込です。季節により内容が変わることがあります。</p>
          </div>

          <MenuTabs />

          {/* 件数はデータの数から自動で計算される */}
          <div className="page-links">
            <PageLink
              to="/coffee"
              en="Coffee Beans"
              title="コーヒー豆の種類を見る"
              text={`産地・焙煎度・味の特徴を ${beans.length} 種類紹介`}
            />
            <PageLink
              to="/sweets"
              en="Homemade Sweets"
              title="お菓子のページを見る"
              text={`ケーキ・焼き菓子・季節限定の ${sweets.length} 品`}
              variant="sweets"
            />
          </div>
        </div>
      </section>

      {/* ===== ギャラリー ===== */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="section__head reveal">
            <p className="section__en">Gallery</p>
            <h2 className="section__title">店内の様子</h2>
          </div>
          <div className="gallery__grid">
            {gallery.map((item) => (
              <figure key={item.image} className={`gallery__item reveal${item.large ? " gallery__item--large" : ""}`}>
                <img src={imagePath(item.image)} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== お知らせ ===== */}
      <section className="section news" id="news">
        <div className="container news__inner">
          <div className="section__head section__head--left reveal">
            <p className="section__en">News</p>
            <h2 className="section__title">お知らせ</h2>
          </div>
          <ul className="news__list reveal">
            {news.map((item) => (
              <li key={item.date + item.text}>
                <time dateTime={item.date}>{dotDate(item.date)}</time>
                <span className="news__cat">{item.category}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== アクセス ===== */}
      <section className="section access" id="access">
        <div className="container access__grid">
          <div className="reveal">
            <p className="section__en">Access</p>
            <h2 className="section__title">店舗情報</h2>
            <dl className="info">
              {shopInfo.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="note">※ 住所・電話番号は架空のものです。</p>
          </div>
          <figure className="map reveal">
            <img
              src={imagePath("map.svg")}
              alt="○○駅東口から、けやき通りを渡って徒歩5分の場所にある店舗の地図（イメージ）"
              width={500}
              height={500}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ===== お問い合わせ ===== */}
      <section className="section contact" id="contact">
        <div className="container container--narrow">
          <div className="section__head reveal">
            <p className="section__en">Contact</p>
            <h2 className="section__title">お問い合わせ</h2>
            <p className="section__desc">貸切・イベント・豆の卸売りなど、お気軽にご相談ください。</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
