import { ProductGrid } from "../../components/ProductGrid";
import { SectionHero } from "../../components/SectionHero";
import { featuredProducts } from "../../data/products";

export default function NovidadesPage() {
  return (
    <>
      <SectionHero
        eyebrow="Novidades"
        title="Lançamentos para renovar a vitrine."
        description="Produtos recentes e destaques que podem receber suas imagens e descrições finais."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </>
  );
}
