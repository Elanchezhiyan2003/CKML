"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useReducer } from "react"
import type { Product } from "@/lib/data"

export type CartItem = {
  id: string
  productId: string
  name: string
  price: number
  qty: number
  image?: string
  slug: string
}

type CartState = {
  items: CartItem[]
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; productId: string }
  | { type: "UPDATE_QTY"; productId: string; qty: number }
  | { type: "CLEAR" }

const CartContext = createContext<{
  state: CartState
  add: (p: Product, qty?: number) => void
  remove: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  clear: () => void
  subtotal: number
} | null>(null)

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.productId === action.item.productId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === action.item.productId ? { ...i, qty: i.qty + action.item.qty } : i,
          ),
        }
      }
      return { items: [...state.items, action.item] }
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.productId !== action.productId) }
    case "UPDATE_QTY":
      return {
        items: state.items.map((i) => (i.productId === action.productId ? { ...i, qty: action.qty } : i)),
      }
    case "CLEAR":
      return { items: [] }
    default:
      return state
  }
}

const STORAGE_KEY = "ckml_cart_v1"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartState
        dispatch({ type: "CLEAR" })
        for (const it of parsed.items) {
          dispatch({ type: "ADD", item: it })
        }
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore
    }
  }, [state])

  const subtotal = useMemo(() => state.items.reduce((sum, i) => sum + i.price * i.qty, 0), [state.items])

  const value = useMemo(
    () => ({
      state,
      add: (p: Product, qty = 1) =>
        dispatch({
          type: "ADD",
          item: {
            id: `${p.id}`,
            productId: p.id,
            name: p.name,
            price: p.price,
            qty,
            image: p.images[0],
            slug: p.slug,
          },
        }),
      remove: (productId: string) => dispatch({ type: "REMOVE", productId }),
      updateQty: (productId: string, qty: number) => dispatch({ type: "UPDATE_QTY", productId, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
      subtotal,
    }),
    [subtotal, state],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
