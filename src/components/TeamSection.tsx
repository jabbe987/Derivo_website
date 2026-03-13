import { Linkedin, Mail, Phone } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const TeamSection = ({ language }: { language: Language }) => {
  const { team } = translations[language];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {team.eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {team.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {team.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.members.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.imagePosition || "center" }}
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

              <div className="p-6 flex flex-1 flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed min-h-48 mb-3">
                  {member.bio}
                </p>

                <div className="space-y-3 mt-auto">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
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
                    title={member.linkedin ? "LinkedIn" : team.linkedinComingSoon}
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

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">{team.storyTitle}</h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {team.storyText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
