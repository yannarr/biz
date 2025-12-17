import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "EpoxyResin - Premium Epoxy Services in Nairobi, Kenya",
  description:
    "Professional epoxy flooring, countertops, and coatings for residential and commercial properties in Nairobi and Kenya. Get a free quote today.",
  keywords: [
    "epoxy flooring",
    "epoxy coatings",
    "epoxy resin",
    "Nairobi",
    "Kenya",
    "flooring",
    "countertops",
  ],
  openGraph: {
    title: "EpoxyResin - Premium Epoxy Services in Nairobi, Kenya",
    description:
      "Professional epoxy flooring, countertops, and coatings for residential and commercial properties.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "EpoxyResin - Premium Epoxy Services",
    description: "Professional epoxy services in Nairobi, Kenya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
