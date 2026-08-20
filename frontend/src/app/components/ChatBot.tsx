'use client';
import React, { useState, useRef, useEffect } from 'react';

type Msg = { role: 'user' | 'assistant'; text: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: 'Namaste! 👋 Salon Chair Wala mein aapka swagat hai. Aap kya jaanna chahte hain?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Msg[] = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.reply || data.error || 'Kuch gadbad ho gayi.' },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Network error, dobara try karein.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button - Shifted back to LEFT */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-8 left-6 group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#82181A] to-[#b32427] text-white rounded-full shadow-[0_8px_25px_rgb(130,24,26,0.4)] hover:shadow-[0_10px_35px_rgb(130,24,26,0.6)] hover:-translate-y-1 transition-all duration-300 z-50 ring-4 ring-white/50"
        aria-label="Chat"
      >
        {open ? (
          <svg className="w-6 h-6 transition-transform duration-300 rotate-90 scale-0 group-hover:rotate-0 group-hover:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window Container - Shifted back to LEFT */}
      {open && (
        <div className="fixed bottom-28 left-6 w-[90vw] max-w-[380px] h-[75vh] max-h-[550px] bg-[#FDFCFC] rounded-2xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] flex flex-col z-[100] overflow-hidden border border-gray-100 origin-bottom-left animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#82181A] to-[#A32023] text-white px-5 py-4 flex justify-between items-center shadow-md relative z-10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                <span className="text-xl leading-none">🛋️</span>
              </div>
              <div>
                <h3 className="font-semibold text-[15px] tracking-wide text-white drop-shadow-sm">Salon Chair Wala</h3>
                <p className="text-[11px] font-medium text-white/90 flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Support Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:rotate-90 duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-slate-50/50 scroll-smooth">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-[14.5px] leading-relaxed shadow-sm whitespace-pre-line relative ${
                    m.role === 'user'
                      ? 'bg-gradient-to-br from-[#82181A] to-[#9b1c1f] text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white border border-gray-100 text-gray-700 rounded-2xl rounded-tl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {loading && (
              <div className="flex w-full justify-start">
                <div className="bg-white border border-gray-100 px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-[#82181A]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-[#82181A]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-[#82181A]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
            <div className="flex items-end gap-2 bg-gray-50 border border-gray-200 p-1.5 rounded-2xl focus-within:ring-2 focus-within:ring-[#82181A]/20 focus-within:bg-white focus-within:border-[#82181A]/30 transition-all shadow-inner">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Apna sawaal yahan likhein..."
                className="flex-1 bg-transparent max-h-32 min-h-[44px] resize-none outline-none px-3 py-2.5 text-[14px] text-gray-700 placeholder-gray-400"
                rows={1}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="p-3 mb-0.5 mr-0.5 bg-[#82181A] hover:bg-[#A32023] text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:hover:bg-[#82181A] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 transform rotate-45 -mt-1 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-2.5 mb-1">
              <span className="text-[10px] text-gray-400/80 font-bold tracking-widest uppercase">Powered by AI</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}