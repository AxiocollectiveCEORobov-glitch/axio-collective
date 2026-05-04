"use client";
import { useEffect, useRef } from "react";
import ExplodedModel from "@/components/ui/ExplodedModel";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Staggered text reveal on mount
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".stagger");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 120}ms`;
      el.classList.add("visible");
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* Scan line */}
      <div className="scan-line" />

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,100,255,0.06) 0%, transparent 60%), " +
            "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,255,178,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="section-tag stagger reveal">
            Sistema operativo · IA aplicada
          </div>

          <h1 className="display-xl text-[#F0EFF8] stagger reveal mb-6">
            Tu empresa{" "}
            <span className="text-[#FF5722] glow-axiom">opera</span>
            <br />
            en el mundo real.
            <br />
            <span className="text-[#3A3A50]">¿Tu sistema también?</span>
          </h1>

          <p className="text-[#6B6B88] text-lg leading-relaxed stagger reveal mb-8 max-w-lg">
            AXIO diseña sistemas operativos con IA que eliminan el caos silencioso
            en talleres, plantas y operaciones industriales.
            No automatización genérica. Inteligencia emergente desde tus propios datos.
          </p>

          <div className="flex flex-wrap gap-4 stagger reveal">
            <a href="#contacto" className="btn-primary">
              Evaluar mi sistema <span>→</span>
            </a>
            <a href="#filosofia" className="btn-ghost">
              Leer el manifiesto
            </a>
          </div>

          {/* Mini metrics */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-[#1E1E2A] stagger reveal">
            {[
              { v: "3×", label: "Eficiencia diagnóstica" },
              { v: "–60%", label: "Fallas no planeadas" },
              { v: "100%", label: "Datos propios del cliente" },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="text-2xl font-bold text-[#FF5722]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {m.v}
                </div>
                <div className="text-xs text-[#6B6B88] mt-1 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Animated globe / 3D placeholder */}
        <div className="hidden lg:flex items-center justify-center h-full w-full relative">
          <ExplodedModel />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #06060A)",
        }}
      />
    </section>
  );
}


