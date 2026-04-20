import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router";
import { Providers } from "@/app/providers";
import { RootLayout } from "@/app/layout";
import { OrgChartPage } from "@/features/org-chart/pages/org-chart-page";
import "@/index.css";
import "@/stores/theme-store";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/org-chart" replace /> },
      { path: "/org-chart", element: <OrgChartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
