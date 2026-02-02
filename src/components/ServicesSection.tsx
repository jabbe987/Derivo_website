import { Droplets, BarChart3, CloudRain, Filter, Layers, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Dagvattenutredningar",
      description: "Omfattande utredningar för detaljplaner med fokus på fördröjning, rening och avledning av dagvatten.",
    },
    {
      icon: BarChart3,
      title: "Hydraulisk modellering",
      description: "Expertis inom kapacitetsanalyser för att simulera, förstå och optimera VA-system.",
    },
    {
      icon: CloudRain,
      title: "Skyfallsanalyser",
      description: "Riskbedömningar och åtgärdsförslag för att hantera extrema nederbördshändelser och minska översvämningsrisker.",
    },
    {
      icon: Filter,
      title: "Föroreningsberäkningar",
      description: "Beräkningar för att bedöma föroreningsbelastning och utforma reningslösningar.",
    },
    {
      icon: Layers,
      title: "3D-projektering",
      description: "Teknisk projektering i Civil 3D för att visualisera och designa VA-lösningar.",
    },
    {
      icon: Database,
      title: "Systemlösningar",
      description: "Framtagning av helhetslösningar för dagvattenhantering anpassade efter platsens unika förutsättningar.",
    },
  ];

  return (
    <section id="tjanster" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Våra Tjänster
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Modellering, projektering och utredningar inom vatten
          </h2>
          <p className="text-muted-foreground text-lg">
            Vi erbjuder ett brett spektrum av tekniska tjänster inom VA och dagvatten, 
            alltid med fokus på praktisk nytta och hållbara lösningar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-water-gradient transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
