'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme:dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setDark(isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:scale-105 transition"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
