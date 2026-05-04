"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#problema",   label: "Problema" },
  { href: "#filosofia",  label: "Filosofía" },
  { href: "#servicios",  label: "Servicios" },
  { href: "#proceso",    label: "Proceso" },
  { href: "#contacto",   label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E14]/90 backdrop-blur-md border-b border-[#1E1E2A]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 border border-[#FF5722] rotate-45 group-hover:rotate-[55deg] transition-transform duration-300" />
            <div className="absolute inset-[5px] bg-[#FF5722] rotate-45" />
          </div>
          <span
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-lg font-700 tracking-widest text-[#F0EFF8]"
          >
            AXIO
          </span>
          <span className="text-[#6B6B88] text-xs tracking-widest hidden sm:inline">
            COLLECTIVE
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#6B6B88] hover:text-[#FF5722] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contacto" className="hidden md:inline-flex btn-primary text-sm">
          Evaluar tu sistema <span className="ml-1">→</span>
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#F0EFF8] transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F0EFF8] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F0EFF8] transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0E0E14] border-t border-[#1E1E2A] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#A8A8C0] hover:text-[#FF5722] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary w-full text-center mt-2">
            Evaluar tu sistema
          </a>
        </div>
      )}
    </nav>
  );
}
