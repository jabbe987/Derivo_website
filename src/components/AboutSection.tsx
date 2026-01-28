const AboutSection = () => {
  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;