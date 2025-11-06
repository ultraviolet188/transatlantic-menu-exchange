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
            This website was designed to celebrate the history and impact of the <span className="font-serif font-semibold">Columbian Exchange</span> — 
            the first true global fusion of culture, cuisine, and community.
          </p>
          <p className="text-sm text-primary-foreground/80">
            From the late 15th century onward, the exchange of foods, animals, diseases, and ideas between 
            the Eastern and Western Hemispheres fundamentally transformed human civilization, shaping the 
            world we live in today.
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
