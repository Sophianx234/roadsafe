import Image from "next/image";
import {
  FaUserTie,
  FaUtensils,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaBoxOpen,
  FaTruckMoving,
} from "react-icons/fa";


export default function PopularDestinations() {
  
  
    return (
      <section className="bg-blue-50 py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-center font-semibold font-bebas text-blue-900 mb-10 ">
            Our Advantages
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-blue-900">
            {/* 1. Customer service */}
            <div className="flex items-start space-x-4">
              <FaUserTie className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold font-inter leading-5">Excellent attitude towards <br /> the customer</h4>
                <p className="text-sm text-blue-800">
                  Warm meals in the FREE restaurant for every traveler!
                </p>
              </div>
            </div>
  
            {/* 2. Breakfast & Lunch */}
            <div className="flex items-start space-x-4">
              <FaUtensils className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold font-inter leading-5">Breakfast and lunch</h4>
                <p className="text-sm text-blue-800">
                  Warm meals in the FREE restaurant for every traveler!
                </p>
              </div>
            </div>
  
            {/* 3. Competitive Prices */}
            <div className="flex items-start space-x-4">
              <FaMoneyBillWave className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold font-inter leading-5">Competitive prices</h4>
                <p className="text-sm text-blue-800">
                  Probably the best prices and every 10th FREE travel!
                </p>
              </div>
            </div>
  
            {/* 4. Transmission from address to address */}
            <div className="flex items-start space-x-4">
              <FaMapMarkedAlt className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold font-inter leading-5">Transmission from <br /> address to address</h4>
                <p className="text-sm text-blue-800">
                  Transport and delivery takes place from door to door.
                </p>
              </div>
            </div>
  
            {/* 5. Parcel care */}
            <div className="flex items-start space-x-4">
              <FaBoxOpen className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold">Enhanced Parcel Care</h4>
                <p className="text-sm text-blue-800">
                  The packages are delivered to the customer's home!
                </p>
              </div>
            </div>
  
            {/* 6. Modern Transport */}
            <div className="flex items-start space-x-4">
              <FaTruckMoving className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-bold">Modern Transport</h4>
                <p className="text-sm text-blue-800">
                  Choose a trip with us, and the benefits will be on your side!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  );
}
