import type { Language } from "@/lib/i18n";
import starkstadLogo from "@/assets/Starkstad.jpeg";
import vaVerktygetLogo from "@/assets/VA_Verktyget_Svart.jpeg";
import { translations } from "@/lib/translations";

const partnerLogos = [
  {
    src: starkstadLogo,
    alt: "Starkstad logo",
  },
  {
    src: vaVerktygetLogo,
    alt: "VA Verktyget logo",
  },
] as const;

const ServicesSection = ({ language }: { language: Language }) => {
  const { services, about } = translations[language];
  const sectionTitle = language === "sv" ? "Våra tjänster" : "Our services";

  return (
    <section id="services" className="scroll-mt-32 pt-0 pb-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12">
          {services.items.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-water-gradient transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-40 max-w-3xl rounded-3xl border border-border/80 bg-card-gradient px-6 py-5 shadow-soft">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {about.partnersLabel}
            </span>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              {partnerLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="flex h-16 items-center md:h-20"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-full w-auto max-w-full object-contain opacity-90 transition-opacity duration-200 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
