import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams(){
  const posts=getAllPosts()
  return posts.map((post)=>({slug:post.slug}))
}

export default async function PostPage({params}){
  const post = await getPostBySlug(params.slug)

  return (
    <article className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p  className="text-sm text-gray-500 mb-4">{post.date}</p>
      <div dangerouslySetInnerHTML={{__html:post.contentHtml}} />
    </article>
  )
}
