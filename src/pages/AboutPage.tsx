import AboutSection from "@/components/AboutSection";
import DerivoMethodSection from "@/components/DerivoMethodSection";
import SiteLayout from "@/components/SiteLayout";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import type { Language } from "@/lib/i18n";

const AboutPage = ({ language }: { language: Language }) => {
  return (
    <SiteLayout language={language} page="about" offsetHeader>
      <AboutSection language={language} />
      <DerivoMethodSection language={language} />
      <ValuesSection language={language} />
      <TeamSection language={language} />
    </SiteLayout>
  );
};

export default AboutPage;
