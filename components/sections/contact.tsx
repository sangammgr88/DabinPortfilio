"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FormEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_a9cte1a",
          "template_pctp3x7",
          form.current,
          "vBN1eIVDxf_tHK1K0"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

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
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start" ref={ref}>
        {/* View Resume Box */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl shadow-lg text-center space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-red-700">
              View My Resume
            </h3>
            <p className="text-gray-600">
              Explore my experience, skills, and project highlights in a
              detailed resume.
            </p>
          </div>

          <a
            href="/DABIN CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Open Resume
          </a>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-5 pt-4">
            <a
              href="https://www.linkedin.com/in/dabin-thapa-16b865262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://www.instagram.com/magardabin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/dabinthapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-5 bg-white p-10 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 outline-none"
                  placeholder="Your name"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-md shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </motion.form>
      </div>
    </section>
  );
}
