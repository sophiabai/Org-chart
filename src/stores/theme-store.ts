import { create } from "zustand";

export type Theme = "system" | "light" | "dark";

function resolve(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", resolve(theme) === "dark");
}

const initial = (localStorage.getItem("theme") as Theme) ?? "system";
apply(initial);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if ((localStorage.getItem("theme") as Theme) === "system" || !localStorage.getItem("theme")) {
    apply("system");
  }
});

export const useThemeStore = create<{ theme: Theme; setTheme: (t: Theme) => void }>((set) => ({
  theme: initial,
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    apply(theme);
    set({ theme });
  },
}));
