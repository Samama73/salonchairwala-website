export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Salon Chair Wala
            </h2>

            <p className="text-gray-400 mt-2">
              A Division of Redwal Furniture OPC Pvt Ltd.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              We specialize in manufacturing and supplying premium salon furniture,
              designed with precision engineering, durability, and modern aesthetics
              for professional salon environments.
            </p>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Leadership
            </h3>

            <p className="text-gray-400">
              <span className="text-white font-medium">Founder:</span> ARVIND REDWAL
            </p>

            <p className="text-gray-400 mt-2">
              <span className="text-white font-medium">Co-Founder:</span> DINESH REDWAL
            </p>

            <p className="text-gray-500 italic mt-6 leading-relaxed">
              "Our focus is to deliver functional, durable, and design-driven furniture solutions
              that enhance the professional salon experience."
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <p className="text-gray-400">
              📍 206, F4 Building,
            </p>

            <p className="text-gray-400">
              Bhumi World, Kalyan Bypass
            </p>

            <p className="text-gray-400 mt-4">
              📞 +91 9403891146
            </p>

            <p className="text-gray-400">
              ✉️ support@salonchairwala.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Salon Chair Wala. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}