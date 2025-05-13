"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlaskConical, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white",
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Dabin Thapa</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#expertise" className="text-sm font-medium hover:text-red-600 transition-colors relative group">
            Expertise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#experience" className="text-sm font-medium hover:text-red-600 transition-colors relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-red-600 transition-colors relative group">
            Education
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-red-600 transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <Button
          asChild
          className="hidden md:flex bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href="#contact">Contact Me</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 animate-in slide-in-from-top duration-300">
          <nav className="container flex flex-col py-4 px-4">
            <Link
              href="#expertise"
              className="py-3 px-4 hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#experience"
              className="py-3 px-4 hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="py-3 px-4 hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="py-3 px-4 hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="py-3 px-4 hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="mt-3 bg-red-600 hover:bg-red-700" onClick={() => setIsMenuOpen(false)}>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
