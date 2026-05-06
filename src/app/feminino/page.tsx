import { ProductGrid } from "@/components/ProductGrid";
import { SectionHero } from "@/components/SectionHero";
import { femaleProducts } from "@/data/products";

export default function FemininoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Feminino"
        title="Sapatos femininos para rotina e ocasiões especiais."
        description="Uma seleção inicial com modelos confortáveis, discretos e fáceis de combinar."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductGrid products={femaleProducts} />
        </div>
      </section>
    </>
  );
}
