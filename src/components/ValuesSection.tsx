import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const ValuesSection = ({ language }: { language: Language }) => {
  const { values } = translations[language];

  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {values.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {values.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {values.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.items.map((value, index) => (
            <div
              key={value.title}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 pt-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
