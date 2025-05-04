/**
 *  博客首页
 */
import Banner from '@/app/components/Banner';
import PostList from '@/app/components/PostList';
import Navbar from '@/app/components/Navbar';
import { getAllPosts } from '@/lib/posts'; // 引入获取所有文章的方法

export default function HomePage() {
  const posts = getAllPosts(); //读取所有文章

  return (
    <main className="w-full">
      <Navbar />
      <Banner />
      <PostList posts={posts} />
    </main>
  );
}
