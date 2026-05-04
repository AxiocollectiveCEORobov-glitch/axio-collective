import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://axiocollective.com"),
  title: "AXIO Collective — Sistemas Operativos con IA Aplicada",
  description:
    "Construimos sistemas operativos que piensan, miden y evolucionan con tu negocio. Consultoría de IA y automatización para empresas industriales.",
  keywords: ["consultoría IA", "sistemas operativos", "inteligencia artificial", "mantenimiento industrial", "AXIO"],
  openGraph: {
    title: "AXIO Collective — Sistemas Operativos con IA Aplicada",
    description: "Construimos sistemas operativos que piensan, miden y evolucionan con tu negocio.",
    url: "https://axiocollective.com",
    siteName: "AXIO Collective",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXIO Collective — Sistemas Operativos con IA Aplicada",
    description: "Construimos sistemas operativos que piensan, miden y evolucionan con tu negocio.",
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
