import Image from "next/image";
import { FaLeaf, FaCarSide, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
const advantages = [
  { title: "Fast Delivery", icon: "/globe.svg" },
  { title: "Low Price", icon: "/globe.svg" },
  { title: "Comfortable Buses", icon: "/globe.svg" },
  { title: "Experienced Drivers", icon: "/globe.svg" },
  { title: "Parcel Tracking", icon: "/globe.svg" },
  { title: "24/7 Support", icon: "/globe.svg" },
];

export default function AdvantagesGrid() {
  return (
    <section className="w-full  max-w-6xl mx-auto py-10 px-4">
    
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl mb-16 font-bebas md:text-5xl tracking-wider text-center font-semibold ">
          Feel the Best Experience <br /> with Our Rental Deals!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 mb-5 px-5 py-4 pb-1 rounded-xl">

            <FaLeaf className="text-blue-400 text-4xl mb-4" />
            </div>
            <h3 className="font-semibold text-base mb-1">Eco-Friendly</h3>
            <p className="text-sm text-gray-600 font-tiktok">
              It's time to change! Contribute to the environment with us by moving to electric-carbon free vehicles!
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
          <div className="bg-blue-50 px-5 mb-5 py-4 pb-1 rounded-xl">

          <IoCarSportSharp className="text-blue-500 text-4xl mb-4" />
          </div>
            <h3 className="font-semibold text-base mb-1">Well-Maintained Car</h3>
            <p className="text-sm text-gray-600 font-tiktok ">
              Our vehicles will always maintained by us, we always prioritize your comfort and safety!
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col  items-center text-center">
          <div className="bg-blue-50 mb-5 px-5 py-4 pb-1 rounded-xl">

            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
          </div>
            <h3 className="font-semibold text-base mb-1">Plenty of Stations</h3>
            <p className="text-sm text-gray-600 font-tiktok">
              Worrying about your vehicle battery life? Don’t worry, we already have stations scattered in place!
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
          <div className="bg-blue-50 mb-5 px-5 py-4 pb-1 rounded-xl">

            <FaMobileAlt className="text-blue-500 text-4xl mb-4" />
          </div>
            <h3 className="font-semibold text-base mb-1">Easy to Use</h3>
            <p className="text-sm text-gray-600 font-tiktok">
              Grab your phone, search for location, pick up your vehicle, track your usage, and enjoy your journey!
            </p>
          </div>
        </div>
      </div>
    </section>
 

    </section>
  );
}
