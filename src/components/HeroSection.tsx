import Image from "next/image";
import { FaShieldAlt, FaMapMarkedAlt, FaClock, FaComments } from "react-icons/fa";
export default function HeroSection() {
  return (
    <section
      className="relative bg-[url('/images/car-3.jpg')] bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center min-h-[100dvh]"
    >
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 z-0" ></div>

      {/* Optional decorative image overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
        
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        <h1 className="text-3xl uppercase md:text-7xl 
        font-archivo  font-extrabold text-white mb-6 drop-shadow-lg">
          Real-Time Road Alerts & Hazard Reporting
        </h1>

        
        <div className="w-full  justify-center font-inter tracking-tight bg-white/90 mt-10 rounded-full shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-3 md:gap-12 items-center">
        <div className="flex flex-col items-center ">
          <FaShieldAlt className="text-3xl  mb-2" />
          <p className="text-sm">Verified Safety Reports</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkedAlt className="text-3xl  mb-2" />
          <p className="text-sm">Live Hazard Mapping</p>
        </div>
        <div className="flex flex-col items-center">
          <FaClock className="text-3xl  mb-2" />
          <p className="text-sm">Real-Time Updates</p>
        </div>
        <div className="flex flex-col items-center">
          <FaComments className="text-3xl  mb-2" />
          <p className="text-sm">24/7 Chatbot Support</p>
        </div>
      </div>
        
        </div>
        
     
    </section>
  );
}
