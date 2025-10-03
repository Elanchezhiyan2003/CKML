import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import Link from "next/link"

export const dynamic = "force-static"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img
            src={product.images[0] || "/placeholder.svg?height=600&width=800&query=product"}
            alt={product.name}
            className="w-full rounded-lg border object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">
            {product.material} • {product.category}
          </p>
          <p className="mt-2 text-sm">{product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}</p>
          <p className="mt-4 leading-relaxed">{product.description}</p>
          <ul className="mt-4 list-disc pl-5 text-sm">
            {product.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="text-sm underline hover:text-primary"
            >
              Enquire about this product
            </Link>
            {product.datasheetUrl && (
              <a className="text-sm underline hover:text-primary" href={product.datasheetUrl}>
                Download Datasheet (PDF)
              </a>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Related Products</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="rounded-lg border p-4 hover:border-primary">
                <img
                  src={p.images[0] || "/placeholder.svg"}
                  alt={p.name}
                  className="h-40 w-full rounded-md object-cover"
                />
                <div className="mt-3 font-medium">{p.name}</div>
                <div className="text-sm text-muted-foreground"></div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
