// app/return-refund-policy/page.tsx
// Salon Chair Wala — Return & Refund Policy
// Required for Google Merchant Center compliance

import React from "react";

export const metadata = {
  title: "Return & Refund Policy | Salon Chair Wala",
  description:
    "Return and refund policy for Salon Chair Wala (Redwal Furniture OPC Pvt Ltd) — damaged or defective parts replacement policy.",
};

export default function ReturnRefundPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Return &amp; Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: August 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. No Return, No Refund</h2>
        <p>
          All products sold by Salon Chair Wala (Redwal Furniture OPC Pvt
          Ltd) are made-to-order / custom salon furniture. As such, we do{" "}
          <strong>not accept returns or offer refunds</strong> on any product
          once the order has been confirmed and dispatched. Please review
          product specifications, dimensions, and images carefully before
          placing your order.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Damaged or Defective Parts
        </h2>
        <p>
          While we do not offer returns or refunds, we stand behind the
          quality of our products. If any part of your order arrives{" "}
          <strong>damaged in transit</strong> or is found to have a{" "}
          <strong>manufacturing defect</strong>, we will replace the affected
          part(s) free of cost — not the entire product, unless the defect
          affects the core structure and cannot be resolved with a part
          replacement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. How to Report Damage or Defects
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Inspect your order immediately upon delivery, in front of the
            delivery personnel if possible.
          </li>
          <li>
            Report any damage or defect within{" "}
            <strong>48 hours of delivery</strong> by contacting our support
            team (details below) with your order number and clear photos/
            video of the affected part.
          </li>
          <li>
            Our team will verify the issue and, if approved, dispatch the
            replacement part within the standard delivery timeline (3–5
            business days for stock parts, 31–35 days for custom parts).
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. What Is Not Covered
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Damage caused by misuse, improper installation, or normal wear and tear.</li>
          <li>Issues reported after 48 hours of delivery without prior notice.</li>
          <li>Change of mind, incorrect size/color selection, or order cancellations after dispatch.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          For any damage or defect claims, please reach out to our support
          team via WhatsApp or email with your order details:
        </p>
        <ul className="mt-2 space-y-1">
          <li>
            <strong>Business:</strong> Redwal Furniture OPC Pvt Ltd (Salon
            Chair Wala)
          </li>
          <li>
            <strong>WhatsApp/Phone:</strong> 91450 97466
          </li>
          <li>
            <strong>Email:</strong> redwalenterprises@gmail.com
          </li>
        </ul>
      </section>
    </main>
  );
}