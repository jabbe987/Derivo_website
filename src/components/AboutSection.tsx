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
              Beslutsunderlag anpassade för dig och samhället
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Derivo hjälper både offentliga och privata beställare med tekniska underlag inom VA 
              och samhällsbyggnad. Vi utgår från faktiska behov och lokala förutsättningar och 
              kombinerar teknisk kompetens med förståelse för platsens sammanhang. Ambitionen är att 
              stärka kvalitet, tydlighet och trygghet i planering och genomförande.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Som mindre konsultbolag kan vi arbeta nära beställaren och anpassa arbetssättet när 
              förutsättningarna förändras. Vi eftersträvar väl avvägda vägval både ur ett ekonomiskt 
              och tekniskt perspektiv – med hänsyn till berörda intressen.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Vårt mål är att leverera beslutsunderlag och lösningar som bidrar till smartare och mer 
              hållbara samhällen – där kunden får stöd att fatta välgrundade beslut i både tidiga och 
              sena skeden. Vi samarbetar även med etablerade aktörer i branschen och kan vid behov ta 
              in kompletterande specialistkompetens.
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