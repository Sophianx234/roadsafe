import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Jenn Smith",
    role: "Head of Finance",
    quote: "One Bank Is A Truly Great Bank",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "/images/user-1.jpg", // replace with real image paths
  },
  {
    name: "Adam White",
    role: "Investment Advisor",
    quote: "You Have Found The Best Bank",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "/images/user-1.jpg",
  },
  {
    name: "Cris Lee",
    role: "CEO at Monex",
    quote: "The Best Customer Service, Period",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    avatar: "/images/user-1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">You're in good company</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6  w-80 rounded-xl shadow hover:shadow-lg transition">
              <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">“{t.quote}”</h3>
              <p className="text-sm text-gray-600 mb-6">{t.description}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
