import { useState, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const ImageComparison = ({ beforeImage, afterImage, beforeAlt, afterAlt }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [beforeImageLoaded, setBeforeImageLoaded] = useState(false);
  const [afterImageLoaded, setAfterImageLoaded] = useState(false);
  
  const imagesLoaded = beforeImageLoaded && afterImageLoaded;

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Loading Skeleton */}
      {!imagesLoaded && (
        <Skeleton className="w-full h-full rounded-lg" />
      )}
      
      {/* Main Comparison Container */}
      <div 
        ref={containerRef}
        className={`relative w-full h-full cursor-col-resize select-none transition-opacity duration-300 ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onClick={handleClick}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          onLoad={() => setAfterImageLoaded(true)}
        />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="w-full h-full object-cover"
            draggable={false}
            onLoad={() => setBeforeImageLoaded(true)}
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div 
            className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full shadow-lg cursor-col-resize flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold pointer-events-none">
          Antes
        </div>
        <div className="absolute bottom-2 right-2 bg-gradient-primary text-white px-2 py-1 rounded text-sm font-semibold pointer-events-none">
          Depois
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;