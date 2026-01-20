import { Target, Eye, MessageCircle, Clock } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      number: "01",
      title: "Praktisk nytta",
      description: "Vi skapar lösningar som fungerar i verkligheten och hjälper er att planera och prioritera rätt åtgärder.",
    },
    {
      icon: Eye,
      number: "02",
      title: "Flexibilitet och transparens",
      description: "Vi anpassar arbetet när förutsättningarna förändras och håller processen tydlig och trygg genom öppen kommunikation.",
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "Dialog och förståelse",
      description: "Vi lyssnar aktivt, fångar upp olika behov och bidrar till väl avvägda beslut genom hela uppdraget.",
    },
    {
      icon: Clock,
      number: "04",
      title: "Ansvar och långsiktighet",
      description: "Vi tänker både kort- och långsiktigt och tar fram underlag som stöttar hållbar planering i nya och befintliga miljöer.",
    },
  ];

  return (
    <section id="varderingar" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Våra Värderingar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Så arbetar vi
          </h2>
          <p className="text-muted-foreground text-lg">
            Vårt arbetssätt bygger på tydliga värderingar som genomsyrar varje projekt 
            och varje kundrelation.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-water-gradient rounded-full flex items-center justify-center shadow-card">
                <span className="text-primary-foreground font-bold text-sm">{value.number}</span>
              </div>

              <div className="flex items-start gap-4 pt-2">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
