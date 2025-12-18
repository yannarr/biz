"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { BeforeAfterSlider } from "@/components/ui/before-after-slider"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Modern Garage Floor",
    category: "Flooring",
    beforeImage: "/before-cracked-concrete-garage-floor.jpg",
    afterImage: "/modern-metallic-epoxy-garage-floor.jpg",
  },
  {
    id: 2,
    title: "Ocean Wave Table",
    category: "Tables",
    beforeImage: "/before-raw-wood-slab-unfinished.jpg",
    afterImage: "/blue-ocean-epoxy-resin-river-table.jpg",
  },
  {
    id: 3,
    title: "Marble Countertop",
    category: "Countertops",
    beforeImage: "/before-old-laminate-kitchen-countertop.jpg",
    afterImage: "/black-white-marble-epoxy-countertop.jpg",
  },
  {
    id: 4,
    title: "Industrial Floor",
    category: "Flooring",
    beforeImage: "/before-damaged-warehouse-concrete-floor.jpg",
    afterImage: "/concrete-gray-industrial-epoxy-floor.jpg",
  },
  {
    id: 5,
    title: "Custom Wall Art",
    category: "Art",
    beforeImage: "/before-blank-white-wall-empty.jpg",
    afterImage: "/abstract-metallic-epoxy-resin-wall-art.jpg",
  },
  {
    id: 6,
    title: "Live Edge Table",
    category: "Tables",
    beforeImage: "/before-rough-wood-live-edge-slab.jpg",
    afterImage: "/wood-epoxy-live-edge-dining-table.jpg",
  },
]

const categories = ["All", "Flooring", "Tables", "Countertops", "Art"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our craftsmanship through completed projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.afterImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                Before/After
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-xs text-white/80 mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/90 mt-2">Click to view transformation →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedProject && (
            <div className="relative">
              <div className="aspect-[16/10] w-full">
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage}
                  afterImage={selectedProject.afterImage}
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-1">{selectedProject.category}</p>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
