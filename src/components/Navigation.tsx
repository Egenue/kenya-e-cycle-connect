import { Button } from "@/components/ui/button";
import { Recycle, Map, BarChart3, Plus } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Recycle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">E-Cycle Kenya</h1>
              <p className="text-xs text-muted-foreground">Sustainable E-Waste Management</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="space-x-2">
              <Map className="h-4 w-4" />
              <span>Drop-off Points</span>
            </Button>
            <Button variant="ghost" className="space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Statistics</span>
            </Button>
            <Button variant="hero" className="space-x-2">
              <Plus className="h-4 w-4" />
              <span>Report E-Waste</span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="hero" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;