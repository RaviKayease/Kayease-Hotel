"use client";

import { useEffect, useState } from "react";
import { Palette, Check, ChevronDown } from "lucide-react";

const themes = [
  { id: "earth", name: "Warm Earth", color: "#b8754d" },
  { id: "ocean", name: "Ocean Blue", color: "#4776c7" },
  { id: "forest", name: "Forest Green", color: "#64866a" },
  { id: "purple", name: "Royal Purple", color: "#8865b5" },
  { id: "rose", name: "Rose Pink", color: "#c36c78" },
  { id: "dark", name: "Midnight Dark", color: "#d19b65" },
];

export default function ChangeTheme() {
  const [selected, setSelected] = useState("earth");
  const [open, setOpen] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("website-theme") || "earth";

  const validThemes = themes.map((theme) => theme.id);
  const activeTheme = validThemes.includes(saved) ? saved : "earth";

  setSelected(activeTheme);
}, []);

  const changeTheme = (theme: string) => {
    setSelected(theme);
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("website-theme", theme);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2 py-1 lg:px-4 lg:py-2 text-[var(--foreground)]"
      >
        <Palette size={18} />
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl">
          <p className="mb-3 px-2 text-sm font-semibold text-[var(--foreground)]">
            Choose your theme
          </p>

          <div className="space-y-1">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  changeTheme(theme.id);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)]"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="h-5 w-5 rounded-full border"
                    style={{ backgroundColor: theme.color }}
                  />
                  {theme.name}
                </span>

                {selected === theme.id && <Check size={17} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
