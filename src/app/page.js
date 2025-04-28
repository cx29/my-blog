/**
 *  博客首页
 */
import Link from 'next/link'; //引入Link组件用于跳转
import { getAllPosts } from '@/lib/posts'; // 引入获取所有文章的方法

export default function Home() {
  const posts = getAllPosts(); //读取所有文章

  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">my blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-600 hover:underline text-xl"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
