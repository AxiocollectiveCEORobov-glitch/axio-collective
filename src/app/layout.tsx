import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "AXIO Collective — Sistemas Operativos con IA Aplicada",
  description:
    "No automatizamos por automatizar. Construimos sistemas operativos que piensan, miden y evolucionan con tu negocio.",
  keywords: ["consultoría IA", "sistemas operativos", "inteligencia artificial", "mantenimiento industrial", "AXIO"],
  openGraph: {
    title: "AXIO Collective",
    description: "Sistemas operativos con IA aplicada para empresas que operan en el mundo real.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="noise">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
