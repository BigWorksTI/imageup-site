import { Button } from "@/components/ui/button";

const CTAFinal = () => {
  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Não perca vendas por causa de{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              imagens ruins
            </span>
          </h2>
          
          <div className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Com o{" "}
              <span className="text-electric font-bold">ImageUp</span>, você transforma qualquer imagem em um{" "}
              <span className="text-electric font-semibold">anúncio de alta performance</span>. 
              É rápido, fácil e acessível.
            </p>
            
            <p className="text-lg">
              Invista hoje e veja a diferença nos seus resultados.
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-12">
            <Button 
              variant="premium" 
              size="xl"
              className="text-2xl py-6 px-12 mb-6"
            >
              🚀 Comprar créditos e aumentar minhas vendas agora
            </Button>
            
            <div className="text-sm text-gray-300">
              ✅ Sem compromisso • ✅ Resultados garantidos • ✅ Suporte especializado
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-3">🎯</div>
              <div className="font-semibold mb-2">Resultados Garantidos</div>
              <div className="text-sm text-gray-300">Se não ficar satisfeito, devolvemos seus créditos</div>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-3">⚡</div>
              <div className="font-semibold mb-2">Entrega Rápida</div>
              <div className="text-sm text-gray-300">Receba suas imagens otimizadas em horas, não dias</div>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-3">🔒</div>
              <div className="font-semibold mb-2">Pagamento Seguro</div>
              <div className="text-sm text-gray-300">Processamento seguro e créditos que nunca expiram</div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-electric/10 border border-electric/30 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <span className="text-electric font-bold text-lg">Oferta por tempo limitado!</span>
            </div>
            <p className="text-gray-200">
              Primeiros 100 clientes ganham <span className="text-electric font-bold">25% de créditos extras</span> em qualquer plano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;