import { User } from "../types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Manager",
    email: "admin@profitplate.com",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
];

export const MOCK_CREDENTIALS = {
  email: "admin@profitplate.com",
  password: "password123",
};

export const MOCK_OTP = "123456";
