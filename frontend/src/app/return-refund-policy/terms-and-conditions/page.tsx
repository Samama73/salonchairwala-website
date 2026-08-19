// app/return-refund-policy/terms-and-conditions/page.tsx
// Salon Chair Wala — Terms & Conditions

import React from "react";

export const metadata = {
  title: "Terms & Conditions | Salon Chair Wala",
  description:
    "Terms and conditions for purchasing salon chairs and furniture from Salon Chair Wala (Redwal Furniture OPC Pvt Ltd).",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Terms &amp; Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Advance Payment</h2>
        <p>
          All advance payments made for salon chairs are{" "}
          <strong>non-refundable</strong>. By making an advance payment, the
          buyer acknowledges and agrees to this condition.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Sale Finality</h2>
        <p>
          Once sold, goods will not be taken back or exchanged. The buyer
          confirms their purchase based on personal judgment and any
          information provided by the seller.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Warranty &amp; Guarantee
        </h2>
        <p>
          Salon chairs are sold <strong>&ldquo;as is&rdquo;</strong>, with no
          warranty or guarantee, expressed or implied. The seller is not
          responsible for any future performance issues, maintenance, or
          defects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Product Inspection</h2>
        <p>
          The buyer agrees to inspect the salon chairs at the time of
          purchase or delivery. Any defects or discrepancies must be reported
          immediately. Failure to do so waives any claims against the
          seller.
        </p>
        <p className="mt-2">
          <strong>Service Location:</strong> All servicing and repairs are
          done only at our factory. No home service available.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of Maharashtra,
          India. Any disputes will fall under the exclusive jurisdiction of
          Maharashtra courts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Discount Policy</h2>
        <p>
          Any discount applied to the purchase will result in the exclusion
          of warranty and guarantee provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Order Collection &amp; Payment
        </h2>
        <p>
          If an order is not collected within 30 days, full payment must be
          made. A 1-month extension may be granted to complete the previous
          order, subject to adjusted pricing at current rates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Hydraulic Pump Replacement
        </h2>
        <p>
          We offer a one-time hydraulic pump replacement within 2 years for{" "}
          <strong>₹1,800</strong>. Applicable only for manufacturing defects
          under normal use. Original invoice is required.
        </p>
        <p className="mt-2">
          <strong>Exclusions:</strong> Damage due to misuse, accidental
          breakage, unauthorized repairs, or external factors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Service Policy</h2>
        <p>
          All servicing and repairs will be conducted exclusively at our
          factory. No on-site or home service is provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <ul className="mt-2 space-y-1">
          <li>
            <strong>Business:</strong> Redwal Furniture OPC Pvt Ltd (Salon
            Chair Wala)
          </li>
          <li>
            <strong>WhatsApp/Phone:</strong> +91 91450 97466
          </li>
          <li>
            <strong>Email:</strong> redwalenterprises@gmail.com
          </li>
        </ul>
      </section>
    </main>
  );
}