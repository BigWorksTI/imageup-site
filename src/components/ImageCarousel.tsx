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
      beforeAlt: "Imagem antes da otimização",
      afterAlt: "Imagem depois da otimização"
    },
    {
      id: 2,
      beforeImage,
      afterImage,
      beforeAlt: "Imagem antes da otimização",
      afterAlt: "Imagem depois da otimização"
    },
    {
      id: 3,
      beforeImage: beforeFood,
      afterImage: afterFood,
      beforeAlt: "Foto de comida antes da otimização",
      afterAlt: "Foto de comida depois da otimização"
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
      >
        ←
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
        onClick={nextSlide}
      >
        →
      </Button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
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