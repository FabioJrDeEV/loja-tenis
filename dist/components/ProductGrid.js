export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <article 
          className="bg-surface border border-line/50 rounded-xl shadow-soft hover:border-primary/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
          key={product.id}
        >
          <div 
            className="product-placeholder bg-gradient-to-br from-surface via-paper to-line/50 h-48 flex items-center justify-center"
            aria-label={`Espaço para imagem de ${product.name}`}
          >
            <span className="text-ink/60 text-sm font-medium">Imagem do produto</span>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start gap-3 mb-3">
              <h2 className="text-ink font-bold text-lg leading-tight">{product.name}</h2>
              {product.badge && (
                <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            <p className="text-muted/70 text-sm leading-[1.6] min-h-[64px]">{product.description}</p>
            <strong className="text-primary font-extrabold text-xl block mt-4">{product.price}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
