"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const options = [
  { name: "light", label: "Light", icon: Sun },
  { name: "dark", label: "Dark", icon: Moon },
  { name: "system", label: "System", icon: Monitor },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  if (!mounted) return <div className="h-9 w-27" aria-hidden="true" />;

  return (
    <div className="flex items-center rounded-full border border-zinc-200 p-1 dark:border-zinc-700">
      {options.map(({ name, label, icon: Icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => setTheme(name)}
          aria-label={`${label} theme`}
          aria-pressed={theme === name}
          className={`rounded-full p-1.5 transition ${theme === name ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950" : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"}`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
