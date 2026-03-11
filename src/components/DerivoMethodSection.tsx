import { useState } from "react";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const DerivoMethodSection = ({ language }: { language: Language }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { culture } = translations[language];

  return (
    <section id="culture" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {culture.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {culture.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {culture.description}
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 max-w-8xl mx-auto ${
            openItems.length > 0 ? "items-start" : ""
          }`}
        >
          {culture.principles.map((principle, index) => {
            const isOpen = openItems.includes(principle.id);

            return (
              <div
                key={principle.id}
                className="relative min-h-[12rem] bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() =>
                  setOpenItems((prev) =>
                    prev.includes(principle.id)
                      ? prev.filter((id) => id !== principle.id)
                      : [...prev, principle.id],
                  )
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenItems((prev) =>
                      prev.includes(principle.id)
                        ? prev.filter((id) => id !== principle.id)
                        : [...prev, principle.id],
                    );
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.shortText}
                    </p>
                  </div>
                </div>

                {isOpen && (
                  <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/80">
                    {principle.longText}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DerivoMethodSection;
