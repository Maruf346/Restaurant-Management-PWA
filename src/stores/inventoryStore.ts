import { create } from "zustand";
import {
  Category,
  Product,
  RecipeIngredient,
  defaultCategories,
  defaultProducts,
} from "../data/inventory";

interface InventoryStore {
  categories: Category[];
  products: Product[];
  addCategory: (name: string) => void;
  deleteCategory: (id: string) => void;
  addProduct: (product: Omit<Product, "id">) => string;
  updateProduct: (id: string, product: Omit<Product, "id">) => void;
  deleteProduct: (id: string) => void;
  addIngredient: (productId: string, ingredient: Omit<RecipeIngredient, "id">) => void;
  removeIngredient: (productId: string, ingredientId: string) => void;
}

let idCounter = 1000;

export const useInventoryStore = create<InventoryStore>((set) => ({
  categories: defaultCategories,
  products: defaultProducts,

  addCategory: (name) => {
    const id = `cat-${Date.now()}`;
    const colors = ["#6366f1", "#ec4899", "#14b8a6", "#f97316", "#84cc16"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    set((s) => ({
      categories: [...s.categories, { id, name, color }],
    }));
  },

  deleteCategory: (id) => {
    set((s) => ({
      categories: s.categories.filter((c) => c.id !== id),
      products: s.products.filter((p) => p.categoryId !== id),
    }));
  },

  addProduct: (product) => {
    const id = `p${++idCounter}`;
    set((s) => ({
      products: [{ ...product, id }, ...s.products],
    }));
    return id;
  },

  updateProduct: (id, product) => {
    set((s) => ({
      products: s.products.map((p) => (p.id === id ? { ...product, id } : p)),
    }));
  },

  deleteProduct: (id) => {
    set((s) => ({
      products: s.products.filter((p) => p.id !== id),
    }));
  },

  addIngredient: (productId, ingredient) => {
    const id = `ing-${++idCounter}`;
    set((s) => ({
      products: s.products.map((p) =>
        p.id === productId
          ? { ...p, ingredients: [...p.ingredients, { ...ingredient, id }] }
          : p
      ),
    }));
  },

  removeIngredient: (productId, ingredientId) => {
    set((s) => ({
      products: s.products.map((p) =>
        p.id === productId
          ? { ...p, ingredients: p.ingredients.filter((i) => i.id !== ingredientId) }
          : p
      ),
    }));
  },
}));
