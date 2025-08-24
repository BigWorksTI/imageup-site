import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-center">
          {/* Content */}
          <div className="text-center max-w-4xl">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;