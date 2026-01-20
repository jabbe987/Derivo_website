import { Target, Handshake, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Target, title: "Flexibilitet", description: "Som mindre aktör kan vi arbeta nära projekten och vara flexibla när förutsättningarna ändras." },
    { icon: Handshake, title: "Engagemang", description: "Vårt engagemang ligger i att göra ett noggrant arbete och hjälpa till där vi gör mest nytta." },
    { icon: Users, title: "Samarbete", description: "Vi arbetar ofta nära beställare från tidig analys till färdig leverans." },
    { icon: Clock, title: "Långsiktighet", description: "Målet är att på ett ansvarsfullt sätt stärka beslutsunderlag och planering för framtidens samhälle." },
  ];

  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Om Derivo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Lösningar som fungerar i praktiken
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Derivo AB skapar värde för både offentliga och privata beställare genom tekniska 
              utredningar och lösningar som utgår från verkliga behov och lokala förutsättningar. 
              Vi arbetar för en mer hållbar, trygg och framtidssäker samhällsplanering – där 
              kvalitet, tydlighet och rätt syfte alltid står i centrum.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Genom att kombinera teknisk kompetens med förståelse för lokala förutsättningar 
              skapar vi lösningar som är anpassade, effektiva och långsiktigt hållbara. Vårt 
              syfte är att stärka tryggheten och kvaliteten i samhällsplaneringen.
            </p>

            {/* Mission Statement */}
            <div className="bg-muted/50 border-l-4 border-accent rounded-r-lg p-6">
              <p className="text-foreground font-medium italic">
                "Vi tar fram åtgärder och lösningar med syfte – för ett samhälle som planeras 
                smartare, byggs tryggare och står starkare över tid."
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-water-gradient rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
