import { MapPin, Mail, Phone } from "lucide-react"

export default function KeyInfo() {
  return (
    <section className="py-8 border-t border-b border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
            <MapPin className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Location</h3>
            <p className="font-medium">41 Russell Rise, Luton LU1 5ET</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
            <Mail className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="font-medium">dabinthapa48@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Phone</h3>
            <p className="font-medium">07467602522</p>
          </div>
        </div>
      </div>
    </section>
  )
}
