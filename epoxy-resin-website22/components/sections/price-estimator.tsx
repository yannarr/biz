"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const PRICING_TIERS = [
  {
    name: "Basic Epoxy",
    description: "Standard solid color epoxy coating",
    pricePerSqm: 1500,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Metallic Epoxy",
    description: "Premium metallic finish with shimmer",
    pricePerSqm: 2500,
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Decorative Flakes",
    description: "Textured with colored flakes",
    pricePerSqm: 2000,
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Custom Design",
    description: "Bespoke patterns and artistic designs",
    pricePerSqm: 3500,
    color: "from-indigo-500 to-purple-500",
  },
]

export function PriceEstimator() {
  const [squareMeters, setSquareMeters] = useState<string>("")
  const [selectedTier, setSelectedTier] = useState(0)

  const calculatePrice = () => {
    const sqm = Number.parseFloat(squareMeters)
    if (isNaN(sqm) || sqm <= 0) return 0
    return sqm * PRICING_TIERS[selectedTier].pricePerSqm
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const estimatedPrice = calculatePrice()

  return (
    <section id="estimator" className="relative py-24 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Price Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Get an Instant{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Price Estimate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Calculate the cost of your epoxy flooring project in seconds
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6">Calculate Your Project</h3>

              {/* Square Meters Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Area (Square Meters)</label>
                <input
                  type="number"
                  value={squareMeters}
                  onChange={(e) => setSquareMeters(e.target.value)}
                  placeholder="Enter area in m²"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  min="0"
                  step="0.1"
                />
              </div>

              {/* Tier Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Select Epoxy Type</label>
                <div className="space-y-2">
                  {PRICING_TIERS.map((tier, index) => (
                    <button
                      key={tier.name}
                      onClick={() => setSelectedTier(index)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        selectedTier === index ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{tier.name}</div>
                          <div className="text-sm text-muted-foreground">{tier.description}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-primary">{formatPrice(tier.pricePerSqm)}</div>
                          <div className="text-xs text-muted-foreground">per m²</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Display */}
              {squareMeters && Number.parseFloat(squareMeters) > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <div className="text-sm font-medium text-foreground/70 mb-2">Estimated Total Cost</div>
                  <div className="text-4xl font-bold text-foreground mb-4">{formatPrice(estimatedPrice)}</div>
                  <div className="text-sm text-foreground/70">
                    For {squareMeters} m² of {PRICING_TIERS[selectedTier].name}
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">What's Included</h4>
                  <p className="text-sm text-muted-foreground">
                    All estimates include surface preparation, materials, and professional installation
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Surface grinding and preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Premium epoxy materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Professional installation by certified team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>UV-resistant topcoat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Quality guarantee</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h4 className="font-semibold mb-3">Additional Factors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>Prices may vary based on site conditions and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>Complex patterns or logos may require custom pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>Repairs and extensive prep work priced separately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>Minimum project size may apply</span>
                </li>
              </ul>
            </Card>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Get Accurate Quote</a>
            </Button>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            * This is an estimate only. Final pricing will be determined after a site visit and consultation. Contact us
            for a detailed, obligation-free quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
