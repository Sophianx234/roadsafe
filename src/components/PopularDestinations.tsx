import Image from "next/image";

const destinations = [
  { from: "Chisinau", to: "Berlin", price: 34, img: "/vercel.svg" },
  { from: "Chisinau", to: "Luxembourg", price: 56, img: "/vercel.svg" },
  { from: "Chisinau", to: "Prague", price: 32, img: "/vercel.svg" },
  { from: "Chisinau", to: "Rotterdam", price: 28, img: "/vercel.svg" },
  { from: "Chisinau", to: "Vienna", price: 40, img: "/vercel.svg" },
  { from: "Chisinau", to: "Paris", price: 60, img: "/vercel.svg" },
];

export default function PopularDestinations() {
  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">
        Popular destinations with departure from Chisinau
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((dest, i) => (
          <div
            key={i}
            className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow border border-blue-100"
          >
            <div className="relative w-full h-40">
              <Image
                src={dest.img}
                alt={dest.to}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-blue-900 font-semibold text-lg">
                  {dest.from} → {dest.to}
                </div>
                <div className="text-blue-700 font-bold text-xl mt-1">
                  €{dest.price}
                </div>
              </div>
              <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
