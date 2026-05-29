import { ProductGrid } from "@/components/ProductGrid";
import { SectionHero } from "@/components/SectionHero";
import { femaleProducts } from "@/data/products";

export default function FemininoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Feminino"
        title="Elegância e conforto."
        description="Uma seleção exclusiva de sapatos femininos que combinam estilo, conforto e sofisticação para qualquer ocasião."
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ProductGrid products={femaleProducts} />
        </div>
      </section>
    </>
  );
}
