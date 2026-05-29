import { ProductGrid } from "@/components/ProductGrid";
import { SectionHero } from "@/components/SectionHero";
import { featuredProducts } from "@/data/products";

export default function NovidadesPage() {
  return (
    <>
      <SectionHero
        eyebrow="Novidades"
        title="Lançamentos exclusivos."
        description="Descubra os modelos mais recentes e inovadores da nossa coleção, com design moderno e qualidade superior."
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </>
  );
}
