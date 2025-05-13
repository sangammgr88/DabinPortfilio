"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Building, Calendar, CheckCircle } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Quality Controller",
      company: "Signature Flatbreads Pvt. Ltd.",
      period: "2024 - Present",
      responsibilities: [
        "Conducted microbiological and chemical tests on dough and baked products",
        "Monitored product stability and shelf-life through periodic testing",
        "Inspected packaging for defects and ensured proper sealing and labeling",
        "Worked with production team to optimize baking processes",
        "Investigated and resolved customer complaints regarding product quality",
        "Prepared detailed reports on quality control results for senior management",
      ],
    },
    {
      title: "Microbiology Laboratory Technician",
      company: "Bir Hospital, Kathmandu, Nepal",
      period: "2020 - 2023",
      responsibilities: [
        "Analyzed patient samples to identify specific pathogens causing infections",
        "Monitored infection trends within the hospital to prevent spread",
        "Performed antibiotic sensitivity tests to determine effective treatments",
        "Conducted mammalian cell culture with strict sterile techniques",
        "Maintained sterile environments through proper disinfection protocols",
        "Trained junior lab assistants in tissue culture practices and assay execution",
      ],
    },
    {
      title: "Medical Laboratory Intern",
      company: "Bir Hospital, Kathmandu, Nepal",
      period: "2018 - 2019",
      responsibilities: [
        "Conducted protein-based assays to evaluate therapeutic compounds for cancer research",
        "Performed data analysis using Microsoft Excel to streamline lab workflow",
        "Participated in team discussions for process improvements and troubleshooting",
        "Provided support during audits and maintained accurate documentation",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <div className="mb-12">
        <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-200">Professional Journey</Badge>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
          Work Experience
        </h2>
        <p className="mt-2 text-gray-600">A track record of excellence in laboratory science and quality control</p>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-3"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-3 bg-gradient-to-r from-red-600 to-red-400"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-red-500" />
                <Badge className="bg-red-50 text-red-800 hover:bg-red-100">{exp.period}</Badge>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-red-600 transition-colors">{exp.title}</h3>

              <div className="flex items-center gap-2 mb-4 text-gray-600">
                <Building className="w-4 h-4" />
                <p className="text-sm">{exp.company}</p>
              </div>

              <div className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
