"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Beaker, FlaskConical, Microscope, Dna, Atom, FileText, ChevronRight, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">
            <Microscope className="w-4 h-4 mr-2" />
            Laboratory Scientist & Quality Controller
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Advancing Science Through{" "}
            <span className="text-red-600 relative">
              Precision
              <span className="absolute bottom-2 left-0 w-full h-1 bg-red-200"></span>
            </span>{" "}
            &{" "}
            <span className="text-red-600 relative">
              Quality
              <span className="absolute bottom-2 left-0 w-full h-1 bg-red-200"></span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px] leading-relaxed">
            Highly motivated laboratory scientist with expertise in microbiology, quality control, and analytical
            techniques. Dedicated to maintaining the highest standards in laboratory practices and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="#contact">
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-200 hover:border-red-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="#experience">
                View Experience
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-red-50 to-red-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <motion.div
            className="relative grid grid-cols-3 gap-4 p-6"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            {[
              { icon: <Beaker className="h-10 w-10 text-red-600 mb-2" />, label: "Lab Testing" },
              { icon: <Microscope className="h-10 w-10 text-red-600 mb-2" />, label: "Microbiology" },
              { icon: <Dna className="h-10 w-10 text-red-600 mb-2" />, label: "Biotechnology" },
              { icon: <FlaskConical className="h-10 w-10 text-red-600 mb-2" />, label: "Quality Control" },
              { icon: <Atom className="h-10 w-10 text-red-600 mb-2" />, label: "Research" },
              { icon: <FileText className="h-10 w-10 text-red-600 mb-2" />, label: "Documentation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center h-24 w-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={item}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
