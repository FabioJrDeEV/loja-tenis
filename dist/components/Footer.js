export function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-white font-black tracking-tight text-xl">PASSO FINO</span>
            <p className="text-sm mt-2">Loja de sapatos com curadoria simples e elegante.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs">
          <p>© 2026 Passo Fino. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
