// =========================================================
// Komorebi Coffee - main.js
// すべてのページ（index / coffee / sweets）で共通して読み込む。
// ページによって存在しない要素があるので、見つからない場合は処理をスキップする。
// =========================================================

// ページ遷移アニメーション（CSS の @view-transition）が途中で中断されたときの
// エラーをコンソールに出さないようにする（表示には影響しない）
["pageswap", "pagereveal"].forEach((type) => {
  window.addEventListener(type, (e) => {
    if (!e.viewTransition) return;
    e.viewTransition.ready.catch(() => {});
    e.viewTransition.finished.catch(() => {});
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNav();
  initTabs();
  initFilters();
  initReveal();
  initContactForm();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});

// ---------- スクロール時のヘッダー・トップへ戻るボタン ----------
function initHeader() {
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  if (!header) return;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ---------- スマホ用メニュー ----------
function initNav() {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!navToggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    document.body.style.overflow = open ? "hidden" : "";
  };

  navToggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
  });
}

// ---------- メニューのタブ切り替え（トップページ） ----------
function initTabs() {
  const tabs = document.querySelectorAll('.tabs__btn[role="tab"]');
  if (!tabs.length) return;

  const selectTab = (tab) => {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    // 左右キーでタブ移動
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });
}

// ---------- 絞り込み（コーヒー・お菓子ページ） ----------
// <div class="filter" data-filter-target="#一覧のID"> の中のボタンを押すと、
// data-category にその値を含むカードだけを表示する。
function initFilters() {
  document.querySelectorAll(".filter[data-filter-target]").forEach((filter) => {
    const list = document.querySelector(filter.dataset.filterTarget);
    if (!list) return;
    const buttons = filter.querySelectorAll("[data-filter]");
    const items = list.querySelectorAll("[data-category]");
    const count = filter.parentElement.querySelector("[data-count]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.filter;

        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });

        let shown = 0;
        items.forEach((item) => {
          const categories = item.dataset.category.split(" ");
          const match = value === "all" || categories.includes(value);
          item.classList.toggle("is-hidden", !match);
          item.classList.remove("is-filtered-in");
          if (match) {
            shown++;
            void item.offsetWidth; // アニメーションをもう一度再生するためのリセット
            item.classList.add("is-filtered-in");
          }
        });
        if (count) count.textContent = shown;
      });
    });
  });
}

// ---------- スクロールでふわっと表示 ----------
function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
}

// ---------- お問い合わせフォームの入力チェック（トップページ） ----------
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  const rules = {
    name: (v) => (v.trim() ? "" : "お名前を入力してください。"),
    email: (v) =>
      !v.trim()
        ? "メールアドレスを入力してください。"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "メールアドレスの形式が正しくありません。",
    message: (v) => (v.trim() ? "" : "メッセージを入力してください。"),
  };

  const validate = (field) => {
    const msg = rules[field.name](field.value);
    field.classList.toggle("is-invalid", !!msg);
    field.setAttribute("aria-invalid", String(!!msg));
    form.querySelector(`.form__error[data-for="${field.name}"]`).textContent = msg;
    return !msg;
  };

  Object.keys(rules).forEach((name) => {
    form.elements[name].addEventListener("blur", (e) => validate(e.target));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = Object.keys(rules).map((name) => form.elements[name]);
    const results = fields.map(validate);
    if (results.every(Boolean)) {
      // デモのため送信はせず、完了メッセージだけ表示
      form.reset();
      success.hidden = false;
      setTimeout(() => (success.hidden = true), 6000);
    } else {
      fields[results.indexOf(false)].focus();
    }
  });
}
