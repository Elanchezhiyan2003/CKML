export type Product = {
  id: string
  slug: string
  name: string
  category: "Paper Bags" | "Paper Covers" | "Accessories"
  material: "Kraft" | "Recycled" | "Coated"
  sizes: string[]
  price: number
  stock: number
  description: string
  specs: string[]
  images: string[]
  datasheetUrl?: string
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "kraft-paper-bag-small",
    name: "Kraft Paper Bag - Small",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["S", "M"],
    price: 0.29,
    stock: 1200,
    description: "Durable small-sized kraft paper bag made from recycled fibers. Ideal for cafes and boutiques.",
    specs: ["120 gsm", "100% recyclable", "Twisted handles"],
    images: ["/kraft-small-bag.jpg"],
    datasheetUrl: "#",
  },
  {
    id: "p2",
    slug: "kraft-paper-bag-large",
    name: "Kraft Paper Bag - Large",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["L", "XL"],
    price: 0.59,
    stock: 600,
    description: "Large kraft paper bag for retail and takeaway. High load capacity and reinforced base.",
    specs: ["150 gsm", "Reinforced base", "Custom branding available"],
    images: ["/kraft-large-bag.jpg"],
  },
  {
    id: "p3",
    slug: "recycled-paper-cover-a4",
    name: "Recycled Paper Cover - A4",
    category: "Paper Covers",
    material: "Recycled",
    sizes: ["A4"],
    price: 0.09,
    stock: 5000,
    description: "Eco-friendly A4 paper cover for documents and packaging.",
    specs: ["80 gsm", "Post-consumer recycled fibers", "Matte finish"],
    images: ["/recycled-paper-cover.jpg"],
  },
  {
    id: "p4",
    slug: "coated-laminated-bag-medium",
    name: "Coated Laminated Bag - Medium",
    category: "Paper Bags",
    material: "Coated",
    sizes: ["M"],
    price: 0.85,
    stock: 350,
    description: "Premium coated bag with a smooth finish. Ideal for premium retail packaging.",
    specs: ["170 gsm", "Gloss coat", "Die-cut handles"],
    images: ["/coated-bag.jpg"],
  },
  {
    id: "p5",
    slug: "recycled-paper-cover-a5",
    name: "Recycled Paper Cover - A5",
    category: "Paper Covers",
    material: "Recycled",
    sizes: ["A5"],
    price: 0.07,
    stock: 8000,
    description: "Compact A5 eco-friendly paper cover for notebooks and small documents.",
    specs: ["80 gsm", "Post-consumer recycled fibers", "Matte finish"],
    images: ["/recycled-paper-cover-a5.jpg"],
  },
  {
    id: "p6",
    slug: "kraft-paper-bag-medium",
    name: "Kraft Paper Bag - Medium",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["M"],
    price: 0.39,
    stock: 2000,
    description: "Everyday medium-size kraft bag, ideal for retail and takeaway.",
    specs: ["130 gsm", "100% recyclable", "Twisted handles"],
    images: ["/kraft-paper-bag-medium.jpg"],
  },
  {
    id: "p7",
    slug: "flat-bag",
    name: "Flat Bag",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["S", "M"],
    price: 0.3,
    stock: 1500,
    description: "Flat-handle paper shopping bag suitable for retail and takeaway.",
    specs: ["120–150 gsm", "Flat handles", "Custom print available"],
    images: ["/images/products/Flat Bag.png"],
  },
  {
    id: "p8",
    slug: "vibuthi-cover",
    name: "Vibuthi Cover",
    category: "Paper Covers",
    material: "Recycled",
    sizes: ["S", "M", "L"],
    price: 0.05,
    stock: 8000,
    description: "Paper sachet covers for vibuthi and prasad packing.",
    specs: ["Food-grade inks", "Recyclable", "Custom branding"],
    images: ["/images/products/Vibuthi Cover.png"],
  },
  {
    id: "p9",
    slug: "woman-picking-up-mail",
    name: "Envelope Cover",
    category: "Accessories",
    material: "Coated",
    sizes: ["DL"],
    price: 0.09,
    stock: 5000,
    description: "Mailing envelopes showcased in a lifestyle context.",
    specs: ["Window/non-window options", "Peel-and-seal", "80–100 gsm"],
    images: ["/images/products/Envelope Cover.png"],
  },
  {
    id: "p10",
    slug: "food-bag",
    name: "Food Bag",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["S", "M", "L"],
    price: 0.12,
    stock: 6000,
    description: "Grease-resistant food-grade kraft paper bag.",
    specs: ["Food safe", "Grease resistant", "Recyclable"],
    images: ["/images/products/Food Bag.png"],
  },
  {
    id: "p11",
    slug: "medical-6",
    name: "Medical Cover",
    category: "Paper Bags",
    material: "Coated",
    sizes: ["M"],
    price: 0.45,
    stock: 900,
    description: "Medical-themed premium paper gift bag with rope handles.",
    specs: ["170 gsm", "Gloss finish", "Durable rope handles"],
    images: ["/images/products/Medical Cover.png"],
  },
  // {
  //   id: "p12",
  //   slug: "window-envelope-6280",
  //   name: "6280.jpg",
  //   category: "Accessories",
  //   material: "Coated",
  //   sizes: ["DL", "C5"],
  //   price: 0.07,
  //   stock: 7000,
  //   description: "Business envelopes with transparent window.",
  //   specs: ["80–100 gsm", "Peel-and-seal", "Windowed"],
  //   images: ["/images/products/6280.jpg"],
  // },
  {
    id: "p13",
    slug: "kraft-courier-bubble-mailer",
    name: "Postal Cover",
    category: "Accessories",
    material: "Kraft",
    sizes: ["S", "M", "L"],
    price: 0.25,
    stock: 4000,
    description: "Kraft bubble mailer with peel-and-seal adhesive.",
    specs: ["Padded interior", "Tear resistant", "Recyclable outer"],
    images: ["/images/products/Postal Cover.png"],
  },
  {
    id: "p14",
    slug: "shopping-bag-multi-color",
    name: "shopping Bag",
    category: "Paper Bags",
    material: "Kraft",
    sizes: ["S", "M", "L"],
    price: 0.2,
    stock: 3000,
    description: "Multi-color twisted-handle paper shopping bags for branding.",
    specs: ["120–150 gsm", "Twisted handles", "Custom logo"],
    images: ["/images/products/Shopping Bag.png"],
  },
]

export type Service = {
  slug: string
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    slug: "raw-materials",
    title: "Raw Materials",
    description: "High-quality kraft, recycled, and specialty papers sourced responsibly.",
    image: "/raw-materials.jpg",
  },
  {
    slug: "buy-back-marketing",
    title: "Buy Back & Marketing",
    description: "Sustainable buy-back programs and co-marketing opportunities for partners.",
    image: "/buy-back.jpg",
  },
  {
    slug: "business-offers",
    title: "Business Offers",
    description: "Flexible pricing for wholesalers, retailers, and enterprise clients.",
    image: "/business-offers.jpg",
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
}

export const posts: BlogPost[] = [
  {
    slug: "sustainable-paper-trends-2025",
    title: "Sustainable Paper Trends in 2025",
    excerpt: "Discover how recycled fibers and greener supply chains are shaping packaging.",
    content: "Sustainability continues to drive innovation across paper packaging, from materials to processes...",
    image: "/sustainability-concept.png",
    date: "2025-06-01",
  },
  {
    slug: "manufacturing-process-insights",
    title: "Manufacturing Process Insights",
    excerpt: "A behind-the-scenes look at our paper bag production and quality controls.",
    content: "Our production line is optimized for efficiency and low environmental impact...",
    image: "/modern-manufacturing-facility.png",
    date: "2025-04-15",
  },
]
