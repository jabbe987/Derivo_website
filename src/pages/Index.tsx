import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import DerivoMethodSection from "@/components/DerivoMethodSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const Index = ({ language }: { language: Language }) => {
  const translation = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translation.meta.title;
  }, [language, translation.meta.title]);

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ServicesSection language={language} />
        <ValuesSection language={language} />
        <TeamSection language={language} />
        <DerivoMethodSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
