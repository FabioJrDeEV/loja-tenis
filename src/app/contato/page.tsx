import { SectionHero } from "@/components/SectionHero";

export default function ContatoPage() {
  return (
    <>
      <SectionHero
        eyebrow="Contato"
        title="Fale com a loja."
        description="Use este espaço para receber pedidos, dúvidas sobre numeração e mensagens de clientes."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-surface border border-line rounded-lg shadow-soft p-8">
            <div className="mb-8">
              <p className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Atendimento</p>
              <h2 className="text-ink font-bold text-[clamp(1.7rem,4vw,2.5rem)]">Canais principais</h2>
              <p className="text-muted text-lg leading-7 max-w-[720px] mt-4">
                Edite os dados abaixo quando quiser publicar telefone, WhatsApp, e-mail ou endereço físico.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f7f9fd] border border-line rounded-lg min-h-[128px] p-4">
                <span className="text-muted text-sm font-bold uppercase mb-2 block">WhatsApp</span>
                <strong className="text-ink break-words">(00) 00000-0000</strong>
              </div>
              <div className="bg-[#f7f9fd] border border-line rounded-lg min-h-[128px] p-4">
                <span className="text-muted text-sm font-bold uppercase mb-2 block">E-mail</span>
                <strong className="text-ink break-words">contato@passofino.com</strong>
              </div>
              <div className="bg-[#f7f9fd] border border-line rounded-lg min-h-[128px] p-4">
                <span className="text-muted text-sm font-bold uppercase mb-2 block">Endereço</span>
                <strong className="text-ink break-words">Sua cidade, Brasil</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
