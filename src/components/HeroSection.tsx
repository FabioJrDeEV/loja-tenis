"use client";

import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Coleção Premium",
      subtitle: "Estilo e Conforto",
      description: "Descubra nossa nova coleção de calçados premium com tecnologia de ponta e design inovador.",
      cta: "Ver Coleção",
      image: "/placeholder-hero.jpg"
    },
    {
      id: 2,
      title: "Descontos Exclusivos",
      subtitle: "Até 40% de Desconto",
      description: "Aproveite ofertas especiais em modelos selecionados por tempo limitado.",
      cta: "Comprar Agora",
      image: "/placeholder-sale.jpg"
    },
    {
      id: 3,
      title: "Edição Limitada",
      subtitle: "Peças Exclusivas",
      description: "Itens únicos com design assinado que você não encontra em nenhum outro lugar.",
      cta: "Ver Exclusivos",
      image: "/placeholder-exclusive.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ink/10 to-ink/5 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black text-ink leading-tight mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-primary text-lg font-bold uppercase tracking-widest mb-4">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-muted text-lg mb-8 max-w-lg">
            {slides[currentSlide].description}
          </p>
          <button className="bg-ink text-white font-bold px-8 py-4 rounded-full hover:bg-primary hover:shadow-lg transition-all duration-300">
            {slides[currentSlide].cta}
          </button>
        </div>
      </div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current0 ? "bg-primary scale-125" : "bg-line hover:bg-primary/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}