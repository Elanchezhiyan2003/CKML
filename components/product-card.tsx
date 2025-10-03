"use client"

import Link from "next/link"
import type { Product } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <img
        src={product.images[0] || "/placeholder.svg?height=600&width=800&query=product"}
        alt={product.name}
        className="h-44 w-full rounded-md object-cover"
        loading="lazy"
      />
      <div className="mt-3">
        <h3 className="font-medium">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.material} • {product.category}
        </p>
        {/* removed price display */}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Link href={`/products/${product.slug}`} className="text-sm underline hover:text-primary">
          View Product
        </Link>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="text-sm underline hover:text-primary"
        >
          Enquire
        </Link>
      </div>
    </div>
  )
}
