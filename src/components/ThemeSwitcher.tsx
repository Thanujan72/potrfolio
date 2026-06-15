"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 p-2 border border-gray-200 dark:border-gray-800 rounded-full">
      <button 
        onClick={() => setTheme("light")} 
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <Sun size={16} />
      </button>
      <button 
        onClick={() => setTheme("dark")} 
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : ''}`}
      >
        <Moon size={16} />
      </button>
      <button 
        onClick={() => setTheme("system")} 
        className={`p-2 rounded-full ${theme === 'system' ? 'bg-gray-400' : ''}`}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}