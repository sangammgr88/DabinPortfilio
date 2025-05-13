"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Star, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Education() {
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

  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="mb-12">
        <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-200">Academic Background</Badge>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
          Education & Training
        </h2>
        <p className="mt-2 text-gray-600">Academic qualifications and specialized training in laboratory science</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute transform rotate-45 bg-red-600 text-white text-xs font-bold text-center py-1 right-[-35px] top-[32px] w-[170px]">
                Merits
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-2">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">MSc Applied Microbiology and Biotechnology</CardTitle>
                  <p className="text-red-600 font-medium">University of Wolverhampton</p>
                </div>
                <Badge className="bg-red-50 text-red-800">2023 - 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Key Subjects</h4>
                    <p className="text-gray-600">Microbiology, Biotechnology, Molecular Biology, Chemistry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Research Project</h4>
                    <p className="text-gray-600">
                      Antibiotic sensitivity test of E.coli isolated from chicken fecal sample
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Achievement</h4>
                    <p className="text-gray-600">Graduated with Merits</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl">Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-red-50 to-white border border-red-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Award className="w-5 h-5 text-red-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Biology Research Training Program</h4>
                    <p className="text-sm text-gray-600">Comprehensive training in research methodologies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-red-50 to-white border border-red-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Award className="w-5 h-5 text-red-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Laboratory Safety Certification</h4>
                    <p className="text-sm text-gray-600">Advanced safety protocols for laboratory environments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-red-50 to-white border border-red-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <Award className="w-5 h-5 text-red-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Good Laboratory Practice (GLP) Training</h4>
                    <p className="text-sm text-gray-600">Standards for quality and consistency in lab work</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
