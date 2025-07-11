import { FaCheckCircle } from 'react-icons/fa';

export default function ConsultingHero() {
  return (
    <section className="bg-[#F9F8F6] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/user-2.jpg" // replace with actual image path
            alt="Woman using phone"
            className="rounded-xl object-cover w-full h-full max-h-[600px]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Your one stop to all consulting needs
          </h2>
          <p className="text-gray-600 mb-6">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Praesent congue erat at massa. Vivamus aliquet elit.
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {[
              'Trusted by thousands',
              'Certificate awarded',
              'Weekly reports',
              'Proven track of success',
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="bg-green-500 text-white px-5 py-3 rounded-full font-medium hover:bg-green-600 transition">
            About me
          </button>
        </div>
      </div>
    </section>
  );
}
