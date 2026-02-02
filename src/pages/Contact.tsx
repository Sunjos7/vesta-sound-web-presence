import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Section from "@/components/layout/Section";
import LeadForm from "@/components/LeadForm";
import { SEO } from "@/components/layout/SEO";

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Contact Us | Free Rental Analysis" 
        description="Get in touch with Vesta Sound Property Group for professional property management in the Seattle area or request a free rental analysis."
      />
      {/* Header */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">Get in Touch</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Whether you're a property owner looking for expert management or a tenant with a question, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-serif">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team is ready to provide you with the professional, hands-on care your property deserves.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Phone</h4>
                  <a href="tel:4254492733" className="text-muted-foreground hover:text-primary transition-colors">
                    (425) 449-2733
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Email</h4>
                  <a href="mailto:info@vestasound.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@vestasound.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Service Area</h4>
                  <p className="text-muted-foreground">Greater Puget Sound Area, WA</p>
                  <p className="text-xs text-muted-foreground mt-1">Seattle, Bellevue, Redmond, Issaquah, Renton & more.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Business Hours</h4>
                  <p className="text-muted-foreground">Monday – Friday: 9am – 5pm</p>
                  <p className="text-muted-foreground">24/7 Emergency Support for Tenants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-background p-8 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="mb-10">
              <h3 className="text-3xl font-bold font-serif mb-2">Send us a Message</h3>
              <p className="text-muted-foreground">Complete the form below and we'll get back to you within 24 hours.</p>
            </div>
            <LeadForm type="contact" />
          </div>
        </div>
      </Section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-secondary overflow-hidden relative grayscale">
        <img 
          src="https://images.unsplash.com/photo-1621459158994-4284667bce1a?q=80&w=2000" 
          className="w-full h-full object-cover opacity-50" 
          alt="Seattle Map Area"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border text-center max-w-xs animate-fade-in">
            <MapPin size={32} className="mx-auto text-primary mb-3" />
            <h4 className="font-bold font-serif text-lg">Serving Greater Seattle</h4>
            <p className="text-sm text-muted-foreground mt-2">Professional management across the entire Puget Sound metropolitan area.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
