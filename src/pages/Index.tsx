import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
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
        
        {/* Image Carousel Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <div style={{
                width: 'min(80vh, 80vw)',
                height: 'min(80vh, 80vw)',
                aspectRatio: '1'
              }}>
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>
        
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
