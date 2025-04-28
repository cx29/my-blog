import PostCard from '@/app/components/PostCard';
export default function PostList({ posts }) {
  console.log(posts);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols2 lg:grid-cols-3">
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
