"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Message = { role: "user" | "model"; text: string };

export default function TerminalDiagnostic() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "model", 
      text: "AXIO_CORE v1.0. Inicializando protocolo de diagnóstico operático...\n\n¿Cuál es el principal cuello de botella operativo en tu empresa actualmente?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    
    const newMessages = [...messages, { role: "user" as const, text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: messages.slice(1), // Pasamos historial excluyendo el mensaje de bienvenida para no confundir a la API
          message: userText
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessages([...newMessages, { role: "model", text: data.reply }]);
      } else {
        setMessages([...newMessages, { role: "model", text: "ERROR FATAL: " + data.error }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: "model", text: "ERROR: Conexión con el servidor interrumpida." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-32 relative">
      {/* Glow background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722] to-[#0064FF] opacity-20 blur-xl"></div>
      
      {/* Terminal Container */}
      <div className="relative border border-[#3A3A50] bg-[#06060A] shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-[#1E1E2A] bg-[#0A0A0F]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5722] opacity-70" />
            <div className="w-3 h-3 rounded-full bg-[#A8A8C0] opacity-30" />
            <div className="w-3 h-3 rounded-full bg-[#3A3A50] opacity-50" />
          </div>
          <div className="mx-auto text-xs text-[#6B6B88]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            [ AXIO_DIAGNOSTIC_TERMINAL ]
          </div>
        </div>
        
        {/* Terminal Body */}
        <div 
          className="p-6 h-[450px] overflow-y-auto bg-[#06060A] text-sm md:text-base flex flex-col gap-6"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`whitespace-pre-wrap leading-relaxed ${m.role === "user" ? "text-[#0064FF]" : "text-[#F0EFF8]"}`}
            >
              <div className="mb-1 opacity-70 text-xs">
                {m.role === "user" ? (
                  <span className="text-[#6B6B88]">USER@CLIENT:~$</span>
                ) : (
                  <span className="text-[#FF5722] font-bold">SYS_AXIO&gt;</span>
                )}
              </div>
              <div className={m.role === "model" ? "text-[#A8A8C0]" : ""}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="text-[#FF5722] text-xs font-bold"
            >
              SYS_AXIO&gt; <span className="animate-pulse">Analizando parámetros...</span>
            </motion.div>
          )}
          <div ref={endRef} />
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="border-t border-[#1E1E2A] bg-[#0A0A0F] p-5 flex items-center gap-3">
          <span className="text-[#6B6B88] text-sm hidden md:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            USER@CLIENT:~$
          </span>
          <span className="text-[#6B6B88] text-sm md:hidden" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            ~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-[#F0EFF8] outline-none"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            placeholder="Describe tu operación aquí..."
            disabled={isLoading}
            autoComplete="off"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="text-xs bg-[#FF5722] text-[#06060A] px-4 py-2 font-bold disabled:opacity-50 transition-opacity hover:opacity-80"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
