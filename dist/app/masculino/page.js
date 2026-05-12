import { ProductGrid } from "../../components/ProductGrid";
import { SectionHero } from "../../components/SectionHero";
import { maleProducts } from "../../data/products";

export default function MasculinoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Masculino"
        title="Estilo urbano."
        description="Tênis, mocassins e opções versáteis para quem busca estilo, conforto e qualidade em cada passo."
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ProductGrid products={maleProducts} />
        </div>
      </section>
    </>
  );
}
