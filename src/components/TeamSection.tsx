import { Linkedin, Mail, Phone } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Filip Österlund",
      role: "Medgrundare & VA-utredare",
      email: "filip@derivo.se",
      phone: "+46 76 900 21 04",
      bio: "Filip är vatteningenjör med fokus på dagvatten, hydraulisk modellering och tekniska utredningar. Han tar fram underlag och lösningar för fördröjning, rening och skyfall, och arbetar ofta nära beställare från tidig analys till färdig leverans. Bakgrunden i Försvarsmakten som stridsbåtschef och amfibiedykare har gett honom ett tydligt säkerhetsfokus, struktur och vana att fatta beslut i komplexa situationer.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Anton Nilsson",
      role: "Medgrundare & Affärsutveckling",
      email: "anton@derivo.se",
      phone: "+46 70 461 28 88",
      bio: "Anton är utbildad stadsplanerare med erfarenhet av platsutveckling och affärsutveckling. I Derivo arbetar han främst med administration, affärsutveckling och strategiska frågor – med fokus på att bygga struktur, skapa långsiktiga kundrelationer och utveckla bolagets erbjudande.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Vårt Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Personerna bakom Derivo
          </h2>
          <p className="text-muted-foreground text-lg">
            Tillsammans driver Filip och Anton Derivo AB. Filip är i första hand 
            uppdragsansvarig och utför tekniska utredningar, medan Anton ansvarar 
            för affärsutveckling och bolagsstruktur.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-serif text-2xl text-primary-foreground font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">Vår berättelse</h3>
          <p className="text-muted-foreground leading-relaxed">
            Derivos grundare Anton och Filip är barndomsvänner från Västerås och lärde 
            känna varandra genom fotbollen. Under större delen av deras vuxna liv har de 
            bott på olika ställen i landet och det var först när Filip flyttade tillbaka 
            till Västerås efter sina studier i Lund som planerna om att starta företag 
            började ta form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
