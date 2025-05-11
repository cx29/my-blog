'use client';
import { useEffect } from 'react';
import mermaid from 'mermaid';

export default function MermaidClient() {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;
    const isDark =
      document.documentElement.classList.contains('dark') || prefersDark;

    mermaid.initialize({
      startOnLoad: true,
      theme: isDark ? 'dark' : 'default',
    });
    mermaid.run({
      nodes: document.querySelectorAll('.mermaid'),
    });
  }, []);
  return null;
}
