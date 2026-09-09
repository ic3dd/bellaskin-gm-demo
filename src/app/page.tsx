import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { LaserDifferentiation } from "@/components/laser-differentiation";
import { About } from "@/components/about";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { DemoBadge } from "@/components/demo-badge";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <LaserDifferentiation />
        <About />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
      <DemoBadge />
    </>
  );
}
