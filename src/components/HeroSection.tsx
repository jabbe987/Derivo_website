import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const HeroSection = ({ language }: { language: Language }) => {
  const { hero } = translations[language];

  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-wave" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-wave" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/25 rounded-full blur-3xl animate-wave" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Droplets className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              {hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {hero.title}
          </h1>

          {/* Subheading */}
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-4xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                {hero.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">{hero.secondaryCta}</a>
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {hero.highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/80">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;


