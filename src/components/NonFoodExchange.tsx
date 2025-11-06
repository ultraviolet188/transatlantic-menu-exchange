import { Card } from "@/components/ui/card";
import horseImage from "@/assets/horse-illustration.jpg";
import silverImage from "@/assets/silver-utensils.jpg";
import { Sparkles, TrendingUp } from "lucide-react";

const NonFoodExchange = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beyond the Plate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Columbian Exchange transformed more than just cuisine — it revolutionized transportation, 
            economy, and daily life across continents.
          </p>
        </div>

        {/* Exchange Items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Horse Card */}
          <Card className="overflow-hidden shadow-vintage hover:shadow-elevated transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={horseImage} 
                alt="Historical horse illustration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Eastern Hemisphere
                </div>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                The Noble Horse
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Imported from the Old World, horses revolutionized American transport, warfare, and agriculture. 
                Native American tribes, particularly the Plains peoples, transformed their entire way of life 
                around these magnificent animals.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-secondary font-semibold">Impact:</p>
                <p className="text-sm text-muted-foreground">
                  Enabled long-distance travel, enhanced hunting capabilities, and reshaped military tactics 
                  across the Americas.
                </p>
              </div>
            </div>
          </Card>

          {/* Silver Card */}
          <Card className="overflow-hidden shadow-vintage hover:shadow-elevated transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={silverImage} 
                alt="Colonial silver utensils"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Western Hemisphere
                </div>
                <Sparkles className="w-5 h-5 text-vintage-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                New World Silver
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vast silver mines in Mexico and Peru flooded global markets, fundamentally altering world economies. 
                This precious metal financed European empires and became the foundation of international trade.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-secondary font-semibold">Impact:</p>
                <p className="text-sm text-muted-foreground">
                  Created the first truly global economy, financed exploration and colonization, and sparked 
                  inflation across Europe.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Exchange Items - Compact List */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-vintage p-8">
            <h3 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Other Notable Exchanges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary flex items-center gap-2">
                  <span className="text-xl">→</span> From the Old World
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span><strong>Cattle & Pigs</strong> - Livestock that transformed American agriculture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span><strong>Wheat & Rice</strong> - Staple grains that became New World crops</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary">•</span>
                    <span><strong>Coffee & Tea</strong> - Beverages that shaped social culture</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-accent flex items-center gap-2">
                  <span className="text-xl">←</span> From the New World
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Tobacco</strong> - A crop that shaped colonial economies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Rubber</strong> - Natural resource for industrial revolution</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Quinine</strong> - Medicine from cinchona bark that fought malaria</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NonFoodExchange;
