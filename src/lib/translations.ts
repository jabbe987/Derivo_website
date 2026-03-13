import { BarChart3, BookOpenCheck, Brain, CloudRain, Clock, Database, Droplets, Eye, Filter, Handshake, Layers, Leaf, MapPin, MessageCircle, Shield, Sprout, Target } from "lucide-react";
import filipProfil from "@/assets/filipProfil2.png";
import antonProfil from "@/assets/antonProfil.png";
import jakobProfil from "@/assets/jakobProfil.png";
import type { Language } from "@/lib/i18n";

export type SiteTranslation = {
  meta: {
    title: string;
  };
  nav: {
    links: Array<{ label: string; href: string }>;
    contactCta: string;
    openMenuLabel: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: Array<{ icon: typeof Shield; text: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    quote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ icon: typeof Droplets; title: string; description: string }>;
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ icon: typeof Target; title: string; description: string }>;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    storyTitle: string;
    storyText: string;
    linkedinComingSoon: string;
    members: Array<{
      name: string;
      role: string;
      email: string;
      phone: string;
      linkedin?: string;
      bio: string;
      image: string;
      imagePosition: string;
    }>;
  };
  culture: {
    eyebrow: string;
    title: string;
    description: string;
    principles: Array<{
      id: string;
      icon: typeof BookOpenCheck;
      title: string;
      shortText: string;
      longText: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    directTitle: string;
    directText: string;
    inquiriesTitle: string;
    inquiriesCta: string;
    inquiriesText: string;
    locationTitle: string;
    locationText: string;
    contacts: Array<{
      name: string;
      role: string;
      email: string;
      phone: string;
      linkedin: string;
    }>;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    copyright: string;
    services: string[];
  };
};

const sectionLinks = {
  about: "#about",
  services: "#services",
  values: "#values",
  team: "#team",
  culture: "#culture",
  contact: "#contact",
} as const;

export const translations: Record<Language, SiteTranslation> = {
  sv: {
    meta: {
      title: "Derivo",
    },
    nav: {
      links: [
        { label: "Om oss", href: sectionLinks.about },
        { label: "Tjänster", href: sectionLinks.services },
        { label: "Värderingar", href: sectionLinks.values },
        { label: "Team", href: sectionLinks.team },
        { label: "Kultur", href: sectionLinks.culture },
      ],
      contactCta: "Kontakta oss",
      openMenuLabel: "Öppna meny",
      languageLabel: "Språk",
    },
    hero: {
      badge: "Konsulttjänster inom vatten",
      title: "Underlag för bättre beslut",
      description:
        "Derivo är ett mindre konsultbolag som arbetar med utredning, analys och projektering inom VA. Vi tar fram underlag som hjälper beställare att bedöma förutsättningar, jämföra alternativ och fatta beslut i rätt skede. Som mindre aktör kan vi arbeta i nära dialog med dig som beställare och snabbt anpassa vårt arbetssätt när förutsättningarna förändras.",
      primaryCta: "Kontakta oss",
      secondaryCta: "Våra tjänster",
      highlights: [
        { icon: Shield, text: "Trygga beslutsunderlag" },
        { icon: Brain, text: "Smarta systemval" },
        { icon: Leaf, text: "Hållbar dimensionering" },
      ],
    },
    about: {
      eyebrow: "Om Derivo",
      title: "Beslutsunderlag anpassade för dig och samhället",
      paragraphs: [
        "Derivo hjälper både offentliga och privata beställare med tekniska underlag inom VA och samhällsbyggnad. Vi utgår från faktiska behov och lokala förutsättningar och kombinerar teknisk kompetens med förståelse för platsens sammanhang. Ambitionen är att stärka kvalitet, tydlighet och trygghet i planering och genomförande.",
        "Som mindre konsultbolag kan vi arbeta nära beställaren och anpassa arbetssättet när förutsättningarna förändras. Vi eftersträvar väl avvägda vägval både ur ett ekonomiskt och tekniskt perspektiv med hänsyn till berörda intressen.",
        "Vårt mål är att leverera beslutsunderlag och lösningar som bidrar till smartare och mer hållbara samhällen, där kunden får stöd att fatta välgrundade beslut i både tidiga och sena skeden. Vi samarbetar även med etablerade aktörer i branschen och kan vid behov ta in kompletterande specialistkompetens.",
        "Vi tror att en bra utredning och en genomtänkt systemlösning ofta är den billigaste försäkringen – och samtidigt skapar tydligt mervärde.",
      ],
      quote:
        '"Vi tar fram åtgärder och lösningar med syfte, för ett samhälle som planeras smartare, byggs tryggare och står starkare över tid."',
    },
    services: {
      eyebrow: "Våra tjänster",
      title: "Modellering, projektering och utredningar inom vatten",
      description:
        "Vi erbjuder ett brett spektrum av tekniska tjänster inom VA och dagvatten, alltid med fokus på praktisk nytta och hållbara lösningar.",
      items: [
        {
          icon: Droplets,
          title: "Dagvattenutredningar",
          description:
            "Omfattande utredningar för detaljplaner med fokus på fördröjning, rening och avledning av dagvatten.",
        },
        {
          icon: BarChart3,
          title: "Hydraulisk modellering",
          description:
            "Expertis inom kapacitetsanalyser för att simulera, förstå och optimera VA-system.",
        },
        {
          icon: CloudRain,
          title: "Skyfallsanalyser",
          description:
            "Riskbedömningar och åtgärdsförslag för att hantera extrema nederbördshändelser och minska översvämningsrisker.",
        },
        {
          icon: Filter,
          title: "Föroreningsberäkningar",
          description:
            "Beräkningar för att bedöma föroreningsbelastning och utforma reningslösningar.",
        },
        {
          icon: Layers,
          title: "VA-projektering",
          description:
            "Teknisk projektering och dimensionering av VA- och dagvattenlösningar, från underlag och beräkningar till systemutformning.",
        },
        {
          icon: Database,
          title: "Systemlösningar",
          description:
            "Framtagning av helhetslösningar för dagvattenhantering anpassade efter platsens unika förutsättningar.",
        },
      ],
    },
    values: {
      eyebrow: "Våra värderingar",
      title: "Så arbetar vi",
      description:
        "Vårt arbetssätt bygger på tydliga värderingar som genomsyrar varje projekt och varje kundrelation.",
      items: [
        {
          icon: Target,
          title: "Mervärde och praktisk nytta",
          description:
            "Vi tar fram lösningar anpassade för verkligheten och hjälper er att planera och prioritera åtgärder med fokus på att skapa mervärde lokalt.",
        },
        {
          icon: Eye,
          title: "Flexibilitet och transparens",
          description:
            "Vi anpassar arbetet när förutsättningarna förändras och håller processen tydlig och trygg genom öppen kommunikation.",
        },
        {
          icon: MessageCircle,
          title: "Dialog och förståelse",
          description:
            "Vi lyssnar aktivt, fångar upp olika behov och bidrar till väl avvägda beslut genom hela uppdraget.",
        },
        {
          icon: Clock,
          title: "Ansvar och långsiktighet",
          description:
            "Vi tänker både kort- och långsiktigt och tar fram underlag som stöttar hållbar planering i nya och befintliga miljöer.",
        },
      ],
    },
    team: {
      eyebrow: "Vårt team",
      title: "Personerna bakom Derivo",
      description:
        "Tillsammans driver Filip och Anton Derivo AB. Filip är i första hand uppdragsansvarig och utför tekniska utredningar, medan Anton ansvarar för affärsutveckling och bolagsstruktur.",
      storyTitle: "Vår berättelse",
      storyText:
        "Filip och Anton har känt varandra sedan barndomen i Västerås. Under uppväxten hade vi båda en tydlig ambition att en dag bygga något eget. När Filip senare började jobba i VA- och dagvattenprojekt blev det snabbt tydligt hur stor skillnad ett bra beslutsunderlag kan göra – men också hur ofta arbetet fastnar i rutin: \"så här har vi alltid gjort\". Inte för att någon vill leverera dåligt, utan för att tid, processer och standardmallar ibland styr mer än platsens behov. Samtidigt ökade trycket i projekten: fler krav, mer klimatpåverkan och större konsekvenser när man tar fel beslut tidigt.\n\nIdén om Derivo tog form när Filip flyttade tillbaka till Västerås efter studierna i Lund. Vi började skissa på hur ett mindre bolag skulle kunna jobba annorlunda: mer metodiskt, mer transparent och mer fokuserat på att faktiskt hjälpa beställaren framåt – inte bara leverera en rapport.\n\nDet blev starten på Derivo. Vi vill att varje uppdrag ska kännas tydligt, genomtänkt och användbart – och att det ska vara lätt för beställaren att förstå vad som är viktigt och varför.",
      linkedinComingSoon: "LinkedIn kommer snart",
      members: [
        {
          name: "Filip Österlund",
          role: "Medgrundare & VA-utredare",
          email: "filip@derivo.se",
          phone: "+46 21 813 13 10",
          linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
          bio: "Filip är vatteningenjör med fokus på dagvatten, hydraulisk modellering och tekniska utredningar. Han tar fram underlag och lösningar för fördröjning, rening och skyfall, och arbetar ofta nära beställare från tidig analys till färdig leverans.",
          image: filipProfil,
          imagePosition: "center",
        },
        {
          name: "Anton Nilsson",
          role: "Medgrundare & Affärsutvecklare",
          email: "anton@derivo.se",
          phone: "+46 70 461 28 88",
          linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
          bio: "Anton är utbildad samhällsplanerare med erfarenhet av platsutveckling och affärsutveckling. I Derivo arbetar han främst med administration, affärsutveckling och strategiska frågor, med fokus på att bygga struktur, skapa långsiktiga kundrelationer och utveckla bolagets erbjudande.",
          image: antonProfil,
          imagePosition: "center 18%",
        },
        {
          name: "Jakob Österlund",
          role: "IT-utvecklare",
          email: "jakob@derivo.se",
          phone: "+46 73 980 74 02",
          linkedin: "https://www.linkedin.com/in/jakob-%C3%B6sterlund-0a49902b0/",
          bio: "Jakob är civilingenjörsstudent i informationsteknologi med inriktning mot mjukvaruutveckling. Han driver förbättringar inom system, webb och digitala arbetsflöden och bidrar med teknisk problemlösning, struktur och innovation inom digitala lösningar.",
          image: jakobProfil,
          imagePosition: "center",
        },
      ],
    },
    culture: {
      eyebrow: "Vår kultur",
      title: "Så bygger vi Derivo",
      description:
        "Hos Derivo bygger vi inte bara tekniska lösningar, vi bygger kompetens, struktur och ett arbetssätt som utvecklas över tid. Vi arbetar med en tydlig metodik där erfarenhet, analys och kontinuerlig utveckling är en naturlig del av varje uppdrag. Vår ambition är att varje projekt ska stärka nästa och att kunskap ska delas, inte samlas.",
      principles: [
        {
          id: "item-1",
          icon: BookOpenCheck,
          title: "En kultur av lärande",
          shortText:
            "Erfarenheter från ett projekt ska stärka nästa. Frågor uppmuntras. Perspektiv prövas. Metoder utvecklas.",
          longText:
            "Vi ser kunskapsdelning som en självklar del av vårt arbetssätt. Erfarenheter från ett projekt ska stärka nästa, systematiskt och medvetet. Frågor uppmuntras. Perspektiv prövas. Metoder utvecklas. Genom strukturerad återkoppling, gemensam problemlösning och ett öppet klimat med högt i tak skapar vi förutsättningar för att våra medarbetare ska lära sig snabbare, fatta bättre beslut och växa tryggt i sin roll.",
        },
        {
          id: "item-2",
          icon: Handshake,
          title: "Samarbete över erfarenhetsnivåer",
          shortText: "Kunskap ska delas, inte stanna hos individen.",
          longText:
            "Vi tror inte på modellen där kunskap samlas hos en enskild person. I våra projekt möts erfarenhet och nya perspektiv. Senior kompetens och junior drivkraft arbetar sida vid sida, inte bara för att leverera kvalitet i dag, utan för att bygga starkare kompetens över tid. Det stärker både individen, projekten och organisationen.",
        },
        {
          id: "item-3",
          icon: Sprout,
          title: "Delaktighet och långsiktighet",
          shortText: "Bolagets utveckling och individens utveckling ska gå hand i hand.",
          longText:
            "Vi vill att den som bidrar till Derivos utveckling också ska känna delaktighet i den. När bolaget växer ska det märkas i ansvar, inflytande och möjligheter att utvecklas vidare. Vi bygger en kultur där engagemang, kvalitet och långsiktighet förstärker varandra. Det skapar motivation, stabilitet och ett bolag som utvecklas hållbart över tid.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakta oss",
      title: "Låt oss starta en dialog",
      description:
        "Har du frågor, behöver stöd i ett projekt eller vill diskutera en möjlig uppdragsförfrågan? Vi hjälper gärna till.",
      directTitle: "Kontakta oss direkt",
      directText:
        "Vårt team är redo att hjälpa dig med frågor eller förfrågningar. Oavsett om du söker en konsultation eller har ett specifikt projekt i åtanke finns vi här för dig.",
      inquiriesTitle: "Förfrågningar",
      inquiriesCta: "Maila oss här",
      inquiriesText: "För nya uppdrag, frågor och förfrågningar.",
      locationTitle: "Plats",
      locationText: "Herrgärdsgatan 4b, Västerås, Sverige",
      contacts: [
        {
          name: "Filip Österlund",
          role: "VA-utredare / Grundare",
          email: "filip@derivo.se",
          phone: "+46 21 813 13 10",
          linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
        },
        {
          name: "Anton Nilsson",
          role: "Affärsutvecklare / Grundare",
          email: "anton@derivo.se",
          phone: "+46 70 461 28 88",
          linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
        },
      ],
    },
    footer: {
      tagline: "Underlag för bättre beslut.",
      quickLinksTitle: "Snabblänkar",
      servicesTitle: "Tjänster",
      contactTitle: "Kontakt",
      copyright: "Alla rättigheter förbehållna.",
      services: [
        "Dagvattenutredningar",
        "Hydraulisk modellering",
        "Skyfallsanalyser",
        "Föroreningsberäkningar",
        "VA-projektering",
      ],
    },
  },
  en: {
    meta: {
      title: "Derivo",
    },
    nav: {
      links: [
        { label: "About", href: sectionLinks.about },
        { label: "Services", href: sectionLinks.services },
        { label: "Values", href: sectionLinks.values },
        { label: "Team", href: sectionLinks.team },
        { label: "Culture", href: sectionLinks.culture },
      ],
      contactCta: "Contact us",
      openMenuLabel: "Open menu",
      languageLabel: "Language",
    },
    hero: {
      badge: "Water consultancy services",
      title: "Basis for better decisions",
      description:
        "Derivo is a small consultancy focused on investigations, analysis and design within water infrastructure. We produce decision material that helps clients assess conditions, compare alternatives and make informed decisions at the right stage. As a smaller firm, we work closely with clients and can quickly adapt our way of working when project conditions change.",
      primaryCta: "Contact us",
      secondaryCta: "Our services",
      highlights: [
        { icon: Shield, text: "Reliable decision support" },
        { icon: Brain, text: "Smarter system choices" },
        { icon: Leaf, text: "Sustainable sizing" },
      ],
    },
    about: {
      eyebrow: "About Derivo",
      title: "Decision support shaped for you and for society",
      paragraphs: [
        "Derivo supports both public and private clients with technical decision material in water infrastructure and community development. We start from real needs and local conditions, combining technical competence with an understanding of the wider context. Our aim is to strengthen quality, clarity and confidence in planning and delivery.",
        "As a smaller consultancy, we work closely with the client and adapt our process when conditions change. We strive for well-balanced choices from both economic and technical perspectives, while considering the interests affected by each project.",
        "Our goal is to deliver decision support and solutions that contribute to smarter and more sustainable communities, helping clients make well-founded decisions in both early and later project stages. We also collaborate with established industry partners and can bring in complementary specialist expertise when needed.",
        "We believe that a thorough analysis and a well-considered system solution are often the most cost-effective form of insurance, while also creating clear added value.",
      ],
      quote:
        '"We develop actions and solutions with purpose, for communities that are planned more intelligently, built more safely and remain resilient over time."',
    },
    services: {
      eyebrow: "Our services",
      title: "Modelling, design and investigations within water",
      description:
        "We offer a broad range of technical services within water, wastewater and stormwater, always focused on practical value and durable solutions.",
      items: [
        {
          icon: Droplets,
          title: "Stormwater investigations",
          description:
            "Comprehensive studies for detailed development plans with focus on retention, treatment and discharge of stormwater.",
        },
        {
          icon: BarChart3,
          title: "Hydraulic modelling",
          description:
            "Capacity analysis expertise used to simulate, understand and optimize water infrastructure systems.",
        },
        {
          icon: CloudRain,
          title: "Cloudburst analysis",
          description:
            "Risk assessments and proposed measures for extreme rainfall events and reduced flood exposure.",
        },
        {
          icon: Filter,
          title: "Pollution calculations",
          description:
            "Assessments of pollutant loads used to evaluate impacts and shape treatment solutions.",
        },
        {
          icon: Layers,
          title: "Water infrastructure design",
          description:
            "Technical design and sizing of water and stormwater solutions, from calculations and supporting material to system layout.",
        },
        {
          icon: Database,
          title: "System solutions",
          description:
            "Integrated stormwater management concepts tailored to the unique conditions of each site.",
        },
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "How we work",
      description:
        "Our approach is grounded in clear values that run through every project and every client relationship.",
      items: [
        {
          icon: Target,
          title: "Added value and practical benefit",
          description:
            "We develop solutions that work in reality and help you plan and prioritize measures that create local value.",
        },
        {
          icon: Eye,
          title: "Flexibility and transparency",
          description:
            "We adjust the work when conditions change and keep the process clear and dependable through open communication.",
        },
        {
          icon: MessageCircle,
          title: "Dialogue and understanding",
          description:
            "We listen actively, capture different needs and contribute to balanced decisions throughout the assignment.",
        },
        {
          icon: Clock,
          title: "Responsibility and long-term thinking",
          description:
            "We balance immediate needs with future demands and produce material that supports sustainable planning in both new and existing environments.",
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      title: "The people behind Derivo",
      description:
        "Filip and Anton run Derivo AB together. Filip primarily leads assignments and delivers technical investigations, while Anton is responsible for business development and company structure.",
      storyTitle: "Our story",
      storyText:
        "Filip and Anton have known each other since childhood in Västerås. Growing up, we both had a clear ambition to one day build something of our own. When Filip later began working on water and stormwater projects, it quickly became clear how much difference strong decision support can make, but also how often the work gets stuck in routine: \"this is how we have always done it.\" Not because anyone wants to deliver poor results, but because time, processes and standard templates sometimes shape the outcome more than the needs of the site. At the same time, the pressure on projects increased: more requirements, greater climate impact and bigger consequences when the wrong decisions are made early.\n\nThe idea for Derivo took shape when Filip moved back to Västerås after his studies in Lund. We started sketching out how a smaller company could work differently: more methodically, more transparently and more focused on actually helping the client move forward, not just delivering a report.\n\nThat became the start of Derivo. We want every assignment to feel clear, well thought through and useful, and we want it to be easy for the client to understand what matters and why.",
      linkedinComingSoon: "LinkedIn coming soon",
      members: [
        {
          name: "Filip Österlund",
          role: "Co-founder & Water Infrastructure Consultant",
          email: "filip@derivo.se",
          phone: "+46 21 813 13 10",
          linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
          bio: "Filip is a water engineer focused on stormwater, hydraulic modelling and technical investigations. He develops supporting material and solutions for retention, treatment and cloudburst management, and often works closely with clients from early analysis to final delivery.",
          image: filipProfil,
          imagePosition: "center",
        },
        {
          name: "Anton Nilsson",
          role: "Co-founder & Business Developer",
          email: "anton@derivo.se",
          phone: "+46 70 461 28 88",
          linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
          bio: "Anton is trained in urban and regional planning with experience in place development and business development. At Derivo, he mainly works with administration, business development and strategic matters, with a focus on building structure, strengthening long-term client relationships and refining the company's offer.",
          image: antonProfil,
          imagePosition: "center 18%",
        },
        {
          name: "Jakob Österlund",
          role: "Software Developer",
          email: "jakob@derivo.se",
          phone: "+46 73 980 74 02",
          linkedin: "https://www.linkedin.com/in/jakob-%C3%B6sterlund-0a49902b0/",
          bio: "Jakob is an engineering student in information technology specializing in software development. He drives improvements across systems, web and digital workflows and contributes technical problem solving, structure and innovation in digital solutions.",
          image: jakobProfil,
          imagePosition: "center",
        },
      ],
    },
    culture: {
      eyebrow: "Our culture",
      title: "How we build Derivo",
      description:
        "At Derivo, we do not only build technical solutions. We build competence, structure and a way of working that improves over time. We use a clear methodology where experience, analysis and continuous development are natural parts of every assignment. Our ambition is that each project strengthens the next and that knowledge is shared rather than stored.",
      principles: [
        {
          id: "item-1",
          icon: BookOpenCheck,
          title: "A culture of learning",
          shortText:
            "Lessons from one project should strengthen the next. Questions are encouraged. Perspectives are tested. Methods evolve.",
          longText:
            "We see knowledge sharing as a natural part of how we work. Experience from one project should strengthen the next, systematically and deliberately. Questions are encouraged. Perspectives are challenged. Methods evolve. Through structured feedback, joint problem solving and an open environment, we create conditions for our team to learn faster, make better decisions and grow confidently in their roles.",
        },
        {
          id: "item-2",
          icon: Handshake,
          title: "Collaboration across experience levels",
          shortText: "Knowledge should be shared, not locked inside one individual.",
          longText:
            "We do not believe in a model where knowledge accumulates with one person alone. In our projects, experience meets new perspectives. Senior expertise and junior drive work side by side, not only to deliver quality today, but to build stronger competence over time. That strengthens the individual, the projects and the organization.",
        },
        {
          id: "item-3",
          icon: Sprout,
          title: "Participation and long-term perspective",
          shortText: "The company's development and individual growth should move together.",
          longText:
            "We want everyone who contributes to Derivo's development to feel part of it. When the company grows, that should be reflected in responsibility, influence and opportunities to keep developing. We build a culture where engagement, quality and long-term thinking reinforce one another. That creates motivation, stability and a company that grows sustainably over time.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "Let’s start a conversation",
      description:
        "If you have questions, need support in a project or want to discuss a potential assignment, we would be glad to help.",
      directTitle: "Contact us directly",
      directText:
        "Our team is ready to help with questions or inquiries. Whether you are looking for a consultation or already have a specific project in mind, we are here to help.",
      inquiriesTitle: "Inquiries",
      inquiriesCta: "Email us here",
      inquiriesText: "For new assignments, questions and inquiries.",
      locationTitle: "Location",
      locationText: "Herrgärdsgatan 4b, Västerås, Sweden",
      contacts: [
        {
          name: "Filip Österlund",
          role: "Water Infrastructure Consultant / Founder",
          email: "filip@derivo.se",
          phone: "+46 21 813 13 10",
          linkedin: "https://www.linkedin.com/in/filip-%C3%B6sterlund-a1925b251/",
        },
        {
          name: "Anton Nilsson",
          role: "Business Developer / Founder",
          email: "anton@derivo.se",
          phone: "+46 70 461 28 88",
          linkedin: "https://www.linkedin.com/in/anton-nilsson-069a431a1/",
        },
      ],
    },
    footer: {
      tagline: "Basis for better decisions.",
      quickLinksTitle: "Quick links",
      servicesTitle: "Services",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      services: [
        "Stormwater investigations",
        "Hydraulic modelling",
        "Cloudburst analysis",
        "Pollution calculations",
        "Water infrastructure design",
      ],
    },
  },
};
