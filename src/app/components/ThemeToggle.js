'use client'; //标识是一个客户端组件，允许使用浏览器相关的API，否则默认是服务端组件，无法访问浏览器对象

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  //定义一个布尔变量
  const [dark, setDark] = useState(false);

  //组件加载后第一次执行的逻辑
  useEffect(() => {
    // 读取本地缓存的主题
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
      className="fixed w-12 h-12 flex items-center justify-center text-xl bottom-4 right-4 p-2 bg-gray-400 dark:bg-gray-700 rounded-full shadow hover:scale-105 transition"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
