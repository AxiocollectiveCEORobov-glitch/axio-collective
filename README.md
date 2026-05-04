# AXIO Collective — Landing Page

> Stack: Next.js 14 · Tailwind CSS · TypeScript · GSAP (ready) · Three.js (ready)

## Setup rápido

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Página principal (ensamblaje de secciones)
│   └── globals.css         # Design system: tokens, tipografía, animaciones
│
└── components/
    ├── sections/
    │   ├── Navbar.tsx       # Nav fija + responsive mobile
    │   ├── Hero.tsx         # Hero con globe SVG animado
    │   ├── Problema.tsx     # 3 pain cards con stats
    │   ├── Filosofia.tsx    # Manifiesto + red neuronal
    │   ├── QueHacemos.tsx   # 4 service tiles
    │   ├── ComoFunciona.tsx # Timeline de sistema
    │   ├── Diferenciador.tsx# Tabla comparativa AXIO vs genéricos
    │   ├── Casos.tsx        # 3 casos de estudio con métricas
    │   ├── Proceso.tsx      # Accordion de 5 fases
    │   ├── FiltroClientes.tsx # Para quién sí / no
    │   ├── CTA.tsx          # CTA final con glow
    │   └── Footer.tsx       # Footer minimalista
    │
    └── ui/
        └── useScrollReveal.ts  # Hook de Intersection Observer

```

## Paleta de colores AXIO

| Token     | Hex       | Uso                        |
|-----------|-----------|----------------------------|
| `void`    | `#06060A` | Fondo base                 |
| `iron`    | `#0E0E14` | Superficies alternas       |
| `steel`   | `#16161F` | Cards                      |
| `line`    | `#1E1E2A` | Bordes                     |
| `axiom`   | `#00FFB2` | Acento primario (señal)    |
| `axiom2`  | `#0064FF` | Acento secundario (técnico)|
| `warn`    | `#FF3D00` | Confrontativo / error      |
| `white`   | `#F0EFF8` | Texto principal            |

## Tipografías

- **Display**: `Syne` (headings, logotipo) — bold, condensado, ingenieril
- **Body**: `DM Sans` — legible, neutral, profesional
- **Mono**: `JetBrains Mono` — códigos, tags, etiquetas técnicas

## Animaciones

- `reveal` + `visible` → scroll reveal vía IntersectionObserver (CSS)
- `scan-line` → línea de escaneo en Hero (CSS keyframe)
- `animate-float` → flotación del globe en Hero
- `pulse-dot` → punto pulsante en section-tags

## Próximos pasos

- [ ] Integrar Three.js `Globe.tsx` para el Hero 3D real
- [ ] Agregar GSAP ScrollTrigger en ComoFunciona timeline
- [ ] Form de contacto con Server Action de Next.js
- [ ] Página `/manifiesto` con el texto completo
- [ ] Analytics (Plausible / umami)
- [ ] Deploy en Vercel (gratis)

## Deploy en Vercel

```bash
vercel --prod
```

O conectar el repositorio GitHub directamente en vercel.com.

---

> AXIO Collective · Sistemas operativos con IA aplicada · Texcoco, México
