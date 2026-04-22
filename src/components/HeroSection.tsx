import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import heroVideo from "@/assets/video/13725274_2048_1080_30fps.mp4";
import logo from "@/assets/Logo.png";

const HeroSection = ({ language }: { language: Language }) => {
  const { hero } = translations[language];

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-hero">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-primary/55" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-fade-up">
            <img
              src={logo}
              alt="Derivo"
              className="mx-auto mb-10 w-full max-w-[320px] transition-transform duration-300 ease-out hover:scale-105 md:max-w-[520px] lg:max-w-[760px]"
            />
          </div>

          <p
            className="mx-auto max-w-3xl font-sans text-2xl font-medium tracking-[0.01em] text-primary-foreground/95 md:text-3xl lg:text-4xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.badge}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
