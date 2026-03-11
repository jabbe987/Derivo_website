import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const ContactSection = ({ language }: { language: Language }) => {
  const { contact } = translations[language];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {contact.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">{contact.directTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {contact.directText}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                  {contact.inquiriesTitle}
                </h4>
                <p className="text-accent text-sm font-medium mb-4">{contact.inquiriesCta}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {contact.inquiriesText}
                </p>
                <a
                  href="mailto:info@derivo.se"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@derivo.se</span>
                </a>
              </div>
              {contact.contacts.map((person) => (
                <div key={person.name} className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                    {person.name}
                  </h4>
                  <p className="text-accent text-sm font-medium mb-4">{person.role}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{person.email}</span>
                    </a>
                    <a
                      href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{person.phone}</span>
                    </a>
                    <a
                      href={person.linkedin}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">{contact.locationTitle}</p>
                <p className="text-muted-foreground">{contact.locationText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
