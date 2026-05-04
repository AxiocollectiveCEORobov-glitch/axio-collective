"use client";
import { useScrollReveal } from "@/components/ui/useScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

const pains = [
  {
    code: "ERR_001",
    title: "Operas sin datos reales",
    body: "Tomas decisiones con intuición, no con información. Cuando algo falla, ya perdiste tiempo y dinero.",
    stat: "73%",
    statLabel: "de talleres industriales no miden fallas antes de que ocurran",
  },
  {
    code: "ERR_002",
    title: "Procesos en la cabeza de alguien",
    body: "Cuando esa persona no está, el sistema colapsa. No tienes un sistema operativo, tienes hábitos de una persona.",
    stat: "1 persona",
    statLabel: "concentra el conocimiento crítico de la operación",
  },
  {
    code: "ERR_003",
    title: "Automatizaste, pero no resolviste",
    body: "Tienes herramientas caras que nadie usa. La IA que compraste no entiende tu contexto. El problema de fondo sigue.",
    stat: "68%",
    statLabel: "de proyectos de digitalización fallan por falta de adopción",
  },
];

export default function Problema() {
  const ref = useScrollReveal();

  return (
    <section id="problema" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal">
          <div className="section-tag">Diagnóstico · Estado actual</div>
          <h2 className="display-lg text-[#F0EFF8] mb-4">
            El problema no es la tecnología.
            <br />
            <span className="text-[#FF3D00]">Es que no tienes sistema.</span>
          </h2>
          <p className="text-[#6B6B88] text-lg max-w-xl mb-16">
            La mayoría de empresas industriales en México operan con caos estructural
            disfrazado de tradición. Antes de hablar de IA, necesitas saber dónde estás parado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <TiltCard key={p.code}>
              <div className="card-steel p-8 reveal group h-full">
                {/* Code tag */}
                <div
                  className="text-[#FF3D00] mb-4 text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.code}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-600 text-[#F0EFF8] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p.title}
                </h3>

                {/* Body */}
                <p className="text-[#6B6B88] text-sm leading-relaxed mb-6">
                  {p.body}
                </p>

                {/* Stat */}
                <div className="border-t border-[#1E1E2A] pt-5">
                  <div
                    className="text-3xl font-bold text-[#F0EFF8] mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {p.stat}
                  </div>
                  <div className="text-xs text-[#3A3A50]">{p.statLabel}</div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#FF3D00] group-hover:w-full transition-all duration-500" />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Confrontational statement */}
        <div className="mt-16 py-8 border-y border-[#1E1E2A] reveal">
          <p
            className="text-center text-xl text-[#3A3A50] max-w-3xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Si tu respuesta es{" "}
            <span className="text-[#F0EFF8]">"nosotros ya tenemos un sistema"</span>
            {" "}y no puedes mostrarnos los datos que lo prueban,{" "}
            <span className="text-[#FF5722]">no tienes un sistema.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
