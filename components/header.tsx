"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-serif font-semibold text-lg lg:text-xl text-foreground">Aspire International</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Services
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                About
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Careers
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Contact
              </Button>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Services
              </Button>
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Careers
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground mt-2">Get Started</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
