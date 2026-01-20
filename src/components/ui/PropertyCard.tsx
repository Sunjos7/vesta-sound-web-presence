import { MapPin, Bed, Bath, Square, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    city: string;
    price: string;
    status?: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    link: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const isRedfin = property.link.includes("redfin.com");
  const isZillow = property.link.includes("zillow.com");
  const platformName = isRedfin ? "Redfin" : isZillow ? "Zillow" : "Listing";

  return (
    <div className="group bg-background rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            {property.city.split(",")[0]}
          </span>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-1">{property.title}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin size={14} className="mr-1" />
              {property.city}
            </div>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold text-xl">{property.price}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{property.status || "Available"}</p>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-border">
          <div className="flex items-center space-x-2">
            <Bed size={18} className="text-primary" />
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath size={18} className="text-primary" />
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center space-x-2">
            <Square size={18} className="text-primary" />
            <span className="text-sm font-medium">{property.sqft} SqFt</span>
          </div>
        </div>

        <div className="flex space-x-3 pt-2">
          <Button asChild className="flex-1 rounded-full h-12 shadow-md">
            <a
              href={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              View on {platformName} <ExternalLink size={14} className="ml-2" />
            </a>
          </Button>
          <Button variant="outline" className="rounded-full h-12 px-6">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
