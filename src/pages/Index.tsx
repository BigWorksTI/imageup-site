import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Authority from "@/components/Authority";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <div id="como-funciona">
          <HowItWorks />
        </div>
        <div id="beneficios">
          <Benefits />
        </div>
        <Authority />
        <div id="precos">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <CTAFinal />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
