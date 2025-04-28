/**
 *  博客首页
 */
import Banner from '@/app/components/Banner';
import PostList from '@/app/components/PostList';
import { getAllPosts } from '@/lib/posts'; // 引入获取所有文章的方法

export default function HomePage() {
  const posts = getAllPosts(); //读取所有文章

  console.log(posts);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <Banner />
      <h2 className="text-4xl font-semibold text-center text-gray-800 mt-12 mb-8">
        文章列表
      </h2>
      <PostList posts={posts} />
    </main>
  );
}
