import { Button } from "@/components/ui/button";
import heroImage from "@/assets/before-after-hero.jpg";

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
              >
                Compre créditos e venda mais agora
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
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 animate-float">
              <img 
                src={heroImage} 
                alt="Antes e depois - otimização de imagens para anúncios"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
              <span className="text-white font-bold text-lg">+80%</span>
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