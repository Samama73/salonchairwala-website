"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [mounted, setMounted] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [customer, setCustomer] = useState({ name: "", email: "", phone: "", pinCode: "", address: "" });

  // QR payment ke liye states
  const [showQR, setShowQR] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<string>(""); // base64 image (optional)
  const [screenshotName, setScreenshotName] = useState("");
  const [utrError, setUtrError] = useState("");

  // 🔗 APNA GOOGLE SHEET WEB APP URL YAHAN RAKHE
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyS8F_JBfYgIGzpAI39KaV8rkfBBdcDWjMur-VEeGRxoBMF2FOMzYObIk-wXOnFMeXQmA/exec";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const baseAmount = cart.reduce((sum: any, item: any) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const cgst = Math.round(baseAmount * 0.09);
  const sgst = Math.round(baseAmount * 0.09);
  const transport = baseAmount > 0 ? 1000 : 0;
  const finalAmount = baseAmount + cgst + sgst + transport - discount;
  const itemCount = cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0);

  const isFormValid = customer.name && customer.email && customer.phone.length >= 10 && customer.address;

  // STEP 1: Order ko "Pending" status ke sath save karo aur QR dikhao
  const handlePaymentFlow = async () => {
    setLoading(true);

    const orderId = "ORD-" + Date.now();
    const formattedProducts = cart.map((item: any) => `${item.name} (x${item.quantity || 1})`).join(", ");

    const initialOrderData = {
      action: "create",
      orderId: orderId,
      date: new Date().toLocaleString(),
      customerName: customer.name,
      email: customer.email,
      phone: customer.phone,
      pinCode: customer.pinCode,
      products: formattedProducts,
      quantity: cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0),
      total: baseAmount,
      transport: transport,
      gst: cgst + sgst,
      coupon: coupon || "None",
      discount: discount,
      finalAmount: finalAmount,
      paymentStatus: "Pending",
      paymentId: ""
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(initialOrderData),
      });
      setCurrentOrderId(orderId);
      setShowQR(true);
    } catch (error) {
      alert("Error saving initial order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Screenshot upload handle karo (optional proof)
  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Screenshot size 2MB se kam honi chahiye");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setScreenshot(reader.result as string);
      setScreenshotName(file.name);
    };
    reader.readAsDataURL(file);
  };

  // STEP 2: User UTR daalkar payment confirm karega
  const handleConfirmPayment = async () => {
    // UTR validation - UPI ka reference number generally 12 digit numeric hota hai
    if (!utr.trim()) {
      setUtrError("Payment confirm karne ke liye UTR / Transaction ID daalna zaroori hai");
      return;
    }
    if (utr.trim().length < 6) {
      setUtrError("Yeh UTR number sahi nahi lagta, dobara check karein");
      return;
    }
    setUtrError("");
    setConfirming(true);

    const updateData = {
      action: "update",
      orderId: currentOrderId,
      paymentStatus: "Paid (QR - To Verify)",
      paymentId: utr.trim(),
      screenshot: screenshot || "", // base64 string, empty agar upload nahi kiya
      screenshotName: screenshotName || ""
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });
      alert("Payment details submit ho gayi! Verify hone ke baad order confirm hoga.");
      setShowQR(false);
      setUtr("");
      setScreenshot("");
      setScreenshotName("");
      clearCart();
    } catch (error) {
      alert("Order save ho gaya, lekin status update karne me issue aaya.");
    } finally {
      setConfirming(false);
    }
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "SAVE10") { setDiscount(baseAmount * 0.1); setMsg("10% discount applied"); }
    else if (code === "WELCOME5") { setDiscount(baseAmount * 0.05); setMsg("5% discount applied"); }
    else if (code === "FLAT500") { setDiscount(500); setMsg("₹500 discount applied"); }
    else { setDiscount(0); setMsg("Invalid coupon code"); }
  };

  // ---------- EMPTY CART ----------
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden flex flex-col">
        <div className="relative z-10 h-2 w-full bg-gradient-to-r from-[#1A1A1A] via-[#B30000] to-[#1A1A1A]" />
        <div className="absolute top-2 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ filter: "blur(60px)", opacity: 0.55 }}
            viewBox="0 0 1200 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1200" height="900" fill="#FAFAFA" />
            <circle cx="980" cy="80" r="260" fill="#B30000" opacity="0.35" />
            <circle cx="120" cy="380" r="220" fill="#1A1A1A" opacity="0.18" />
            <ellipse cx="700" cy="760" rx="320" ry="200" fill="#B30000" opacity="0.20" />
            <circle cx="1080" cy="650" r="180" fill="#1A1A1A" opacity="0.12" />
            <ellipse cx="300" cy="80" rx="240" ry="140" fill="#1A1A1A" opacity="0.10" />
          </svg>
          <div className="absolute inset-0 bg-[#FAFAFA]/70" />
        </div>
        <div className="flex-1 flex items-center justify-center px-4 relative">
        <div className="text-center max-w-sm relative">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#E5E5E5] bg-white shadow-sm">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.5 8H6" />
            </svg>
          </div>
          <p className="font-mono text-xs tracking-widest text-[#8A8A8A] uppercase mb-2">Order · Empty</p>
          <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Your cart has nothing in it</h1>
          <p className="text-sm text-[#6B6B6B] mb-6">Items you add to your cart will show up here, ready for checkout.</p>
          <a href="/" className="inline-flex items-center justify-center rounded-lg bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#B30000] transition-colors shadow-sm">
            Continue shopping
          </a>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* TOP BRAND STRIP */}
      <div className="relative z-10 h-2 w-full bg-gradient-to-r from-[#1A1A1A] via-[#B30000] to-[#1A1A1A]" />

      {/* BLURRED ABSTRACT BACKGROUND IMAGE */}
      <div className="absolute top-2 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ filter: "blur(60px)", opacity: 0.55 }}
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1200" height="900" fill="#FAFAFA" />
          <circle cx="980" cy="80" r="260" fill="#B30000" opacity="0.35" />
          <circle cx="120" cy="380" r="220" fill="#1A1A1A" opacity="0.18" />
          <ellipse cx="700" cy="760" rx="320" ry="200" fill="#B30000" opacity="0.20" />
          <circle cx="1080" cy="650" r="180" fill="#1A1A1A" opacity="0.12" />
          <ellipse cx="300" cy="80" rx="240" ry="140" fill="#1A1A1A" opacity="0.10" />
        </svg>
        {/* soft white wash so foreground cards stay readable */}
        <div className="absolute inset-0 bg-[#FAFAFA]/70" />
      </div>


      <div className="py-10 px-4 sm:py-14 relative">
      <div className="max-w-6xl mx-auto relative">

        {/* PAGE HEADER */}
        <div className="mb-10 flex items-end justify-between border-b border-[#E5E5E5] pb-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#8A8A8A] uppercase mb-2">
              Order · {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">Your Cart</h1>
              <span className="hidden sm:block w-10 h-[3px] bg-[#B30000] rounded-full mb-2" />
            </div>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-[#8A8A8A] underline underline-offset-2 hover:text-[#B30000] transition-colors"
          >
            Clear cart
          </button>
        </div>


        {/* PROGRESS STRIP */}
        <div className="flex items-center gap-2 mb-8 -mt-2">
          <ProgressStep label="Cart" active complete />
          <ProgressLine />
         <ProgressStep label="Details" active={!!isFormValid} complete={!!isFormValid} />
          <ProgressLine />
          <ProgressStep label="Payment" active={showQR} complete={false} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Delivery Information */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-5">
                <StepBadge n={1} />
                <h3 className="font-semibold text-[#1A1A1A]">Delivery Information</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    className="field-input"
                    placeholder="e.g. Rohan Sharma"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    className="field-input"
                    placeholder="you@example.com"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  />
                </Field>
                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    className="field-input"
                    placeholder="10-digit mobile number"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  />
                </Field>
                <Field label="Pin Code">
                  <input
                    type="text"
                    className="field-input"
                    placeholder="e.g. 400001"
                    value={customer.pinCode}
                    onChange={(e) => setCustomer({ ...customer, pinCode: e.target.value })}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Full Address" required>
                    <textarea
                      className="field-input min-h-[84px] resize-none"
                      placeholder="House / street / area / city"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    />
                  </Field>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 px-6 pt-6 pb-2">
                <StepBadge n={2} />
                <h3 className="font-semibold text-[#1A1A1A]">Items</h3>
              </div>
              <div className="divide-y divide-[#F0F0F0]">
                {cart.map((item: any, i: number) => (
                  <div key={i} className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-[#FAFAFA] transition-colors">
                    <div className="min-w-0">
                      <h2 className="font-medium text-[#1A1A1A] truncate">{item.name}</h2>
                      <p className="font-mono text-xs text-[#8A8A8A] mt-0.5">₹{item.price} / unit</p>
                      <div className="flex items-center gap-1 mt-3">
                        <button
                          onClick={() => updateQuantity(item.name, (item.quantity || 1) - 1)}
                          className="h-7 w-7 rounded-md border border-[#DDDDDD] text-[#1A1A1A] hover:border-[#1A1A1A] active:scale-90 transition-all"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-9 text-center font-mono text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, (item.quantity || 1) + 1)}
                          className="h-7 w-7 rounded-md border border-[#DDDDDD] text-[#1A1A1A] hover:border-[#1A1A1A] active:scale-90 transition-all"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono font-bold text-lg text-[#1A1A1A]">₹{item.price * (item.quantity || 1)}</p>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-xs text-[#B30000] hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Order Summary (receipt style) */}
          <div className="lg:sticky lg:top-10 h-fit">
            <div className="bg-white border border-[#E5E5E5] rounded-2xl shadow-md overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#1A1A1A] via-[#B30000] to-[#1A1A1A]" />
              <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <StepBadge n={3} />
                <h2 className="font-semibold text-[#1A1A1A]">Order Summary</h2>
              </div>

              <div className="space-y-2.5 text-sm font-mono">
                <ReceiptRow label="Product Total" value={`₹${baseAmount}`} />
                <ReceiptRow label="CGST (9%)" value={`₹${cgst}`} />
                <ReceiptRow label="SGST (9%)" value={`₹${sgst}`} />
                <ReceiptRow label="Transport" value={`₹${transport}`} />
              </div>

              <div className="my-4 border-t border-dashed border-[#E0E0E0]" />

              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="field-input flex-1 !py-2 text-sm uppercase tracking-wide"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 rounded-lg bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#B30000] transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {msg && (
                  <p className={`text-xs ${msg.startsWith("Invalid") ? "text-[#B30000]" : "text-[#1A1A1A]"}`}>
                    {msg}
                  </p>
                )}
              </div>

              <div className="my-4 border-t border-dashed border-[#E0E0E0]" />

              <div className="space-y-2.5 text-sm font-mono">
                <ReceiptRow label="Discount" value={`− ₹${discount}`} valueClass="text-[#B30000]" />
              </div>

              <div className="mt-4 pt-4 border-t-2 border-[#1A1A1A] flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#1A1A1A]">Final Amount</span>
                <span className="text-3xl font-bold font-mono text-[#1A1A1A]">₹{finalAmount}</span>
              </div>

              <button
                disabled={!isFormValid || loading}
                onClick={handlePaymentFlow}
                className={`mt-6 w-full py-3.5 rounded-xl text-white text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  !isFormValid || loading
                    ? "bg-[#D4D4D4] cursor-not-allowed"
                    : "bg-[#1A1A1A] hover:bg-[#B30000] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {loading ? (
                  "Processing…"
                ) : (
                  <>
                    <LockIcon />
                    Pay &amp; Place Order
                  </>
                )}
              </button>
              {!isFormValid && (
                <p className="mt-2 text-xs text-center text-[#8A8A8A]">
                  Complete delivery information above to continue
                </p>
              )}
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[10px] tracking-wide text-[#8A8A8A] uppercase font-mono">
                <LockIcon size={11} />
                Secured checkout
              </p>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              <TrustBadge icon={<ShieldIcon />} label="Secure Payment" />
              <TrustBadge icon={<TruckIcon />} label="Fast Delivery" />
              <TrustBadge icon={<BadgeCheckIcon />} label="Verified Orders" />
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* QR PAYMENT MODAL */}
      {showQR && (
        <div className="fixed inset-0 bg-[#1A1A1A]/70 flex items-center justify-center z-50 px-4 overflow-y-auto py-8">
          <div className="bg-white rounded-2xl max-w-sm w-full text-center my-auto relative border border-[#E5E5E5] shadow-xl">

            <button
              onClick={() => setShowQR(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full flex items-center justify-center text-[#8A8A8A] hover:bg-[#F5F5F5] hover:text-[#B30000] transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="px-6 pt-7 pb-5 border-b border-dashed border-[#E0E0E0]">
              <p className="font-mono text-[10px] tracking-widest text-[#8A8A8A] uppercase mb-1">Scan &amp; Pay</p>
              <p className="font-mono text-sm text-[#1A1A1A]">{currentOrderId}</p>
            </div>

            <div className="px-6 py-6 space-y-4">
              <img
                src="/SCW_QR_Code.png"
                alt="Payment QR Code"
                className="w-52 h-52 mx-auto border border-[#E5E5E5] rounded-xl p-2"
              />

              <div>
                <p className="text-3xl font-semibold font-mono text-[#1A1A1A]">₹{finalAmount}</p>
                <p className="text-xs text-[#8A8A8A] mt-1">Scan the QR above with any UPI app to pay</p>
              </div>

              <div className="border-t border-dashed border-[#E0E0E0] pt-4 text-left space-y-4">
                <Field label="UTR / Transaction ID" required>
                  <input
                    type="text"
                    value={utr}
                    onChange={(e) => { setUtr(e.target.value); setUtrError(""); }}
                    placeholder="e.g. 123456789012"
                    className="field-input"
                  />
                  <p className="text-[11px] text-[#8A8A8A] mt-1">
                    Found on your UPI app's payment success screen or history
                  </p>
                  {utrError && <p className="text-xs text-[#B30000] mt-1">{utrError}</p>}
                </Field>

                <Field label="Payment Screenshot (optional)">
                  <label className="flex items-center justify-center gap-2 border border-dashed border-[#DDDDDD] rounded-lg py-3 text-sm text-[#8A8A8A] cursor-pointer hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors">
                    <UploadIcon />
                    {screenshotName ? "Change file" : "Choose file"}
                    <input type="file" accept="image/*" onChange={handleScreenshotUpload} className="hidden" />
                  </label>
                  {screenshotName && (
                    <p className="text-xs text-[#1A1A1A] mt-1.5">✓ {screenshotName} attached</p>
                  )}
                </Field>
              </div>

              <button
                onClick={handleConfirmPayment}
                disabled={confirming}
                className="w-full bg-[#1A1A1A] text-white py-3.5 rounded-xl text-sm font-medium hover:bg-[#B30000] transition-colors disabled:opacity-60"
              >
                {confirming ? "Submitting…" : "Submit Payment Details"}
              </button>

              <button
                onClick={() => setShowQR(false)}
                className="w-full text-sm text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .field-input {
          width: 100%;
          border: 1px solid #dddddd;
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          font-size: 0.875rem;
          color: #1a1a1a;
          background: #fff;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .field-input::placeholder {
          color: #b0b0b0;
        }
        .field-input:focus {
          outline: none;
          border-color: #1a1a1a;
          box-shadow: 0 0 0 3px rgba(179, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}

// ---------- small helpers ----------

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-[#6B6B6B] mb-1.5">
        {label}
        {required && <span className="text-[#B30000]"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ReceiptRow({
  label,
  value,
  valueClass = "text-[#1A1A1A]",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-[#8A8A8A]">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

function LockIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1A1A1A] text-white text-xs font-mono font-semibold shrink-0">
      {n}
    </span>
  );
}

function ProgressStep({
  label,
  active,
  complete,
}: {
  label: string;
  active?: boolean;
  complete?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full transition-colors ${
          complete ? "bg-[#B30000]" : active ? "bg-[#1A1A1A]" : "bg-[#DDDDDD]"
        }`}
      />
      <span
        className={`text-xs font-mono uppercase tracking-wide ${
          active || complete ? "text-[#1A1A1A]" : "text-[#B0B0B0]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}



function ProgressLine() {
  return <span className="flex-1 h-px bg-[#E0E0E0] max-w-[40px]" />;
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center bg-white border border-[#E5E5E5] rounded-xl py-3 px-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <span className="text-[#B30000]">{icon}</span>
      <span className="text-[10px] font-mono uppercase tracking-wide text-[#6B6B6B] leading-tight">{label}</span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.4 1.4 2.7-.4 1.2 2.4 2.4 1.2-.4 2.7L21.7 12l-1.4 2.3.4 2.7-2.4 1.2-1.2 2.4-2.7-.4L12 22l-2.4-1.4-2.7.4-1.2-2.4-2.4-1.2.4-2.7L2.3 12l1.4-2.3-.4-2.7 2.4-1.2 1.2-2.4 2.7.4L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}