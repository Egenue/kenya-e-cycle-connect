import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Recycle, MapPin, Smartphone, Monitor, Battery } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-10"></div>
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-primary/10 p-4 rounded-full">
          <Smartphone className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-primary/10 p-4 rounded-full">
          <Monitor className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-primary/10 p-4 rounded-full">
          <Battery className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
            <Recycle className="h-10 w-10 text-primary animate-pulse-glow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Transform Kenya's 
            <br />
            <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              E-Waste Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join Kenya's first comprehensive e-waste collection and tracking system. 
            Dispose responsibly, track impact, and build a sustainable digital future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-background text-primary hover:bg-background/90">
              <MapPin className="h-5 w-5" />
              Find Drop-off Points
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Recycle className="h-5 w-5" />
              Report E-Waste
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">1,247</div>
              <div className="text-primary-foreground/80">Items Collected</div>
            </Card>
            <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">89</div>
              <div className="text-primary-foreground/80">Drop-off Points</div>
            </Card>
            <Card className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 p-6">
              <div className="text-3xl font-bold text-primary-foreground mb-2">12.3kg</div>
              <div className="text-primary-foreground/80">CO₂ Saved</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;