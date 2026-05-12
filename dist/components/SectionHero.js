export function SectionHero({ eyebrow, title, description }) {
  return (
    <section className="bg-paper border-b border-line/30 py-24">
      <div className="container mx-auto px-6">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{eyebrow}</p>
        <h1 className="text-ink font-black text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] max-w-[900px] tracking-tight">
          {title}
        </h1>
        <p className="text-muted/80 text-lg leading-[1.7] max-w-[600px] mt-6">{description}</p>
      </div>
    </section>
  );
}
