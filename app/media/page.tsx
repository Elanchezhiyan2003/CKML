export const metadata = {
  title: "Videos & Media | CKML Paper Products",
  description: "Promotional and process videos.",
}

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-balance">Videos & Media</h1>
        <p className="mt-2 text-sm leading-6 text-pretty">
          Explore our manufacturing process, product quality, and brand stories through videos and images.
        </p>
      </header>

      {/* Videos as cards */}
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CKML Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Manufacturing Process</h3>
            <p className="mt-1 text-sm leading-6 text-pretty">
              A concise look at our quality controls and eco-friendly production line.
            </p>
          </div>
        </article>

        <article className="rounded-lg border overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/oHg5SJYRHA0"
              title="CKML Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Brand & Products</h3>
            <p className="mt-1 text-sm leading-6 text-pretty">
              An overview of our product range and the values behind CKML.
            </p>
          </div>
        </article>
      </section>

      {/* Image gallery */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Image Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src="/paper-bags-display.jpg"
            alt="Display of CKML paper bags"
            className="h-full w-full rounded-lg border object-cover"
          />
          <img
            src="/paper-covers-stack.jpg"
            alt="Stack of recycled paper covers"
            className="h-full w-full rounded-lg border object-cover"
          />
          <img
            src="/manufacturing-line.jpg"
            alt="Manufacturing line"
            className="h-full w-full rounded-lg border object-cover"
          />
          <img
            src="/quality-check.jpg"
            alt="Quality check on paper products"
            className="h-full w-full rounded-lg border object-cover"
          />
          <img
            src="/branding-print.jpg"
            alt="Custom branding print process"
            className="h-full w-full rounded-lg border object-cover"
          />
          <img
            src="/packaging-ready.jpg"
            alt="Finished packaging ready for dispatch"
            className="h-full w-full rounded-lg border object-cover"
          />
        </div>
      </section>
    </div>
  )
}
