import Hero from "@/components/sections/hero"
import Expertise from "@/components/sections/expertise"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafb]">
      <Header />
      <main className="container px-4 mx-auto md:px-6">
        <Hero />
        <Expertise />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
