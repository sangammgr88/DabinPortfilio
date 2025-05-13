"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Mail, FileText, Atom, Microscope, Beaker, GraduationCap, Dna, FlaskConical } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)
  const [progressValues, setProgressValues] = useState({
    microbiological: 0,
    hplc: 0,
    aseptic: 0,
    data: 0,
    quality: 0,
    sample: 0,
    excel: 0,
    root: 0,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      setTimeout(() => {
        setProgressValues({
          microbiological: 95,
          hplc: 90,
          aseptic: 98,
          data: 85,
          quality: 92,
          sample: 95,
          excel: 88,
          root: 90,
        })
      }, 300)
    }
  }, [inView])

  const softSkills = [
    { skill: "Leadership", icon: <Briefcase className="w-5 h-5 text-red-600" /> },
    { skill: "Communication", icon: <Mail className="w-5 h-5 text-red-600" /> },
    { skill: "Time Management", icon: <FileText className="w-5 h-5 text-red-600" /> },
    { skill: "Adaptability", icon: <Atom className="w-5 h-5 text-red-600" /> },
    { skill: "Critical Thinking", icon: <Microscope className="w-5 h-5 text-red-600" /> },
    { skill: "Problem-Solving", icon: <Beaker className="w-5 h-5 text-red-600" /> },
    { skill: "Team Collaboration", icon: <GraduationCap className="w-5 h-5 text-red-600" /> },
    { skill: "Attention to Detail", icon: <Dna className="w-5 h-5 text-red-600" /> },
    { skill: "Research Skills", icon: <FlaskConical className="w-5 h-5 text-red-600" /> },
  ]

  return (
    <section id="skills" className="py-16 bg-white rounded-2xl p-8 shadow-lg scroll-mt-20">
      <div className="mb-12">
        <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-200">Professional Capabilities</Badge>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
          Skills & Expertise
        </h2>
        <p className="mt-2 text-gray-600">Technical proficiencies and soft skills developed throughout my career</p>
      </div>

      <Tabs defaultValue="technical" className="w-full" ref={ref}>
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-red-100 data-[state=active]:text-red-800 transition-all duration-300"
          >
            Technical Skills
          </TabsTrigger>
          <TabsTrigger
            value="soft"
            className="data-[state=active]:bg-red-100 data-[state=active]:text-red-800 transition-all duration-300"
          >
            Soft Skills
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technical">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Microbiological Testing</h4>
                  <span className="text-sm text-red-600">{progressValues.microbiological}%</span>
                </div>
                <Progress
                  value={progressValues.microbiological}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">HPLC and ICP Methods</h4>
                  <span className="text-sm text-red-600">{progressValues.hplc}%</span>
                </div>
                <Progress
                  value={progressValues.hplc}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Aseptic Techniques</h4>
                  <span className="text-sm text-red-600">{progressValues.aseptic}%</span>
                </div>
                <Progress
                  value={progressValues.aseptic}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Data Analysis</h4>
                  <span className="text-sm text-red-600">{progressValues.data}%</span>
                </div>
                <Progress
                  value={progressValues.data}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Quality Documentation</h4>
                  <span className="text-sm text-red-600">{progressValues.quality}%</span>
                </div>
                <Progress
                  value={progressValues.quality}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Sample Preparation</h4>
                  <span className="text-sm text-red-600">{progressValues.sample}%</span>
                </div>
                <Progress
                  value={progressValues.sample}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">MS Excel & SPSS</h4>
                  <span className="text-sm text-red-600">{progressValues.excel}%</span>
                </div>
                <Progress
                  value={progressValues.excel}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex justify-between">
                  <h4 className="font-medium">Root Cause Analysis</h4>
                  <span className="text-sm text-red-600">{progressValues.root}%</span>
                </div>
                <Progress
                  value={progressValues.root}
                  className="h-2 bg-red-100"
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400"
                />
              </motion.div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="soft">
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {softSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border border-red-100 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.skill}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
