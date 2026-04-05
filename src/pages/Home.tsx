import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Users, Clock, Globe, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/layout/Section";
import LeadForm from "@/components/LeadForm";
import { SEO } from "@/components/layout/SEO";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Full-Service Property Management" 
        description="Cost-friendly, professional property management in the Greater Seattle area. We treat your home as if it were our own. Get a free rental analysis today."
      />
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F8KV7zF4XDFb7BzzQ35xj1ntERWo2%2FBackgroundVSG__2457a746.jpg?alt=media&token=cea55dc7-34a2-416e-8bfe-ddaa430f243b"
            alt="Seattle Skyline View"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight">
                We take care of your<br className="hidden md:block" /> rental so you don't have to.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Local property management in Greater Seattle — hands-on, honest, and always a phone call away.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:scale-105 transition-all">
                <Link to="/contact">Get a Free Rental Analysis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
                <Link to="/listings">View Listings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Tiles */}
      <Section className="bg-secondary/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "We screen tenants carefully",
              description: "We check credit, background, and rental history — so you get reliable people in your home."
            },
            {
              icon: Clock,
              title: "We fill vacancies fast",
              description: "Good marketing and quick follow-up mean your property isn't sitting empty any longer than it needs to."
            },
            {
              icon: CheckCircle2,
              title: "We handle the headaches",
              description: "Maintenance calls, late payments, lease renewals — we take care of it, and keep you in the loop."
            },
            {
              icon: TrendingUp,
              title: "We price it right",
              description: "We know this market. We'll help you set a rent that attracts great tenants without leaving money behind."
            },
            {
              icon: Users,
              title: "We're a small team — on purpose",
              description: "You'll know who you're talking to. No call centers, no runaround."
            },
            {
              icon: Globe,
              title: "You can see everything online",
              description: "Real-time financials, maintenance updates, and reports — all in one place through your owner portal."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder Quote */}
      <Section className="bg-primary text-primary-foreground overflow-visible relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
          <Quote size={400} />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <Quote className="mx-auto text-accent mb-4" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight italic">
            "Your investment, protected. Your stress, gone. Your returns, maximized."
          </h2>
          <div className="pt-4">
            <p className="text-xl font-bold font-serif">The Vesta Sound Team</p>
            <p className="text-primary-foreground/60 text-sm">Your neighbors in Greater Seattle</p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-4xl md:text-5xl font-serif font-bold">How It Works</h3>
          <p className="text-muted-foreground text-lg">Simple as a conversation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0" />
          
          {[
            {
              step: "01",
              title: "We talk",
              description: "Tell us about your property. We'll give you a free rental analysis and be straight with you about what to expect."
            },
            {
              step: "02",
              title: "We find good tenants",
              description: "We market your property, field inquiries, and screen applicants — handing you someone you can trust."
            },
            {
              step: "03",
              title: "We handle the rest",
              description: "Rent collection, maintenance, reporting. You stay informed without being bothered by the day-to-day."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold font-serif shadow-lg border-4 border-background">
                {item.step}
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold font-serif">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lead Gen CTA */}
      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Thinking about getting some help with your rental?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We'd love to learn about your property and see if we're a good fit. No pressure, no obligation.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Free rental analysis — no strings attached",
                "We manage everything, start to finish",
                "Straightforward pricing, no surprise fees",
                "We know Greater Seattle inside and out"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background p-8 md:p-12 rounded-3xl shadow-2xl border border-border animate-slide-up">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold font-serif mb-2">Let's Talk About Your Property</h4>
              <p className="text-muted-foreground">We'll get back to you within one business day.</p>
            </div>
            <LeadForm type="analysis" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;