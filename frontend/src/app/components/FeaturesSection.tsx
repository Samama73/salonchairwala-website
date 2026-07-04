"use client";

import { Leaf, Brush, RefreshCw, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
  // Text aur content 100% original rakha gaya hai
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          <p className="mt-3 md:mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            Premium salon furniture crafted to elevate comfort, style and
            client experience.
          </p>
        </div>

        {/* Features Grid - Grid cols 2 for mobile, 4 for laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-3 transition-all duration-500 animate-fade-up float-${index + 1}`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-3 md:mb-6 pulse-icon group-hover:scale-110 transition-all duration-500">
                {/* Original icon rendering */}
                <div className="scale-75 md:scale-100 flex items-center justify-center">
                   {item.icon}
                </div>
              </div>

              {/* Title - Mobile me chhota, Laptop me original (text-xl) */}
              <h3 className="text-[13px] md:text-xl font-semibold text-gray-900 mb-2 md:mb-4 leading-snug md:leading-normal">
                {item.title}
              </h3>

              {/* Description - Mobile me chhota, Laptop me original */}
              <p className="text-[11px] md:text-base text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-none">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 md:mt-20">
          <p className="text-lg md:text-2xl font-semibold text-gray-900">
            Your Success, Our Priority.
          </p>

          <p className="text-xs md:text-base text-gray-600 mt-2 md:mt-3">
            Delivering quality, comfort and trust to salons across India.
          </p>
        </div>

      </div>

      {/* Styles remains 100% untouched */}
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