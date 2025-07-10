import Image from "next/image";

const services = [
  {
    title: "Transport of People",
    icon: "/window.svg",
    desc: "Comfortable, safe, and regular bus trips to major European cities. Modern fleet and professional drivers.",
  },
  {
    title: "Parcel Delivery",
    icon: "/file.svg",
    desc: "Fast and secure international parcel delivery with real-time tracking and competitive prices.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-white/90 rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-xl transition-shadow"
          >
            <Image
              src={s.icon}
              alt={s.title}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">{s.title}</h3>
            <p className="text-blue-800 text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
