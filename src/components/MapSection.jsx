import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Star, Navigation } from "lucide-react";

// Mock data for drop-off locations
const dropOffLocations = [
  {
    id: 1,
    name: "Westlands Collection Center",
    address: "Westlands Square, Nairobi",
    phone: "+254 700 123 456",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    rating: 4.8,
    status: "Open",
    acceptedItems: ["Smartphones", "Laptops", "Batteries"],
    coordinates: { lat: -1.2670, lng: 36.8080 }
  },
  {
    id: 2,
    name: "Karen Electronics Hub",
    address: "Karen Shopping Centre, Nairobi",
    phone: "+254 700 789 012",
    hours: "Mon-Sat: 9AM-7PM",
    rating: 4.6,
    status: "Open",
    acceptedItems: ["All E-Waste", "Appliances"],
    coordinates: { lat: -1.3194, lng: 36.7085 }
  },
  {
    id: 3,
    name: "Mombasa Eco Point",
    address: "Nyali Bridge, Mombasa",
    phone: "+254 700 345 678",
    hours: "Daily: 8AM-8PM",
    rating: 4.7,
    status: "Closing Soon",
    acceptedItems: ["Phones", "Tablets", "Accessories"],
    coordinates: { lat: -4.0435, lng: 39.6682 }
  },
  {
    id: 4,
    name: "Nakuru Green Station",
    address: "Downtown Nakuru",
    phone: "+254 700 456 789",
    hours: "Mon-Fri: 8AM-5PM",
    rating: 4.5,
    status: "Open",
    acceptedItems: ["Computers", "Monitors", "Cables"],
    coordinates: { lat: -0.3031, lng: 36.0800 }
  }
];

const MapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Drop-off Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Locate authorized e-waste collection points near you across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Interactive Map</span>
                </CardTitle>
                <CardDescription>
                  Click on markers to view collection point details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-subtle rounded-lg border border-border overflow-hidden">
                  {/* Map placeholder with mock pins */}
                  <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Interactive map will load here</p>
                      <p className="text-sm text-muted-foreground">
                        Showing {dropOffLocations.length} collection points
                      </p>
                    </div>
                  </div>
                  
                  {/* Mock map pins */}
                  <div className="absolute top-8 left-12 animate-pulse">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-eco">
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute top-20 right-16 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-eco">
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-20 animate-pulse" style={{ animationDelay: '1s' }}>
                    <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-eco">
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nearby Collection Points</h3>
              {dropOffLocations.map((location) => (
                <Card key={location.id} className="shadow-card border-border/50 hover:shadow-eco transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{location.name}</h4>
                        <p className="text-muted-foreground">{location.address}</p>
                      </div>
                      <Badge 
                        variant={location.status === "Open" ? "default" : "secondary"}
                        className={location.status === "Open" ? "bg-success" : "bg-warning"}
                      >
                        {location.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span>{location.rating} rating</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Accepted Items:</p>
                      <div className="flex flex-wrap gap-1">
                        {location.acceptedItems.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1">
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;