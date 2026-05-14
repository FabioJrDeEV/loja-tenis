"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Coleção Primavera",
      subtitle: "Novos modelos chegaram",
      description: "Descubra os lançamentos da nossa coleção primavera com designs inovadores e conforto excepcional.",
      cta: "Ver Coleção",
      href: "/novidades"
    },
    {
      title: "Descontos Especiais",
      subtitle: "Até 30% off",
      description: "Aproveite nossas ofertas por tempo limitado em modelos selecionados.",
      cta: "Ver Ofertas",
      href: "/novidades"
    },
    {
      title: "Edição Limitada",
      subtitle: "Peças exclusivas",
      description: "Itens únicos com design assinado que você não encontra em nenhum outro lugar.",
      cta: "Ver Exclusivos",
      href: "/novidades"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="min-h-[700px] flex items-center bg-gradient-to-br from-paper via-white to-surface border-b border-line/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ink/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[800px]">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-ink font-black text-[clamp(3rem,8vw,6rem)] leading-[1.05] max-w-[900px] tracking-tight animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-muted/80 text-lg leading-[1.8] max-w-[600px] mt-6 animate-fade-in">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in">
            <Link 
              className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-medium hover:bg-primary-dark hover:shadow-strong transition-all duration-300 min-h-[56px] flex items-center justify-center text-sm tracking-wide"
              href={slides[currentSlide].href}
            >
              {slides[currentSlide].cta}
            </Link>
            <Link 
              className="border-2 border-ink/20 text-ink font-bold px-8 py-4 rounded-full hover:border-ink hover:bg-ink/5 transition-all duration-300 min-h-[56px] flex items-center justify-center text-sm tracking-wide"
              href="/contato"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-line hover:bg-primary/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}