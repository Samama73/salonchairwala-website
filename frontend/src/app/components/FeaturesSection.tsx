"use client";

import { Leaf, Brush, RefreshCw, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Leaf size={28} />,
      title: "Crafted for Comfort and Style",
      desc: "Every piece is thoughtfully designed to deliver exceptional comfort, premium aesthetics, and long-lasting durability for modern salon environments.",
    },
    {
      icon: <Brush size={28} />,
      title: "Luxury Designs for Modern Salons",
      desc: "Our furniture combines elegant styling with practical functionality, helping salons create a premium experience for every client.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Trusted by Salon Professionals",
      desc: "Built on quality craftsmanship and customer satisfaction, our products are trusted by beauty professionals seeking reliability and performance.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Solutions Tailored for Your Business",
      desc: "From salon chairs to complete salon setups, we provide solutions designed to enhance efficiency, comfort, and visual appeal.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Premium salon furniture crafted to elevate comfort, style and
            client experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-up float-${index + 1}`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-6 pulse-icon group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <p className="text-2xl font-semibold text-gray-900">
            Your Success, Our Priority.
          </p>

          <p className="text-gray-600 mt-3">
            Delivering quality, comfort and trust to salons across India.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulseIcon {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out;
        }

        .float-1 {
          animation: float 4s ease-in-out infinite;
        }

        .float-2 {
          animation: float 5s ease-in-out infinite;
        }

        .float-3 {
          animation: float 4.5s ease-in-out infinite;
        }

        .float-4 {
          animation: float 5.5s ease-in-out infinite;
        }

        .pulse-icon {
          animation: pulseIcon 3s ease-in-out infinite;
        }
`}</style>
    </section>
  );
}