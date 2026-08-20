import { NextRequest, NextResponse } from "next/server";
import { allProducts } from "@/lib/productData";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY; // Ya process.env.OPENAI_API_KEY agar .env me wahi naam rakha hai
const MODEL = "gpt-oss-20b"; 

const SHEET_WEBHOOK_URL = process.env.CHATBOT_SHEET_WEBHOOK_URL;

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

  return `Tum "Salon Chair Wala" (Redwal Furniture OPC Pvt Ltd.) ke website assistant ho.
Company salon chairs, shampoo chairs, manicure/pedicure stations, facial beds aur salon furniture banati hai, Mumbai based hai, pan-India delivery karti hai.

Apne jawaab plain, simple text mein do. Markdown formatting (jaise *, **, #, bullets) bilkul use mat karo. Agar list dikhani ho to naye line pe likho, sirf hyphen (-) ya numbering use kar sakte ho.

User ke sawaalon ka friendly, short aur helpful jawab do (Hindi/English/Hinglish, jismein user baat kare usi mein reply karo).
Agar order, pricing, ya custom requirement ki baat ho to unhe WhatsApp button ya contact form use karne ka suggest karo.

Yahan company ka pura product catalog hai — sirf isi data se answer do, kuch bhi khud se mat banao:
${catalog}

Agar poocha gaya product isme na mile to bol do "ye product abhi humare paas nahi hai" ya team se confirm karne ko bolo.`;
}

export async function POST(req: NextRequest) {
  try {
    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Server config missing API KEY" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const formattedMessages = [
      { role: "system", content: buildSystemInstruction() },
      ...messages.map((m: { role: string; text: string }) => ({
        role: m.role === "model" || m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      })),
    ];

    // OpenRouter ka endpoint
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000", // Optional: Aapki website ka URL (OpenRouter ranking ke liye)
        "X-Title": "Salon Chair Wala", // Optional: Aapki app ka naam
      },
      body: JSON.stringify({
        model: MODEL,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenRouter error:", data);
      return NextResponse.json(
        { error: data?.error?.message || "OpenRouter API error" },
        { status: res.status }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content ??
      "Sorry, mujhe samajh nahi aaya. Dobara try karein?";

    const lastUserMessage = messages[messages.length - 1]?.text ?? "";
    logToSheet(lastUserMessage, reply);  
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}