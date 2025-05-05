import Link from 'next/link';

export default function PostCard({ post, index }) {
  const isImageLeft = index % 2 === 0;
  if (!post?.slug) return null;

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={`bg-white dark:bg-zinc-900  rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row ${
        isImageLeft ? '' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className="w-full md:w-1/3 md:h-auto h-48 bg-cover bg-center transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${post.coverImage || '/my-blog/banner.jpeg'})`,
        }}
      ></div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm mb-2">{post.date}</p>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          点击查看完整内容...
        </p>
      </div>
    </Link>
  );
}
