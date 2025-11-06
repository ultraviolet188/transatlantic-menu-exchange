import { Anchor, Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Educational Note */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="flex justify-center mb-4">
            <Book className="w-8 h-8 text-accent" />
          </div>
          <p className="text-lg leading-relaxed mb-4">
            This website celebrates the history of the <span className="font-serif font-semibold">Columbian Exchange</span>, 
            when cultures, foods, and communities connected across the Atlantic for the first time.
          </p>
          <p className="text-sm text-primary-foreground/80">
            Starting in the late 1400s, foods, animals, diseases, and ideas moved between 
            the Eastern and Western Hemispheres, changing life on both sides of the ocean.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-8 opacity-50">
          <div className="h-px bg-primary-foreground/30 flex-1 max-w-xs" />
          <Anchor className="w-6 h-6" />
          <div className="h-px bg-primary-foreground/30 flex-1 max-w-xs" />
        </div>

        {/* Footer bottom */}
        <div className="text-center space-y-2">
          <p className="font-serif text-xl">The Transatlantic Table</p>
          <p className="text-sm text-primary-foreground/70">
            Where Worlds Collide in Flavor
          </p>
          <p className="text-xs text-primary-foreground/50 mt-4">
            A Creative Educational Project about the Columbian Exchange (15th-17th Century)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
