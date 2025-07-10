const testimonials = [
  {
    name: "Maria S.",
    rating: 5,
    review:
      "Excellent service! The bus was comfortable and the staff very friendly. Highly recommend.",
  },
  {
    name: "Alex P.",
    rating: 4,
    review:
      "Fast parcel delivery and great prices. My package arrived safely and on time.",
  },
  {
    name: "Elena D.",
    rating: 5,
    review:
      "Very professional drivers and clean buses. Will use again for my next trip.",
  },
  {
    name: "Victor T.",
    rating: 4,
    review:
      "Easy booking process and helpful support. Good experience overall.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-blue-950/80 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">
          What do our customers say about us?
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-start border border-blue-100"
            >
              <Stars count={t.rating} />
              <p className="text-blue-900 font-medium mb-2">{t.review}</p>
              <span className="text-blue-700 font-semibold mt-auto">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
