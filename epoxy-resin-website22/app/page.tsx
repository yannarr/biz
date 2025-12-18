import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { PriceEstimator } from "@/components/sections/price-estimator"
import { Gallery } from "@/components/sections/gallery"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <PriceEstimator />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
