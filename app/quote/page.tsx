import { QuoteForm } from "@/components/forms/quote-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote - EpoxyResin",
  description:
    "Request a free quote for your epoxy project. Fill out our form and we'll get back to you within 24 hours.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4">Request a Quote</h1>
          <p className="text-lg text-neutral-700 text-center max-w-2xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote.
            Fast, transparent, and no hidden fees.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <QuoteForm />
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-success-50 border border-success-200 rounded-lg p-6">
              <h3 className="font-bold text-success-900 mb-2">
                What Happens Next?
              </h3>
              <ul className="text-success-800 space-y-2">
                <li>• We'll review your project details</li>
                <li>• Our team will contact you within 24 hours</li>
                <li>• We'll provide a detailed and transparent quote</li>
                <li>• Schedule a site visit if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
