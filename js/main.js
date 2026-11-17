// =========================================================
// Komorebi Coffee - main.js
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");

  // ---------- スクロール時のヘッダー・トップへ戻るボタン ----------
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    toTop.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- スマホ用メニュー ----------
  const closeNav = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
    document.body.style.overflow = "";
  };
  navToggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeNav();
  });

  // ---------- メニューのタブ切り替え ----------
  const tabs = document.querySelectorAll(".tabs__btn");
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

  // ---------- スクロールでふわっと表示 ----------
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
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
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- お問い合わせフォームの入力チェック ----------
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
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

  // ---------- コピーライトの年 ----------
  document.getElementById("year").textContent = new Date().getFullYear();
});
