"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Mail,
  FileText,
  Atom,
  Microscope,
  Beaker,
  GraduationCap,
  Dna,
  FlaskConical,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState({
    microbiological: 0,
    hplc: 0,
    aseptic: 0,
    data: 0,
    quality: 0,
    sample: 0,
    excel: 0,
    root: 0,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
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
        });
      }, 300);
    }
  }, [inView]);

  const softSkills = [
    {
      skill: "Leadership",
      icon: <Briefcase className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Communication",
      icon: <Mail className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Time Management",
      icon: <FileText className="w-5 h-5 text-rose-600" />,
    },
    { skill: "Adaptability", icon: <Atom className="w-5 h-5 text-rose-600" /> },
    {
      skill: "Critical Thinking",
      icon: <Microscope className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Problem-Solving",
      icon: <Beaker className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Team Collaboration",
      icon: <GraduationCap className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Attention to Detail",
      icon: <Dna className="w-5 h-5 text-rose-600" />,
    },
    {
      skill: "Research Skills",
      icon: <FlaskConical className="w-5 h-5 text-rose-600" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-rose-50 rounded-3xl p-8 shadow-xl scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Badge className="mb-3 bg-rose-100 text-rose-800 hover:bg-rose-200 px-4 py-1 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-1 inline" /> Professional
              Capabilities
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-800 via-rose-600 to-rose-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technical proficiencies and soft skills developed throughout my
            career in laboratory sciences
          </motion.p>
        </div>

        <Tabs defaultValue="technical" className="w-full" ref={ref}>
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12 bg-rose-50 p-1 rounded-xl">
            <TabsTrigger
              value="technical"
              className="rounded-lg py-3 data-[state=active]:bg-white data-[state=active]:text-rose-800 data-[state=active]:shadow-md transition-all duration-300"
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger
              value="soft"
              className="rounded-lg py-3 data-[state=active]:bg-white data-[state=active]:text-rose-800 data-[state=active]:shadow-md transition-all duration-300"
            >
              Soft Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              variants={container}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
            >
              <div className="space-y-8">
                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Microscope className="w-5 h-5 mr-2 text-rose-600" />
                      Microbiological Testing
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.microbiological}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.microbiological}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Beaker className="w-5 h-5 mr-2 text-rose-600" />
                      HPLC and ICP Methods
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.hplc}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.hplc}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Dna className="w-5 h-5 mr-2 text-rose-600" />
                      Aseptic Techniques
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.aseptic}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.aseptic}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-rose-600" />
                      Data Analysis
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.data}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.data}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-rose-600" />
                      Quality Documentation
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.quality}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.quality}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <FlaskConical className="w-5 h-5 mr-2 text-rose-600" />
                      Sample Preparation
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.sample}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.sample}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Atom className="w-5 h-5 mr-2 text-rose-600" />
                      MS Excel & SPSS
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.excel}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.excel}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>

                <motion.div className="space-y-3" variants={item}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-rose-600" />
                      Root Cause Analysis
                    </h4>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-md">
                      {progressValues.root}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues.root}
                    className="h-3 bg-rose-100 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-rose-700 to-rose-500 rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              className="grid gap-5 md:grid-cols-3"
              variants={container}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
            >
              {softSkills.map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="h-full"
                >
                  <Card className="border border-rose-100 bg-white hover:shadow-lg transition-all duration-300 h-full overflow-hidden group">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                      <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">
                        {item.skill}
                      </h3>
                      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-rose-500">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
