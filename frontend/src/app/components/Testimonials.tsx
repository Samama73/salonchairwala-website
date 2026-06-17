const testimonials = [
  {
    name: "Heaven Salon",
    city: "Mumbai",
    image: "/testimonials/heaven.png",
    review:
      "Outstanding quality and elegant designs. The furniture completely transformed our salon.",
  },
  {
    name: "Trimx",
    city: "Kerala",
    image: "/testimonials/trimx.png",
    review:
      "Professional service and excellent product quality. Highly recommended.",
  },
  {
    name: "Priyanka",
    city: "Hyderabad",
    image: "/testimonials/priyanka.png",
    review:
      "Premium products at competitive prices. Our clients love the new look.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Trusted By Salon Professionals
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center"
            >

              {/* BIGGER IMAGE */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-red-100 shadow-lg mx-auto mb-6"
              />

              {/* Review */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Name */}
              <h3 className="font-bold text-lg">
                {testimonial.name}
              </h3>

              {/* City */}
              <p className="text-sm text-gray-500">
                {testimonial.city}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}