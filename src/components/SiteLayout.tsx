import { useEffect, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import type { SitePage } from "@/lib/routes";

const getDocumentTitle = (language: Language, page: SitePage) => {
  const translation = translations[language];

  switch (page) {
    case "about":
      return `${translation.nav.aboutLabel} | ${translation.meta.title}`;
    case "contact":
      return `${translation.nav.contactCta} | ${translation.meta.title}`;
    default:
      return translation.meta.title;
  }
};

type SiteLayoutProps = {
  language: Language;
  page: SitePage;
  children: ReactNode;
  offsetHeader?: boolean;
};

const SiteLayout = ({
  language,
  page,
  children,
  offsetHeader = false,
}: SiteLayoutProps) => {
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = getDocumentTitle(language, page);
  }, [language, page]);

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} page={page} />
      <main className={offsetHeader ? "pt-24" : ""}>{children}</main>
      <Footer language={language} />
    </div>
  );
};

export default SiteLayout;
