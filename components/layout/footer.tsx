import { FlaskConical } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <FlaskConical className="h-6 w-6 text-white" />
            <span className="text-xl font-semibold tracking-wide">Dabin Thapa</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-red-200 text-center md:text-right">
            © {new Date().getFullYear()} Dabin Thapa. All rights reserved.<br className="block md:hidden" />
            <span className="ml-1">Laboratory Scientist & Quality Controller.</span>
          </p>
        </div>

        {/* Divider line */}
        <div className="mt-8 border-t border-red-700 pt-6 text-center text-xs text-red-300">
          Designed with ❤️ for science & precision.
        </div>
      </div>
    </footer>
  )
}
