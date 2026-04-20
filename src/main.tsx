import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Providers } from "@/app/providers";
import { RootLayout } from "@/app/layout";
import { OrgChartPage } from "@/features/org-chart/pages/org-chart-page";
import "@/index.css";
import "@/stores/theme-store";

function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
      <p className="text-muted-foreground">Your app shell is ready. Add routes and features to get started.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
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
