import type { Language } from "@/lib/i18n";
import starkstadLogo from "@/assets/Starkstad.jpeg";
import vaVerktygetLogo from "@/assets/VA_Verktyget_Svart.jpeg";
import { translations } from "@/lib/translations";

const partnerLogos = [
  {
    src: starkstadLogo,
    alt: "Starkstad",
    width: 1265,
    height: 296,
    className: "w-4/5 max-w-[180px]",
  },
  {
    src: vaVerktygetLogo,
    alt: "VA Verktyget",
    width: 1600,
    height: 460,
    className: "w-full max-w-[240px]",
  },
] as const;

const ServicesSection = ({ language }: { language: Language }) => {
  const { services, about } = translations[language];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-32 bg-muted/30 pb-20 pt-0 md:pb-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 max-w-3xl md:mb-16">
            <h2
              id="services-title"
              className="mb-6 font-sans text-[32px] font-semibold leading-tight tracking-tight text-primary lg:text-5xl"
            >
              {services.title}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/85">
              {services.description}
            </p>
          </div>

          <ul
            role="list"
            className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.items.map((service) => (
              <li
                key={service.title}
                className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-soft lg:p-8"
              >
                <service.icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mb-6 h-7 w-7 text-primary"
                />
                <h3 className="mb-4 font-sans text-[22px] font-semibold leading-snug tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/85">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>

          <div
            role="group"
            aria-labelledby="services-partners-title"
            className="mx-auto mt-14 grid w-full max-w-3xl gap-6 rounded-2xl border border-border bg-card p-6 sm:gap-8 sm:p-8"
          >
            <h3
              id="services-partners-title"
              className="text-center font-sans text-2xl font-semibold tracking-tight text-primary"
            >
              {about.partnersLabel}
            </h3>
            <ul
              role="list"
              className="mx-auto grid w-full min-w-0 max-w-[720px] list-none grid-cols-2"
            >
              {partnerLogos.map((logo, index) => (
                <li
                  key={logo.src}
                  className={`flex min-h-[88px] min-w-0 items-center justify-center px-3 sm:min-h-[104px] sm:px-6 ${
                    index > 0 ? "border-l border-border" : ""
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    className={`h-auto object-contain ${logo.className}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
