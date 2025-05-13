"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, Beaker, Dna } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="expertise" className="py-16 scroll-mt-20">
      <div className="text-center mb-12">
        <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-200">Core Expertise</Badge>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
          Laboratory Science & Quality Control
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Specialized in maintaining sterile environments, performing advanced testing, and ensuring quality standards
        </p>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <motion.div variants={item}>
          <Card className="border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-2 group-hover:bg-red-200 transition-colors">
                <Microscope className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Microbiology Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Specialized in analyzing patient samples to identify pathogens, monitoring infection trends, and
                performing antibiotic sensitivity tests to determine effective treatments.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-2 group-hover:bg-red-200 transition-colors">
                <Beaker className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Quality Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Experienced in conducting microbiological and chemical tests on products, monitoring stability and
                shelf-life, and ensuring compliance with national and international safety standards.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-2 group-hover:bg-red-200 transition-colors">
                <Dna className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Research & Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proficient in conducting protein-based assays, data analysis, and maintaining sterile techniques for
                mammalian cell culture and other research applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
