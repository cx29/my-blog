/**
 *  博客首页
 */
import Link from 'next/link'; //引入Link组件用于跳转
import { getAllPosts } from '@/lib/posts'; // 引入获取所有文章的方法

export default function HomePage() {
  const posts = getAllPosts(); //读取所有文章

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">
        my blog
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div
            key={post.slug}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link href={`/posts/${post.slug}`} className="block p-6 h-full">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600 text-base line-clamp-3">
                点击查看完整内容...
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
