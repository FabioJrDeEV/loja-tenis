"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquear scroll do body quando o carrinho estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay - Garante que o fundo fique escurecido e bloqueie interações */}
      <div 
        className={`fixed inset-0 bg-ink/60 backdrop-blur-md z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Container do Carrinho - Responsivo: Dropdown no mobile, Sidebar no desktop */}
      <aside 
        className={`fixed z-[100] bg-white shadow-strong transition-all duration-500 ease-in-out border-line/20
          ${!isOpen ? "pointer-events-none invisible" : "visible"}
          
          ${/* Mobile: Top-down dropdown (default) */ ""}
          top-0 left-0 w-full max-h-[95vh]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
          
          ${/* Desktop: Sidebar from right (overrides mobile) */ ""}
          md:top-0 md:right-0 md:left-auto md:w-[480px] md:h-full md:max-h-screen md:border-l
          md:translate-y-0
          ${isOpen ? "md:translate-x-0" : "md:translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header do Carrinho - Padding reduzido para ganhar espaço */}
          <div className="flex-shrink-0 flex items-center justify-between p-5 md:p-6 border-b border-line/30 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-black text-ink tracking-tight">Carrinho</h2>
                <p className="text-[10px] md:text-xs text-muted font-bold uppercase tracking-widest">{totalItems} itens</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2.5 hover:bg-surface rounded-2xl transition-all duration-300 group"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-ink group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Lista de Itens - Scrollable Area - Padding otimizado */}
          <div className="flex-1 overflow-y-auto p-5 md:p-8 scrollbar-hide">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center animate-bounce">
                  <ShoppingBag className="w-10 h-10 text-muted/20" />
                </div>
                <div className="space-y-2">
                  <p className="text-ink font-black text-lg">Sua sacola está vazia</p>
                  <p className="text-muted text-xs max-w-[220px] mx-auto leading-relaxed">
                    Explore nossas coleções e encontre o par perfeito para você.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-ink text-white font-black px-6 py-3.5 rounded-2xl hover:bg-primary transition-all duration-300 shadow-medium text-sm"
                >
                  Começar a Comprar
                </button>
              </div>
            ) : (
              <div className="space-y-6 md:space-y-8 pb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 md:gap-6 group animate-fade-in">
                    {/* Imagem Placeholder com Badge de Quantidade */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 bg-surface rounded-[1.5rem] md:rounded-3xl flex-shrink-0 flex items-center justify-center border border-line/30 overflow-hidden group-hover:border-primary/30 transition-colors">
                      <div className="text-[8px] md:text-[10px] text-muted/30 font-black uppercase tracking-tighter rotate-12">Passo Fino</div>
                      <span className="absolute -top-1 -right-1 bg-ink text-white text-[9px] md:text-[10px] font-black w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center ring-2 md:ring-4 ring-white">
                        {item.quantity}
                      </span>
                    </div>

                    {/* Detalhes do Produto */}
                    <div className="flex-grow flex flex-col justify-between py-0.5">
                      <div className="flex justify-between items-start gap-3">
                        <div className="space-y-0.5">
                          <h3 className="text-ink font-black text-xs md:text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                            {item.category}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted/40 hover:text-accent p-1.5 hover:bg-accent/10 rounded-xl transition-all"
                          title="Remover item"
                        >
                          <Trash2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-3 md:mt-4">
                        {/* Controles de Quantidade Otimizados */}
                        <div className="flex items-center p-0.5 bg-surface rounded-lg md:rounded-xl border border-line/30">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:text-primary hover:bg-white rounded-md md:rounded-lg transition-all"
                          >
                            <Minus className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          </button>
                          <span className="w-6 md:w-8 text-center text-[10px] md:text-xs font-black text-ink">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:text-primary hover:bg-white rounded-md md:rounded-lg transition-all"
                          >
                            <Plus className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-muted text-[8px] md:text-[10px] font-bold uppercase">Subtotal</p>
                          <span className="text-ink font-black text-xs md:text-base">
                            R$ {(parseFloat(item.price.replace(/[^\d,.]/g, "").replace(",", ".")) * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer do Carrinho - Padding e tamanhos otimizados para liberar espaço */}
          {cartItems.length > 0 && (
            <div className="flex-shrink-0 p-5 md:p-8 border-t border-line/30 bg-white space-y-4 md:space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center text-muted font-bold text-[10px] uppercase tracking-widest">
                  <span>Itens ({totalItems})</span>
                  <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-muted font-bold text-[10px] uppercase tracking-widest">
                  <span>Entrega Expressa</span>
                  <span className="text-mint">Grátis</span>
                </div>
                <div className="flex justify-between items-center text-ink font-black text-xl md:text-2xl tracking-tighter pt-2 border-t border-line/10">
                  <span>Total</span>
                  <span className="text-primary">R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <button className="group w-full bg-ink text-white font-black py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-strong hover:shadow-primary/30 active:scale-[0.98] text-sm md:text-base">
                  Finalizar Pagamento
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[9px] md:text-[10px] text-muted text-center uppercase tracking-[0.2em] font-bold">
                  Pagamento 100% Seguro & Criptografado
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}