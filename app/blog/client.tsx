"use client"

import { posts } from "@/lib/data"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"

export default function BlogClient() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    return posts.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()))
  }, [q])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">News & Blog</h1>
      <div className="mt-4 max-w-md">
        <Input placeholder="Search articles..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border p-4 hover:border-primary">
            <img src={p.image || "/placeholder.svg"} alt={p.title} className="h-40 w-full rounded-md object-cover" />
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
