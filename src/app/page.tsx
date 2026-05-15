import { Carousel } from "@/components/Carousel";
import { ProductGrid } from "@/components/ProductGrid";
import { featuredProducts } from "@/data/products";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface skew-x-[-12deg] translate-x-20 z-0" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender rounded-full text-primary text-xs font-black uppercase tracking-widest">
                <Star className="w-4 h-4" />
                Coleção 2026 está aqui
              </div>
              
              <h1 className="text-ink font-black text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.95] tracking-tighter">
                O Próximo <br />
                <span className="text-primary italic">Nível</span> do Seu Estilo.
              </h1>
              
              <p className="text-muted text-xl leading-relaxed max-w-lg">
                Curadoria exclusiva dos sapatos que definem tendências. Conforto que você sente, estilo que todos notam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/novidades"
                  className="group bg-ink text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-strong hover:shadow-primary/30"
                >
                  Explorar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  href="/contato"
                  className="font-black px-10 py-5 rounded-2xl border-2 border-line text-ink hover:border-ink transition-all duration-300 flex items-center justify-center"
                >
                  Fale Conosco
                </Link>
              </div>

              {/* Stats/Social Proof */}
              <div className="pt-10 flex gap-12 border-t border-line/30">
                <div>
                  <p className="text-3xl font-black text-ink tracking-tight">15k+</p>
                  <p className="text-muted text-sm font-bold uppercase tracking-widest">Clientes</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-ink tracking-tight">4.9/5</p>
                  <p className="text-muted text-sm font-bold uppercase tracking-widest">Avaliação</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-ink tracking-tight">24h</p>
                  <p className="text-muted text-sm font-bold uppercase tracking-widest">Entrega</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10 animate-fade-in [animation-delay:200ms]">
                <Carousel />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-strong z-20 animate-fade-in [animation-delay:500ms]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-black text-ink">Originalidade</p>
                    <p className="text-muted text-xs">Certificado de Autenticidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Logo Placeholders */}
            <div className="text-2xl font-black italic">SHOEBOX</div>
            <div className="text-2xl font-black italic">VELOCITY</div>
            <div className="text-2xl font-black italic">URBANX</div>
            <div className="text-2xl font-black italic">COMFORT+</div>
            <div className="text-2xl font-black italic">LEGACY</div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-ink font-black text-5xl tracking-tighter">Últimas Novidades</h2>
            <p className="text-muted text-lg max-w-xl">
              Peças selecionadas que acabaram de chegar em nosso estoque. Garanta o seu antes que esgote.
            </p>
          </div>
          <Link 
            href="/novidades" 
            className="group flex items-center gap-2 text-ink font-black hover:text-primary transition-colors pb-2 border-b-2 border-ink hover:border-primary"
          >
            Ver toda coleção
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Benefits Section */}
      <section className="bg-ink py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-mint" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Frete Expresso</h3>
              <p className="text-muted/80 leading-relaxed">
                Logística otimizada para garantir que seu pedido chegue no menor tempo possível, em qualquer lugar do país.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-mint" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Garantia Premium</h3>
              <p className="text-muted/80 leading-relaxed">
                Não gostou ou não serviu? Oferecemos 30 dias para troca ou devolução sem burocracia e com custo zero.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Clube de Fidelidade</h3>
              <p className="text-muted/80 leading-relaxed">
                Ganhe pontos em cada compra e troque por descontos exclusivos ou acesso antecipado a coleções limitadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
