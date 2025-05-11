/**
 * 全局布局
 */
import '@/styles/globals.css'; //引入全局样式
import 'highlight.js/styles/github-dark.css'; // 纯css只能在layout.js 文件中引入
import 'highlight.js/styles/github.css'; // 纯css只能在layout.js 文件中引入
import 'github-markdown-css/github-markdown.css';
import ThemeToggle from '@/app/components/ThemeToggle';

//根布局组件
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/my-blog/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-100 transition-colors">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
