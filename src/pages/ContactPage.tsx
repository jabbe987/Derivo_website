import ContactSection from "@/components/ContactSection";
import SiteLayout from "@/components/SiteLayout";
import type { Language } from "@/lib/i18n";

const ContactPage = ({ language }: { language: Language }) => {
  return (
    <SiteLayout language={language} page="contact" offsetHeader>
      <ContactSection language={language} />
    </SiteLayout>
  );
};

export default ContactPage;
