"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Imagem = {
  id: number;
  src: string;
  alt: string;
};

const images: Imagem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=800&fit=crop", alt: "Tênis Esportivo" },
  { id: 2, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=800&fit=crop", alt: "Sapatos Feminino" },
  { id: 3, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&h=800&fit=crop", alt: "Bota Masculina" },
  { id: 4, src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1920&h=800&fit=crop", alt: "Sandália Confortável" },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-strong group">
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-ink transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-ink transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group py-2"
          >
            <div 
              className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-white" : "w-4 bg-white/40 group-hover:bg-white/60"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
