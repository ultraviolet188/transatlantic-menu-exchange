import { Coffee, Utensils, Moon, IceCream, Wine } from "lucide-react";
import MenuItem from "./MenuItem";
import ingredientsHero from "@/assets/ingredients-hero.jpg";

const menuData = {
  breakfast: [
    {
      title: "Explorer's Sunrise Omelet",
      description: "Old World dairy meets New World spice. Fluffy eggs with vibrant peppers.",
      ingredients: [
        { name: "Eggs", hemisphere: "E" as const, origin: "Domesticated in Southeast Asia" },
        { name: "Cheese", hemisphere: "E" as const, origin: "Ancient European tradition" },
        { name: "Tomatoes", hemisphere: "W" as const, origin: "Native to the Americas" },
        { name: "Bell Peppers", hemisphere: "W" as const, origin: "Central American origin" },
      ],
    },
    {
      title: "Conquistador's Breakfast Bowl",
      description: "Grains from Europe sweetened with treasures from the Americas.",
      ingredients: [
        { name: "Wheat", hemisphere: "E" as const, origin: "Fertile Crescent cultivation" },
        { name: "Honey", hemisphere: "E" as const, origin: "European beekeeping" },
        { name: "Blueberries", hemisphere: "W" as const, origin: "North American native" },
        { name: "Vanilla", hemisphere: "W" as const, origin: "Mesoamerican treasure" },
      ],
    },
  ],
  lunch: [
    {
      title: "Atlantic Crossing Sandwich",
      description: "European bread and greens meet American turkey and avocado.",
      ingredients: [
        { name: "Wheat Bread", hemisphere: "E" as const, origin: "Mediterranean wheat fields" },
        { name: "Lettuce", hemisphere: "E" as const, origin: "Egyptian gardens" },
        { name: "Turkey", hemisphere: "W" as const, origin: "American domestication" },
        { name: "Avocado", hemisphere: "W" as const, origin: "Aztec cultivation" },
      ],
    },
    {
      title: "Merchant's Potato Stew",
      description: "A warming stew with comfort from two continents in one bowl.",
      ingredients: [
        { name: "Beef", hemisphere: "E" as const, origin: "European cattle" },
        { name: "Onions", hemisphere: "E" as const, origin: "Central Asian origin" },
        { name: "Potatoes", hemisphere: "W" as const, origin: "Andean highlands" },
        { name: "Corn", hemisphere: "W" as const, origin: "Mesoamerican staple" },
      ],
    },
  ],
  dinner: [
    {
      title: "Navigator's Fusion Roast",
      description: "Eastern spices enhance ingredients from both hemispheres.",
      ingredients: [
        { name: "Chicken", hemisphere: "E" as const, origin: "Southeast Asian domestication" },
        { name: "Black Pepper", hemisphere: "E" as const, origin: "Indian spice routes" },
        { name: "Sweet Potatoes", hemisphere: "W" as const, origin: "Caribbean islands" },
        { name: "Chili Peppers", hemisphere: "W" as const, origin: "South American heat" },
      ],
    },
    {
      title: "Galleon's Harvest Plate",
      description: "Each ingredient from a different port of call during the age of sail.",
      ingredients: [
        { name: "Rice", hemisphere: "E" as const, origin: "Asian cultivation" },
        { name: "Olive Oil", hemisphere: "E" as const, origin: "Mediterranean gift" },
        { name: "Squash", hemisphere: "W" as const, origin: "Native American farming" },
        { name: "Cacao Sauce", hemisphere: "W" as const, origin: "Mayan delicacy" },
      ],
    },
  ],
  desserts: [
    {
      title: "Colonial Sugar Dreams",
      description: "Old World sugar and butter with New World chocolate and vanilla.",
      ingredients: [
        { name: "Sugar", hemisphere: "E" as const, origin: "Brought from Old World plantations" },
        { name: "Butter", hemisphere: "E" as const, origin: "European dairy craft" },
        { name: "Vanilla", hemisphere: "W" as const, origin: "Orchid of the Americas" },
        { name: "Chocolate", hemisphere: "W" as const, origin: "Aztec currency and drink" },
      ],
    },
    {
      title: "Tropical Treasure Tart",
      description: "American fruits in a European pastry.",
      ingredients: [
        { name: "Wheat Flour", hemisphere: "E" as const, origin: "Ancient grain cultivation" },
        { name: "Cinnamon", hemisphere: "E" as const, origin: "Ceylon spice trade" },
        { name: "Pineapple", hemisphere: "W" as const, origin: "Caribbean discovery" },
        { name: "Papaya", hemisphere: "W" as const, origin: "Central American fruit" },
      ],
    },
  ],
  beverages: [
    {
      title: "Trader's Hot Chocolate",
      description: "Aztec cacao with European milk and sugar.",
      ingredients: [
        { name: "Milk", hemisphere: "E" as const, origin: "European dairy tradition" },
        { name: "Sugar", hemisphere: "E" as const, origin: "Refined in the Old World" },
        { name: "Cacao", hemisphere: "W" as const, origin: "Sacred Mayan bean" },
        { name: "Vanilla", hemisphere: "W" as const, origin: "American orchid essence" },
      ],
    },
    {
      title: "Voyager's Spiced Rum Punch",
      description: "Caribbean rum with Asian spices and American citrus.",
      ingredients: [
        { name: "Rum", hemisphere: "W" as const, origin: "Distilled from Caribbean sugarcane" },
        { name: "Nutmeg", hemisphere: "E" as const, origin: "Spice Islands treasure" },
        { name: "Lime", hemisphere: "W" as const, origin: "Tropical Americas citrus" },
        { name: "Ginger", hemisphere: "E" as const, origin: "Asian root spice" },
      ],
    },
  ],
};

const Menu = () => {
  return (
    <section className="py-20 bg-background" id="menu">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="relative h-48 mb-8 rounded-lg overflow-hidden shadow-vintage"
            style={{ backgroundImage: `url(${ingredientsHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground text-shadow-vintage">
                Our Menu
              </h2>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish celebrates the exchange of ingredients between the Eastern (E) and Western (W) Hemispheres
          </p>
        </div>

        {/* Breakfast */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Coffee className="w-8 h-8 text-secondary" />
            <h3 className="font-serif text-3xl font-semibold text-foreground">Breakfast</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.breakfast.map((item, index) => (
              <MenuItem key={index} {...item} category="Breakfast" />
            ))}
          </div>
        </div>

        {/* Lunch */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-secondary" />
            <h3 className="font-serif text-3xl font-semibold text-foreground">Lunch</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.lunch.map((item, index) => (
              <MenuItem key={index} {...item} category="Lunch" />
            ))}
          </div>
        </div>

        {/* Dinner */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Moon className="w-8 h-8 text-secondary" />
            <h3 className="font-serif text-3xl font-semibold text-foreground">Dinner</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.dinner.map((item, index) => (
              <MenuItem key={index} {...item} category="Dinner" />
            ))}
          </div>
        </div>

        {/* Desserts */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <IceCream className="w-8 h-8 text-secondary" />
            <h3 className="font-serif text-3xl font-semibold text-foreground">Desserts</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.desserts.map((item, index) => (
              <MenuItem key={index} {...item} category="Dessert" />
            ))}
          </div>
        </div>

        {/* Beverages */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Wine className="w-8 h-8 text-secondary" />
            <h3 className="font-serif text-3xl font-semibold text-foreground">Beverages</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.beverages.map((item, index) => (
              <MenuItem key={index} {...item} category="Beverage" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
