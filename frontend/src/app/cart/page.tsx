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
    if (code === "SAVE10") { setDiscount(baseAmount * 0.1); setMsg("🎉 10% discount applied"); }
    else if (code === "WELCOME5") { setDiscount(baseAmount * 0.05); setMsg("🎉 5% discount applied"); }
    else if (code === "FLAT500") { setDiscount(500); setMsg("🎉 ₹500 discount applied"); }
    else { setDiscount(0); setMsg("❌ Invalid coupon"); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Your Cart</h1>
          
          <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
            <h3 className="font-bold text-lg">Delivery Information</h3>
            <input type="text" className="w-full border p-2 rounded-lg" placeholder="Full Name" value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})} />
            <input type="email" className="w-full border p-2 rounded-lg" placeholder="Email Address" value={customer.email} onChange={(e) => setCustomer({...customer, email: e.target.value})} />
            <input type="tel" className="w-full border p-2 rounded-lg" placeholder="Phone Number" value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})} />
            <input type="text" className="w-full border p-2 rounded-lg" placeholder="Pin Code" value={customer.pinCode} onChange={(e) => setCustomer({...customer, pinCode: e.target.value})} />
            <textarea className="w-full border p-2 rounded-lg" placeholder="Full Address" value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})} />
          </div>

          {/* Items List */}
          {cart.map((item: any, i: number) => (
            <div key={i} className="bg-white border rounded-2xl p-5 shadow-sm flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.name, (item.quantity || 1) - 1)} className="w-8 h-8 rounded-full bg-gray-100">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, (item.quantity || 1) + 1)} className="w-8 h-8 rounded-full bg-gray-100">+</button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">₹{item.price * (item.quantity || 1)}</p>
                <button onClick={() => removeFromCart(item.name)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (Order Summary) */}
        <div className="sticky top-20 h-fit">
          <div className="bg-white border rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Product Total</span><span>₹{baseAmount}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">CGST (9%)</span><span>₹{cgst}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">SGST (9%)</span><span>₹{sgst}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Transport</span><span>₹{transport}</span></div>
              <hr className="my-2" />
              <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon" className="w-full border rounded-xl p-2 text-sm" />
              <button onClick={applyCoupon} className="w-full bg-black text-white py-2 rounded-xl">Apply Coupon</button>
              {msg && <p className="text-xs text-gray-500">{msg}</p>}
              <div className="flex justify-between text-green-600"><span>Discount</span><span>- ₹{discount}</span></div>
              <div className="flex justify-between text-lg font-bold text-gray-900"><span>Final Amount</span><span>₹{finalAmount}</span></div>
            </div>
            
            <button disabled={!isFormValid || loading} onClick={handlePaymentFlow} className={`mt-6 w-full py-3 rounded-2xl text-white ${!isFormValid ? "bg-gray-400" : "bg-black"}`}>
              {loading ? "Processing..." : "Pay & Place Order"}
            </button>
          </div>
        </div>

      </div>

      {/* QR PAYMENT MODAL */}
      {showQR && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 my-8">
            <h2 className="text-xl font-bold">Scan & Pay</h2>
            <p className="text-sm text-gray-600">Order ID: {currentOrderId}</p>

            {/* 👇 Apna QR code image yahan rakho (public folder me daal ke path daal dena) */}
            <img src="/SCW_QR_Code.png" alt="Payment QR Code" className="w-56 h-56 mx-auto border rounded-xl" />

            <p className="text-2xl font-bold">₹{finalAmount}</p>
            <p className="text-xs text-gray-500">Upar diye QR ko scan karke payment karein.</p>

            <hr />

            {/* UTR Input - mandatory */}
            <div className="text-left space-y-1">
              <label className="text-sm font-semibold text-gray-700">UTR / Transaction ID *</label>
              <input
                type="text"
                value={utr}
                onChange={(e) => { setUtr(e.target.value); setUtrError(""); }}
                placeholder="e.g. 123456789012"
                className="w-full border p-2 rounded-lg text-sm"
              />
              <p className="text-xs text-gray-400">Yeh number aapke UPI app ke payment success screen ya history me milega</p>
              {utrError && <p className="text-xs text-red-500">{utrError}</p>}
            </div>

            {/* Screenshot upload - optional */}
            <div className="text-left space-y-1">
              <label className="text-sm font-semibold text-gray-700">Payment Screenshot (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleScreenshotUpload}
                className="w-full text-sm"
              />
              {screenshotName && <p className="text-xs text-green-600">✓ {screenshotName} attached</p>}
            </div>

            <button
              onClick={handleConfirmPayment}
              disabled={confirming}
              className="w-full bg-black text-white py-3 rounded-2xl"
            >
              {confirming ? "Submitting..." : "Submit Payment Details"}
            </button>

            <button
              onClick={() => setShowQR(false)}
              className="w-full text-sm text-gray-500 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}