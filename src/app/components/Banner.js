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
        setTexts(['talk is cheap. show me the code.']);
      }
    }
    fetchText();
  }, []);

  return (
    <div
      className="relative w-full  h-96 text-white text-center py-16 animate-fade-in-down
      flex flex-col items-center justify-center
      "
      style={{
        backgroundColor: '#000',
        backgroundImage: "url('https://cx29.github.io/cx29/snake-dark.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
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
