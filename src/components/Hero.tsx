import { Ship, Compass } from "lucide-react";
import heroImage from "@/assets/atlantic-map-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Decorative compass */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Compass className="w-16 h-16 text-accent animate-[spin_20s_linear_infinite]" />
        </div>
        
        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 text-shadow-vintage animate-fade-in">
          The Transatlantic Table
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-2xl md:text-3xl text-primary-foreground/90 mb-8 italic animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Where Worlds Collide in Flavor
        </p>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto bg-card/90 backdrop-blur-sm rounded-lg p-8 shadow-elevated animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl leading-relaxed text-card-foreground">
            Welcome to <span className="font-serif font-semibold">The Transatlantic Table</span>, where the Old World meets the New! 
            Our dishes celebrate the <span className="text-accent font-semibold">Columbian Exchange</span>, when foods, cultures, 
            and ideas traveled between continents for the first time.
          </p>
        </div>
        
        {/* Decorative ships */}
        <div className="mt-12 flex justify-center gap-8 opacity-60">
          <Ship className="w-8 h-8 text-primary-foreground rotate-12" />
          <Ship className="w-8 h-8 text-primary-foreground -rotate-12" />
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
