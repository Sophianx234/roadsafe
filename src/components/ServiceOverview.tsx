import Image from 'next/image'

import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa6';


export default function ServiceOverview() {
  // components/RentAppPromo.tsx

  return (
    <section className="relative pt-32  bg-white">
      <div className='w-full   py-20 text-white px-6 md:px-0'>
    <div className='bg-blue-600 mx-2 h-full py-16 pl-16 '>

      <div className=" flex flex-col md:flex-row items-center justify-between gap-12 ">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold   mb-6 font-barlow leading-9">
            We come up with an app,<br />
            available on App Store and<br />
            Google Play! Download for free!
          </h2>

          {/* Store Badges */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
              >
              <FaApple size={20} />
              <span className="text-sm font-medium">App Store</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
              >
              <FaGooglePlay size={20} />
              <span className="text-sm font-medium">Google Play</span>
            </a>
          </div>
        </div >

        {/* Right Section - Phone Mockup Image */}
        
            <Image
              src="/images/mockup-1.png"
              alt="App Phone UI"
              width={400}
              height={800}
              className=" w-64  absolute right-16 "
              />
          
      </div>
              </div>
              </div>
    </section>
  )
}
