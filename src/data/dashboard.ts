import { DashboardStats, DishPerformance, Location } from "../types";

export const locations: Location[] = [
  { id: "1", name: "Casa Thai — Casa 1", brand: "Casa Thai" },
  { id: "2", name: "Casa Thai — Casa 2", brand: "Casa Thai" },
  { id: "3", name: "Bangkok Bowl — North", brand: "Bangkok Bowl" },
  { id: "4", name: "Little India — Central", brand: "Little India" },
];

// ── Stats: [locationId][timeRange] ───────────────────────────────────────────

type TimeKey = "Daily" | "Weekly" | "Monthly";

const statsData: Record<string, Record<TimeKey, DashboardStats>> = {
  "1": {
    Daily: {
      revenue: { value: 12450.0, change: 8.2, changeLabel: "vs yesterday" },
      foodCost: { value: 3610.5, overTheoretical: 1.5 },
      grossProfit: { value: 8839.5, change: 4.1, changeLabel: "vs yesterday" },
      profitMargin: { value: 71.0, target: 100 },
    },
    Weekly: {
      revenue: { value: 78320.0, change: 5.4, changeLabel: "vs last week" },
      foodCost: { value: 22480.0, overTheoretical: 0.9 },
      grossProfit: { value: 55840.0, change: 3.7, changeLabel: "vs last week" },
      profitMargin: { value: 71.3, target: 100 },
    },
    Monthly: {
      revenue: { value: 312500.0, change: 11.2, changeLabel: "vs last month" },
      foodCost: { value: 89600.0, overTheoretical: 1.1 },
      grossProfit: { value: 222900.0, change: 7.8, changeLabel: "vs last month" },
      profitMargin: { value: 71.3, target: 100 },
    },
  },
  "2": {
    Daily: {
      revenue: { value: 9870.0, change: 3.4, changeLabel: "vs yesterday" },
      foodCost: { value: 3120.0, overTheoretical: 2.1 },
      grossProfit: { value: 6750.0, change: 2.8, changeLabel: "vs yesterday" },
      profitMargin: { value: 68.4, target: 100 },
    },
    Weekly: {
      revenue: { value: 62140.0, change: 2.1, changeLabel: "vs last week" },
      foodCost: { value: 20080.0, overTheoretical: 1.8 },
      grossProfit: { value: 42060.0, change: 1.5, changeLabel: "vs last week" },
      profitMargin: { value: 67.7, target: 100 },
    },
    Monthly: {
      revenue: { value: 248900.0, change: 4.3, changeLabel: "vs last month" },
      foodCost: { value: 80200.0, overTheoretical: 2.0 },
      grossProfit: { value: 168700.0, change: 3.1, changeLabel: "vs last month" },
      profitMargin: { value: 67.8, target: 100 },
    },
  },
  "3": {
    Daily: {
      revenue: { value: 15320.0, change: 12.5, changeLabel: "vs yesterday" },
      foodCost: { value: 4890.0, overTheoretical: 0.8 },
      grossProfit: { value: 10430.0, change: 7.2, changeLabel: "vs yesterday" },
      profitMargin: { value: 68.1, target: 100 },
    },
    Weekly: {
      revenue: { value: 96800.0, change: 9.3, changeLabel: "vs last week" },
      foodCost: { value: 30650.0, overTheoretical: 0.6 },
      grossProfit: { value: 66150.0, change: 6.8, changeLabel: "vs last week" },
      profitMargin: { value: 68.3, target: 100 },
    },
    Monthly: {
      revenue: { value: 387200.0, change: 14.7, changeLabel: "vs last month" },
      foodCost: { value: 122400.0, overTheoretical: 0.7 },
      grossProfit: { value: 264800.0, change: 10.2, changeLabel: "vs last month" },
      profitMargin: { value: 68.4, target: 100 },
    },
  },
  "4": {
    Daily: {
      revenue: { value: 8640.0, change: -1.3, changeLabel: "vs yesterday" },
      foodCost: { value: 2980.0, overTheoretical: 3.2 },
      grossProfit: { value: 5660.0, change: -2.1, changeLabel: "vs yesterday" },
      profitMargin: { value: 65.5, target: 100 },
    },
    Weekly: {
      revenue: { value: 54320.0, change: -0.8, changeLabel: "vs last week" },
      foodCost: { value: 19040.0, overTheoretical: 2.8 },
      grossProfit: { value: 35280.0, change: -1.2, changeLabel: "vs last week" },
      profitMargin: { value: 65.0, target: 100 },
    },
    Monthly: {
      revenue: { value: 217800.0, change: 1.4, changeLabel: "vs last month" },
      foodCost: { value: 76200.0, overTheoretical: 3.0 },
      grossProfit: { value: 141600.0, change: 0.6, changeLabel: "vs last month" },
      profitMargin: { value: 65.0, target: 100 },
    },
  },
};

// ── Best dishes: [locationId][timeRange] ─────────────────────────────────────

const bestDishesData: Record<string, Record<TimeKey, DishPerformance[]>> = {
  "1": {
    Daily: [
      { id: "1", name: "Pad Thai Chicken", sales: 1240, foodCost: 285, profit: 955, margin: 77 },
      { id: "2", name: "Green Curry Beef", sales: 980, foodCost: 245, profit: 735, margin: 75 },
      { id: "3", name: "Tom Yum Soup", sales: 850, foodCost: 153, profit: 697, margin: 82 },
      { id: "4", name: "Mango Sticky Rice", sales: 620, foodCost: 93, profit: 527, margin: 85 },
    ],
    Weekly: [
      { id: "1", name: "Pad Thai Chicken", sales: 7840, foodCost: 1802, profit: 6038, margin: 77 },
      { id: "2", name: "Green Curry Beef", sales: 6160, foodCost: 1540, profit: 4620, margin: 75 },
      { id: "3", name: "Tom Yum Soup", sales: 5320, foodCost: 958, profit: 4362, margin: 82 },
      { id: "4", name: "Larb Salad", sales: 4200, foodCost: 756, profit: 3444, margin: 82 },
    ],
    Monthly: [
      { id: "1", name: "Pad Thai Chicken", sales: 31200, foodCost: 7176, profit: 24024, margin: 77 },
      { id: "2", name: "Green Curry Beef", sales: 24600, foodCost: 6150, profit: 18450, margin: 75 },
      { id: "3", name: "Larb Salad", sales: 21400, foodCost: 3852, profit: 17548, margin: 82 },
      { id: "4", name: "Mango Sticky Rice", sales: 18600, foodCost: 2790, profit: 15810, margin: 85 },
    ],
  },
  "2": {
    Daily: [
      { id: "1", name: "Massaman Curry", sales: 1080, foodCost: 230, profit: 850, margin: 79 },
      { id: "2", name: "Pad See Ew", sales: 920, foodCost: 210, profit: 710, margin: 77 },
      { id: "3", name: "Crispy Tofu Salad", sales: 740, foodCost: 130, profit: 610, margin: 82 },
      { id: "4", name: "Thai Iced Tea", sales: 580, foodCost: 55, profit: 525, margin: 90 },
    ],
    Weekly: [
      { id: "1", name: "Massaman Curry", sales: 6840, foodCost: 1454, profit: 5386, margin: 79 },
      { id: "2", name: "Pad See Ew", sales: 5820, foodCost: 1328, profit: 4492, margin: 77 },
      { id: "3", name: "Thai Iced Tea", sales: 4640, foodCost: 440, profit: 4200, margin: 90 },
      { id: "4", name: "Pineapple Fried Rice", sales: 4000, foodCost: 800, profit: 3200, margin: 80 },
    ],
    Monthly: [
      { id: "1", name: "Massaman Curry", sales: 27200, foodCost: 5784, profit: 21416, margin: 79 },
      { id: "2", name: "Thai Iced Tea", sales: 18900, foodCost: 1795, profit: 17105, margin: 90 },
      { id: "3", name: "Pad See Ew", sales: 23200, foodCost: 5296, profit: 17904, margin: 77 },
      { id: "4", name: "Crispy Tofu Salad", sales: 18600, foodCost: 3348, profit: 15252, margin: 82 },
    ],
  },
  "3": {
    Daily: [
      { id: "1", name: "Signature Noodle Bowl", sales: 1560, foodCost: 340, profit: 1220, margin: 78 },
      { id: "2", name: "Spicy Basil Pork", sales: 1340, foodCost: 290, profit: 1050, margin: 78 },
      { id: "3", name: "Spring Roll Platter", sales: 1120, foodCost: 210, profit: 910, margin: 81 },
      { id: "4", name: "Coconut Soup", sales: 890, foodCost: 160, profit: 730, margin: 82 },
    ],
    Weekly: [
      { id: "1", name: "Signature Noodle Bowl", sales: 9800, foodCost: 2136, profit: 7664, margin: 78 },
      { id: "2", name: "Spicy Basil Pork", sales: 8460, foodCost: 1829, profit: 6631, margin: 78 },
      { id: "3", name: "Coconut Soup", sales: 6980, foodCost: 1256, profit: 5724, margin: 82 },
      { id: "4", name: "Mango Sorbet", sales: 5600, foodCost: 840, profit: 4760, margin: 85 },
    ],
    Monthly: [
      { id: "1", name: "Signature Noodle Bowl", sales: 39200, foodCost: 8546, profit: 30654, margin: 78 },
      { id: "2", name: "Spicy Basil Pork", sales: 33800, foodCost: 7309, profit: 26491, margin: 78 },
      { id: "3", name: "Coconut Soup", sales: 27900, foodCost: 5022, profit: 22878, margin: 82 },
      { id: "4", name: "Spring Roll Platter", sales: 24600, foodCost: 4674, profit: 19926, margin: 81 },
    ],
  },
  "4": {
    Daily: [
      { id: "1", name: "Butter Chicken", sales: 980, foodCost: 240, profit: 740, margin: 76 },
      { id: "2", name: "Dal Makhani", sales: 760, foodCost: 140, profit: 620, margin: 82 },
      { id: "3", name: "Garlic Naan", sales: 640, foodCost: 70, profit: 570, margin: 89 },
      { id: "4", name: "Mango Lassi", sales: 520, foodCost: 65, profit: 455, margin: 87 },
    ],
    Weekly: [
      { id: "1", name: "Butter Chicken", sales: 6200, foodCost: 1519, profit: 4681, margin: 76 },
      { id: "2", name: "Garlic Naan", sales: 5120, foodCost: 563, profit: 4557, margin: 89 },
      { id: "3", name: "Mango Lassi", sales: 4160, foodCost: 520, profit: 3640, margin: 87 },
      { id: "4", name: "Dal Makhani", sales: 4820, foodCost: 868, profit: 3952, margin: 82 },
    ],
    Monthly: [
      { id: "1", name: "Butter Chicken", sales: 24800, foodCost: 6077, profit: 18723, margin: 76 },
      { id: "2", name: "Garlic Naan", sales: 20500, foodCost: 2255, profit: 18245, margin: 89 },
      { id: "3", name: "Dal Makhani", sales: 19300, foodCost: 3474, profit: 15826, margin: 82 },
      { id: "4", name: "Mango Lassi", sales: 16600, foodCost: 2158, profit: 14442, margin: 87 },
    ],
  },
};

// ── Worst dishes: [locationId][timeRange] ────────────────────────────────────

const worstDishesData: Record<string, Record<TimeKey, DishPerformance[]>> = {
  "1": {
    Daily: [
      { id: "5", name: "Seafood Platter", sales: 450, foodCost: 279, profit: 171, margin: 38 },
      { id: "6", name: "Duck Curry", sales: 380, foodCost: 209, profit: 171, margin: 45 },
      { id: "7", name: "Steamed Whole Fish", sales: 320, foodCost: 166, profit: 154, margin: 48 },
      { id: "8", name: "Crab Fried Rice", sales: 290, foodCost: 145, profit: 145, margin: 50 },
    ],
    Weekly: [
      { id: "5", name: "Seafood Platter", sales: 2840, foodCost: 1761, profit: 1079, margin: 38 },
      { id: "6", name: "Duck Curry", sales: 2380, foodCost: 1309, profit: 1071, margin: 45 },
      { id: "7", name: "Steamed Whole Fish", sales: 1960, foodCost: 1019, profit: 941, margin: 48 },
      { id: "8", name: "Lobster Bisque", sales: 1560, foodCost: 842, profit: 718, margin: 46 },
    ],
    Monthly: [
      { id: "5", name: "Seafood Platter", sales: 11200, foodCost: 6944, profit: 4256, margin: 38 },
      { id: "6", name: "Duck Curry", sales: 9500, foodCost: 5225, profit: 4275, margin: 45 },
      { id: "7", name: "Lobster Bisque", sales: 8200, foodCost: 4428, profit: 3772, margin: 46 },
      { id: "8", name: "Crab Fried Rice", sales: 7400, foodCost: 3700, profit: 3700, margin: 50 },
    ],
  },
  "2": {
    Daily: [
      { id: "5", name: "Lobster Bisque", sales: 310, foodCost: 198, profit: 112, margin: 36 },
      { id: "6", name: "Wagyu Fried Rice", sales: 280, foodCost: 175, profit: 105, margin: 38 },
      { id: "7", name: "Scallop Skewers", sales: 240, foodCost: 145, profit: 95, margin: 40 },
      { id: "8", name: "Oyster Platter", sales: 200, foodCost: 118, profit: 82, margin: 41 },
    ],
    Weekly: [
      { id: "5", name: "Lobster Bisque", sales: 1960, foodCost: 1254, profit: 706, margin: 36 },
      { id: "6", name: "Wagyu Fried Rice", sales: 1760, foodCost: 1090, profit: 670, margin: 38 },
      { id: "7", name: "Oyster Platter", sales: 1480, foodCost: 875, profit: 605, margin: 41 },
      { id: "8", name: "Scallop Skewers", sales: 1240, foodCost: 744, profit: 496, margin: 40 },
    ],
    Monthly: [
      { id: "5", name: "Lobster Bisque", sales: 7800, foodCost: 4992, profit: 2808, margin: 36 },
      { id: "6", name: "Wagyu Fried Rice", sales: 7000, foodCost: 4340, profit: 2660, margin: 38 },
      { id: "7", name: "Oyster Platter", sales: 5900, foodCost: 3481, profit: 2419, margin: 41 },
      { id: "8", name: "Scallop Skewers", sales: 4980, foodCost: 2988, profit: 1992, margin: 40 },
    ],
  },
  "3": {
    Daily: [
      { id: "5", name: "Prawn Tempura Bowl", sales: 560, foodCost: 340, profit: 220, margin: 39 },
      { id: "6", name: "Kingfish Sashimi", sales: 490, foodCost: 285, profit: 205, margin: 42 },
      { id: "7", name: "Wagyu Beef Bowl", sales: 420, foodCost: 245, profit: 175, margin: 42 },
      { id: "8", name: "Black Sesame Cake", sales: 360, foodCost: 195, profit: 165, margin: 46 },
    ],
    Weekly: [
      { id: "5", name: "Prawn Tempura Bowl", sales: 3540, foodCost: 2151, profit: 1389, margin: 39 },
      { id: "6", name: "Wagyu Beef Bowl", sales: 3080, foodCost: 1847, profit: 1233, margin: 40 },
      { id: "7", name: "Kingfish Sashimi", sales: 2800, foodCost: 1680, profit: 1120, margin: 40 },
      { id: "8", name: "Black Sesame Cake", sales: 2240, foodCost: 1210, profit: 1030, margin: 46 },
    ],
    Monthly: [
      { id: "5", name: "Prawn Tempura Bowl", sales: 14100, foodCost: 8601, profit: 5499, margin: 39 },
      { id: "6", name: "Wagyu Beef Bowl", sales: 12300, foodCost: 7380, profit: 4920, margin: 40 },
      { id: "7", name: "Kingfish Sashimi", sales: 11200, foodCost: 6720, profit: 4480, margin: 40 },
      { id: "8", name: "Black Sesame Cake", sales: 8900, foodCost: 4806, profit: 4094, margin: 46 },
    ],
  },
  "4": {
    Daily: [
      { id: "5", name: "Lamb Rogan Josh", sales: 340, foodCost: 210, profit: 130, margin: 38 },
      { id: "6", name: "Prawn Biryani", sales: 290, foodCost: 175, profit: 115, margin: 40 },
      { id: "7", name: "Paneer Tikka", sales: 260, foodCost: 148, profit: 112, margin: 43 },
      { id: "8", name: "Kheer Pudding", sales: 200, foodCost: 108, profit: 92, margin: 46 },
    ],
    Weekly: [
      { id: "5", name: "Lamb Rogan Josh", sales: 2160, foodCost: 1339, profit: 821, margin: 38 },
      { id: "6", name: "Prawn Biryani", sales: 1840, foodCost: 1104, profit: 736, margin: 40 },
      { id: "7", name: "Paneer Tikka", sales: 1640, foodCost: 935, profit: 705, margin: 43 },
      { id: "8", name: "Kheer Pudding", sales: 1260, foodCost: 680, profit: 580, margin: 46 },
    ],
    Monthly: [
      { id: "5", name: "Lamb Rogan Josh", sales: 8600, foodCost: 5332, profit: 3268, margin: 38 },
      { id: "6", name: "Prawn Biryani", sales: 7400, foodCost: 4440, profit: 2960, margin: 40 },
      { id: "7", name: "Paneer Tikka", sales: 6600, foodCost: 3762, profit: 2838, margin: 43 },
      { id: "8", name: "Kheer Pudding", sales: 5100, foodCost: 2754, profit: 2346, margin: 46 },
    ],
  },
};

// ── Public accessors ──────────────────────────────────────────────────────────

export function getStatsByLocation(locationId: string, time: TimeKey = "Daily"): DashboardStats {
  return statsData[locationId]?.[time] ?? statsData["1"]["Daily"];
}

export function getBestDishes(locationId: string, time: TimeKey = "Daily"): DishPerformance[] {
  return bestDishesData[locationId]?.[time] ?? bestDishesData["1"]["Daily"];
}

export function getWorstDishes(locationId: string, time: TimeKey = "Daily"): DishPerformance[] {
  return worstDishesData[locationId]?.[time] ?? worstDishesData["1"]["Daily"];
}

// Legacy exports
export const dashboardStats = statsData["1"]["Daily"];
export const bestPerformingDishes = bestDishesData["1"]["Daily"];
export const worstPerformingDishes = worstDishesData["1"]["Daily"];
