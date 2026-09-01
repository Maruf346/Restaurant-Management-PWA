import { create } from "zustand";
import { User } from "../types";
import { mockUsers } from "../data/auth";

interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (_email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    set({ isAuthenticated: true, user: mockUsers[0] });
    return true;
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
