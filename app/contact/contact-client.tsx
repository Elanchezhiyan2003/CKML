"use client"
// <CHANGE> Contact page with form and map embed
import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactClient() {
  const [status, setStatus] = useState<string | null>(null)
  function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("Thanks! We will reach out shortly.")
  }
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form onSubmit={submit} className="mt-6 space-y-3">
          <Input placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input placeholder="Phone" required />
          <Textarea placeholder="Your message" required />
          <Button type="submit">Send</Button>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
        <div className="mt-4">
          <a className="text-primary underline" href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
            WhatsApp Chat
          </a>
        </div>
        <div className="mt-2">
          <a className="text-sm underline" href="#" download>
            Download Brochure (PDF)
          </a>
        </div>
      </div>
      <div className="rounded-lg border">
        <iframe
          title="CKML Location"
          className="h-[400px] w-full rounded-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzfCsDQ2JzMwLjAiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1680000000000"
        />
      </div>
    </div>
  )
}
