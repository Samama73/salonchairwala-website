import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping Policy of Salon Chair Wala — delivery timelines, charges, and coverage for salon furniture orders across India.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="text-red-900 font-semibold uppercase tracking-[0.35em] text-xs text-center">
          Legal
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 text-center tracking-tight font-elegant text-gray-950">
          Shipping Policy
        </h1>
        <p className="text-gray-400 text-sm text-center mt-4">
          Last updated: August 2026
        </p>

        <div className="mt-14 space-y-10 text-gray-600 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              1. Delivery Coverage
            </h2>
            <p>
              We manufacture and ship salon furniture from our facility in
              Kalyan, Maharashtra, to customers across India. Delivery to
              select remote locations may be subject to availability of
              transport partners.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              2. Processing Time
            </h2>
            <p>
              Orders are processed and dispatched after payment confirmation.
              Since much of our furniture is built or finished to order,
              processing time may vary by product and custom requirements —
              our team will share an estimated timeline once your order is
              confirmed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              3. Shipping Charges
            </h2>
            <p>
              Shipping/transport charges depend on your delivery location,
              order size, and the transport option selected at checkout.
              Applicable charges are shown before you complete your order, or
              communicated directly by our team for bulk and setup orders.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              4. Delivery Timeline
            </h2>
            <p>
              Estimated delivery timelines vary based on your location and
              the transport partner used. We will share tracking or delivery
              updates via WhatsApp or phone once your order has been
              dispatched.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              5. Damaged Or Delayed Shipments
            </h2>
            <p>
              If your order arrives damaged or is significantly delayed,
              please contact us within 48 hours of delivery (or expected
              delivery) with photos and your order details, and we will
              resolve it as per our{" "}
              
            <a href="/return-refund-policy"
                className="text-red-900 underline"
              >
                Return &amp; Refund Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-950 mb-3 font-elegant">
              6. Contact Us
            </h2>
            <p>
              For any shipping-related questions, reach us through our{" "}
              <a href="/contact" className="text-red-900 underline">
                Contact page
              </a>{" "}
              or WhatsApp us directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}