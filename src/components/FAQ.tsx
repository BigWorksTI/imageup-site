import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a compra de créditos?",
    answer: "Você escolhe um plano, realiza a compra e recebe créditos na sua conta. Cada envio de imagem consome créditos, simples assim. Os créditos não expiram e ficam disponíveis para uso quando você precisar."
  },
  {
    question: "Que tipo de imagem eu posso enviar?",
    answer: "Qualquer imagem usada em anúncios online: produtos de e-commerce, posts patrocinados, banners para redes sociais, anúncios do Google, Facebook, Instagram e mais. Aceitamos JPG, PNG e outros formatos populares."
  },
  {
    question: "O ImageUp realmente ajuda a vender mais?",
    answer: "Sim! Imagens otimizadas chamam mais atenção, aumentam cliques e elevam a taxa de conversão. Estudos mostram que anúncios com imagens profissionais podem aumentar as vendas em até 80%. Mais conversão = mais vendas."
  },
  {
    question: "Preciso ser designer ou ter experiência?",
    answer: "Não. O processo é totalmente automatizado e fácil. Você só envia a imagem e recebe a versão melhorada. Nossa IA e equipe de designers cuidam de todos os aspectos técnicos da otimização."
  },
  {
    question: "Vale a pena para pequenos negócios?",
    answer: "Com certeza. Até pequenos ajustes visuais podem gerar grandes diferenças no resultado das campanhas. Nosso plano inicial é acessível e perfeito para pequenos negócios testarem o impacto da otimização."
  },
  {
    question: "Quanto tempo demora para receber as imagens?",
    answer: "Dependendo do plano escolhido: Plano Inicial (24h), Plano Mais Vendido (12h), Plano Profissional (6h). Em casos urgentes, entre em contato que podemos acelerar o processo."
  },
  {
    question: "Posso cancelar ou reembolsar créditos não usados?",
    answer: "Os créditos não expiram, então você sempre pode usá-los quando precisar. Para situações específicas de reembolso, entre em contato com nosso suporte que analisaremos caso a caso."
  },
  {
    question: "Que tipo de otimização vocês fazem?",
    answer: "Melhoramos composição, cores, contraste, nitidez, elementos visuais, textos (quando aplicável), background e outros aspectos que comprovadamente aumentam a performance de anúncios online."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perguntas
            </span>{" "}
            Frequentes
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Tire suas dúvidas sobre como funciona a otimização de imagens para anúncios
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 border-0"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      ❓
                    </div>
                    <span className="text-lg font-semibold text-dark group-hover:text-electric transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-medium mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:suporte@imageup.com"
              className="text-electric hover:text-electric-dark font-semibold transition-colors"
            >
              📧 suporte@imageup.com
            </a>
            <a 
              href="https://wa.me/5511999999999"
              className="text-electric hover:text-electric-dark font-semibold transition-colors"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;