import { notFound } from "next/navigation"
import { posts } from "@/lib/data"

export const dynamic = "force-static"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-60 w-full rounded-lg object-cover" />
      <h1 className="mt-6 text-3xl font-bold">{post.title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{new Date(post.date).toDateString()}</p>
      <article className="prose mt-4 max-w-none">
        <p>{post.content}</p>
      </article>
    </div>
  )
}
