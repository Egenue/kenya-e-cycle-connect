import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Recycle, 
  Users, 
  MapPin, 
  Smartphone, 
  Monitor, 
  Battery,
  Award
} from "lucide-react";

const statsData = {
  overview: [
    { 
      title: "Total Items Collected", 
      value: "1,247", 
      change: "+23%", 
      icon: Recycle,
      trend: "up"
    },
    { 
      title: "Active Users", 
      value: "3,892", 
      change: "+15%", 
      icon: Users,
      trend: "up"
    },
    { 
      title: "Collection Points", 
      value: "89", 
      change: "+8%", 
      icon: MapPin,
      trend: "up"
    },
    { 
      title: "CO₂ Saved (kg)", 
      value: "12.3", 
      change: "+31%", 
      icon: Award,
      trend: "up"
    }
  ],
  categories: [
    { name: "Smartphones", count: 456, percentage: 37, icon: Smartphone },
    { name: "Computers", count: 298, percentage: 24, icon: Monitor },
    { name: "Batteries", count: 234, percentage: 19, icon: Battery },
    { name: "Others", count: 259, percentage: 20, icon: Recycle }
  ],
  counties: [
    { name: "Nairobi", items: 487, percentage: 85 },
    { name: "Mombasa", items: 234, percentage: 65 },
    { name: "Nakuru", items: 189, percentage: 45 },
    { name: "Kisumu", items: 156, percentage: 35 },
    { name: "Eldoret", items: 123, percentage: 25 }
  ]
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track our collective progress in building a sustainable e-waste management system
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statsData.overview.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="shadow-card border-border/50 hover:shadow-eco transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* E-Waste Categories */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>E-Waste Categories</span>
                </CardTitle>
                <CardDescription>
                  Distribution of collected electronic waste items
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {statsData.categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{category.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{category.count}</div>
                          <div className="text-sm text-muted-foreground">{category.percentage}%</div>
                        </div>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* County Performance */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Collection by County</span>
                </CardTitle>
                <CardDescription>
                  E-waste collection performance across Kenyan counties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {statsData.counties.map((county, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{county.name}</span>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{county.items} items</div>
                        <div className="text-sm text-muted-foreground">
                          {county.percentage}% of target
                        </div>
                      </div>
                    </div>
                    <Progress value={county.percentage} className="h-2" />
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-success" />
                    <span className="font-medium text-foreground">Top Performer</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nairobi leads with 487 items collected this month, exceeding targets by 85%
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Progress */}
          <Card className="mt-8 shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Monthly Progress</span>
              </CardTitle>
              <CardDescription>
                Track monthly collection targets and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">December 2024 Target</span>
                  <span className="text-muted-foreground">1,500 items</span>
                </div>
                <Progress value={83} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">1,247 / 1,500 items collected</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    83% Complete
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;