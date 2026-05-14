"use client";

import { useState } from "react";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    badge?: string;
  };
  onAddToCart?: (product: any) => void;
  onRemoveFromCart?: (productId: number) => void;
  isInCart?: boolean;
};

export function ProductCard({ product, onAddToCart, onRemoveFromCart, isInCart }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(isInCart || false);

  const handleCartAction = () => {
    if (isAdded) {
      if (onRemoveFromCart) {
        onRemoveFromCart(product.id);
      }
      setIsAdded(false);
    } else {
      if (onAddToCart) {
        onAddToCart(product);
      }
      setIsAdded(true);
    }
  };

  return (
    <article 
      className="bg-surface border border-line/30 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden h-full group"
    >
      <div 
        className="product-placeholder bg-gradient-to-br from-surface via-white to-line/20 h-64 flex items-center justify-center relative overflow-hidden"
        aria-label={`Espaço para imagem de ${product.name}`}
      >
        <span className="text-ink/40 text-sm font-medium">Imagem do produto</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h2 className="text-ink font-bold text-lg leading-tight">{product.name}</h2>
          {product.badge && (
            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
              {product.badge}
            </span>
          )}
        </div>
        <p className="text-muted/70 text-sm leading-[1.6] min-h-[64px]">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <strong className="text-primary font-black text-xl">{product.price}</strong>
          <button 
            onClick={handleCartAction}
            className={`font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
              isAdded 
                ? "bg-mint text-ink" 
                : "bg-ink text-paper hover:bg-primary"
            }`}
          >
            {isAdded ? "Remover" : "Comprar"}
          </button>
        </div>
      </div>
    </article>
  );
}