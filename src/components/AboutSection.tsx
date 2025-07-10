import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <Image
          src="/globe.svg"
          alt="About Illustration"
          width={120}
          height={120}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">About us</h2>
        <p className="text-blue-800 mb-4">
          We offer regular passenger transport and international parcel delivery
          services from Moldova to Europe. Our mission is to provide safe,
          comfortable, and affordable travel and shipping solutions for
          everyone.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
        >
          Read More
        </a>
      </div>
    </section>
  );
}
