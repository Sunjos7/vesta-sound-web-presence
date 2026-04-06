import { ArrowRight, MapPin, Target, Heart, Building2, Gem, Cpu, Waves, Mountain, Plane, Trees, GlassWater } from "lucide-react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/layout/SEO";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="About Our Local Expertise" 
        description="Learn about Vesta Sound Property Group's mission to protect your investments and provide hands-on property management in the Seattle and Puget Sound area."
      />
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
              About <span className="text-accent">Vesta Sound</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light leading-relaxed">
              Serving the Greater Seattle & Puget Sound community with integrity, expertise, and a hands-on commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1766603636700-e9d80473f40f?q=80&w=1000"
              alt="Modern Home"
              className="rounded-3xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Our Mission</h2>
              <h3 className="text-4xl font-serif font-bold">Protecting Your Investment, Reducing Your Stress</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Locally founded, Vesta Sound Property Group is a small Taiwanese American owned business. Built on the belief that great property management starts with treating people right.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a market as complex as Seattle, property owners need more than just a rent collector. They need a partner who understands local regulations, maintenance needs, and tenant expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-lg mb-1">Maximized Returns</h4>
                  <p className="text-sm text-muted-foreground">Strategic pricing and efficient management to ensure your investment thrives.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-lg mb-1">Hands-On Care</h4>
                  <p className="text-sm text-muted-foreground">Personal attention to detail that large corporate firms simply can't match.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Local Focus */}
      <Section className="bg-secondary/50">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Local Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Puget Sound Specialists</h3>
          <p className="text-xl text-muted-foreground font-light">We don't just work here — we live here. Deep roots across the Puget Sound region mean we know what renters want and what owners need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: "Seattle", icon: Building2 },
            { city: "Bellevue", icon: Gem },
            { city: "Redmond", icon: Cpu },
            { city: "Kirkland", icon: Waves },
            { city: "Issaquah", icon: Mountain },
            { city: "Renton", icon: Plane },
            { city: "Bothell", icon: Trees },
            { city: "Woodinville", icon: GlassWater }
          ].map((item, idx) => (
            <div key={idx} className="bg-background p-6 rounded-2xl shadow-sm border border-border flex items-center space-x-4 hover:border-primary/20 transition-all">
              <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                <item.icon size={20} />
              </div>
              <span className="font-bold font-serif text-lg">{item.city}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif font-bold">Ready to Experience the Vesta Sound Difference?</h3>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your property investment goals with less stress and more confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 rounded-full shadow-lg">
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full">
                <a href="tel:4254492733" className="flex items-center">
                  Call (425) 449-2733
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
