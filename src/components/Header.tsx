"use client";

import Link from "next/link";
import { useState } from "react";
import { PromoStrip } from "@/components/PromoStrip";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/novidades", label: "Novidades" },
  { href: "/feminino", label: "Feminino" },
  { href: "/masculino", label: "Masculino" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-line/30">
      <PromoStrip />
      <nav className="min-h-[72px]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-full">
            <Link className="text-ink text-2xl font-black tracking-tight hover:text-primary transition-colors" href="/">
              PASSO FINO
            </Link>
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  className="text-ink/70 font-medium px-2 py-2 hover:text-primary transition-colors duration-300 text-sm tracking-wide"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              {/* Cart Icon */}
              <div className="relative">
                <svg 
                  className="w-6 h-6 text-ink cursor-pointer hover:text-primary transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l1.5 11m0 0L8 20l2-10H3Zm13 0h2l-1.5 11m0 0L16 20l2-10h-7Z" 
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
            <button
              className="md:hidden p-2.5 rounded-xl border border-line/30 hover:bg-surface transition-colors"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mainNavbar"
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-line/30 p-6 shadow-medium">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="block text-ink/70 font-medium px-2 py-2 hover:text-primary transition-colors duration-300 text-sm tracking-wide"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
