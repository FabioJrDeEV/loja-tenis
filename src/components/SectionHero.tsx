type SectionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHero({ eyebrow, title, description }: SectionHeroProps) {
  return (
    <section className="bg-paper border-b border-line py-20">
      <div className="container mx-auto px-4">
        <p className="text-primary/80 text-sm font-semibold uppercase tracking-widest mb-4">{eyebrow}</p>
        <h1 className="text-ink font-extrabold text-[clamp(2.4rem,6vw,4.7rem)] leading-[1.1] max-w-[820px] tracking-tight">
          {title}
        </h1>
        <p className="text-muted/80 text-lg leading-[1.8] max-w-[720px] mt-6">{description}</p>
      </div>
    </section>
  );
}
