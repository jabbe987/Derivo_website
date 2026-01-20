import { Award, Target, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "25+", label: "Industry Awards" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "$2B+", label: "Revenue Generated" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Building Success Stories Since 2004
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over two decades, Apex Corp has been at the forefront of professional services, 
              helping businesses navigate complex challenges and achieve extraordinary results. 
              Our commitment to excellence and innovation has made us a trusted partner for 
              organizations worldwide.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe in building lasting relationships based on trust, transparency, and 
              a deep understanding of our clients' unique needs. Our team of experts brings 
              diverse perspectives and proven methodologies to every engagement.
            </p>

            {/* Mission Statement */}
            <div className="bg-muted/50 border-l-4 border-accent rounded-r-lg p-6">
              <p className="text-foreground font-medium italic">
                "Our mission is to empower businesses with the strategies and insights 
                they need to thrive in an ever-changing landscape."
              </p>
              <p className="text-muted-foreground text-sm mt-2">— James Mitchell, Founder & CEO</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card shadow-card rounded-xl p-8 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
