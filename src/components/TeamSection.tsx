import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "James Mitchell",
      role: "Founder & CEO",
      bio: "25+ years leading global strategy initiatives for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Chen",
      role: "Chief Strategy Officer",
      bio: "Former McKinsey partner with expertise in digital transformation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Roberts",
      role: "Head of Finance",
      bio: "CPA with 20 years experience in corporate finance and M&A advisory.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Thompson",
      role: "Director of Operations",
      bio: "Operations excellence leader with proven track record in scaling businesses.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our leadership team combines decades of industry experience with 
            a passion for helping businesses achieve their full potential.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with socials */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl text-foreground font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
