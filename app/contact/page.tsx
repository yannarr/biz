import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - EpoxyResin",
  description:
    "Get in touch with our epoxy specialists. We're here to answer your questions and discuss your project needs.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
            Have questions about our epoxy services? We're here to help. Contact us
            today and let's discuss your project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <a
                href="tel:+254712345678"
                className="text-neutral-700 hover:text-primary-600"
              >
                +254 712 345 678
              </a>
            </div>

            <div className="card text-center">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:info@epoxyresin.co.ke"
                className="text-neutral-700 hover:text-primary-600"
              >
                info@epoxyresin.co.ke
              </a>
            </div>

            <div className="card text-center">
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-neutral-700">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
