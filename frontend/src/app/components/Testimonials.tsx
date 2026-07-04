"use client";

const testimonials = [
  {
    name: "Heaven Salon",
    city: "Mumbai",
    image: "/testimonials/heaven.webp",
    review: "Outstanding quality and elegant designs. The furniture completely transformed our salon.",
  },
  {
    name: "Trimx",
    city: "Kerala",
    image: "/testimonials/trimx.webp",
    review: "Professional service and excellent product quality. Highly recommended.",
  },
  {
    name: "Priyanka",
    city: "Hyderabad",
    image: "/testimonials/priyanka.webp",
    review: "Premium products at competitive prices. Our clients love the new look.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4">
            Trusted By Salon Professionals
          </h2>
        </div>

        {/* Testimonial Cards - Horizontal Swipe for Mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 hide-scrollbar">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[85%] md:w-auto flex-shrink-0 snap-center bg-gray-50 p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-red-100 shadow-lg mx-auto mb-6"
              />

              {/* Review */}
              <p className="text-gray-600 mb-6 italic text-sm md:text-base">
                "{testimonial.review}"
              </p>

              {/* Name & City */}
              <h3 className="font-bold text-base md:text-lg">
                {testimonial.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                {testimonial.city}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Safe Styles for Horizontal Scroll */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}