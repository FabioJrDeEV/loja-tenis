export function FeatureSection() {
  return (
    <section className="py-16 bg-surface border-y border-line/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-line/30 p-8 shadow-soft">
            <h3 className="text-ink font-bold text-xl mb-4">Frete Grátis</h3>
            <p className="text-muted">Em compras acima de R$ 199,00</p>
          </div>
          <div className="bg-white rounded-2xl border border-line/30 p-8 shadow-soft">
            <h3 className="text-ink font-bold text-xl mb-4">7 Dias para Troca</h3>
            <p className="text-muted">Troca fácil em até 7 dias úteis</p>
          </div>
          <div className="bg-white rounded-2xl border border-line/30 p-8 shadow-soft">
            <h3 className="text-ink font-bold text-xl mb-4">Até 10x Sem Juros</h3>
            <p className="text-muted">Em todos os nossos produtos</p>
          </div>
        </div>
      </div>
    </section>
  );
}