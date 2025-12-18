"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const FloatingResin = dynamic(() => import("@/components/3d/floating-resin").then((mod) => mod.FloatingResin), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />,
})

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-blue-epoxy-resin-floor-glossy-surface-abstr.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <FloatingResin />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span>Premium Epoxy Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            Premium Epoxy Solutions{" "}
            <span className="bg-gradient-to-r from-primary via-chart-1 to-accent bg-clip-text text-transparent">
              Built to Last
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Transform your spaces with expertly crafted epoxy flooring, countertops, tables, and custom resin art. Where
            durability meets artistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base group">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("gallery")} className="text-base">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
