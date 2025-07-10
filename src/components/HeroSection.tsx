import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[url('/images/car-3.jpg')] bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center min-h-[100dvh]"
    >
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/60 to-black/60 z-0" />

      {/* Optional decorative image overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
        
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl text-center">
        <h1 className="text-3xl uppercase md:text-5xl 
        font-archivo  font-extrabold text-white mb-6 drop-shadow-lg">
          Regular trips to Europe & Parcel Delivery
        </h1>

       {/* 
        <form className="w-full bg-white/90 rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-3 md:gap-4 items-center">
          <input
            type="text"
            placeholder="From"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="To"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            required
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            min="1"
            max="10"
            placeholder="Passengers"
            required
            className="w-28 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
          >
            Search
          </button>
        </form> */}
      </div>
    </section>
  );
}
