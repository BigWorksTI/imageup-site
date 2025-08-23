import { Button } from "@/components/ui/button";
import beforeImage from "@/assets/before-image.jpg";
import afterImage from "@/assets/after-image.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Otimização de imagens para anúncios que{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                aumentam suas vendas
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-medium mb-8 leading-relaxed">
              Transforme suas imagens comuns em anúncios de alta conversão. 
              Rápido, acessível e sem complicação.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5548998386116', '_blank')}
              >
                Peça uma imagem grátis
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="w-full sm:w-auto text-dark border-gray-medium hover:bg-gray-light"
              >
                Ver como funciona
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-medium">
              ✅ Sem mensalidade • ✅ Pague apenas pelo que usar • ✅ Resultados profissionais
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={beforeImage} 
                  alt="Imagem antes da otimização"
                  className="w-full h-full object-cover rounded-lg shadow-elegant aspect-square"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                  Antes
                </div>
              </div>
              <div className="relative">
                <img 
                  src={afterImage} 
                  alt="Imagem depois da otimização"
                  className="w-full h-full object-cover rounded-lg shadow-elegant aspect-square"
                />
                <div className="absolute bottom-2 left-2 bg-electric text-white px-2 py-1 rounded text-sm font-semibold">
                  Depois
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
              <span className="text-white font-bold text-lg">+25%</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-12 bg-electric rounded-full flex items-center justify-center shadow-primary">
              <span className="text-white font-semibold text-sm">Conversão</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;