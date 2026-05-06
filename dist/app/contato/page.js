import { SectionHero } from "../../components/SectionHero";

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
          <div className="bg-surface border border-line/50 rounded-lg shadow-soft p-8">
            <div>
              <p className="text-primary/80 text-sm font-semibold uppercase tracking-widest mb-4">Atendimento</p>
              <h2 className="text-ink font-extrabold text-[clamp(1.7rem,4vw,2.5rem)] tracking-tight">Canais principais</h2>
              <p className="text-muted/80 leading-[1.8] max-w-[720px] mt-6">
                Edite os dados abaixo quando quiser publicar telefone, WhatsApp, e-mail ou endereço físico.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#f7f9fd] border border-line/50 rounded-lg min-h-[128px] p-4">
                <span className="text-muted/70 text-sm font-bold uppercase tracking-wider block mb-2">WhatsApp</span>
                <strong className="text-ink overflow-wrap-anywhere">(00) 00000-0000</strong>
              </div>
              <div className="bg-[#f7f9fd] border border-line/50 rounded-lg min-h-[128px] p-4">
                <span className="text-muted/70 text-sm font-bold uppercase tracking-wider block mb-2">E-mail</span>
                <strong className="text-ink overflow-wrap-anywhere">contato@passofino.com</strong>
              </div>
              <div className="bg-[#f7f9fd] border border-line/50 rounded-lg min-h-[128px] p-4">
                <span className="text-muted/70 text-sm font-bold uppercase tracking-wider block mb-2">Endereço</span>
                <strong className="text-ink overflow-wrap-anywhere">Sua cidade, Brasil</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
