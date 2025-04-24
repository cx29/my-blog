import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home(){
  const posts = getAllPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">my blog</h1>
      <ul className="space-y-3">
        {posts.map(post=>(
          <li key = {post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

