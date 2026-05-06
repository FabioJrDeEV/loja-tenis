import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { featuredProducts } from "@/data/products";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center border-b border-line bg-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-[720px] py-20">
            <p className="text-primary/80 text-sm font-semibold uppercase tracking-widest mb-4">
              Loja de Sapatos
            </p>
            <h1 className="text-ink font-extrabold text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.1] max-w-[820px] tracking-tight">
              Escolhas versáteis para todos os passos.
            </h1>
            <p className="text-muted/80 text-lg leading-[1.8] max-w-[700px] mt-6">
              Uma vitrine limpa e moderna para organizar novidades, modelos femininos e masculinos. 
              Conheça nossa coleção e encontre o par perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link 
                className="bg-primary text-white font-semibold px-6 py-3.5 rounded-lg shadow-md shadow-primary/20 hover:bg-primary-dark transition-all duration-300 min-h-[50px] flex items-center justify-center"
                href="/novidades"
              >
                Ver novidades
              </Link>
              <Link 
                className="border-2 border-ink/20 text-ink font-semibold px-6 py-3.5 rounded-lg hover:border-ink hover:bg-ink/5 transition-all duration-300 min-h-[50px] flex items-center justify-center"
                href="/contato"
              >
                Falar com a loja
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Categorias</p>
            <h2 className="text-ink font-bold text-[clamp(1.8rem,4vw,2.8rem)]">Navegue pelo catálogo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              className="bg-surface border border-line rounded-lg shadow-soft hover:border-primary hover:-translate-y-1 transition-all block min-h-[180px] p-6"
              href="/novidades"
            >
              <span className="text-accent text-sm font-bold uppercase tracking-wider mb-9 block">Novidades</span>
              <strong className="text-ink text-xl font-bold leading-tight">Lançamentos e destaques recentes</strong>
            </Link>
            <Link 
              className="bg-surface border border-line rounded-lg shadow-soft hover:border-primary hover:-translate-y-1 transition-all block min-h-[180px] p-6"
              href="/feminino"
            >
              <span className="text-accent text-sm font-bold uppercase tracking-wider mb-9 block">Feminino</span>
              <strong className="text-ink text-xl font-bold leading-tight">Modelos leves, elegantes e confortáveis</strong>
            </Link>
            <Link 
              className="bg-surface border border-line rounded-lg shadow-soft hover:border-primary hover:-translate-y-1 transition-all block min-h-[180px] p-6"
              href="/masculino"
            >
              <span className="text-accent text-sm font-bold uppercase tracking-wider mb-9 block">Masculino</span>
              <strong className="text-ink text-xl font-bold leading-tight">Opções casuais, urbanas e esportivas</strong>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-r from-sky/16 via-lavender/82 to-paper border-t border-b border-line">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Em destaque</p>
            <h2 className="text-ink font-bold text-[clamp(1.8rem,4vw,2.8rem)]">Novidades da loja</h2>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </>
  );
}
