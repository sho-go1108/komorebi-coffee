import PageHero from "../components/PageHero";
import FilterButtons from "../components/FilterButtons";
import BeanCard from "../components/BeanCard";
import InfoBox from "../components/InfoBox";
import PageLink from "../components/PageLink";
import { beans, roastFilters } from "../data/beans";
import { useFilter } from "../hooks/useFilter";
import type { Bean } from "../types";

const roastGuide = [
  { variant: "light", title: "浅煎り", text: "果実のような明るい酸味と華やかな香り。紅茶のように軽やか。" },
  { variant: "medium", title: "中煎り", text: "酸味と甘み、苦味のバランスが良い。はじめての方におすすめ。" },
  { variant: "dark", title: "深煎り", text: "しっかりした苦味とコク。ミルクや甘いお菓子とよく合います。" },
];

// コンポーネントの外で定義しておくと、描画のたびに作り直されない
const getRoasts = (bean: Bean) => bean.roasts;

export default function Coffee() {
  const { selected, setSelected, filtered } = useFilter(beans, getRoasts);

  return (
    <>
      <title>コーヒー豆の種類 | Komorebi Coffee</title>

      <PageHero en="Our Beans" title="コーヒー豆の種類" breadcrumb="Coffee" variant="coffee">
        世界各地の農園から届いた生豆を、店内で少量ずつ焙煎しています。<br />
        すべての豆は店頭で一杯ずつ味わえるほか、100g から量り売りもしています。
      </PageHero>

      {/* ===== 焙煎度ガイド ===== */}
      <section className="section roast">
        <div className="container">
          <div className="section__head reveal">
            <p className="section__en">Roast Guide</p>
            <h2 className="section__title">焙煎度で選ぶ</h2>
            <p className="section__desc">焙煎が浅いほどフルーティーな酸味が、深いほど苦味とコクが強くなります。</p>
          </div>
          <ol className="roast__scale reveal">
            {roastGuide.map((step) => (
              <li key={step.variant} className={`roast__step roast__step--${step.variant}`}>
                <span className="roast__bean" aria-hidden="true"></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 豆の一覧 ===== */}
      <section className="section beans" id="beans">
        <div className="container">
          <div className="section__head reveal">
            <p className="section__en">Line-up</p>
            <h2 className="section__title">豆のラインナップ</h2>
          </div>

          <FilterButtons
            label="焙煎度で絞り込む"
            options={roastFilters}
            selected={selected}
            onSelect={setSelected}
            count={filtered.length}
          />

          <ul className="bean-list">
            {filtered.map((bean) => (
              // key に selected を含めると、絞り込むたびにカードのアニメーションが再生される
              <BeanCard key={`${selected}-${bean.id}`} bean={bean} />
            ))}
          </ul>
        </div>
      </section>

      <InfoBox
        en="To Go"
        title="豆の量り売り"
        items={[
          { label: "100g", value: "約 7〜8 杯分" },
          { label: "200g", value: "100g の価格 ×2 から 5% オフ" },
          { label: "挽き方", value: "ペーパー／フレンチプレス／エスプレッソ" },
        ]}
      >
        すべての豆を 100g から販売しています。ご自宅の器具に合わせて挽いてお渡しします（豆のままも可）。
      </InfoBox>

      <section className="section next-page">
        <div className="container">
          <PageLink to="/sweets" en="Next — Sweets" title="コーヒーに合うお菓子を見る" variant="wide" />
        </div>
      </section>
    </>
  );
}
