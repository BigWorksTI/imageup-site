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
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ImageUp",
          "description": "Otimização profissional de imagens para anúncios que aumentam suas vendas",
          "url": "https://imageup.vps.bigworks.com.br",
          "logo": "https://imageup.vps.bigworks.com.br/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-48-99838-6116",
            "contactType": "Customer Service",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://wa.me/5548998386116"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Otimização de Imagens para Anúncios",
          "provider": {
            "@type": "Organization",
            "name": "ImageUp"
          },
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pacotes de Créditos ImageUp",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "1 Crédito"
                },
                "price": "7.50",
                "priceCurrency": "BRL"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "50 Créditos"
                },
                "price": "199.90",
                "priceCurrency": "BRL"
              }
            ]
          }
        })}
      </script>
      
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
