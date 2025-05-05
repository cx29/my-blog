'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowOverlay(false);
      } else if (currentScrollY > lastScrollY) {
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 px-4 py-2 transition-all duration-300 text-white animate-fade-in-down ${
        showOverlay
          ? 'bg-black bg-opacity-30 backdrop-blur-md show-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">二九</div>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a href="" className="relative inline-block  group">
              <span className="relative z-10">关于</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="" className="relative inline-block  group">
              <span className="relative z-10">文章</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="" className="relative inline-block  group">
              <span className="relative z-10">友链</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-start gap-4 text-lg bg-black bg-opacity-70 px-6 py-4 rounded-lg">
          <li>
            <a href="" className="hover:underline">
              关于
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              文章
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              联系
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
