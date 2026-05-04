"use client";
import { useScrollReveal } from "@/components/ui/useScrollReveal";

// ─── CASOS ──────────────────────────────────────────────────────────────────
const casos = [
  {
    id: "C-001",
    sector: "Taller agrícola · Texcoco",
    challenge: "Fallas no detectadas en equipos Manitou generaban paros de 4-8 hrs sin diagnóstico formal.",
    result: "Sistema de captura diagnóstica + base de conocimiento: -60% tiempo de diagnóstico.",
    metric: "–60%",
    metricLabel: "Tiempo de diagnóstico",
  },
  {
    id: "C-002",
    sector: "Mantenimiento industrial · CDMX",
    challenge: "El conocimiento operativo vivía en la cabeza de 2 técnicos senior. Riesgo de continuidad crítico.",
    result: "Documentación sistemática + flujos de IA para captura de casos. Know-how transferido al equipo.",
    metric: "100%",
    metricLabel: "Conocimiento documentado",
  },
  {
    id: "C-003",
    sector: "Taller automotriz · Texcoco",
    challenge: "Sin métricas de eficiencia, sin seguimiento de clientes, operación reactiva.",
    result: "Sistema operativo con KPIs, CRM básico y workflows automatizados de seguimiento.",
    metric: "3×",
    metricLabel: "Velocidad de cotización",
  },
];

export function Casos() {
  const ref = useScrollReveal();
  return (
    <section id="casos" className="py-32 bg-[#0E0E14]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-tag">Evidencia · Casos de estudio</div>
          <h2 className="display-lg text-[#F0EFF8]">
            Resultados reales.
            <br />
            <span className="text-[#A8A8C0]">Sin inflación de marketing.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {casos.map((c) => (
            <div key={c.id} className="card-steel reveal flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-[#1E1E2A]">
                <div
                  className="text-[#3A3A50] text-xs mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {c.id}
                </div>
                <div className="text-sm text-[#FF5722]">{c.sector}</div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1">
                <p className="text-xs text-[#6B6B88] mb-4 leading-relaxed">
                  <span className="text-[#3A3A50]">Reto: </span>{c.challenge}
                </p>
                <p className="text-xs text-[#A8A8C0] leading-relaxed">
                  <span className="text-[#6B6B88]">Resultado: </span>{c.result}
                </p>
              </div>

              {/* Metric */}
              <div className="p-6 border-t border-[#1E1E2A] bg-[#0E0E14]">
                <div
                  className="text-3xl font-bold text-[#FF5722]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {c.metric}
                </div>
                <div className="text-xs text-[#3A3A50] mt-1">{c.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESO ────────────────────────────────────────────────────────────────
const procesoSteps = [
  {
    phase: "FASE 01",
    title: "Escuchar, no vender",
    duration: "30 min",
    desc: "Primera conversación: entendemos tu operación real antes de hablar de soluciones. Si no eres el cliente adecuado, te lo decimos en esta llamada.",
  },
  {
    phase: "FASE 02",
    title: "Diagnóstico en campo",
    duration: "1-2 semanas",
    desc: "Auditamos tu operación en sitio. Revisamos datos históricos, procesos actuales y equipo. Entregamos un reporte honesto.",
  },
  {
    phase: "FASE 03",
    title: "Blueprint del sistema",
    duration: "1 semana",
    desc: "Diseñamos la arquitectura completa: flujos, integraciones, KPIs. Presentamos y alineamos con tu equipo antes de implementar.",
  },
  {
    phase: "FASE 04",
    title: "Implementación iterativa",
    duration: "4-10 semanas",
    desc: "Implementamos en ciclos cortos. Cada sprint tiene métricas de éxito definidas. Ajustamos según retroalimentación del equipo.",
  },
  {
    phase: "FASE 05",
    title: "Transferencia total",
    duration: "2 semanas",
    desc: "Documentamos todo. Capacitamos al equipo. Al final, el sistema es tuyo y puedes operarlo sin nosotros.",
  },
];

export function Proceso() {
  const ref = useScrollReveal();
  return (
    <section id="proceso" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-tag">Metodología · Tiempos</div>
          <h2 className="display-lg text-[#F0EFF8]">
            Nuestro proceso.
            <br />
            <span className="text-[#0064FF]">Sin cajas negras.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {procesoSteps.map((s, i) => (
            <details key={i} className="group card-steel reveal">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <div className="flex items-center gap-6">
                  <span
                    className="text-[#3A3A50] text-xs w-16"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.phase}
                  </span>
                  <span
                    className="text-[#F0EFF8] font-600"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#3A3A50] text-sm hidden sm:inline">{s.duration}</span>
                  <span className="text-[#FF5722] text-lg group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-[#1E1E2A]">
                <p className="text-[#6B6B88] pt-4 max-w-2xl text-sm leading-relaxed">{s.desc}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FILTRO DE CLIENTES ─────────────────────────────────────────────────────
export function FiltroClientes() {
  const ref = useScrollReveal();
  return (
    <section id="filtro" className="py-32 bg-[#0E0E14]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <div className="section-tag mx-auto">Criterios · Selección de clientes</div>
          <h2 className="display-lg text-[#F0EFF8]">
            AXIO no es para todos.
            <br />
            <span className="text-[#6B6B88]">Este es nuestro cliente ideal.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Para quién SÍ */}
          <div className="reveal">
            <div
              className="text-[#FF5722] text-xs mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              TRABAJAMOS CONTIGO SI:
            </div>
            <div className="space-y-4">
              {[
                "Tienes una operación industrial real con datos que medir",
                "Tomas decisiones con criterio técnico, no por modas",
                "Estás dispuesto a mostrar tus números reales",
                "Buscas un sistema que perdure, no un proyecto puntual",
                "Tu equipo puede comprometerse durante la implementación",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-[#FF5722] mt-1 text-sm">→</span>
                  <span className="text-[#A8A8C0] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Para quién NO */}
          <div className="reveal">
            <div
              className="text-[#FF3D00] text-xs mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              NO SOMOS TU OPCIÓN SI:
            </div>
            <div className="space-y-4">
              {[
                "Quieres un chatbot o una automatización simple sin estrategia",
                "Tu objetivo es tener algo que mostrar en LinkedIn",
                "No puedes definir qué significa éxito para tu operación",
                "Esperas que la tecnología resuelva un problema de cultura",
                "Tienes prisa por implementar antes de diagnosticar",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-[#FF3D00] mt-1 text-sm">×</span>
                  <span className="text-[#6B6B88] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ────────────────────────────────────────────────────────────────────
export function CTA() {
  const ref = useScrollReveal();
  return (
    <section id="contacto" className="py-32 relative overflow-hidden" ref={ref}>
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,255,178,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="section-tag mx-auto reveal">Contacto · Primera evaluación</div>

        <h2 className="display-lg text-[#F0EFF8] reveal mb-6">
          Si llegaste hasta aquí,
          <br />
          <span className="text-[#FF5722] glow-axiom">probablemente somos compatibles.</span>
        </h2>

        <p className="text-[#6B6B88] text-lg mb-10 reveal">
          La primera conversación es técnica, honesta y sin pitch de ventas.
          Si no podemos ayudarte, te lo decimos directamente.
        </p>

        <div className="flex flex-wrap gap-4 justify-center reveal">
          <a
            href="mailto:hola@axiocollective.mx"
            className="btn-primary text-base"
          >
            Solicitar evaluación gratuita →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-base"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-[#3A3A50] text-xs mt-8 reveal">
          Respondemos en menos de 24 hrs en días hábiles.
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-[#1E1E2A] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 border border-[#FF5722] rotate-45" />
              <div className="absolute inset-[4px] bg-[#FF5722] rotate-45" />
            </div>
            <span
              className="text-sm font-600 tracking-widest text-[#F0EFF8]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AXIO COLLECTIVE
            </span>
          </div>
          <p className="text-[#3A3A50] text-xs max-w-xs">
            Sistemas operativos con IA aplicada para empresas industriales en México.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm text-[#6B6B88]">
          {["Servicios", "Proceso", "Casos", "Contacto"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#FF5722] transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="text-xs text-[#3A3A50]">
          <p>© {new Date().getFullYear()} AXIO Collective</p>
          <p className="mt-1">Texcoco · Estado de México · México</p>
        </div>
      </div>
    </footer>
  );
}
