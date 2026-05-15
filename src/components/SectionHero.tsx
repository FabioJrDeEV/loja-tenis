type SectionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHero({ eyebrow, title, description }: SectionHeroProps) {
  return (
    <section className="relative bg-white border-b border-line/30 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <p className="text-primary text-xs font-black uppercase tracking-[0.3em] bg-primary/10 w-fit px-4 py-1.5 rounded-full">
            {eyebrow}
          </p>
          <h1 className="text-ink font-black text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tighter">
            {title}
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
