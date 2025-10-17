import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageComparison from "./ImageComparison";
import beforeImage from "@/assets/before-image.jpg";
import afterImage from "@/assets/depois-nova.png";
import beforeFood from "@/assets/before-food-new.png";
import afterFood from "@/assets/after-food.png";
import newBefore from "@/assets/new-before.jpg";
import newAfter from "@/assets/new-after.png";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      beforeImage: newBefore,
      afterImage: newAfter,
      beforeAlt: "Exemplo de imagem de produto antes da otimização profissional para anúncios",
      afterAlt: "Exemplo de imagem de produto após otimização profissional com melhor iluminação, cores e composição para aumentar conversão"
    },
    {
      id: 2,
      beforeImage,
      afterImage,
      beforeAlt: "Foto de produto comum sem tratamento para campanhas de marketing digital",
      afterAlt: "Foto de produto otimizada com tratamento profissional para máxima performance em anúncios online"
    },
    {
      id: 3,
      beforeImage: beforeFood,
      afterImage: afterFood,
      beforeAlt: "Foto de comida simples antes da otimização para redes sociais e e-commerce",
      afterAlt: "Foto de comida otimizada com cores vibrantes e composição atraente para gerar mais vendas em delivery e restaurantes"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <ImageComparison
          beforeImage={slides[currentSlide].beforeImage}
          afterImage={slides[currentSlide].afterImage}
          beforeAlt={slides[currentSlide].beforeAlt}
          afterAlt={slides[currentSlide].afterAlt}
        />
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
        onClick={prevSlide}
        aria-label="Ver exemplo anterior de otimização de imagem"
      >
        ←
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
        onClick={nextSlide}
        aria-label="Ver próximo exemplo de otimização de imagem"
      >
        →
      </Button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Navegação de exemplos de otimização">
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Ver exemplo ${index + 1} de otimização`}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageCarousel;