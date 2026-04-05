import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Listings", href: "/listings" },
    { name: "Contact", href: "/contact" },
    { name: "Owner Login", href: "/owner-portal" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md py-3 shadow-sm border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-md">
            <span className="text-primary-foreground font-serif text-2xl font-bold">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-serif tracking-tight leading-none">
              VESTA SOUND
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Property Group
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary underline underline-offset-8" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 bg-primary text-primary-foreground">
            <Link to="/contact">Get Free Analysis</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <a href="tel:+14254492733"><Phone size={15} /> Call Us</a>
          </Button>
        </div>

        {/* Mobile: Call Us + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <Button asChild size="sm" className="rounded-full flex items-center gap-1.5 bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all">
            <a href="tel:+14254492733"><Phone size={14} /> Call Us</a>
          </Button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-secondary",
                location.pathname === link.href ? "text-primary font-bold bg-secondary" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col space-y-4 px-4">
            <Button asChild className="w-full rounded-full">
              <Link to="/contact">Free Rental Analysis</Link>
            </Button>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
              <Phone size={16} />
              <span>(425) 449-2733</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
