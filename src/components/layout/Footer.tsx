import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg">
                <span className="text-primary font-serif text-xl font-bold">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-serif tracking-tight leading-none text-white">
                  VESTA SOUND
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] font-medium text-primary-foreground/70">
                  Property Group
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              A small, local team managing rentals across the Greater Seattle area. We're hands-on, easy to reach, and genuinely invested in doing right by our owners.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Management Services", href: "/services" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Available Listings", href: "/listings" },
                { name: "Contact Us", href: "/contact" },
                { name: "Owner Portal", href: "https://www.buildium.com/" },
                { name: "Tenant Portal", href: "https://www.buildium.com/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Area */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-primary-foreground/70 text-sm">
              <span>Seattle</span>
              <span>Bellevue</span>
              <span>Redmond</span>
              <span>Kirkland</span>
              <span>Issaquah</span>
              <span>Renton</span>
              <span>Bothell</span>
              <span>Woodinville</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Greater Puget Sound Area, WA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:4254492733" className="text-primary-foreground/80 hover:text-white transition-colors">
                  (425) 449-2733
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:info@vestasound.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  info@vestasound.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-primary-foreground/50">
          <p>© {currentYear} Vesta Sound Property Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
