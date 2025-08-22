const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IU</span>
              </div>
              <span className="text-xl font-bold">ImageUp</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforme suas imagens comuns em anúncios de alta conversão. 
              Otimização profissional de imagens para aumentar suas vendas online.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric/30 transition-colors">
                <span className="text-electric">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric/30 transition-colors">
                <span className="text-electric">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric/30 transition-colors">
                <span className="text-electric">💬</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-electric">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Otimização de Imagens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anúncios para E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Posts para Redes Sociais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banners Publicitários</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-electric">Suporte</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-300 text-sm">
            © 2024 ImageUp. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;