import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import { Filosofia } from "@/components/sections/Filosofia";
import QuéHacemos from "@/components/sections/QueHacemos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Diferenciador from "@/components/sections/Diferenciador";
import { Casos } from "@/components/sections/Casos";
import Proceso from "@/components/sections/Proceso";
import FiltroClientes from "@/components/sections/FiltroClientes";
import TerminalDiagnostic from "@/components/ui/TerminalDiagnostic";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Filosofia />
      <QuéHacemos />
      <ComoFunciona />
      <Diferenciador />
      <Casos />
      <Proceso />
      <FiltroClientes />
      <TerminalDiagnostic />
      <CTA />
      <Footer />
    </main>
  );
}
