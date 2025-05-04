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
    <div className="w-full bg-blue-600 text-white text-center py-16">
      <h1 className="text-5xl font-bold">欢迎来到我的blog</h1>
      <p className="text-lg mt-4 min-h-[2rem]">
        {texts.length > 0 && <Typewriter texts={texts} />}
      </p>
    </div>
  );
}
