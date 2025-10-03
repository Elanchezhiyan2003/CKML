import Link from "next/link"

export const metadata = {
  title: "About Us | CKML Paper Products",
  description: "Our history, mission, and sustainability practices.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <section>
        <h1 className="text-3xl font-bold">About CKML Paper Products</h1>
        <p className="mt-3 leading-relaxed">
          CKML Paper Products is dedicated to manufacturing sustainable paper solutions with a focus on quality,
          innovation, and environmental stewardship.
        </p>
      </section>

      {/* Hero-style intro with supporting image */}
      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-balance">Sustainable paper, responsibly made</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            From sourcing to finishing, we optimize for quality, durability, and reduced environmental impact. Our team
            partners with businesses to build packaging that customers feel good about.
          </p>
        </div>
        <img
          src="/paper-manufacturing-facility-with-eco-focus.jpg"
          alt="Modern paper manufacturing with eco focus"
          className="w-full rounded-lg border object-cover"
          loading="lazy"
        />
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-2xl font-semibold">Welcome to CKML</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Welcome to CKML Paper Products, your partner for sustainable paper packaging. We manufacture reliable paper
          bags, covers, and accessories that help businesses deliver great customer experiences—while reducing waste.
        </p>
      </section>

      {/* Quick metrics */}
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="rounded-lg border p-4">
          <p className="text-3xl font-bold">15+</p>
          <p className="text-sm text-muted-foreground">Years in production</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-3xl font-bold">98%</p>
          <p className="text-sm text-muted-foreground">On-time fulfillment</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-3xl font-bold">30%</p>
          <p className="text-sm text-muted-foreground">Average recycled content</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-3xl font-bold">ISO 9001</p>
          <p className="text-sm text-muted-foreground">Quality management</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-2 text-sm">Deliver eco-conscious paper products that help businesses reduce waste.</p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">Vision</h3>
          <p className="mt-2 text-sm">Lead the transition to sustainable packaging across global supply chains.</p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">Values</h3>
          <p className="mt-2 text-sm">Integrity, sustainability, innovation, and customer success.</p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">Quality You Can Trust</h3>
          <p className="mt-2 text-sm text-muted-foreground">ISO-driven processes and consistent batch performance.</p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">Sustainability First</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Recycled fibers, circular programs, and responsible inputs.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">On-Time Delivery</h3>
          <p className="mt-2 text-sm text-muted-foreground">Capacity and planning that meet your timelines at scale.</p>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Sustainability Pillars</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-md border p-4">
            <h3 className="font-semibold">Responsible Sourcing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prioritizing FSC-aligned inputs and post-consumer recycled fibers.
            </p>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="font-semibold">Efficient Manufacturing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Energy-aware processes and continuous waste reduction initiatives.
            </p>
          </div>
          <div className="rounded-md border p-4">
            <h3 className="font-semibold">Circular Lifecycle</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Recyclable designs and buy-back programs to keep materials in use.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="flex items-center justify-between rounded-lg border p-6">
        <div>
          <h3 className="text-lg font-semibold">Ready to explore our products?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Browse paper bags, covers, and accessories tailored to your business.
          </p>
        </div>
        <Link href="/products" className="text-primary underline">
          View Products
        </Link>
      </section>

      <section className="grid gap-6 md:grid-cols-2 rounded-lg border p-6">
        <img
          src="/founder-portrait.png"
          alt="Founder portrait"
          className="w-full rounded-lg border object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-2xl font-semibold">Founder Profile</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our founder established CKML with a simple belief: better packaging can be both durable and sustainable.
            This vision drives our team to continuously improve materials, processes, and partnerships.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm">
            <li>15+ years of manufacturing and supply-chain experience</li>
            <li>Focus on quality, reliability, and customer success</li>
            <li>Committed to circular and eco-conscious materials</li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Sustainability Practices</h2>
        <ul className="mt-3 list-disc pl-5 text-sm">
          <li>Responsible sourcing and recycled fibers</li>
          <li>Energy-efficient manufacturing</li>
          <li>Waste minimization and recycling programs</li>
        </ul>
      </section>
    </div>
  )
}
