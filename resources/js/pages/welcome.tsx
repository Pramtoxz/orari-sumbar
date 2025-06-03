import React from "react"
import { PageProps } from "@/types"
import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import News from "@/components/home/news"
import UkmShowcase from "@/components/home/showcase"
import Testimonials from "@/components/home/testimonials"
import Cta from "@/components/home/cta"
import Footer from "@/components/home/footer"

interface Berita {
  id: number
  judul: string
  isi: string
  gambar: string
  tanggal: string
  user: {
    name: string
  }
}

export default function Welcome({ berita }: PageProps<{ berita: Berita[] }>) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <UkmShowcase />
        <News berita={berita} />

        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
