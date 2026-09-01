export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface RecipeIngredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  cost: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  sellingPrice: number;
  ingredients: RecipeIngredient[];
  imageColor: string;
}

export function getProductFoodCost(p: Product): number {
  return Number(p.ingredients.reduce((s, i) => s + i.cost, 0).toFixed(2));
}

export function getProductGrossProfit(p: Product): number {
  return Number((p.sellingPrice - getProductFoodCost(p)).toFixed(2));
}

export function getProductMargin(p: Product): number {
  const cost = getProductFoodCost(p);
  return Number(((p.sellingPrice - cost) / p.sellingPrice * 100).toFixed(1));
}

export const defaultCategories: Category[] = [
  { id: "noodles", name: "Noodles", color: "#10b981" },
  { id: "burger", name: "Burger", color: "#ef4444" },
  { id: "deep-fried", name: "Deep Fried", color: "#f59e0b" },
  { id: "cocktail", name: "Cocktail", color: "#8b5cf6" },
  { id: "drinks", name: "Drinks", color: "#10b981" },
];

export const defaultProducts: Product[] = [
  // NOODLES
  {
    id: "p1", categoryId: "noodles", name: "Pad Thai Kung", sellingPrice: 280,
    imageColor: "#f97316",
    ingredients: [
      { id: "i1", name: "Rice Noodles", quantity: 150, unit: "g", cost: 12.50 },
      { id: "i2", name: "Shrimp (Tiger)", quantity: 4, unit: "pcs", cost: 28.00 },
      { id: "i3", name: "Hard Tofu", quantity: 50, unit: "g", cost: 4.50 },
      { id: "i4", name: "Bean Sprouts", quantity: 30, unit: "g", cost: 2.50 },
      { id: "i5", name: "Pad Thai Sauce Base", quantity: 60, unit: "ml", cost: 18.00 },
    ],
  },
  {
    id: "p2", categoryId: "noodles", name: "Beef Drunken Noodles", sellingPrice: 320,
    imageColor: "#dc2626",
    ingredients: [
      { id: "i1", name: "Wide Rice Noodles", quantity: 180, unit: "g", cost: 16.00 },
      { id: "i2", name: "Beef Sirloin", quantity: 120, unit: "g", cost: 48.00 },
      { id: "i3", name: "Holy Basil", quantity: 20, unit: "g", cost: 5.00 },
      { id: "i4", name: "Bird Eye Chili", quantity: 5, unit: "pcs", cost: 3.00 },
      { id: "i5", name: "Oyster Sauce", quantity: 30, unit: "ml", cost: 8.00 },
      { id: "i6", name: "Soy Sauce", quantity: 15, unit: "ml", cost: 3.00 },
      { id: "i7", name: "Fish Sauce", quantity: 10, unit: "ml", cost: 2.00 },
      { id: "i8", name: "Garlic", quantity: 10, unit: "g", cost: 2.00 },
      { id: "i9", name: "Bell Pepper", quantity: 40, unit: "g", cost: 5.00 },
      { id: "i10", name: "Cooking Oil", quantity: 20, unit: "ml", cost: 3.00 },
    ],
  },
  {
    id: "p3", categoryId: "noodles", name: "Khao Soi Gai", sellingPrice: 250,
    imageColor: "#ca8a04",
    ingredients: [
      { id: "i1", name: "Egg Noodles", quantity: 120, unit: "g", cost: 12.00 },
      { id: "i2", name: "Chicken Thigh", quantity: 150, unit: "g", cost: 42.00 },
      { id: "i3", name: "Coconut Milk", quantity: 200, unit: "ml", cost: 22.00 },
      { id: "i4", name: "Khao Soi Paste", quantity: 40, unit: "g", cost: 18.00 },
      { id: "i5", name: "Shallots", quantity: 20, unit: "g", cost: 4.00 },
      { id: "i6", name: "Lime", quantity: 1, unit: "pc", cost: 4.00 },
      { id: "i7", name: "Pickled Mustard", quantity: 30, unit: "g", cost: 4.00 },
      { id: "i8", name: "Crispy Noodles", quantity: 30, unit: "g", cost: 4.00 },
    ],
  },
  {
    id: "p4", categoryId: "noodles", name: "Tom Yum Noodles", sellingPrice: 290,
    imageColor: "#e11d48",
    ingredients: [
      { id: "i1", name: "Rice Noodles", quantity: 120, unit: "g", cost: 10.00 },
      { id: "i2", name: "Shrimp", quantity: 3, unit: "pcs", cost: 21.00 },
      { id: "i3", name: "Mushrooms", quantity: 50, unit: "g", cost: 8.00 },
      { id: "i4", name: "Tom Yum Paste", quantity: 30, unit: "g", cost: 12.00 },
      { id: "i5", name: "Lemongrass", quantity: 2, unit: "stalks", cost: 3.00 },
      { id: "i6", name: "Kaffir Lime Leaves", quantity: 3, unit: "leaves", cost: 2.00 },
      { id: "i7", name: "Galangal", quantity: 10, unit: "g", cost: 2.00 },
      { id: "i8", name: "Fish Sauce", quantity: 15, unit: "ml", cost: 3.00 },
      { id: "i9", name: "Lime Juice", quantity: 20, unit: "ml", cost: 4.00 },
    ],
  },
  {
    id: "p5", categoryId: "noodles", name: "Pad See Ew", sellingPrice: 260,
    imageColor: "#7c3aed",
    ingredients: [
      { id: "i1", name: "Wide Rice Noodles", quantity: 160, unit: "g", cost: 14.00 },
      { id: "i2", name: "Chicken Breast", quantity: 100, unit: "g", cost: 28.00 },
      { id: "i3", name: "Chinese Broccoli", quantity: 80, unit: "g", cost: 6.00 },
      { id: "i4", name: "Egg", quantity: 1, unit: "pc", cost: 4.00 },
      { id: "i5", name: "Dark Soy Sauce", quantity: 20, unit: "ml", cost: 5.00 },
      { id: "i6", name: "Oyster Sauce", quantity: 20, unit: "ml", cost: 5.00 },
    ],
  },
  {
    id: "p6", categoryId: "noodles", name: "Boat Noodles", sellingPrice: 180,
    imageColor: "#0891b2",
    ingredients: [
      { id: "i1", name: "Rice Noodles", quantity: 80, unit: "g", cost: 7.00 },
      { id: "i2", name: "Pork Meatballs", quantity: 5, unit: "pcs", cost: 15.00 },
      { id: "i3", name: "Blood Broth", quantity: 200, unit: "ml", cost: 12.00 },
      { id: "i4", name: "Bean Sprouts", quantity: 20, unit: "g", cost: 2.00 },
      { id: "i5", name: "Crispy Pork", quantity: 15, unit: "g", cost: 8.00 },
      { id: "i6", name: "Coriander", quantity: 5, unit: "g", cost: 2.00 },
    ],
  },
  {
    id: "p7", categoryId: "noodles", name: "Pad Mama", sellingPrice: 160,
    imageColor: "#059669",
    ingredients: [
      { id: "i1", name: "Instant Noodles (Mama)", quantity: 1, unit: "pack", cost: 6.00 },
      { id: "i2", name: "Egg", quantity: 1, unit: "pc", cost: 4.00 },
      { id: "i3", name: "Pork Slices", quantity: 60, unit: "g", cost: 18.00 },
      { id: "i4", name: "Spring Onion", quantity: 10, unit: "g", cost: 2.00 },
      { id: "i5", name: "Fish Sauce", quantity: 10, unit: "ml", cost: 2.00 },
    ],
  },
  {
    id: "p8", categoryId: "noodles", name: "Woon Sen Phad", sellingPrice: 195,
    imageColor: "#d97706",
    ingredients: [
      { id: "i1", name: "Glass Noodles", quantity: 80, unit: "g", cost: 8.00 },
      { id: "i2", name: "Pork Mince", quantity: 80, unit: "g", cost: 20.00 },
      { id: "i3", name: "Carrot", quantity: 30, unit: "g", cost: 3.00 },
      { id: "i4", name: "Celery", quantity: 20, unit: "g", cost: 3.00 },
      { id: "i5", name: "Oyster Sauce", quantity: 20, unit: "ml", cost: 5.00 },
      { id: "i6", name: "Soy Sauce", quantity: 10, unit: "ml", cost: 3.00 },
    ],
  },
  {
    id: "p9", categoryId: "noodles", name: "Lad Na Gai", sellingPrice: 230,
    imageColor: "#16a34a",
    ingredients: [
      { id: "i1", name: "Wide Rice Noodles", quantity: 150, unit: "g", cost: 13.00 },
      { id: "i2", name: "Chicken Thigh", quantity: 100, unit: "g", cost: 28.00 },
      { id: "i3", name: "Chinese Broccoli", quantity: 80, unit: "g", cost: 6.00 },
      { id: "i4", name: "Gravy Sauce Mix", quantity: 40, unit: "ml", cost: 10.00 },
      { id: "i5", name: "Egg", quantity: 1, unit: "pc", cost: 4.00 },
    ],
  },
  {
    id: "p10", categoryId: "noodles", name: "Rad Na Talay", sellingPrice: 320,
    imageColor: "#0f172a",
    ingredients: [
      { id: "i1", name: "Wide Rice Noodles", quantity: 180, unit: "g", cost: 16.00 },
      { id: "i2", name: "Mixed Seafood", quantity: 150, unit: "g", cost: 62.00 },
      { id: "i3", name: "Chinese Broccoli", quantity: 80, unit: "g", cost: 6.00 },
      { id: "i4", name: "Gravy Sauce", quantity: 50, unit: "ml", cost: 12.00 },
    ],
  },
  {
    id: "p11", categoryId: "noodles", name: "Khanom Jeen Sao Nam", sellingPrice: 200,
    imageColor: "#be185d",
    ingredients: [
      { id: "i1", name: "Fermented Rice Noodles", quantity: 150, unit: "g", cost: 14.00 },
      { id: "i2", name: "Fish Curry Sauce", quantity: 100, unit: "ml", cost: 20.00 },
      { id: "i3", name: "Pineapple", quantity: 40, unit: "g", cost: 6.00 },
      { id: "i4", name: "Bean Sprouts", quantity: 30, unit: "g", cost: 3.00 },
      { id: "i5", name: "Dried Shrimp", quantity: 10, unit: "g", cost: 8.00 },
      { id: "i6", name: "Lime", quantity: 1, unit: "pc", cost: 4.00 },
    ],
  },
  {
    id: "p12", categoryId: "noodles", name: "Glass Noodle Soup", sellingPrice: 210,
    imageColor: "#2563eb",
    ingredients: [
      { id: "i1", name: "Glass Noodles", quantity: 80, unit: "g", cost: 8.00 },
      { id: "i2", name: "Chicken Broth", quantity: 300, unit: "ml", cost: 15.00 },
      { id: "i3", name: "Pork Balls", quantity: 4, unit: "pcs", cost: 12.00 },
      { id: "i4", name: "Mushrooms", quantity: 40, unit: "g", cost: 6.00 },
      { id: "i5", name: "Spring Onion", quantity: 10, unit: "g", cost: 2.00 },
      { id: "i6", name: "Coriander", quantity: 5, unit: "g", cost: 1.50 },
      { id: "i7", name: "White Pepper", quantity: 2, unit: "g", cost: 1.00 },
    ],
  },

  // BURGER
  {
    id: "p13", categoryId: "burger", name: "Classic Thai Burger", sellingPrice: 280,
    imageColor: "#ea580c",
    ingredients: [
      { id: "i1", name: "Beef Patty (150g)", quantity: 1, unit: "pc", cost: 65.00 },
      { id: "i2", name: "Brioche Bun", quantity: 1, unit: "pc", cost: 18.00 },
      { id: "i3", name: "Thai Sweet Chili Mayo", quantity: 30, unit: "g", cost: 8.00 },
      { id: "i4", name: "Lettuce", quantity: 20, unit: "g", cost: 3.00 },
      { id: "i5", name: "Tomato", quantity: 30, unit: "g", cost: 5.00 },
      { id: "i6", name: "Cheddar Cheese", quantity: 25, unit: "g", cost: 18.00 },
    ],
  },
  {
    id: "p14", categoryId: "burger", name: "Larb Burger", sellingPrice: 320,
    imageColor: "#b45309",
    ingredients: [
      { id: "i1", name: "Pork Larb Patty", quantity: 1, unit: "pc", cost: 55.00 },
      { id: "i2", name: "Brioche Bun", quantity: 1, unit: "pc", cost: 18.00 },
      { id: "i3", name: "Larb Dressing", quantity: 30, unit: "ml", cost: 12.00 },
      { id: "i4", name: "Mint Leaves", quantity: 5, unit: "g", cost: 4.00 },
      { id: "i5", name: "Shallots", quantity: 15, unit: "g", cost: 3.00 },
      { id: "i6", name: "Toasted Rice", quantity: 10, unit: "g", cost: 3.00 },
      { id: "i7", name: "Crispy Shallots", quantity: 10, unit: "g", cost: 8.00 },
      { id: "i8", name: "Lime", quantity: 1, unit: "pc", cost: 4.00 },
    ],
  },
  {
    id: "p15", categoryId: "burger", name: "Tom Kha Burger", sellingPrice: 260,
    imageColor: "#f59e0b",
    ingredients: [
      { id: "i1", name: "Chicken Patty", quantity: 1, unit: "pc", cost: 48.00 },
      { id: "i2", name: "Coconut Brioche Bun", quantity: 1, unit: "pc", cost: 20.00 },
      { id: "i3", name: "Tom Kha Aioli", quantity: 25, unit: "g", cost: 10.00 },
      { id: "i4", name: "Kaffir Lime Slaw", quantity: 40, unit: "g", cost: 12.00 },
      { id: "i5", name: "Lemongrass Pickle", quantity: 15, unit: "g", cost: 8.00 },
      { id: "i6", name: "Mushrooms", quantity: 30, unit: "g", cost: 7.00 },
    ],
  },
  {
    id: "p16", categoryId: "burger", name: "Green Curry Burger", sellingPrice: 340,
    imageColor: "#16a34a",
    ingredients: [
      { id: "i1", name: "Beef Patty (180g)", quantity: 1, unit: "pc", cost: 78.00 },
      { id: "i2", name: "Pandan Bun", quantity: 1, unit: "pc", cost: 22.00 },
      { id: "i3", name: "Green Curry Sauce", quantity: 35, unit: "ml", cost: 15.00 },
      { id: "i4", name: "Coconut Cream", quantity: 20, unit: "ml", cost: 8.00 },
      { id: "i5", name: "Thai Eggplant", quantity: 30, unit: "g", cost: 5.00 },
      { id: "i6", name: "Crispy Basil", quantity: 5, unit: "g", cost: 3.00 },
      { id: "i7", name: "Cheddar Cheese", quantity: 25, unit: "g", cost: 18.00 },
    ],
  },

  // DEEP FRIED
  {
    id: "p17", categoryId: "deep-fried", name: "Spring Rolls (8 pcs)", sellingPrice: 180,
    imageColor: "#f97316",
    ingredients: [
      { id: "i1", name: "Spring Roll Wrappers", quantity: 8, unit: "sheets", cost: 8.00 },
      { id: "i2", name: "Pork Mince", quantity: 100, unit: "g", cost: 25.00 },
      { id: "i3", name: "Glass Noodles", quantity: 40, unit: "g", cost: 4.00 },
      { id: "i4", name: "Carrot", quantity: 30, unit: "g", cost: 3.00 },
      { id: "i5", name: "Mushrooms", quantity: 30, unit: "g", cost: 5.00 },
      { id: "i6", name: "Sweet Chili Sauce", quantity: 40, unit: "ml", cost: 6.00 },
    ],
  },
  {
    id: "p18", categoryId: "deep-fried", name: "Crispy Basil Chicken", sellingPrice: 220,
    imageColor: "#dc2626",
    ingredients: [
      { id: "i1", name: "Chicken Thigh", quantity: 150, unit: "g", cost: 42.00 },
      { id: "i2", name: "Tempura Batter", quantity: 50, unit: "g", cost: 8.00 },
      { id: "i3", name: "Holy Basil", quantity: 15, unit: "g", cost: 4.00 },
      { id: "i4", name: "Fish Sauce Glaze", quantity: 20, unit: "ml", cost: 6.00 },
      { id: "i5", name: "Cooking Oil", quantity: 200, unit: "ml", cost: 10.00 },
    ],
  },
  {
    id: "p19", categoryId: "deep-fried", name: "Tod Mun Pla", sellingPrice: 200,
    imageColor: "#7c3aed",
    ingredients: [
      { id: "i1", name: "Fish Paste", quantity: 150, unit: "g", cost: 35.00 },
      { id: "i2", name: "Kaffir Lime Leaves", quantity: 8, unit: "leaves", cost: 4.00 },
      { id: "i3", name: "Red Curry Paste", quantity: 20, unit: "g", cost: 6.00 },
      { id: "i4", name: "Long Beans", quantity: 20, unit: "g", cost: 3.00 },
      { id: "i5", name: "Egg", quantity: 1, unit: "pc", cost: 4.00 },
      { id: "i6", name: "Sweet Chili Dipping", quantity: 30, unit: "ml", cost: 5.00 },
    ],
  },
  {
    id: "p20", categoryId: "deep-fried", name: "Karaage Thai Style", sellingPrice: 240,
    imageColor: "#0891b2",
    ingredients: [
      { id: "i1", name: "Chicken Thigh (boneless)", quantity: 160, unit: "g", cost: 44.00 },
      { id: "i2", name: "Soy-Garlic Marinade", quantity: 40, unit: "ml", cost: 10.00 },
      { id: "i3", name: "Katakuriko Starch", quantity: 40, unit: "g", cost: 6.00 },
      { id: "i4", name: "Lemon Wedge", quantity: 1, unit: "pc", cost: 4.00 },
      { id: "i5", name: "Kewpie Mayo", quantity: 20, unit: "g", cost: 5.00 },
    ],
  },
  {
    id: "p21", categoryId: "deep-fried", name: "Poh Pia Tod (5 pcs)", sellingPrice: 160,
    imageColor: "#ca8a04",
    ingredients: [
      { id: "i1", name: "Spring Roll Wrappers", quantity: 5, unit: "sheets", cost: 5.00 },
      { id: "i2", name: "Mixed Vegetables", quantity: 80, unit: "g", cost: 10.00 },
      { id: "i3", name: "Tofu", quantity: 50, unit: "g", cost: 5.00 },
      { id: "i4", name: "Glass Noodles", quantity: 30, unit: "g", cost: 3.00 },
      { id: "i5", name: "Dipping Sauce", quantity: 30, unit: "ml", cost: 5.00 },
    ],
  },

  // COCKTAIL
  {
    id: "p22", categoryId: "cocktail", name: "Lychee Martini", sellingPrice: 280,
    imageColor: "#db2777",
    ingredients: [
      { id: "i1", name: "Vodka", quantity: 45, unit: "ml", cost: 25.00 },
      { id: "i2", name: "Lychee Liqueur", quantity: 20, unit: "ml", cost: 12.00 },
      { id: "i3", name: "Lychee Juice", quantity: 30, unit: "ml", cost: 5.00 },
      { id: "i4", name: "Lime Juice", quantity: 10, unit: "ml", cost: 2.00 },
      { id: "i5", name: "Lychee (garnish)", quantity: 2, unit: "pcs", cost: 4.00 },
    ],
  },
  {
    id: "p23", categoryId: "cocktail", name: "Thai Basil Smash", sellingPrice: 260,
    imageColor: "#16a34a",
    ingredients: [
      { id: "i1", name: "Gin", quantity: 45, unit: "ml", cost: 22.00 },
      { id: "i2", name: "Holy Basil", quantity: 6, unit: "leaves", cost: 2.00 },
      { id: "i3", name: "Lemon Juice", quantity: 20, unit: "ml", cost: 4.00 },
      { id: "i4", name: "Simple Syrup", quantity: 15, unit: "ml", cost: 3.00 },
      { id: "i5", name: "Soda Water", quantity: 60, unit: "ml", cost: 3.00 },
    ],
  },
  {
    id: "p24", categoryId: "cocktail", name: "Mango Chili Margarita", sellingPrice: 290,
    imageColor: "#d97706",
    ingredients: [
      { id: "i1", name: "Tequila", quantity: 45, unit: "ml", cost: 28.00 },
      { id: "i2", name: "Mango Puree", quantity: 40, unit: "ml", cost: 8.00 },
      { id: "i3", name: "Triple Sec", quantity: 15, unit: "ml", cost: 8.00 },
      { id: "i4", name: "Lime Juice", quantity: 15, unit: "ml", cost: 3.00 },
      { id: "i5", name: "Chili Salt Rim", quantity: 5, unit: "g", cost: 1.00 },
    ],
  },
  {
    id: "p25", categoryId: "cocktail", name: "Butterfly Pea Gin", sellingPrice: 270,
    imageColor: "#7c3aed",
    ingredients: [
      { id: "i1", name: "Gin", quantity: 45, unit: "ml", cost: 22.00 },
      { id: "i2", name: "Butterfly Pea Tea", quantity: 30, unit: "ml", cost: 4.00 },
      { id: "i3", name: "Tonic Water", quantity: 100, unit: "ml", cost: 6.00 },
      { id: "i4", name: "Lime Wedge", quantity: 1, unit: "pc", cost: 2.00 },
    ],
  },

  // DRINKS
  {
    id: "p26", categoryId: "drinks", name: "Thai Iced Tea", sellingPrice: 120,
    imageColor: "#f97316",
    ingredients: [
      { id: "i1", name: "Thai Tea Mix", quantity: 20, unit: "g", cost: 5.00 },
      { id: "i2", name: "Condensed Milk", quantity: 30, unit: "ml", cost: 5.00 },
      { id: "i3", name: "Evaporated Milk", quantity: 30, unit: "ml", cost: 4.00 },
      { id: "i4", name: "Ice", quantity: 200, unit: "g", cost: 2.00 },
    ],
  },
  {
    id: "p27", categoryId: "drinks", name: "Coconut Water", sellingPrice: 90,
    imageColor: "#16a34a",
    ingredients: [
      { id: "i1", name: "Fresh Coconut", quantity: 1, unit: "pc", cost: 15.00 },
    ],
  },
  {
    id: "p28", categoryId: "drinks", name: "Pandan Lemonade", sellingPrice: 100,
    imageColor: "#16a34a",
    ingredients: [
      { id: "i1", name: "Pandan Syrup", quantity: 20, unit: "ml", cost: 5.00 },
      { id: "i2", name: "Lemon Juice", quantity: 25, unit: "ml", cost: 5.00 },
      { id: "i3", name: "Soda Water", quantity: 150, unit: "ml", cost: 4.00 },
      { id: "i4", name: "Ice", quantity: 150, unit: "g", cost: 2.00 },
    ],
  },
  {
    id: "p29", categoryId: "drinks", name: "Fresh Watermelon Juice", sellingPrice: 110,
    imageColor: "#dc2626",
    ingredients: [
      { id: "i1", name: "Watermelon", quantity: 300, unit: "g", cost: 18.00 },
      { id: "i2", name: "Sugar Syrup", quantity: 10, unit: "ml", cost: 2.00 },
      { id: "i3", name: "Ice", quantity: 100, unit: "g", cost: 1.00 },
    ],
  },
  {
    id: "p30", categoryId: "drinks", name: "Butterfly Pea Lemonade", sellingPrice: 130,
    imageColor: "#7c3aed",
    ingredients: [
      { id: "i1", name: "Butterfly Pea Tea", quantity: 150, unit: "ml", cost: 8.00 },
      { id: "i2", name: "Lemon Juice", quantity: 20, unit: "ml", cost: 4.00 },
      { id: "i3", name: "Simple Syrup", quantity: 15, unit: "ml", cost: 3.00 },
      { id: "i4", name: "Ice", quantity: 150, unit: "g", cost: 2.00 },
    ],
  },
];

export const recentUpdates = [
  {
    id: "u1",
    type: "recipe",
    title: "Recipe updated",
    boldPart: "Pad Thai",
    description: "Changed Shrimp supplier. Cost -2%.",
    time: "2 hours ago by Chef A.",
  },
  {
    id: "u2",
    type: "alert",
    title: "Cost Alert",
    boldPart: "Lime",
    description: "Price increased by 15%. Affects 8 recipes.",
    time: "Yesterday",
  },
  {
    id: "u3",
    type: "recipe",
    title: "New product added",
    boldPart: "Butterfly Pea Gin",
    description: "Added to Cocktail category.",
    time: "3 days ago by Manager.",
  },
];
