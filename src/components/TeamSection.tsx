import { Linkedin, Mail, Phone } from "lucide-react";
import filipProfil from "../assets/filipProfil2.png";
import jakobProfil from "../assets/jakobProfil.png";

const TeamSection = () => {
  const team = [
    {
      name: "Filip Österlund",
      role: "Medgrundare & VA-utredare",
      email: "filip@derivo.se",
      phone: "+46 76 900 21 04",
      linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
      bio: "Filip är vatteningenjör med fokus på dagvatten, hydraulisk modellering och tekniska utredningar. Han tar fram underlag och lösningar för fördröjning, rening och skyfall, och arbetar ofta nära beställare från tidig analys till färdig leverans.",
      image: filipProfil,
    },
    {
      name: "Anton Nilsson",
      role: "Medgrundare & Affärsutvecklare",
      email: "anton@derivo.se",
      phone: "+46 70 461 28 88",
      linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
      bio: "Anton är utbildad samhällsplanerare med erfarenhet av platsutveckling och affärsutveckling. I Derivo arbetar han främst med administration, affärsutveckling och strategiska frågor – med fokus på att bygga struktur, skapa långsiktiga kundrelationer och utveckla bolagets erbjudande.",
      image: "",
    },
    {
      name: "Jakob Österlund",
      role: "IT ansvarig",
      email: "jakob@derivo.se",
      phone: "+46 73 980 74 02",
      linkedin: "https://www.linkedin.com/in/jakob-%C3%B6sterlund-0a49902b0/",
      bio: "Jakob är civilingenjörsstudent i Informationsteknologi med inriktning inom mjukvaruutveckling. Han driver förbättringar inom system, webb och digitala arbetsflöden och bidrar med teknisk problemlösning, struktur och innovation inom digitala lösningar.",
      image: jakobProfil,
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
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-muted-foreground/20 flex items-center justify-center">
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-70"
                      aria-hidden="true"
                    >
                      <circle cx="90" cy="90" r="54" stroke="currentColor" strokeWidth="2" className="text-accent/40" />
                      <circle cx="90" cy="78" r="18" fill="currentColor" className="text-accent/30">
                        <animate attributeName="cy" values="74;82;74" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <path
                        d="M54 132C58 110 74 100 90 100C106 100 122 110 126 132"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="text-accent/35"
                      >
                        <animate attributeName="d" dur="4s" repeatCount="indefinite" values="M54 132C58 110 74 100 90 100C106 100 122 110 126 132;M54 130C58 112 74 102 90 102C106 102 122 112 126 130;M54 132C58 110 74 100 90 100C106 100 122 110 126 132" />
                      </path>
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--primary)/0.55)_22%,transparent_25%)]" />
                <div className="absolute bottom-2 left-6 right-6">
                  <h3 className="font-serif text-2xl text-primary-foreground font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed h-48 mb-3">
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
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={member.linkedin || "#"}
                    onClick={(e) => {
                      if (!member.linkedin) {
                        e.preventDefault();
                      }
                    }}
                    className={`flex items-center gap-3 text-foreground hover:text-accent transition-colors ${
                      member.linkedin ? "" : "opacity-60 cursor-not-allowed"
                    }`}
                    aria-label={`${member.name} LinkedIn`}
                    aria-disabled={!member.linkedin}
                    title={member.linkedin ? "LinkedIn" : "LinkedIn (kommer snart)"}
                    target={member.linkedin ? "_blank" : undefined}
                    rel={member.linkedin ? "noopener noreferrer" : undefined}
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span className="text-sm">LinkedIn</span>
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
            Derivos grundare Filip och Anton är barndomsvänner från Västerås och lärde
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
