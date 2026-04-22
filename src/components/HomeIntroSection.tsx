import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const HomeIntroSection = ({ language }: { language: Language }) => {
  const { hero } = translations[language];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05]">
              {hero.title}
            </h2>
            <p className="mx-auto max-w-4xl text-muted-foreground text-xl leading-relaxed mb-10">
              {hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {hero.highlights.map((item) => (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntroSection;
