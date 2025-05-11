/**
 * 动态路由页面：单篇文章
 */
import { getAllPosts, getPostBySlug } from '@/lib/posts'; //引入获取文章内容和slug的方法
import { notFound } from 'next/navigation'; //引入404处理
import { parseMarkdown } from '@/lib/markdown';
import MermaidClient from '@/app/components/MermaidClient';

/**
 * 生成所有文章的路由
 * @returns
 */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug })); //生成每个文章的路由参数
}

/**
 * 单篇文章界面
 */
export default async function PostPage({ params }) {
  const { slug } = await params; //取到动态路由参数slug
  const post = await getPostBySlug(slug); //根据slug获取对应的文章数据

  if (!post) {
    notFound(); //找不到就返回404
  }

  return (
    <article className="px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-2">{post.metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.metadata.date}</p>
      {/* Mermaid 初始化 */}
      <MermaidClient />
      {/* Markdown渲染 */}
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} //把markdown文档转换为HTML文档
      />
    </article>
  );
}
