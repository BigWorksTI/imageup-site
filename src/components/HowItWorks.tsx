import { Button } from "@/components/ui/button";
import step1Icon from "@/assets/step1-icon.png";
import step2Icon from "@/assets/step2-icon.png";
import step3Icon from "@/assets/step3-icon.png";

const steps = [
  {
    icon: step1Icon,
    number: "1",
    title: "Compre créditos",
    description: "Planos acessíveis para qualquer anunciante."
  },
  {
    icon: step2Icon,
    number: "2", 
    title: "Envie suas imagens de anúncios",
    description: "Fotos de produtos, posts ou banners."
  },
  {
    icon: step3Icon,
    number: "3",
    title: "Receba imagens otimizadas profissionalmente",
    description: "Prontas para atrair mais cliques e gerar mais conversões."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
            De imagens comuns a anúncios de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              alta performance
            </span>{" "}
            em minutos
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Processo simples e rápido que transforma suas imagens em ferramentas de vendas poderosas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-card rounded-xl p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-primary">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <img 
                    src={step.icon} 
                    alt={`Passo ${step.number}`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Quero começar agora
          </Button>
          <p className="text-sm text-gray-medium mt-4">
            Sem compromisso • Comece a vender mais hoje mesmo
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;