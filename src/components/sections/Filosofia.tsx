"use client";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

// ─── FILOSOFÍA ─────────────────────────────────────────────────────────────
export function Filosofia() {
  const ref = useScrollReveal();
  return (
    <section id="filosofia" className="py-32 bg-[#0E0E14] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: manifesto */}
        <div>
          <div className="section-tag reveal">Manifiesto · Filosofía</div>
          <h2 className="display-lg text-[#F0EFF8] reveal mb-8">
            No somos una agencia.
            <br />
            <span className="text-[#FF5722]">Somos el sistema</span>
            <br />
            que tu operación necesita.
          </h2>
          <div className="space-y-5 reveal">
            {[
              "Creemos que la IA sin contexto operativo es decoración cara.",
              "Construimos sistemas que aprenden de TUS datos, en TU contexto, con TU equipo.",
              "Medimos antes de proponer. Diseñamos antes de implementar. Documentamos para que te quedes con el conocimiento.",
              "Si la solución no mejora una métrica real, no es una solución.",
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span
                  className="text-[#FF5722] mt-0.5 text-sm"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <p className="text-[#A8A8C0] leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: neural net visual */}
        <div className="hidden lg:block reveal">
          <NeuralNet />
        </div>
      </div>
    </section>
  );
}

function NeuralNet() {
  const nodes = [
    // input
    { x: 60,  y: 80 },  { x: 60,  y: 160 }, { x: 60,  y: 240 },
    // hidden 1
    { x: 180, y: 50 },  { x: 180, y: 130 }, { x: 180, y: 210 }, { x: 180, y: 290 },
    // hidden 2
    { x: 300, y: 80 },  { x: 300, y: 160 }, { x: 300, y: 240 },
    // output
    { x: 420, y: 120 }, { x: 420, y: 200 },
  ];
  const conns = [
    [0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,11],
  ];
  return (
    <svg viewBox="0 0 480 340" className="w-full opacity-60">
      {conns.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#1E1E2A" strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={10} fill="#16161F" stroke="#1E1E2A" strokeWidth="1" />
          <circle cx={n.x} cy={n.y} r={3}
            fill={i > 9 ? "#FF5722" : i > 6 ? "#0064FF" : "#3A3A50"}
          />
        </g>
      ))}
    </svg>
  );
}

// ─── QUÉ HACEMOS ───────────────────────────────────────────────────────────
const services = [
  {
    code: "SVC_01",
    title: "Diagnóstico operativo",
    desc: "Auditamos tu operación actual: flujos, fallas, cuellos de botella. Medimos antes de proponer. Entregamos un mapa honesto del sistema.",
    tag: "Semana 1-2",
  },
  {
    code: "SVC_02",
    title: "Diseño de sistema operativo",
    desc: "Construimos la arquitectura: workflows, KPIs, protocolos de datos. El sistema que tu operación necesita, no el que está de moda.",
    tag: "Semana 3-6",
  },
  {
    code: "SVC_03",
    title: "IA aplicada al contexto",
    desc: "Entrenamos modelos y flujos de IA con tus datos reales. Integración con tus sistemas existentes. Cero vendor lock-in.",
    tag: "Semana 5-10",
  },
  {
    code: "SVC_04",
    title: "Transferencia de conocimiento",
    desc: "Documentamos todo. Capacitamos a tu equipo. Te quedas con el sistema, no dependes de nosotros para siempre.",
    tag: "Continuo",
  },
];

export function QueHacemos() {
  const ref = useScrollReveal();
  return (
    <section id="servicios" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-tag">Servicios · Entregables</div>
          <h2 className="display-lg text-[#F0EFF8]">
            Lo que hacemos,<br />
            <span className="text-[#A8A8C0]">traducido.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <TiltCard key={s.code}>
              <div className="card-steel p-8 reveal group relative overflow-hidden h-full">
                <div className="flex justify-between items-start mb-5">
                  <span
                    className="text-[#3A3A50] text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.code}
                  </span>
                  <span className="text-[#FF5722] text-xs border border-[#FF5722]/20 px-2 py-0.5">
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="text-lg font-600 text-[#F0EFF8] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#6B6B88] text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#FF5722] group-hover:w-full transition-all duration-500" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CÓMO FUNCIONA ─────────────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Solicitas una evaluación",       body: "Nos describes el problema real, no la solución que crees necesitar. 30 minutos de conversación técnica." },
  { n: "02", title: "Hacemos el diagnóstico",          body: "Auditamos tu operación en campo. Revisamos datos, procesos, herramientas actuales y equipo humano." },
  { n: "03", title: "Diseñamos el sistema",            body: "Entregamos un blueprint: arquitectura, integraciones, KPIs y plan de implementación con métricas de éxito." },
  { n: "04", title: "Implementamos con tu equipo",     body: "No hacemos entregas en seco. Trabajamos junto a tu equipo para que el sistema viva dentro de tu organización." },
];

export function ComoFunciona() {
  const ref = useScrollReveal();
  return (
    <section id="proceso-como" className="py-32 bg-[#0E0E14]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-tag">Sistema · Proceso</div>
          <h2 className="display-lg text-[#F0EFF8]">
            Cómo funciona<br />
            <span className="text-[#0064FF]">el sistema AXIO.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-[#1E1E2A] hidden md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-10 items-start reveal">
                {/* Step circle */}
                <div className="relative hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 border border-[#1E1E2A] bg-[#06060A] flex items-center justify-center z-10">
                    <span
                      className="text-[#FF5722] text-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s.n}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3
                    className="text-xl font-600 text-[#F0EFF8] mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#6B6B88] max-w-xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DIFERENCIADOR ─────────────────────────────────────────────────────────
const compare = [
  { attr: "Diagnóstico previo",       axio: true,  generic: false },
  { attr: "Datos del cliente",        axio: true,  generic: false },
  { attr: "KPIs medibles",           axio: true,  generic: false },
  { attr: "Transferencia de know-how",axio: true,  generic: false },
  { attr: "Contexto industrial",      axio: true,  generic: false },
  { attr: "Sin vendor lock-in",       axio: true,  generic: false },
];

export function Diferenciador() {
  const ref = useScrollReveal();
  return (
    <section id="diferenciador" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="section-tag reveal">Posición · Diferencia</div>
          <h2 className="display-lg text-[#F0EFF8] reveal mb-6">
            No somos para todos.
            <br />
            <span className="text-[#FF5722]">Y eso es adrede.</span>
          </h2>
          <p className="text-[#6B6B88] text-lg leading-relaxed reveal">
            Hay decenas de agencias que te venden dashboards bonitos y flujos de automatización
            desconectados de tu realidad. AXIO trabaja diferente porque nos importa más que
            funcione que que se vea bien.
          </p>
        </div>

        {/* Comparison table */}
        <div className="reveal">
          <div className="border border-[#1E1E2A]">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#1E1E2A]">
              <div className="p-4 text-[#3A3A50] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>CRITERIO</div>
              <div className="p-4 text-center">
                <span className="text-[#FF5722] text-sm font-600" style={{ fontFamily: "'Syne', sans-serif" }}>AXIO</span>
              </div>
              <div className="p-4 text-center text-[#3A3A50] text-xs">Agencias genéricas</div>
            </div>
            {compare.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-[#1E1E2A] ${i % 2 === 0 ? "bg-[#0E0E14]" : ""}`}
              >
                <div className="p-4 text-[#6B6B88] text-sm">{r.attr}</div>
                <div className="p-4 flex items-center justify-center">
                  <span className="text-[#FF5722] text-lg">✓</span>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <span className="text-[#3A3A50] text-lg">–</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
