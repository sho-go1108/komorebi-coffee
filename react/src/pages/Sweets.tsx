import PageHero from "../components/PageHero";
import FilterButtons from "../components/FilterButtons";
import SweetCard from "../components/SweetCard";
import InfoBox from "../components/InfoBox";
import PageLink from "../components/PageLink";
import { sweetFilters, sweets } from "../data/sweets";
import { useFilter } from "../hooks/useFilter";
import type { Sweet } from "../types";

const getCategories = (sweet: Sweet) => sweet.categories;

export default function Sweets() {
  const { selected, setSelected, filtered } = useFilter(sweets, getCategories);

  return (
    <>
      <title>お菓子 | Komorebi Coffee</title>

      <PageHero en="Homemade Sweets" title="お菓子" breadcrumb="Sweets" variant="sweets">
        毎朝キッチンで焼き上げる、手づくりのお菓子。<br />
        国産小麦と旬の果物を使い、コーヒーに合う甘さに仕上げています。
      </PageHero>

      <section className="section sweets">
        <div className="container">
          <FilterButtons
            label="種類で絞り込む"
            options={sweetFilters}
            selected={selected}
            onSelect={setSelected}
            count={filtered.length}
          />

          <ul className="sweet-list">
            {filtered.map((sweet) => (
              <SweetCard key={`${selected}-${sweet.id}`} sweet={sweet} />
            ))}
          </ul>
        </div>
      </section>

      <InfoBox
        en="Take Out & Gift"
        title="お持ち帰り・ギフト"
        items={[
          { label: "焼き菓子", value: "個包装・当日から 5 日間日持ち" },
          { label: "ギフトボックス", value: "焼き菓子 6 個入り ¥2,000〜" },
          { label: "ホールケーキ", value: "前日 15 時までに要予約" },
        ]}
      >
        焼き菓子はすべてお持ち帰りいただけます。ケーキは前日までのご予約で、ホールでもご用意できます。
      </InfoBox>

      <section className="section next-page">
        <div className="container">
          <PageLink to="/coffee" en="Next — Coffee" title="お菓子に合うコーヒー豆を見る" variant="wide" />
        </div>
      </section>
    </>
  );
}
