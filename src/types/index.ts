export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "viewer";
  avatar?: string;
}

export interface Location {
  id: string;
  name: string;
  brand: string;
}

export interface DishPerformance {
  id: string;
  name: string;
  sales: number;
  foodCost: number;
  profit: number;
  margin: number;
}

export interface DashboardStats {
  revenue: { value: number; change: number; changeLabel: string };
  foodCost: { value: number; overTheoretical: number };
  grossProfit: { value: number; change: number; changeLabel: string };
  profitMargin: { value: number; target: number };
}

export type TimeRange = "daily" | "weekly" | "monthly";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
