import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Beaker, Microscope } from "lucide-react"

export default function Interests() {
  return (
    <section id="interests" className="py-16">
      <div className="mb-12">
        <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-200">Personal</Badge>
        <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
        <p className="mt-2 text-gray-600">Beyond the laboratory: what drives my curiosity</p>
      </div>

      <Card className="border-none shadow-md bg-white">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-red-50">
              <Heart className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="font-medium mb-2">Scientific Literature</h3>
              <p className="text-sm text-gray-600">
                Staying updated with the latest research and advancements in microbiology and biotechnology.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-red-50">
              <Beaker className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="font-medium mb-2">Experimental Cooking</h3>
              <p className="text-sm text-gray-600">
                Applying methodical approaches from the lab to create and perfect new recipes in the kitchen.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-red-50">
              <Microscope className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="font-medium mb-2">Science Outreach</h3>
              <p className="text-sm text-gray-600">
                Volunteering in community science events to share knowledge and connect with others.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
