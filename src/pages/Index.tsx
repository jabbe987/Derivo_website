import HeroSection from "@/components/HeroSection";
import HomeIntroSection from "@/components/HomeIntroSection";
import ServicesSection from "@/components/ServicesSection";
import SiteLayout from "@/components/SiteLayout";
import type { Language } from "@/lib/i18n";

const Index = ({ language }: { language: Language }) => {
  return (
    <SiteLayout language={language} page="home">
      <HeroSection language={language} />
      <HomeIntroSection language={language} />
      <ServicesSection language={language} />
    </SiteLayout>
  );
};

export default Index;
