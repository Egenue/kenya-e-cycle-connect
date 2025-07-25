import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Recycle, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">E-Cycle Kenya</h3>
                <p className="text-sm text-primary-foreground/80">Sustainable E-Waste Management</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading Kenya's transition to responsible e-waste management through 
              innovative technology and community engagement.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Find Drop-off Points
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Report E-Waste
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Collection Statistics
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Educational Resources
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Home Collection
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Corporate Solutions
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Data Destruction
              </Button>
              <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                Recycling Certificates
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  +254 700 123 456
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  info@ecyclekenya.org
                </span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Mail className="h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 E-Cycle Kenya. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground text-sm p-0 h-auto">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground text-sm p-0 h-auto">
              Terms of Service
            </Button>
            <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground text-sm p-0 h-auto">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;