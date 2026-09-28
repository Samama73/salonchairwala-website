import { NextRequest, NextResponse } from "next/server";
import { allProducts } from "@/lib/productData";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "openai/gpt-oss-20b";

const SHEET_WEBHOOK_URL = process.env.CHATBOT_SHEET_WEBHOOK_URL;

// CORS headers — GoDaddy (alag domain) se request accept karne ke liye
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // production mein isse apne exact domain se replace kar sakta hai, jaise "https://salonchairwala.com"
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Browser pehle ek OPTIONS request bhejta hai check karne ke liye — isko handle karna zaroori hai
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

function logToSheet(userMessage: string, botReply: string) {
  if (!SHEET_WEBHOOK_URL) return;

  fetch(SHEET_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userMessage, botReply }),
  }).catch((err) => console.error("Sheet log failed:", err));
}

function buildSystemInstruction() {
  const catalog = allProducts
    .map(p => `- ${p.name} (${p.category}): ₹${p.price} — ${p.description}`)
    .join("\n");

    return `Tum "Salon Chair Wala" ke website assistant ho.
Company salon chairs, shampoo chairs, manicure/pedicure stations, facial beds aur salon furniture banati hai aur pan-India delivery karti hai.

Apne jawaab plain, simple text mein do. Markdown formatting (jaise *, **, #, bullets) bilkul use mat karo. Agar list dikhani ho to naye line pe likho, sirf hyphen (-) ya numbering use kar sakte ho.

User ke sawaalon ka friendly, short aur helpful jawab do (Hindi/English/Hinglish, jismein user baat kare usi mein reply karo).
Agar order, pricing, ya custom requirement ki baat ho to unhe WhatsApp button ya contact form use karne ka suggest karo.

SHOWROOM/LOCATION:
Address: Bhumi World, Bhiwandi Kalyan Bypass, Kalyan.
Showroom pe direct visit kar sakte hain. Timing: subah 10 baje se shaam 6 baje tak, hafte ke saaton din (Sunday ko bhi khula hai).
Agar customer location, address ya showroom poochhe to sirf yahi facts batao. Chahe to WhatsApp pe photos/videos bhi dekh sakte hain: https://wa.me/919145097466

DELIVERY:
- Bina customization ke order: 7 se 10 din mein delivery.
- Customization wale order: 30 se 35 din lagte hain.
Delivery ka exact time order pe depend karta hai. Charges ya kisi specific city ke baare mein poochhe to team se WhatsApp pe confirm karne ko bolo.

STRICT RULES:
- Sirf is prompt ki jankari aur catalog se jawab do, andaza mat lagao.
- Discount, stock, warranty, GST, installation, payment terms, custom size jaisi cheezon ke baare mein haan/na mat bolo. Bolo "Iski confirm jankari ke liye WhatsApp pe team se baat karein: https://wa.me/919145097466"
- "Nahi hai" ya "available nahi" tabhi bolo jab wo is prompt mein likha ho.
- Price sirf catalog wala batao.

UNCLEAR/TYPO MESSAGES:
Agar user ka message broken ya typo-laden ho aur intent clear na ho (jaise garbled Hinglish), seedha guess karke jawab mat do. Pehle politely clarify karo ki user kya jaanna chahta hai (product, price, ya location).

ORDER INTENT: Jab user kisi product mein interest ya order dikhaye, ye link do: https://wa.me/919145097466 aur bolo ki product ka naam WhatsApp pe bata dein.

Yahan company ka pura product catalog hai — sirf isi data se answer do, kuch bhi khud se mat banao:
${catalog}

Agar poocha gaya product isme na mile to bol do "ye product abhi humare paas nahi hai" ya team se confirm karne ko bolo.`;
}

export async function POST(req: NextRequest) {
  try {
    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Server config missing API KEY" },
        { status: 500, headers: corsHeaders }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const lastMsg = (messages[messages.length - 1]?.text ?? "").toLowerCase();
    const locationRegex = /\b(kahan|kaha pe|kaha par|kaha ho|kaha hai|kidhar|located|location|showroom|factory|visit|where are you|aapka address|apka address|your address|shop address)\b/i;

    if (locationRegex.test(lastMsg)) {
      const reply =
        "Hamara showroom Bhumi World, Bhiwandi Kalyan Bypass, Kalyan mein hai. Aap seedha visit kar sakte hain, roz subah 10 baje se shaam 6 baje tak (Sunday ko bhi). Photos/videos ke liye WhatsApp pe bhi baat kar sakte hain: https://wa.me/919145097466";
      logToSheet(messages[messages.length - 1]?.text ?? "", reply);
      return NextResponse.json({ reply }, { headers: corsHeaders });
    }

    const formattedMessages = [
      { role: "system", content: buildSystemInstruction() },
      ...messages.map((m: { role: string; text: string }) => ({
        role: m.role === "model" || m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      })),
    ];

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://salonchairwala.com", // apna asli domain daal de
        "X-Title": "Salon Chair Wala",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: formattedMessages,
        temperature: 0.2,
        max_tokens: 1024,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenRouter error:", data);
      return NextResponse.json(
        { error: data?.error?.message || "OpenRouter API error" },
        { status: res.status, headers: corsHeaders }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, mujhe samajh nahi aaya. Seedha WhatsApp pe baat karein: https://wa.me/919145097466";

    const lastUserMessage = messages[messages.length - 1]?.text ?? "";
    logToSheet(lastUserMessage, reply);

    return NextResponse.json({ reply }, { headers: corsHeaders });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500, headers: corsHeaders }
    );
  }
}