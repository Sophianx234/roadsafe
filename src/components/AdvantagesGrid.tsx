import Image from "next/image";

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
    <section className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {advantages.map((adv, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/90 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-blue-100"
          >
            <Image
              src={adv.icon}
              alt={adv.title}
              width={48}
              height={48}
              className="mb-3"
            />
            <span className="text-lg font-semibold text-blue-900">
              {adv.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
