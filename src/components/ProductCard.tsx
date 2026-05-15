"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const added = isInCart(product.id);

  return (
    <article 
      className="group bg-white border border-line/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-strong hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-lavender/50 to-surface flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
        >
          {/* Visual Placeholder */}
          <div className="w-32 h-32 rounded-full bg-white/50 blur-3xl" />
          <span className="absolute text-ink/20 font-black text-6xl rotate-[-20deg] select-none tracking-tighter">
            PASSO
          </span>
        </div>
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-medium">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button 
            onClick={(e) => {
              e.preventDefault();
              console.log("Adding to cart:", product);
              addToCart(product);
            }}
            className={`font-black px-6 py-3 rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
              added ? "bg-mint text-ink" : "bg-white text-ink hover:bg-primary hover:text-white"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                No Carrinho
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Adicionar
              </>
            )}
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-1">
            {product.category}
          </p>
          <h3 className="text-ink font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>
        
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-muted text-[10px] uppercase font-bold tracking-wider">Preço</span>
            <strong className="text-ink font-black text-2xl tracking-tight">{product.price}</strong>
          </div>
          
          <button className="p-3 bg-surface rounded-xl text-ink hover:bg-ink hover:text-white transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}