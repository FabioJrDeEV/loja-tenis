"use client";

import Link from "next/link";
import { useState } from "react";
import { PromoStrip } from "@/components/PromoStrip";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";

const navItems = [
  { href: "/novidades", label: "Novidades" },
  { href: "/feminino", label: "Feminino" },
  { href: "/masculino", label: "Masculino" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems, cartItems } = useCart();

  // Opcional: Abrir o carrinho automaticamente quando o primeiro item for adicionado
  // useEffect(() => {
  //   if (totalItems > 0) setIsCartOpen(true);
  // }, [totalItems]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-line/30 w-full">
      <PromoStrip />
      <nav className="h-20">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              className="text-ink text-2xl font-black tracking-tighter hover:text-primary transition-all duration-300 flex items-center gap-2 group" 
              href="/"
            >
              <div className="w-8 h-8 bg-ink group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white text-xs">PF</span>
              </div>
              <span>PASSO FINO</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  className="text-ink/60 font-bold hover:text-ink transition-colors duration-300 text-sm uppercase tracking-widest relative group"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2.5 text-ink/70 hover:text-primary transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2.5 text-ink/70 hover:text-primary transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-ink text-white rounded-full hover:bg-primary transition-all duration-300 shadow-soft hover:shadow-medium group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black ring-2 ring-white animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="lg:hidden p-2.5 text-ink"
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-[112px] bg-white z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="p-8 flex flex-col gap-8 h-full overflow-y-auto">
          {navItems.map((item) => (
            <Link
              className="text-3xl font-black text-ink hover:text-primary transition-colors"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto pt-8 border-t border-line/30 space-y-6">
            <div className="flex items-center gap-4 text-muted">
              <Search className="w-6 h-6" />
              <span className="font-bold text-lg">Pesquisar</span>
            </div>
            <div className="flex items-center gap-4 text-muted">
              <User className="w-6 h-6" />
              <span className="font-bold text-lg">Minha Conta</span>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
