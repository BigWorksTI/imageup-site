import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "1 Crédito",
    subtitle: "teste rápido",
    price: "R$ 7,50",
    originalPrice: null,
    credits: "1 crédito",
    discount: null,
    pricePerCredit: null,
    features: [
      "1 imagem otimizada",
      "Qualidade profissional",
      "Suporte por email",
      "Resultado em poucos minutos"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "5 Créditos",
    subtitle: "economize 12%",
    price: "R$ 32,90",
    originalPrice: "R$ 37,50",
    credits: "5 créditos",
    discount: null,
    pricePerCredit: "R$ 6,58",
    features: [
      "5 imagens otimizadas",
      "Qualidade profissional",
      "Suporte por email",
      "Resultado em poucos minutos"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "10 Créditos",
    subtitle: "economize 20%",
    price: "R$ 59,90",
    originalPrice: "R$ 75,00",
    credits: "10 créditos",
    discount: null,
    pricePerCredit: "R$ 5,99",
    features: [
      "10 imagens otimizadas",
      "Qualidade profissional",
      "Suporte por email",
      "Resultado em poucos minutos"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "20 Créditos",
    subtitle: "economize 27%",
    price: "R$ 109,90",
    originalPrice: "R$ 150,00",
    credits: "20 créditos",
    discount: null,
    pricePerCredit: "R$ 5,50",
    features: [
      "20 imagens otimizadas",
      "Qualidade profissional",
      "Suporte por email",
      "Resultado em poucos minutos"
    ],
    popular: false,
    variant: "outline" as const
  },
  {
    name: "50 Créditos",
    subtitle: "melhor custo-benefício",
    price: "R$ 199,90",
    originalPrice: "R$ 375,00",
    credits: "50 créditos",
    discount: "47%",
    pricePerCredit: "R$ 4,00",
    features: [
      "50 imagens otimizadas",
      "Qualidade profissional",
      "Suporte prioritário",
      "Resultado em poucos minutos"
    ],
    popular: true,
    variant: "premium" as const
  },
  {
    name: "100 Créditos",
    subtitle: "profissional",
    price: "R$ 349,90",
    originalPrice: "R$ 750,00",
    credits: "100 créditos",
    discount: "53%",
    pricePerCredit: "R$ 3,50",
    features: [
      "100 imagens otimizadas",
      "Qualidade profissional",
      "Suporte prioritário",
      "Resultado em poucos minutos",
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
            Escolha o plano ideal para o seu negócio e comece a otimizar suas imagens hoje mesmo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
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
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-3 ${plan.popular ? 'text-white/80' : 'text-gray-medium'}`}>
                  {plan.subtitle}
                </p>
                <div className="mb-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-dark'}`}>
                      {plan.price}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <div className={`text-xs ${plan.popular ? 'text-white/60' : 'text-gray-medium'}`}>
                      <span className="line-through">{plan.originalPrice}</span>
                      {plan.discount && (
                        <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-electric'}`}>
                          Economize {plan.discount}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <p className={`text-xs ${plan.popular ? 'text-white/80' : 'text-gray-medium'}`}>
                  {plan.credits}{plan.pricePerCredit && ` (${plan.pricePerCredit} cada)`}
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
                onClick={() => window.open(`https://wa.me/5548998386116?text=Olá! Gostaria de comprar ${plan.credits} no ImageUp.`, '_blank')}
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
            Cada crédito permite otimizar uma imagem. Cada imagem melhorada custa um crédito. Os créditos não expiram e você pode usar quando quiser. 
            Ideal para campanhas sazonais, testes A/B ou crescimento gradual do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;