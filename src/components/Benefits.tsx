const benefits = [
  {
    icon: "📈",
    title: "Aumente a taxa de conversão",
    description: "dos seus anúncios digitais."
  },
  {
    icon: "⭐",
    title: "Destaque-se da concorrência",
    description: "com imagens profissionais."
  },
  {
    icon: "💰",
    title: "Mais cliques, mais leads",
    description: "e mais vendas."
  },
  {
    icon: "⚡",
    title: "Zero complicação",
    description: "sem designer, sem demora."
  },
  {
    icon: "💳",
    title: "Modelo por créditos",
    description: "você só paga pelo que usa."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
            Por que usar o{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ImageUp
            </span>{" "}
            nos seus anúncios?
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto">
            Descubra como otimizar suas imagens pode revolucionar seus resultados de vendas
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    ✅ {benefit.title}
                  </h3>
                  <p className="text-gray-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Transforme suas métricas hoje mesmo
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  +80%
                </div>
                <div className="text-gray-medium">Taxa de conversão</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  +150%
                </div>
                <div className="text-gray-medium">Cliques nos anúncios</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  -60%
                </div>
                <div className="text-gray-medium">Custo por aquisição</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;