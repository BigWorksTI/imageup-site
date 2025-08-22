const Authority = () => {
  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Imagens de qualidade
            </span>{" "}
            vendem mais
          </h2>
          
          <div className="text-xl lg:text-2xl leading-relaxed mb-12 text-gray-200">
            <p className="mb-6">
              Estudos comprovam: anúncios com{" "}
              <span className="text-electric font-semibold">imagens otimizadas</span>{" "}
              podem aumentar em até{" "}
              <span className="text-electric font-bold text-3xl">25%</span>{" "}
              a taxa de conversão.
            </p>
            
            <p className="text-lg">
              Cada clique perdido é dinheiro desperdiçado. Não arrisque suas vendas 
              por detalhes visuais que podem ser corrigidos em minutos.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold mb-2">Precisão Profissional</div>
              <div className="text-sm text-gray-300">Otimização baseada em dados e práticas comprovadas</div>
            </div>
            
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold mb-2">Resultados Rápidos</div>
              <div className="text-sm text-gray-300">Melhore suas campanhas em questão de minutos</div>
            </div>
            
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold mb-2">ROI Comprovado</div>
              <div className="text-sm text-gray-300">Clientes relatam aumentos significativos nas vendas</div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl italic font-light text-gray-200 border-l-4 border-electric pl-6 mb-8">
            "A diferença visual pode ser a diferença entre uma venda perdida e um cliente conquistado."
          </blockquote>
          
          <div className="text-sm text-gray-300">
            — Baseado em estudos de marketing digital e experiência de milhares de anunciantes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;