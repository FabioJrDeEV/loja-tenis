"use client";

import { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=600&fit=contain&bg=fff", alt: "Tênis Esportivo" },
  { id: 2, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=600&fit=contain&bg=fff", alt: "Sapatos Feminino" },
  { id: 3, src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&h=600&fit=contain&bg=fff", alt: "Bota Masculina" },
  { id: 4, src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1920&h=600&fit=contain&bg=fff", alt: "Sandália Confortável" },
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
    <div className="relative w-full overflow-hidden rounded-3xl shadow-strong bg-surface">
      <div 
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 flex items-center justify-center p-12">
            <img 
              src={image.src} 
              alt={image.alt}
              className="max-h-[500px] max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-ink/20 hover:bg-ink/40"}`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-strong bg-surface">
      <div 
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 flex items-center justify-center p-12">
            <img 
              src={image.src} 
              alt={image.alt}
              className="max-h-[500px] max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-ink/20 hover:bg-ink/40"}`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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
              className="w-full min-h-[1000px] object-cover"
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
