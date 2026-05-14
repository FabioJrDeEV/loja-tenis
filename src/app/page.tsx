import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { ProductGrid } from "@/components/ProductGrid";
import { featuredProducts } from "@/data/products";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Carousel Section */}
      <section className="py-16 bg-surface border-b border-line/30">
        <div className="container mx-auto px-6">
          <Carousel />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Categorias</p>
            <h2 className="text-ink font-black text-[clamp(2rem,5vw,3.5rem)] tracking-tight">Explore o catálogo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              className="bg-surface border border-line/30 rounded-3xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all block min-h-[220px] p-8 group"
              href="/novidades"
            >
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-12 block">Novidades</span>
              <strong className="text-ink text-2xl font-black leading-tight group-hover:text-primary transition-colors">Lançamentos exclusivos</strong>
            </Link>
            <Link 
              className="bg-surface border border-line/30 rounded-3xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all block min-h-[220px] p-8 group"
              href="/feminino"
            >
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-12 block">Feminino</span>
              <strong className="text-ink text-2xl font-black leading-tight group-hover:text-primary transition-colors">Elegância e conforto</strong>
            </Link>
            <Link 
              className="bg-surface border border-line/30 rounded-3xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all block min-h-[220px] p-8 group"
              href="/masculino"
            >
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-12 block">Masculino</span>
              <strong className="text-ink text-2xl font-black leading-tight group-hover:text-primary transition-colors">Estilo urbano</strong>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-surface border-t border-b border-line/30">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Em destaque</p>
            <h2 className="text-ink font-black text-[clamp(2rem,5vw,3.5rem)] tracking-tight">Novidades da loja</h2>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </>
  );
}