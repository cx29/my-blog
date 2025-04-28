/**
 * 全局布局
 */
import '@/styles/globals.css'; //引入全局样式

//定义全局页面metadata（SEO友好）
export const metadata = {
  title: 'My Blog', //网页标题
  description: 'A static blog built with Next.js and Markdown', //描述信息
};

//根布局组件
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head />
      <body className="max-w-2xl mx-auto p-6 bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
