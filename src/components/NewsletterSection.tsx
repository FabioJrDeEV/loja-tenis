export function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-black text-white mb-4">Receba nossas novidades</h3>
          <p className="text-white/80 mb-8">
            Cadastre-se e receba em primeira mão as novidades e promoções exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-4 py-3 rounded-lg text-ink"
            />
            <button className="bg-ink text-white font-bold px-6 py-3 rounded-lg hover:bg-ink/90 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}