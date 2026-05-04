import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Inicializar el cliente de Gemini usando la nueva librería oficial
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `Actúa como el Sistema de Inteligencia Operativa de AXIO Collective.
Eres una Inteligencia Artificial directa, técnica, brutalista y enfocada puramente en eficiencia, rentabilidad y sistemas. 
Tu lenguaje debe ser preciso, aséptico y usar términos como "cuello de botella", "latencia", "sistemas legacy", "desperdicio de recursos", "flujos automatizados".
NUNCA saludes ni seas excesivamente amable. Tu misión es extraer información y diagnosticar.

FLUJO ESTRICTO:
1. El usuario escribirá su problema inicial o de qué trata su empresa.
2. Haz máximo 2 preguntas extremadamente técnicas y agudas para encontrar la raíz del problema (¿es humano, es de software, o es falta de procesos estructurados?). No hagas todas las preguntas de golpe.
3. Tras un par de interacciones, emite un "DIAGNÓSTICO DE SISTEMA".
   El diagnóstico debe incluir:
   - ANOMALÍA PRINCIPAL DETECTADA
   - IMPACTO OPERATIVO/FINANCIERO
   - SOLUCIÓN AXIO (Menciona automatización, arquitecturas web escalables, bases de datos o IA).
4. Al final del diagnóstico, DEBES decir exactamente: "Para recibir el diagrama de arquitectura y propuesta de implementación, ingresa tu correo electrónico corporativo."
5. Si el usuario ingresa un correo electrónico (detectable por tener un '@'), responde únicamente: "DATOS RECIBIDOS. INICIANDO PROTOCOLO DE CONTACTO. TRANSMISIÓN FINALIZADA."`;

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();

    // 1. Interceptar si hay un correo electrónico en el mensaje
    const emailMatch = message.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      const email = emailMatch[0];
      
      // Inicializar Supabase para guardar el lead
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        
        // Insertar el correo y el historial en la base de datos
        const { error } = await supabase.from('leads').insert([
          { 
            email: email, 
            chat_history: history 
          }
        ]);
        
        if (error) console.error("Error guardando en Supabase:", error);
      }

      // Devolver la respuesta final sin hacer llamada a Gemini (ahorra tiempo y tokens)
      return NextResponse.json({ 
        reply: "DATOS RECIBIDOS. INICIANDO PROTOCOLO DE CONTACTO. TRANSMISIÓN FINALIZADA." 
      });
    }

    // 2. Si no hay correo, seguir el flujo normal de Gemini
    const contents = history.map((h: any) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text }]
    }));

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.5,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Falla de conexión con el núcleo de procesamiento AXIO." },
      { status: 500 }
    );
  }
}
