import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Sweets from "./pages/Sweets";
import NotFound from "./pages/NotFound";
import "./styles/style.css";

// URL とページ（コンポーネント）の対応表
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />, // ヘッダー・フッターなど全ページ共通の枠
      children: [
        { index: true, element: <Home /> },
        { path: "coffee", element: <Coffee /> },
        { path: "sweets", element: <Sweets /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  // サブフォルダに公開したとき用（例：/komorebi-coffee/react）
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
