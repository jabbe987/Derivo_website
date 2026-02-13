import { useState } from "react";
import { BookOpenCheck, Handshake, Sprout } from "lucide-react";

const principles = [
  {
    id: "item-1",
    icon: BookOpenCheck,
    title: "En kultur av lärande",
    shortText:
      "Erfarenheter från ett projekt ska stärka nästa. Frågor uppmuntras. Perspektiv prövas. Metoder utvecklas.",
    longText:
      "Vi ser kunskapsdelning som en självklar del av vårt arbetssätt. Erfarenheter från ett projekt ska stärka nästa - systematiskt och medvetet. Frågor uppmuntras. Perspektiv prövas. Metoder utvecklas. Genom strukturerad återkoppling, gemensam problemlösning och ett öppet klimat med högt i tak skapar vi förutsättningar för att våra medarbetare ska lära sig snabbare, fatta bättre beslut och växa tryggt i sin roll.",
  },
  {
    id: "item-2",
    icon: Handshake,
    title: "Samarbete över erfarenhetsnivåer",
    shortText: "Kunskap ska delas, inte stanna hos individen.",
    longText:
      "Vi tror inte på modellen där kunskap samlas hos en enskild person. I våra projekt möts erfarenhet och nya perspektiv. Senior kompetens och junior drivkraft arbetar sida vid sida - inte bara för att leverera kvalitet i dag, utan för att bygga starkare kompetens över tid. Det stärker både individen, projekten och organisationen.",
  },
  {
    id: "item-3",
    icon: Sprout,
    title: "Delaktighet och långsiktighet",
    shortText: "Bolagets utveckling och individens utveckling ska gå hand i hand.",
    longText:
      "Vi vill att den som bidrar till Derivos utveckling också ska känna delaktighet i den. När bolaget växer ska det märkas - i ansvar, inflytande och möjligheter att utvecklas vidare. Vi bygger en kultur där engagemang, kvalitet och långsiktighet förstärker varandra. Det skapar motivation, stabilitet och ett bolag som utvecklas hållbart över tid.",
  },
];

const DerivoMethodSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="kultur" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Vår kultur
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Så bygger vi Derivo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hos Derivo bygger vi inte bara tekniska lösningar - vi bygger kompetens,
            struktur och ett arbetssätt som utvecklas över tid. Vi arbetar med en tydlig
            metodik där erfarenhet, analys och kontinuerlig utveckling är en naturlig del
            av varje uppdrag. Vår ambition är att varje projekt ska stärka nästa - och att
            kunskap ska delas, inte samlas.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 max-w-8xl mx-auto ${
            openItems.length > 0 ? "items-start" : ""
          }`}
        >
          {principles.map((principle, index) => {
            const isOpen = openItems.includes(principle.id);

            return (
              <div
                key={principle.id}
                className="relative min-h-[12rem] bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() =>
                  setOpenItems((prev) =>
                    prev.includes(principle.id)
                      ? prev.filter((id) => id !== principle.id)
                      : [...prev, principle.id],
                  )
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenItems((prev) =>
                      prev.includes(principle.id)
                        ? prev.filter((id) => id !== principle.id)
                        : [...prev, principle.id],
                    );
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4 pt-2">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.shortText}
                    </p>
                  </div>
                </div>

                {isOpen && (
                  <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/80">
                    {principle.longText}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DerivoMethodSection;
