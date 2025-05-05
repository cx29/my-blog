import PostCard from '@/app/components/PostCard';
export default function PostList({ posts }) {
  if (!posts || posts.length == 0) {
    return <p className="text-center text-gray-500">暂无文章</p>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <PostCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
