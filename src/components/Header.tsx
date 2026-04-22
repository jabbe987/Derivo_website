import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Logo.png";
import { persistLanguagePreference, type Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { getPagePath, type SitePage } from "@/lib/routes";

const Header = ({
  language,
  page,
}: {
  language: Language;
  page: SitePage;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const translation = translations[language];
  const alternateLanguage = language === "sv" ? "en" : "sv";
  const alternatePath = `${getPagePath(alternateLanguage, page)}${location.hash}`;
  const homePath = getPagePath(language, "home");
  const aboutPath = getPagePath(language, "about");
  const contactPath = getPagePath(language, "contact");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinkClass = (isActive: boolean) =>
    `text-base font-medium transition-colors hover:text-accent ${
      isScrolled ? "text-foreground" : "text-foreground/90"
    } ${isActive ? "text-accent" : ""}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-white"
      }`}
    >
      <div className="w-full px-6 lg:px-10 2xl:px-14">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center">
            <img src={logo} alt="Derivo logo" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-10">
              <Link to={homePath} className={navLinkClass(page === "home")}>
                {translation.nav.homeLabel}
              </Link>
              <Link to={aboutPath} className={navLinkClass(page === "about")}>
                {translation.nav.aboutLabel}
              </Link>
              <Link
                to={alternatePath}
                className={`text-base font-semibold transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-foreground/90"
                }`}
                aria-label={translation.nav.languageLabel}
                onClick={() => persistLanguagePreference(alternateLanguage)}
              >
                {alternateLanguage.toUpperCase()}
              </Link>
              <Button variant="default" size="lg" asChild>
                <Link to={contactPath}>{translation.nav.contactCta}</Link>
              </Button>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={translation.nav.openMenuLabel}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-foreground"} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-foreground"} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-border/20 bg-card/95 backdrop-blur-md animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                to={homePath}
                className={`text-lg font-medium py-2 hover:text-accent transition-colors ${
                  page === "home" ? "text-accent" : "text-foreground"
                }`}
              >
                {translation.nav.homeLabel}
              </Link>
              <Link
                to={aboutPath}
                className={`text-lg font-medium py-2 hover:text-accent transition-colors ${
                  page === "about" ? "text-accent" : "text-foreground"
                }`}
              >
                {translation.nav.aboutLabel}
              </Link>
              <Link
                to={alternatePath}
                className="text-lg text-foreground font-medium py-2 hover:text-accent transition-colors"
                onClick={() => {
                  persistLanguagePreference(alternateLanguage);
                }}
              >
                {translation.nav.languageLabel}: {alternateLanguage.toUpperCase()}
              </Link>
              <Button variant="default" size="lg" className="mt-2" asChild>
                <Link to={contactPath}>{translation.nav.contactCta}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
