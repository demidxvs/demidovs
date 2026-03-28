"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const current = document.documentElement.dataset.theme;
      if (current === "light" || current === "dark") return current;
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="theme-switch" aria-label="Theme switcher">
      <button
        type="button"
        className={theme === "dark" ? "active" : undefined}
        onClick={() => changeTheme("dark")}
      >
        Dark
      </button>
      <button
        type="button"
        className={theme === "light" ? "active" : undefined}
        onClick={() => changeTheme("light")}
      >
        Light
      </button>
    </div>
  );
}
