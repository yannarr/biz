"use client"

import { motion } from "framer-motion"
import { Layers, Home, Table, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Layers,
    title: "Epoxy Flooring",
    description:
      "Industrial-grade, residential, and garage flooring solutions that combine durability with stunning aesthetics.",
    features: ["Industrial spaces", "Residential homes", "Garage floors", "Commercial areas"],
    bgImage: "/metallic-epoxy-floor-coating-blue-industrial-garag.jpg",
  },
  {
    icon: Home,
    title: "Epoxy Countertops",
    description: "Custom-designed countertops that are heat-resistant, scratch-proof, and beautifully unique.",
    features: ["Kitchen counters", "Bathroom vanities", "Bar tops", "Work surfaces"],
    bgImage: "/glossy-blue-epoxy-resin-kitchen-countertop-modern.jpg",
  },
  {
    icon: Table,
    title: "Epoxy Tables & Furniture",
    description: "Handcrafted tables and furniture pieces that serve as functional art for your space.",
    features: ["Dining tables", "Coffee tables", "River tables", "Custom furniture"],
    bgImage: "/epoxy-resin-river-table-blue-translucent-wood-live.jpg",
  },
  {
    icon: Palette,
    title: "Custom Resin Art",
    description: "One-of-a-kind artistic pieces designed to elevate your interior with personalized style.",
    features: ["Wall art", "Sculptures", "Decorative pieces", "Commissioned works"],
    bgImage: "/abstract-epoxy-resin-art-blue-teal-waves-ocean-art.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <img src="/subtle-epoxy-resin-texture-blue-abstract-pattern-b.jpg" alt="" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive epoxy solutions tailored to your unique needs and vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img src={service.bgImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
