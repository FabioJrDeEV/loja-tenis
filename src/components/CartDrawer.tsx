"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-strong transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-line/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-black text-ink">Seu Carrinho</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-surface rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-ink" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-muted/30" />
                </div>
                <div>
                  <p className="text-ink font-bold text-lg">Carrinho vazio</p>
                  <p className="text-muted text-sm">Parece que você ainda não escolheu nada.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="text-primary font-bold hover:underline"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 bg-surface rounded-xl flex-shrink-0 flex items-center justify-center border border-line/30">
                     {/* Placeholder for product image */}
                    <div className="text-[10px] text-muted/50 font-bold uppercase">Foto</div>
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-ink font-bold text-sm leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-muted text-xs mt-1">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted hover:text-accent p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-line/50 rounded-lg bg-surface">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-ink">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-ink font-bold text-sm">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-line/30 bg-surface/50 space-y-4">
              <div className="flex justify-between items-center text-muted text-sm">
                <span>Subtotal</span>
                <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-ink font-black text-lg">
                <span>Total</span>
                <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <p className="text-[10px] text-muted text-center uppercase tracking-widest">
                Frete e impostos calculados no checkout
              </p>
              <button className="w-full bg-ink text-paper font-black py-4 rounded-xl hover:bg-primary transition-all duration-300 shadow-medium hover:shadow-strong">
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}