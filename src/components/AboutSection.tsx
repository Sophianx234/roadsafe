import Image from "next/image";
import { MapPin, Calendar, Car } from 'lucide-react'

export default function AboutSection() {
  // components/HowItWorks.tsx

  return (
    <section className="w-full bg-[#F9FAF8] py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How it Work</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="bg-[#D9E3DD] p-4 rounded-xl mb-4">
              <MapPin className="text-[#284737]" size={32} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Choose Location</h3>
            <p className="text-sm text-gray-500">
              Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium.
              Vestibulum ante ipsum
            </p>
          </div>

          {/* Connector */}
          <div className="hidden md:block w-12 h-[2px] border-b border-dashed border-gray-400" />

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="bg-[#FA694F] p-4 rounded-xl mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Pick-Up Date</h3>
            <p className="text-sm text-gray-500">
              Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium.
              Vestibulum ante ipsum
            </p>
          </div>

          {/* Connector */}
          <div className="hidden md:block w-12 h-[2px] border-b border-dashed border-gray-400" />

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs text-center">
            <div className="bg-[#D9E3DD] p-4 rounded-xl mb-4">
              <Car className="text-[#284737]" size={32} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Book Your Car</h3>
            <p className="text-sm text-gray-500">
              Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium.
              Vestibulum ante ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
