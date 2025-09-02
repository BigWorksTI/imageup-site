import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";

const Footer = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
  };

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IU</span>
              </div>
              <span className="text-xl font-bold">ImageUp</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforme suas imagens comuns em anúncios de alta conversão. 
              Otimização profissional de imagens para aumentar suas vendas online.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            © 2025 ImageUp. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-300">
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("Termos de Uso", `📜 Termos de Uso – ImageUp
(Última atualização: 20/08/2025)

Bem-vindo ao ImageUp. Ao acessar ou utilizar nossa plataforma, você concorda com os presentes Termos de Uso. Recomendamos a leitura atenta, pois eles regem sua relação com a Bigworks Desenvolvimento de Sistemas e Consultoria Ltda. (CNPJ 31.862.395/0001-65), doravante chamada apenas de Bigworks.

1. Objeto
O ImageUp é um serviço online que permite ao usuário enviar imagens de anúncios e receber versões otimizadas, mediante aquisição de créditos.

2. Cadastro e conta do usuário
• Para usar a plataforma, é necessário criar uma conta com nome, e-mail, telefone, CPF/CNPJ e senha.
• O usuário é responsável por manter suas credenciais em sigilo.
• É proibido compartilhar contas ou usar dados falsos.
• O CPF/CNPJ é obrigatório para emissão de notas fiscais sobre os créditos adquiridos, conforme exigido pela legislação brasileira.

3. Créditos e pagamentos
• O uso da plataforma se dá por meio de créditos adquiridos previamente.
• Os créditos não são reembolsáveis após a utilização.
• Os pagamentos são processados por terceiros (ex.: intermediadores financeiros). A Bigworks não armazena dados completos de cartão de crédito.
• Será emitida nota fiscal para todos os créditos adquiridos, utilizando o CPF/CNPJ cadastrado na conta do usuário.
• O usuário é responsável por fornecer um CPF/CNPJ válido para fins fiscais e legais.

4. Uso das imagens
• As imagens enviadas são processadas e descartadas após o uso.
• As versões otimizadas também são armazenadas temporariamente para entrega ao usuário.
• A Bigworks poderá utilizar imagens (originais ou otimizadas) exclusivamente para fins internos e de marketing, como estudos de caso, demonstrações e portfólio, desde que sem identificação pessoal ou comercial direta do usuário, salvo autorização expressa.

5. Responsabilidades
• O usuário não deve enviar imagens ilícitas, ofensivas, protegidas por direitos autorais sem autorização ou que infrinjam leis.
• A Bigworks não se responsabiliza por perdas financeiras decorrentes de resultados de anúncios, sendo o serviço limitado à melhoria visual das imagens.

6. Modificações e encerramento
• A Bigworks pode modificar estes Termos a qualquer momento, informando os usuários por e-mail ou aviso no site.
• A conta poderá ser suspensa em caso de violação destes Termos.

7. Foro
Fica eleito o foro da comarca de Teutônia/RS para dirimir eventuais litígios, salvo disposições legais em contrário.`)}
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </button>
              </ModalTrigger>
              <ModalContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <div className="text-sm text-gray-600 whitespace-pre-line">{modalContent?.content}</div>
                </div>
              </ModalContent>
            </Modal>
            
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("Política de Privacidade", `🔒 Política de Privacidade – ImageUp

A Bigworks Desenvolvimento de Sistemas e Consultoria Ltda. (CNPJ 31.862.395/0001-65), também conhecida como Bigworks Soluções Inteligentes, respeita sua privacidade e cumpre a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).

1. Dados coletados
Podemos coletar:
• Dados de cadastro: nome, e-mail, telefone, CPF/CNPJ, senha.
• Dados de pagamento: processados por intermediadores financeiros (não armazenamos informações completas de cartão).
• Dados de uso: cookies, métricas de navegação, endereço IP, informações de dispositivo.
• Imagens enviadas para otimização (armazenadas temporariamente).

2. Finalidade do uso dos dados
• Criar e gerenciar contas de usuário.
• Processar pagamentos e liberar créditos.
• Processar e entregar imagens otimizadas.
• Melhorar nossos serviços e experiência do usuário.
• Utilizar imagens (originais ou otimizadas) de forma interna ou para marketing (ex.: cases, exemplos antes/depois), desde que sem identificação pessoal do usuário.
• Atender obrigações legais e regulatórias, incluindo emissão de notas fiscais sobre créditos adquiridos.
• O CPF/CNPJ é utilizado exclusivamente para fins fiscais e legais obrigatórios.

3. Cookies e tecnologias de rastreamento
Utilizamos cookies e ferramentas como Google Analytics para analisar métricas de uso, melhorar a navegação e otimizar campanhas de marketing digital. O usuário pode gerenciar cookies diretamente em seu navegador.

4. Compartilhamento de dados
Podemos compartilhar informações com:
• Intermediadores de pagamento.
• Prestadores de serviços de hospedagem e infraestrutura.
• Parceiros de análise de tráfego (como Google).
• Nunca vendemos dados pessoais a terceiros.

5. Direitos do titular (LGPD)
O usuário pode, a qualquer momento:
• Solicitar confirmação da existência de tratamento de dados.
• Acessar, corrigir ou excluir seus dados pessoais.
• Solicitar portabilidade.
• Revogar consentimento para usos específicos.
Basta enviar uma solicitação para: imageup@bigworks.com.br

6. Segurança e armazenamento
• Os dados são armazenados em servidores seguros.
• As imagens enviadas e otimizadas são temporárias e descartadas após a entrega.

7. Alterações nesta política
Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível em nosso site.`)}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </button>
              </ModalTrigger>
              <ModalContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <div className="text-sm text-gray-600 whitespace-pre-line">{modalContent?.content}</div>
                </div>
              </ModalContent>
            </Modal>
            
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("LGPD", `⚖️ Lei Geral de Proteção de Dados – LGPD

A Bigworks Desenvolvimento de Sistemas e Consultoria Ltda. está comprometida com a transparência no tratamento dos seus dados pessoais, em conformidade com a Lei nº 13.709/2018 (LGPD).

1. Base legal para tratamento
Tratamos seus dados com base nas seguintes hipóteses legais:
• Execução de contrato: para prestação dos serviços do ImageUp.
• Interesse legítimo: para melhoria dos serviços e análise de uso.
• Cumprimento de obrigação legal: para emissão de notas fiscais e conformidade tributária.
• Consentimento: para uso de cookies não essenciais e comunicações promocionais.

2. Controlador de dados
Bigworks Desenvolvimento de Sistemas e Consultoria Ltda.
CNPJ: 31.862.395/0001-65
E-mail para exercício de direitos: imageup@bigworks.com.br

3. Categorias de dados tratados
• Dados de identificação: nome, CPF/CNPJ, telefone, e-mail.
• Dados financeiros: informações de pagamento processadas por terceiros.
• Dados de navegação: cookies, logs de acesso, métricas de uso.
• Dados de conteúdo: imagens enviadas para otimização (temporárias).

4. Seus direitos como titular
Conforme a LGPD, você pode solicitar:
• Confirmação da existência de tratamento dos seus dados.
• Acesso aos seus dados pessoais.
• Correção de dados incompletos, inexatos ou desatualizados.
• Anonimização, bloqueio ou eliminação de dados desnecessários.
• Portabilidade dos dados para outro fornecedor.
• Eliminação de dados tratados com consentimento.
• Informações sobre compartilhamento com terceiros.
• Revogação do consentimento.

5. Exercício de direitos
Para exercer seus direitos, entre em contato:
E-mail: imageup@bigworks.com.br
Prazo de resposta: até 15 dias úteis

6. Incidentes de segurança
Em caso de vazamento que possa acarretar risco aos seus dados, você será comunicado conforme determina a LGPD.

7. Reclamações
Você pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD) através do site: https://www.gov.br/anpd`)}
                  className="hover:text-white transition-colors"
                >
                  LGPD
                </button>
              </ModalTrigger>
              <ModalContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <div className="text-sm text-gray-600 whitespace-pre-line">{modalContent?.content}</div>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;