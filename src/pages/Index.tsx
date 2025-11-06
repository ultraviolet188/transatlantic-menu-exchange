import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import HealthAdvisory from "@/components/HealthAdvisory";
import NonFoodExchange from "@/components/NonFoodExchange";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <NonFoodExchange />
      <HealthAdvisory />
      <Footer />
    </div>
  );
};

export default Index;
