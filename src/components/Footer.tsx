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
            © 2024 ImageUp. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-300">
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("Termos de Uso", "Aqui estarão os Termos de Uso completos do ImageUp.")}
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-600">{modalContent?.content}</p>
                </div>
              </ModalContent>
            </Modal>
            
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("Política de Privacidade", "Aqui estará a Política de Privacidade completa do ImageUp.")}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-600">{modalContent?.content}</p>
                </div>
              </ModalContent>
            </Modal>
            
            <Modal>
              <ModalTrigger asChild>
                <button 
                  onClick={() => openModal("LGPD", "Aqui estarão as informações sobre LGPD e tratamento de dados do ImageUp.")}
                  className="hover:text-white transition-colors"
                >
                  LGPD
                </button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>{modalContent?.title}</ModalTitle>
                </ModalHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-600">{modalContent?.content}</p>
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