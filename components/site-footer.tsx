import Link from "next/link"
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-balance">CKML Paper Products</h3>
          <p className="mt-3 text-sm leading-6 text-pretty">
            Sustainable Paper Solutions for wholesalers, retailers, and businesses.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm leading-6">
            Email: info@ckmlpaper.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Eco Industrial Park
          </p>

          <div className="mt-4">
            <h5 className="text-sm font-medium">Follow Us</h5>
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://facebook.com/ckmlpaper"
                target="_blank"
                rel="noreferrer"
                aria-label="CKML on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-background"
                title="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/ckmlpaper"
                target="_blank"
                rel="noreferrer"
                aria-label="CKML on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-background"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@ckmlpaper"
                target="_blank"
                rel="noreferrer"
                aria-label="CKML on YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-background"
                title="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-background"
                title="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* keep text link if desired */}
          <div className="mt-3">
            <a
              className="text-sm text-primary underline"
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs">© {new Date().getFullYear()} CKML Paper Products</div>
    </footer>
  )
}
