import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - EpoxyResin",
  description:
    "Explore our comprehensive epoxy services including flooring, countertops, walls, and commercial applications.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Epoxy Flooring",
      description:
        "Transform your floors with durable, glossy epoxy coatings. Perfect for garages, warehouses, showrooms, and residential spaces.",
      features: [
        "Highly durable and long-lasting",
        "Easy to clean and maintain",
        "Slip-resistant options available",
        "Custom colors and finishes",
        "Industrial-grade quality",
      ],
      icon: "🏭",
    },
    {
      title: "Countertop Epoxy",
      description:
        "Create stunning, functional countertops for your kitchen or bathroom. Epoxy provides beauty and durability combined.",
      features: [
        "Seamless appearance",
        "Heat and stain resistant",
        "Unique color customization",
        "High-gloss or matte finishes",
        "Food-safe options",
      ],
      icon: "🍽️",
    },
    {
      title: "Wall Coatings",
      description:
        "Protect and beautify your walls with professional epoxy coatings. Ideal for commercial, industrial, and residential use.",
      features: [
        "Protective barrier against damage",
        "Washable and easy to maintain",
        "Various color options",
        "Chemical resistant",
        "Moisture protection",
      ],
      icon: "🧱",
    },
    {
      title: "Commercial Flooring",
      description:
        "Heavy-duty epoxy solutions designed for warehouses, factories, and commercial facilities.",
      features: [
        "Extreme durability",
        "Non-slip surfaces",
        "Temperature resistant",
        "Customizable designs",
        "Fast installation",
      ],
      icon: "🏢",
    },
    {
      title: "Industrial Coating",
      description:
        "Specialized coatings for industrial environments requiring maximum protection and durability.",
      features: [
        "Chemical resistant",
        "High-temperature rated",
        "Corrosion protection",
        "Anti-microbial options",
        "Professional installation",
      ],
      icon: "⚙️",
    },
    {
      title: "Repair & Maintenance",
      description:
        "Professional repair and maintenance services to keep your epoxy surfaces looking new.",
      features: [
        "Patch repairs",
        "Re-sealing services",
        "Restoration work",
        "Regular maintenance plans",
        "Quick response times",
      ],
      icon: "🔧",
    },
  ];

  return (
    <>
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
            Comprehensive epoxy solutions for every need. From residential to
            commercial applications, we've got you covered.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="card group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-700 mb-6">{service.description}</p>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your project and get a free quote.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
