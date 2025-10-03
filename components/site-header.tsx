"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "News" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/ckml-logo.jpg" alt="CKML Paper Products logo" className="h-8 w-auto" />
          <span className="font-semibold">CKML Paper Products</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm hover:text-primary",
                pathname === item.href ? "text-primary font-medium" : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline text-sm underline hover:text-primary">
            Enquire
          </Link>
          {/* Mobile menu trigger only on small screens */}
          <div className="md:hidden">
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
      {/* Mobile sheet: keep it outside the width-constrained container to ensure full-width drawer */}
      {/* Removed stray empty md:hidden block that could confuse layout */}
    </header>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm hover:bg-muted"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle>CKML Paper Products</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 grid gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm hover:bg-muted",
                pathname === item.href ? "bg-muted font-medium" : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
          >
            Enquire
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
