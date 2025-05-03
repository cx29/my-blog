import PostCard from '@/app/components/PostCard';
export default function PostList({ posts }) {
  console.log(posts);

  return (
    <div className="flex flex-wrap gap-6">
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
