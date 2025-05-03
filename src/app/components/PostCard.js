import Link from 'next/link';

export default function PostCard({ post }) {
  if (!post?.slug) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link href={`/posts/${post.slug}`}>
        <div
          className="w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.coverImage || ''})` }}
        ></div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-3">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm mb-4">{post.date}</p>
        <p className="text-gray-600 text-base">点击查看完整内容...</p>
      </Link>
    </div>
  );
}
