import { ShieldCheck, Megaphone, ClipboardList, Wallet, Wrench, Search, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Tenant Screening",
      description: "Our 20-point screening process ensures Fair Housing compliance while securing high-quality residents. We check credit, criminal history, employment, and rental references."
    },
    {
      icon: Megaphone,
      title: "Marketing & Advertising",
      description: "Professional photography and listings on top platforms (Zillow, Redfin, HotPads, etc.) ensure your property gets maximum exposure and shorter vacancy times."
    },
    {
      icon: ClipboardList,
      title: "Lease Prep & Move-In",
      description: "Comprehensive, legally-compliant lease preparation and thorough move-in inspections with photo documentation to protect your asset from day one."
    },
    {
      icon: Wallet,
      title: "Rent Collection",
      description: "Online portal for easy tenant payments and monthly financial reporting. We handle all accounting and ensure you get paid promptly every month."
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination",
      description: "24/7 maintenance oversight with a network of trusted, vetted vendors. We handle the calls so you don't have to, ensuring cost-effective repairs."
    },
    {
      icon: ShieldCheck,
      title: "Move-Out Inspections",
      description: "Detailed inspections and security deposit handling compliant with Washington state law. We ensure the transition between tenants is smooth and fair."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-secondary/30 py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Comprehensive Care</h2>
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">Our Services</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              From marketing and screening to maintenance and reporting, we provide end-to-end management designed for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold font-serif">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Communication Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-serif font-bold leading-tight">Frustration-Free Communication & Oversight</h3>
            <p className="text-xl text-primary-foreground/80 font-light leading-relaxed">
              We believe transparency is the foundation of trust. That's why we've invested in top-tier technology to keep you informed every step of the way.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Online Owner Portal",
                  description: "Access financial statements, documents, and property performance 24/7."
                },
                {
                  title: "Prompt Responsiveness",
                  description: "We pride ourselves on being available and responsive to both owners and tenants."
                },
                {
                  title: "Monthly Reporting",
                  description: "Clear, detailed accounting delivered to your inbox every month."
                }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-primary-foreground/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                  <AlertCircle size={24} />
                </div>
                <h4 className="text-2xl font-bold font-serif">Owner Outcomes</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Fewer evictions & legal headaches",
                  "Faster leasing with better tenants",
                  "Optimized rent based on market data",
                  "Preserved property value through care",
                  "Transparent reporting & portal access"
                ].map((outcome, i) => (
                  <li key={i} className="flex items-center space-x-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center bg-secondary/30">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight">Ready for a Full-Service Experience?</h3>
          <p className="text-xl text-muted-foreground">
            Get your free rental analysis today and see how Vesta Sound can transform your property ownership experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full shadow-lg bg-primary">
              <a href="/contact">Get Free Rental Analysis</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full">
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
