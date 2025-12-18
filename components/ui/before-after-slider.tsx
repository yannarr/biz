"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: beforeImage, label: beforeLabel },
    { src: afterImage, label: afterLabel },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Image Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        >
          <img
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].label}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            {images[currentIndex].label}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`View ${index === 0 ? beforeLabel : afterLabel}`}
          />
        ))}
      </div>
    </div>
  )
}
