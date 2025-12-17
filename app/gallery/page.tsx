import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - EpoxyResin",
  description:
    "View our portfolio of epoxy projects. See the quality and craftsmanship we deliver for homes and businesses.",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Modern Garage Floor",
      category: "Epoxy Flooring",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    },
    {
      title: "Kitchen Countertop",
      category: "Countertop Epoxy",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
      title: "Commercial Warehouse",
      category: "Commercial Flooring",
      image: "https://images.pexels.com/photos/2407927/pexels-photo-2407927.jpeg",
    },
    {
      title: "Industrial Facility",
      category: "Industrial Coating",
      image: "https://images.pexels.com/photos/3810790/pexels-photo-3810790.jpeg",
    },
    {
      title: "Retail Showroom",
      category: "Commercial Flooring",
      image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
    },
    {
      title: "Residential Bathroom",
      category: "Wall Coatings",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
  ];

  return (
    <>
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Our Work</h1>
          <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
            Browse our portfolio of completed projects showcasing the quality and
            craftsmanship we deliver for our clients.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 bg-neutral-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Impressed by Our Work?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your space. Request a free quote today.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary">
              Get Your Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
