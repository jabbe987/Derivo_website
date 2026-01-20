import { Briefcase, BarChart3, Shield, Lightbulb, Scale, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Business Strategy",
      description: "Comprehensive strategic planning and execution frameworks to drive sustainable growth and competitive advantage.",
    },
    {
      icon: BarChart3,
      title: "Financial Advisory",
      description: "Expert financial guidance including M&A, capital raising, restructuring, and investment optimization.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies to protect your business and ensure compliance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Transform your business with cutting-edge solutions, digital transformation, and process innovation.",
    },
    {
      icon: Scale,
      title: "Legal Advisory",
      description: "Strategic legal counsel for corporate governance, contracts, intellectual property, and regulatory matters.",
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Navigate international markets with our expertise in cross-border operations, market entry, and localization.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Solutions for Modern Enterprises
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of professional services designed to address 
            your most critical business challenges and unlock new opportunities.
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
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium mt-6 group-hover:gap-3 transition-all duration-200"
              >
                Learn More
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
