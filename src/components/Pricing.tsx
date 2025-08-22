import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plano Inicial",
    subtitle: "perfeito para testar",
    price: "R$ 49",
    credits: "50 créditos",
    features: [
      "50 imagens otimizadas",
      "Qualidade profissional",
      "Suporte por email",
      "Resultado em até 24h"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Plano Mais Vendido",
    subtitle: "melhor custo-benefício",
    price: "R$ 129",
    credits: "150 créditos",
    features: [
      "150 imagens otimizadas",
      "Qualidade premium",
      "Suporte prioritário",
      "Resultado em até 12h",
      "Bonus: 25 créditos extras"
    ],
    popular: true,
    variant: "premium" as const
  },
  {
    name: "Plano Profissional",
    subtitle: "para e-commerces e tráfego pesado",
    price: "R$ 299",
    credits: "400 créditos",
    features: [
      "400 imagens otimizadas",
      "Qualidade ultra premium",
      "Suporte VIP",
      "Resultado em até 6h",
      "Bonus: 100 créditos extras",
      "Consultoria personalizada"
    ],
    popular: false,
    variant: "cta" as const
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
            Escolha o plano de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              créditos ideal
            </span>{" "}
            e comece hoje mesmo
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Todos os planos incluem otimização profissional de imagens para anúncios, sem limites de qualidade.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-hero text-white shadow-glow border-2 border-white/20' 
                  : 'bg-card shadow-elegant hover:shadow-glow'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric text-white px-4 py-1 rounded-full text-sm font-semibold shadow-primary">
                  Mais Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-medium'}`}>
                  {plan.subtitle}
                </p>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-medium'}`}>
                  {plan.credits}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-electric/20'
                    }`}>
                      <span className={`text-xs ${plan.popular ? 'text-white' : 'text-electric'}`}>✓</span>
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-medium'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.variant}
                size="lg"
                className="w-full"
              >
                Comprar agora
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gray-light rounded-xl p-8">
          <h3 className="text-xl font-bold text-dark mb-4">
            💡 Como funcionam os créditos?
          </h3>
          <p className="text-gray-medium leading-relaxed max-w-3xl mx-auto">
            Cada crédito permite otimizar uma imagem. Os créditos não expiram e você pode usar quando quiser. 
            Ideal para campanhas sazonais, testes A/B ou crescimento gradual do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;