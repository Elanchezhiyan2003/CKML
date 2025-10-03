import Link from "next/link"
import { products, posts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "CKML Paper Products | Sustainable Paper Solutions",
  description: "Eco-friendly paper bags, covers, and packaging. Trusted by wholesalers, retailers, and businesses.",
}

export default function HomePage() {
  const featured = products.slice(0, 3)
  const latest = posts.slice(0, 2)
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold text-balance">Sustainable Paper Solutions</h1>
            <p className="mt-4 text-lg leading-relaxed text-pretty">
              High-quality, recyclable paper products made with care—for a cleaner future.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/products">
                <Button size="lg">Explore Products</Button>
              </Link>
              <Link href="/contact" className="text-primary underline self-center">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <img
              src="/paper-bags-hero.jpg"
              alt="Assortment of eco-friendly paper bags"
              className="h-72 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Link className="text-sm underline hover:text-primary" href="/products">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">About CKML</h3>
          <p className="mt-3 text-pretty leading-relaxed">
            We manufacture sustainable paper bags and covers with an unwavering commitment to quality, ethics, and the
            environment. From raw materials to final packaging, we optimize for low impact.
          </p>
          <Link href="/about" className="mt-4 inline-block text-primary underline">
            Learn more
          </Link>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">Latest News & Videos</h3>
          <ul className="mt-3 space-y-3">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </li>
            ))}
          </ul>
          <Link href="/media" className="mt-4 inline-block text-primary underline">
            Watch our videos
          </Link>
        </div>
      </section>
    </div>
  )
}
