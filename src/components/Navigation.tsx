import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IU</span>
            </div>
            <span className="text-xl font-bold text-dark">ImageUp</span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-medium hover:text-electric transition-colors font-medium"
            >
              Como funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-medium hover:text-electric transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-medium hover:text-electric transition-colors font-medium"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-medium hover:text-electric transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('precos')}
          >
            Começar agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;