import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-neutral-50 section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Transform Your Spaces with Premium Epoxy Solutions
              </h1>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Professional epoxy flooring, coatings, and resin solutions for homes
                and businesses across Nairobi and Kenya. Durable, beautiful, and
                built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg h-96 flex items-center justify-center text-white text-lg font-semibold">
              [Hero Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Epoxy Flooring",
                description:
                  "High-durability epoxy floors perfect for garages, basements, and commercial spaces.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Countertop Epoxy",
                description:
                  "Beautiful and durable epoxy countertops for kitchens and bathrooms.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Wall Coatings",
                description:
                  "Protect and beautify your walls with professional epoxy coatings.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="card group hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 group-hover:text-primary-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "Years of experience with professional-grade materials and techniques.",
              },
              {
                title: "Quality Guarantee",
                description:
                  "We stand behind our work with comprehensive warranties on all projects.",
              },
              {
                title: "Local Knowledge",
                description:
                  "Based in Nairobi, we understand the unique needs of Kenyan properties.",
              },
              {
                title: "Fast Turnaround",
                description:
                  "Efficient project completion without compromising quality.",
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-neutral-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Contact us today for a free consultation and quote
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
