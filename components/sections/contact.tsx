"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Contact() {
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
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 bg-white rounded-3xl shadow-xl mt-20 scroll-mt-20"
    >
      <div className="mb-14 text-center">
        <Badge className="mb-3 bg-red-100 text-red-800 hover:bg-red-200">
          Get in Touch
        </Badge>
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Interested in discussing frontend development, collaboration, or opportunities? Feel free to reach out.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start" ref={ref}>
        {/* View Resume Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl shadow-md text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">View My Resume</h3>
          <p className="text-gray-600 mb-6">
            Explore my experience, skills, and project highlights in a detailed resume.
          </p>
          <a
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-medium hover:underline underline-offset-4"
          >
            Open Resume 
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-5 bg-white p-10 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Subject"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full min-h-[120px] rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-md shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
