import { ProductGrid } from "@/components/ProductGrid";
import { SectionHero } from "@/components/SectionHero";
import { maleProducts } from "@/data/products";

export default function MasculinoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Masculino"
        title="Modelos masculinos com presença simples."
        description="Tênis, mocassins e opções versáteis para montar um catálogo direto e organizado."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductGrid products={maleProducts} />
        </div>
      </section>
    </>
  );
}
