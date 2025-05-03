/**
 * 全局布局
 */
import '@/styles/globals.css'; //引入全局样式
import ThemeToggle from '@/app/components/ThemeToggle';

//根布局组件
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="icon" href="/my-blog/favicon.ico" />
      </head>
      <body className="bg-black dark:bg-black text-gray-800 dark:text-gray-100 transition-colors">
        <div className="bg-black">Test</div>
      </body>
    </html>
  );
}
