import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      name: "Filip Österlund",
      role: "VA-utredare / Grundare",
      email: "filip@derivo.se",
      phone: "+46 76 900 21 04",
      linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
    },
    {
      name: "Anton Nilsson",
      role: "Affärsutvecklare / Grundare",
      email: "anton@derivo.se",
      phone: "+46 70 461 28 88",
      linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Kontakta oss
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Låt oss starta en dialog
          </h2>
          <p className="text-muted-foreground text-lg">
            Har du frågor, behöver stöd i ett projekt eller vill diskutera en möjlig
            uppdragsförfrågan? Vi hjälper gärna till.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Kontakta oss direkt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vårt team är redo att hjälpa dig med frågor eller förfrågningar.
                Oavsett om du söker en konsultation eller har ett specifikt projekt i åtanke,
                finns vi här för dig.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                  Förfrågningar
                </h4>
                <p className="text-accent text-sm font-medium mb-4">Maila oss här</p>
                <p className="text-muted-foreground text-sm mb-4">
                  För nya uppdrag, frågor och förfrågningar.
                </p>
                <a
                  href="mailto:info@derivo.se"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@derivo.se</span>
                </a>
              </div>
              {contacts.map((contact) => (
                <div key={contact.name} className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                    {contact.name}
                  </h4>
                  <p className="text-accent text-sm font-medium mb-4">{contact.role}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{contact.email}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{contact.phone}</span>
                    </a>
                    <a
                      href={contact.linkedin}
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

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Plats</p>
                <p className="text-muted-foreground">Herrgärdsgatan 4b, Västerås, Sverige</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
