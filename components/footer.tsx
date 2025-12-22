import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="font-serif font-semibold text-lg">Aspire International</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering organizations through people excellence. Your trusted partner for HR solutions.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services#recruitment" className="hover:text-primary-foreground transition-colors">
                  Recruitment & Talent Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-primary-foreground transition-colors">
                  Training & Development
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="hover:text-primary-foreground transition-colors">
                  HR Consulting & Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@aspireinternational.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  123 Business Plaza, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Aspire International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
