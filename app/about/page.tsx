import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - EpoxyResin",
  description:
    "Learn about EpoxyResin's mission, values, and commitment to delivering quality epoxy solutions in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">About EpoxyResin</h1>
          <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
            Leading provider of premium epoxy solutions for homes and businesses
            across Nairobi and Kenya.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                EpoxyResin was founded with a simple mission: to bring world-class
                epoxy solutions to Kenya. With years of industry experience, our team
                understands the unique needs of Kenyan properties and businesses.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                From residential projects to large-scale commercial installations, we
                deliver consistent, high-quality results that exceed expectations.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We're passionate about transforming spaces and building lasting
                relationships with our clients through professionalism, quality, and
                transparent communication.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg h-96 flex items-center justify-center text-white text-lg font-semibold">
              [About Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality",
                description:
                  "We never compromise on materials, techniques, or attention to detail.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Focus",
                description:
                  "Your satisfaction is our priority. We listen, understand, and deliver.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Reliability",
                description:
                  "We deliver on time and on budget with transparent communication.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We continuously innovate and improve our processes and services.",
              },
            ].map((value, i) => (
              <div key={i} className="card text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                label: "Years Experience",
                description:
                  "A decade of proven expertise in epoxy installations and coatings.",
              },
              {
                number: "500+",
                label: "Projects Completed",
                description:
                  "Successful residential and commercial projects across Kenya.",
              },
              {
                number: "100%",
                label: "Satisfaction Guaranteed",
                description:
                  "We stand behind our work with comprehensive warranties.",
              },
            ].map((stat, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="font-bold mb-2">{stat.label}</h3>
                <p className="text-neutral-700 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with professional epoxy
            solutions.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary">
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
