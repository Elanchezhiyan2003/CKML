"use client"
import { products } from "@/lib/data"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ORDERS_KEY = "ckml_orders_v1"

type Order = {
  id: string
  items: Array<{ name: string; qty: number; price: number }>
  subtotal: number
  customer: any
  status: string
  createdAt: string
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [statusFilter, setStatusFilter] = useState<"All" | "Pending" | "Completed">("All")

  useEffect(() => {
    try {
      const current = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]") as Order[]
      setOrders(current)
    } catch {}
  }, [])

  function updateStatus(id: string, status: "Pending" | "Completed") {
    const updated = orders.map((o) => (o.id === id ? { ...o, status } : o))
    setOrders(updated)
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated))
  }

  const filtered = orders.filter((o) => (statusFilter === "All" ? true : o.status === statusFilter))

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <section>
        <h1 className="text-3xl font-bold">Admin Dashboard (Demo)</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          For demonstration only. Data is stored locally in your browser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="rounded-lg border p-4">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-muted-foreground">
                {p.category} • {p.material}
              </div>
              <div className="mt-1 text-sm">Stock: {p.stock}</div>
              <div className="font-semibold">${p.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Orders</h2>
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 space-y-4">
          {filtered.map((o) => (
            <div key={o.id} className="rounded-lg border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-medium">Order {o.id}</div>
                <div className="text-sm text-muted-foreground">{new Date(o.createdAt).toLocaleString()}</div>
              </div>
              <ul className="mt-2 text-sm">
                {o.items.map((i, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>
                      {i.name} × {i.qty}
                    </span>
                    <span>${(i.qty * i.price).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 font-semibold">Subtotal: ${o.subtotal.toFixed(2)}</div>
              <div className="mt-3 flex items-center gap-2">
                <Button
                  variant={o.status === "Pending" ? "default" : "secondary"}
                  onClick={() => updateStatus(o.id, o.status === "Pending" ? "Completed" : "Pending")}
                >
                  Mark {o.status === "Pending" ? "Completed" : "Pending"}
                </Button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-sm text-muted-foreground">No orders yet.</p>}
        </div>
      </section>
    </div>
  )
}
