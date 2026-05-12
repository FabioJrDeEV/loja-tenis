import { SectionHero } from "../../components/SectionHero";

export default function ContatoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Contato"
        title="Fale com a gente."
        description="Estamos aqui para ajudar. Entre em contato para tirar dúvidas, fazer pedidos ou saber mais sobre nossos produtos."
      />
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-surface border border-line/30 rounded-3xl shadow-medium p-12">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Atendimento</p>
              <h2 className="text-ink font-black text-[clamp(2rem,5vw,3rem)] tracking-tight">Canais de contato</h2>
              <p className="text-muted/80 leading-[1.8] max-w-[600px] mt-6">
                Entre em contato conosco através dos canais abaixo. Estamos prontos para atender você da melhor forma possível.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-surface border border-line/30 rounded-2xl p-8 hover:shadow-soft transition-shadow">
                <span className="text-muted/70 text-xs font-bold uppercase tracking-widest block mb-3">WhatsApp</span>
                <strong className="text-ink text-lg font-bold">(00) 00000-0000</strong>
              </div>
              <div className="bg-surface border border-line/30 rounded-2xl p-8 hover:shadow-soft transition-shadow">
                <span className="text-muted/70 text-xs font-bold uppercase tracking-widest block mb-3">E-mail</span>
                <strong className="text-ink text-lg font-bold">contato@passofino.com</strong>
              </div>
              <div className="bg-surface border border-line/30 rounded-2xl p-8 hover:shadow-soft transition-shadow">
                <span className="text-muted/70 text-xs font-bold uppercase tracking-widest block mb-3">Endereço</span>
                <strong className="text-ink text-lg font-bold">Sua cidade, Brasil</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
