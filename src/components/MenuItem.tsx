import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface Ingredient {
  name: string;
  hemisphere: "E" | "W";
  origin: string;
}

interface MenuItemProps {
  title: string;
  description: string;
  ingredients: Ingredient[];
  category: string;
  price: string;
}

const MenuItem = ({ title, description, ingredients, category, price }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-gradient-card shadow-vintage hover:shadow-elevated transition-all duration-300 p-6 border-2 border-border hover:border-accent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-3">
        <Badge variant="secondary" className="text-xs uppercase tracking-wide">
          {category}
        </Badge>
        <Info className={`w-4 h-4 text-muted-foreground transition-opacity ${isHovered ? 'opacity-100' : 'opacity-50'}`} />
      </div>
      
      {/* Dish title */}
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="font-serif text-2xl font-semibold text-foreground hover:text-accent transition-colors">
          {title}
        </h3>
        <span className="font-serif text-xl font-semibold text-secondary">{price}</span>
      </div>
      
      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Ingredients */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wide">Key Ingredients:</p>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge 
                    variant={ingredient.hemisphere === "E" ? "default" : "outline"}
                    className={`cursor-help transition-transform hover:scale-105 ${
                      ingredient.hemisphere === "E" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground border-accent"
                    }`}
                  >
                    {ingredient.name} ({ingredient.hemisphere})
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="bg-card border-border">
                  <p className="font-semibold">{ingredient.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {ingredient.hemisphere === "E" ? "Eastern Hemisphere" : "Western Hemisphere"}
                  </p>
                  <p className="text-xs mt-1">{ingredient.origin}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;
