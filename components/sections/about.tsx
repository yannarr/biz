"use client"

import { motion } from "framer-motion"
import { Award, Users, Shield, Sparkles } from "lucide-react"

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Shield, value: "100%", label: "Quality Guarantee" },
  { icon: Sparkles, value: "1000+", label: "Projects Completed" },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/epoxy-resin-workshop-industrial-setting-craft.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Craftsmanship Meets Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we've been transforming spaces with premium epoxy solutions. Our commitment to quality
              materials, expert craftsmanship, and innovative techniques sets us apart in the industry.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every project we undertake is a testament to our dedication to durability, aesthetics, and customer
              satisfaction. From residential homes to commercial spaces, we bring your vision to life with precision and
              artistry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of skilled artisans combines traditional techniques with cutting-edge technology to deliver
              results that exceed expectations. We don't just create surfaces—we create lasting impressions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-4 sm:p-6 rounded-lg text-center hover:shadow-lg transition-shadow min-h-[160px] sm:min-h-[180px] flex flex-col justify-center"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
