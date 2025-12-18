"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Homeowner",
    content:
      "The epoxy floor in my garage is absolutely stunning. It completely transformed the space and has held up perfectly for over two years. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Restaurant Owner",
    content:
      "Our commercial kitchen countertops are not only beautiful but incredibly durable. The team was professional, timely, and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Interior Designer",
    content:
      "I've worked with many contractors, but their attention to detail and artistry is unmatched. The custom river table they created became the centerpiece of my client's home.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Business Owner",
    content:
      "The industrial flooring solution they provided for our warehouse has been maintenance-free and looks as good as day one. Excellent value for money.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it—hear from satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-chart-1 text-chart-1" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
