"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useScroll, useTransform, motion } from "framer-motion";

// Carga dinámica para evitar SSR con WebGL
const DataCore = dynamic(() => import("@/components/ui/DataCore"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax del fondo al hacer scroll
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Staggered text reveal al montar
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".stagger");
    els?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 120}ms`;
      el.classList.add("visible");
    });
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Fondo animado de partículas/gradiente ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Grid base */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Radial gradients que dan profundidad */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(255,87,34,0.06) 0%, transparent 65%), " +
              "radial-gradient(ellipse 50% 50% at 20% 30%, rgba(0,100,255,0.05) 0%, transparent 55%), " +
              "radial-gradient(ellipse 40% 80% at 80% 80%, rgba(255,87,34,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Líneas horizontales sutiles estilo "escaneo" */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{
              top: `${10 + i * 12}%`,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,87,34,0.05), transparent)",
            }}
          />
        ))}
      </motion.div>

      {/* ── Scan line animado ── */}
      <div className="scan-line" />

      {/* ── Contenido principal ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div style={{ opacity }}>
          <div className="section-tag stagger reveal">
            Sistema operativo · IA aplicada
          </div>

          <h1 className="display-xl text-[#F0EFF8] stagger reveal mb-6">
            Eliminamos la{" "}
            <span className="text-[#FF5722] glow-axiom">pérdida</span>
            <br />
            de inteligencia
            <br />
            <span className="text-[#3A3A50]">operativa.</span>
          </h1>

          <p className="text-[#6B6B88] text-lg leading-relaxed stagger reveal mb-8 max-w-lg">
            El objetivo no es reemplazar al humano.{" "}
            <span className="text-[#A8A8C0]">Es amplificar su capacidad</span>{" "}
            mediante sistemas que capturan, organizan y transforman datos
            operativos en decisiones claras.
          </p>

          <div className="flex flex-wrap gap-4 stagger reveal">
            <a href="#contacto" className="btn-primary">
              Evaluar mi sistema <span>→</span>
            </a>
            <a href="#filosofia" className="btn-ghost">
              Leer el manifiesto
            </a>
          </div>

          {/* Mini métricas */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-[#1E1E2A] stagger reveal">
            {[
              { v: "3×",    label: "Eficiencia diagnóstica" },
              { v: "–60%",  label: "Fallas no planeadas" },
              { v: "100%",  label: "Know-how transferido" },
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
        </motion.div>

        {/* DataCore 3D */}
        <div className="hidden lg:flex items-center justify-center h-full w-full relative">
          <DataCore />
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #06060A)" }}
      />
    </section>
  );
}
