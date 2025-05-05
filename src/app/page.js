/**
 *  博客首页
 */
import Banner from '@/app/components/Banner';
import PostList from '@/app/components/PostList';
import Navbar from '@/app/components/Navbar';
import Sidebar from '@/app/components/Sidebar';
import ContentLayout from '@/app/components/ContentLayout';
import { getAllPosts } from '@/lib/posts'; // 引入获取所有文章的方法

export default async function HomePage() {
  const posts = await getAllPosts(); //读取所有文章

  return (
    <main className="w-full">
      <Navbar />
      <Banner />
      <ContentLayout left={<PostList posts={posts} />} right={<Sidebar />} />
    </main>
  );
}
