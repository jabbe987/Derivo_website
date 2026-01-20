import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn är obligatoriskt").max(100, "Namnet är för långt"),
  email: z.string().trim().email("Ange en giltig e-postadress").max(255, "E-postadressen är för lång"),
  phone: z.string().trim().max(20, "Telefonnumret är för långt").optional(),
  subject: z.string().trim().max(100, "Ämnet är för långt").optional(),
  message: z.string().trim().min(1, "Meddelande är obligatoriskt").max(2000, "Meddelandet är för långt"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer så snart vi kan.",
      });
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      name: "Filip Österlund",
      role: "VA-utredare / Grundare",
      email: "filip@derivo.se",
      phone: "+46 76 900 21 04",
    },
    {
      name: "Anton Nilsson",
      role: "Affärsutveckling / Grundare",
      email: "anton@derivo.se",
      phone: "+46 70 461 28 88",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Kontakta oss
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Låt oss starta en dialog
          </h2>
          <p className="text-muted-foreground text-lg">
            Har du frågor, behöver stöd i ett projekt eller vill diskutera en möjlig 
            uppdragsförfrågan? Vi hjälper gärna till.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-card p-8 lg:p-10">
            <h3 className="font-serif text-2xl text-foreground mb-6">Skicka ett meddelande</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Namn *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ditt namn"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-post *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="din@epost.se"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon (valfritt)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+46 70 123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Ämne (valfritt)
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Vad gäller det?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Beskriv ditt projekt eller din fråga..."
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Skickar..."
                ) : (
                  <>
                    Skicka meddelande
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Kontakta oss direkt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vårt team är redo att hjälpa dig med frågor eller förfrågningar. 
                Oavsett om du söker en konsultation eller har ett specifikt projekt i åtanke, 
                finns vi här för dig.
              </p>
            </div>

            <div className="space-y-6">
              {contacts.map((contact) => (
                <div key={contact.name} className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                    {contact.name}
                  </h4>
                  <p className="text-accent text-sm font-medium mb-4">{contact.role}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{contact.email}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{contact.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Plats</p>
                <p className="text-muted-foreground">Västerås, Sverige</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
