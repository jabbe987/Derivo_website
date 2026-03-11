import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const AboutSection = ({ language }: { language: Language }) => {
  const { about } = translations[language];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {about.eyebrow}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              {about.title}
            </h2>
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-muted-foreground text-lg leading-relaxed ${
                  index === about.paragraphs.length - 1 ? "mb-8" : "mb-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="bg-muted/50 border-l-4 border-accent rounded-r-lg p-6">
              <p className="text-foreground font-medium italic">
                {about.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
