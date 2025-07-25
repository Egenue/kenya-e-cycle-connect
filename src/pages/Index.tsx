import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EWasteForm from "@/components/EWasteForm";
import MapSection from "@/components/MapSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EWasteForm />
      <MapSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
