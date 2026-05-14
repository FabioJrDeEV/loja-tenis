"use client";

import { useState, useEffect } from "react";

type Imagens = {
  id: number;
  src: string;
  alt: string;
};

const images: Imagens[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=600&fit=crop", alt: "Tênis Esportivo" },
  { id: 2, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=600&fit=crop", alt: "Sapatos Feminino" },
  { id: 3, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&h=600&fit=crop", alt: "Bota Masculina" },
  { id: 4, src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1920&h=600&fit=crop", alt: "Sandália Confortável" },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;
        if (nextIndex >= images.length) {
          setDirection(-1);
          return images.length - 1;
        } else if (nextIndex < 0) {
          setDirection(1);
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full min-h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
