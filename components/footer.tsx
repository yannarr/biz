import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">RESIN</span>
              <span className="text-accent">PRO</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium epoxy solutions for floors, countertops, tables, and custom art. Built to last, designed to
              impress.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Epoxy Flooring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Epoxy Countertops
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Epoxy Tables
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Custom Resin Art
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="p-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:info@resinpro.com"
                className="p-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates and tips</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ResinPro. All rights reserved. Built with precision and passion.</p>
        </div>
      </div>
    </footer>
  )
}
