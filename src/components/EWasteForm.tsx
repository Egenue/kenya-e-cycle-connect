import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Monitor, Battery, Headphones, Camera, Upload, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eWasteCategories = [
  { value: "smartphones", label: "Smartphones & Tablets", icon: Smartphone },
  { value: "computers", label: "Computers & Laptops", icon: Monitor },
  { value: "batteries", label: "Batteries", icon: Battery },
  { value: "accessories", label: "Accessories", icon: Headphones },
  { value: "cameras", label: "Cameras & Electronics", icon: Camera },
];

const EWasteForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    quantity: "",
    description: "",
    location: "",
    contact: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "E-Waste Report Submitted!",
      description: "Thank you for contributing to sustainable waste management. Our team will contact you soon.",
      variant: "default",
    });
    // Reset form
    setFormData({
      category: "",
      quantity: "",
      description: "",
      location: "",
      contact: "",
    });
    setSelectedCategory("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report Your E-Waste
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us track and collect electronic waste responsibly. Submit details about your items for proper disposal.
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <Upload className="h-5 w-5 text-primary-foreground" />
                </div>
                <span>E-Waste Submission Form</span>
              </CardTitle>
              <CardDescription>
                Provide information about your electronic waste for collection scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category Selection */}
                <div className="space-y-3">
                  <Label htmlFor="category" className="text-sm font-medium">
                    E-Waste Category *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {eWasteCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <Card
                          key={category.value}
                          className={`cursor-pointer transition-smooth border-2 ${
                            selectedCategory === category.value
                              ? "border-primary bg-accent shadow-eco"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => {
                            setSelectedCategory(category.value);
                            handleInputChange("category", category.value);
                          }}
                        >
                          <CardContent className="p-4 text-center">
                            <Icon className={`h-8 w-8 mx-auto mb-2 ${
                              selectedCategory === category.value ? "text-primary" : "text-muted-foreground"
                            }`} />
                            <p className="text-sm font-medium">{category.label}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Select onValueChange={(value) => handleInputChange("quantity", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 item</SelectItem>
                        <SelectItem value="2-5">2-5 items</SelectItem>
                        <SelectItem value="6-10">6-10 items</SelectItem>
                        <SelectItem value="10+">More than 10 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number *</Label>
                    <Input
                      id="contact"
                      placeholder="e.g., +254 700 000 000"
                      value={formData.contact}
                      onChange={(e) => handleInputChange("contact", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Collection Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      className="pl-10"
                      placeholder="Enter your location (area, estate, or nearest landmark)"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Item Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the condition, brand, or any specific details about your e-waste items..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" variant="hero" className="flex-1">
                    Submit E-Waste Report
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EWasteForm;