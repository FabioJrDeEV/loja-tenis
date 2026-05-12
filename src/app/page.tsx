import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { ProductGrid } from "@/components/ProductGrid";
import { featuredProducts } from "@/data/products";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[700px] flex items-center bg-gradient-to-br from-paper via-white to-surface border-b border-line/30">
        <div className="container mx-auto px-6">
          <div className="max-w-[800px]">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Loja de Sapatos Premium
            </p>
            <h1 className="text-ink font-black text-[clamp(3rem,8vw,6rem)] leading-[1.05] max-w-[900px] tracking-tight">
              O futuro do seu estilo.
            </h1>
            <p className="text-muted/80 text-lg leading-[1.8] max-w-[600px] mt-8">
              Descubra uma coleção exclusiva de tênis de marcas renomadas, com design inovador, conforto excepcional e qualidade superior. Cada passo é uma declaração de estilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link 
                className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-medium hover:bg-primary-dark hover:shadow-strong transition-all duration-300 min-h-[56px] flex items-center justify-center text-sm tracking-wide"
                href="/novidades"
              >
                Ver Coleção
              </Link>
              <Link 
                className="border-2 border-ink/20 text-ink font-bold px-8 py-4 rounded-full hover:border-ink hover:bg-ink/5 transition-all duration-300 min-h-[56px] flex items-center justify-center text-sm tracking-wide"
                href="/contato"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

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
