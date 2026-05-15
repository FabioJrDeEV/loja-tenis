"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, ArrowUp, Send } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              PASSO FINO
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Elevando o conceito de calçados premium desde 2018. Qualidade, conforto e design exclusivo em cada par.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/60 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/60 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white/60 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-black text-lg mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><Link href="/novidades" className="hover:text-primary transition-colors">Novidades</Link></li>
              <li><Link href="/feminino" className="hover:text-primary transition-colors">Feminino</Link></li>
              <li><Link href="/masculino" className="hover:text-primary transition-colors">Masculino</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8">Suporte</h4>
            <ul className="space-y-4 text-white/40 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Trocas e Devoluções</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Rastrear Pedido</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Termos e Privacidade</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black text-lg mb-8">Fique por dentro</h4>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">Receba ofertas exclusivas e lançamentos em primeira mão.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 p-2 bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-black">
            © 2026 PASSO FINO. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 opacity-20 grayscale">
             {/* Payment Icons Placeholder */}
             <div className="font-black italic text-[10px]">VISA</div>
             <div className="font-black italic text-[10px]">MASTERCARD</div>
             <div className="font-black italic text-[10px]">PIX</div>
             <div className="font-black italic text-[10px]">AMEX</div>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
