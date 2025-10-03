"use client"

import { products } from "@/lib/data"
import { useMemo, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const categories = ["All", "Paper Bags", "Paper Covers", "Accessories"] as const
const materials = ["All", "Kraft", "Recycled", "Coated"] as const

export default function ProductsPageClient() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<(typeof categories)[number]>("All")
  const [mat, setMat] = useState<(typeof materials)[number]>("All")

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQ = q ? p.name.toLowerCase().includes(q.toLowerCase()) : true
      const matchesCat = cat === "All" ? true : p.category === cat
      const matchesMat = mat === "All" ? true : p.material === mat
      return matchesQ && matchesCat && matchesMat
    })
  }, [q, cat, mat])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Input
          placeholder="Search products..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="md:col-span-1"
        />
        <Select value={cat} onValueChange={(v) => setCat(v as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={mat} onValueChange={(v) => setMat(v as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Material" />
          </SelectTrigger>
          <SelectContent>
            {materials.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted-foreground">No products found.</p>}
      </div>
    </div>
  )
}
