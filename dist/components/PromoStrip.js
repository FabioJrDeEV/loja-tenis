"use client";

import { useEffect, useState } from "react";

const promoMessages = [
  "5% de desconto no Pix",
  "Dividimos em até 12x no cartão",
  "Troca fácil em até 7 dias"
];

export function PromoStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % promoMessages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-[#1a202c] text-white/90 text-sm font-semibold py-2.5 text-center overflow-hidden"
      aria-live="polite"
      aria-label="Informações promocionais"
    >
      <span key={promoMessages[activeIndex]} className="promo-message">
        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2.5" />
        {promoMessages[activeIndex]}
      </span>
    </div>
  );
}
