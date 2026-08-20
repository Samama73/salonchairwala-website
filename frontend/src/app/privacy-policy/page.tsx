import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Salon Chair Wala (Redwal Furniture OPC Pvt. Ltd.) — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="text-red-900 font-semibold uppercase tracking-[0.35em] text-xs text-center">
          Legal
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-center tracking-tight font-elegant text-gray-950">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm text-center mt-4">
          Last updated: August 2026
        </p>

        <div className="mt-14 space-y-10 text-gray-600 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              1. Introduction
            </h2>
            <p>
              Salon Chair Wala, operated by Redwal Furniture OPC Pvt. Ltd.
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), respects your
              privacy. This policy explains what information we collect when
              you use our website, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-gray-800">Contact details</strong> you
                provide, such as your name and phone number, when you submit
                an enquiry through our WhatsApp popup, checkout, or contact
                forms.
              </li>
              <li>
                <strong className="text-gray-800">Order information</strong>,
                including products selected, delivery address, and payment
                status, when you place an order.
              </li>
              <li>
                <strong className="text-gray-800">Usage data</strong> such as
                pages visited and interactions on our site, collected
                automatically through analytics tools.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and fulfil your orders.</li>
              <li>
                To respond to enquiries sent via WhatsApp, phone, or email.
              </li>
              <li>
                To improve our website and product offerings based on how
                visitors use our site.
              </li>
              <li>
                To send order updates or respond to your requests on
                WhatsApp, where you have initiated contact with us.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              4. Sharing Of Information
            </h2>
            <p>
              We do not sell your personal information. Data you submit is
              stored securely and used only for the purposes stated above. We
              may share limited information with delivery and payment
              partners solely to complete your order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
                5. Cookies Analytics
            </h2>
            <p>
                Our website may use cookies and analytics tools to understand how
                visitors use our site and to improve our services. This data is
                collected in an anonymized form. You can control cookies through
                your browser settings.
            </p>
            </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              6. Your Choices
            </h2>
            <p>
              You may contact us at any time to request access to, correction
              of, or deletion of your personal information, using the details
              on our{" "}
              <a href="/contact" className="text-red-900 underline">
                Contact page
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              7. Contact Us
            </h2>
            <p>
              For any questions about this Privacy Policy, reach us at{" "}
              
            <a href="mailto:redwalenterprises@gmail.com"
                className="text-red-900 underline"
              >
                redwalenterprises@gmail.com
              </a>{" "}
              or through our{" "}
              <a href="/contact" className="text-red-900 underline">
                Contact page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}