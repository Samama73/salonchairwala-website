import { Leaf, Brush, RefreshCw, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Leaf size={28} />,
      title: "Crafted for Comfort and Style",
      desc: "At MARC Salon Furniture, every piece is carefully crafted to combine exceptional comfort with sophisticated style, ensuring lasting quality and professionalism.",
    },
    {
      icon: <Brush size={28} />,
      title: "Luxurious Designs for Modern Salons",
      desc: "We keep up with today’s salon needs, offering functional yet elegant furniture that blends practicality with premium design aesthetics.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Trusted by Beauty Salons Worldwide",
      desc: "With over 40,000 salons worldwide, our reputation is built on trust, quality, and long-lasting client relationships.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Solutions Made for You",
      desc: "We offer tailored salon solutions that balance efficiency, beauty, and client experience for modern businesses.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Luxury Salon Furniture for Every Space
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 text-black mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="text-center mt-16 text-gray-700 text-lg">
          Your Success, Our Priority.
        </div>

      </div>
    </section>
  );
}