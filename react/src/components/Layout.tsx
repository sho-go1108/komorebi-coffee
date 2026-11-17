import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";
import { useScrollOnNavigate } from "../hooks/useScrollOnNavigate";
import { useReveal } from "../hooks/useReveal";

/** 全ページ共通の枠。<Outlet /> の部分に各ページが入る */
export default function Layout() {
  useScrollOnNavigate();
  useReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
      <ToTopButton />
    </>
  );
}
