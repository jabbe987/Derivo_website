import { Mail, Phone } from "lucide-react";
import logo from "@/assets/Logo.png";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const Footer = ({ language }: { language: Language }) => {
  const translation = translations[language];

  return (
    <footer className="bg-[#256980] text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Derivo logo" className="h-10 w-auto" />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              {translation.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{translation.footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {translation.nav.links
                .concat([{ label: translation.nav.contactCta, href: "#contact" }])
                .map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{translation.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {translation.footer.services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">{translation.footer.contactTitle}</h4>
            <div className="space-y-5">
              <div>
                <a
                  href="mailto:info@derivo.se"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@derivo.se</span>
                </a>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm mb-2">Filip Österlund</p>
                <a
                  href="mailto:filip@derivo.se"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">filip@derivo.se</span>
                </a>
                <a
                  href="tel:+46218131310"
                  className="mt-2 flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+46 21 813 13 10</span>
                </a>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold text-sm mb-2">Anton Nilsson</p>
                <a
                  href="mailto:anton@derivo.se"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">anton@derivo.se</span>
                </a>
                <a
                  href="tel:+46704612888"
                  className="mt-2 flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+46 70 461 28 88</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Derivo AB. {translation.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
