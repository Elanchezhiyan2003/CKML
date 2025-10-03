import { services } from "@/lib/data"

export const metadata = {
  title: "Services | CKML Paper Products",
  description: "Raw Materials, Buy Back & Marketing, Business Offers.",
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} className="rounded-lg border bg-card p-4">
            <img src={s.image || "/placeholder.svg"} alt={s.title} className="h-44 w-full rounded-md object-cover" />
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
