'use client';

import { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

export default function Banner() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    async function fetchText() {
      try {
        const res = await fetch('https://v1.hitokoto.cn/?c=i&encode=json');
        const data = await res.json();
        setTexts([data.hitokoto]);
      } catch (error) {
        console.log('获取一言失败：', error);
        setTexts(['加载失败请稍后重试']);
      }
    }
    fetchText();
  }, []);

  return (
    <div
      className="relative w-full bg-[url('/my-blog/banner.jpeg')] bg-cover bg-center h-96 text-white text-center py-16 animate-fade-in-down
      flex flex-col items-center justify-center
      before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:content-['']
    "
    >
      <div className="relative z-10">
        <h1 className="text-6xl font-bold">二九</h1>
        <p className="text-lg mt-6 min-h-[2rem]">
          {texts.length > 0 && <Typewriter texts={texts} />}
        </p>
      </div>
    </div>
  );
}
