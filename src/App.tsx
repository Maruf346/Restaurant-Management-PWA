import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./stores/authStore";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import ProductDetailPage from "./pages/inventory/ProductDetailPage";
import AddEditProductPage from "./pages/inventory/AddEditProductPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import SettingsPage from "./pages/settings/SettingsPage";
import IngredientsPage from "./pages/ingredients/IngredientsPage";
import PurchasesPage from "./pages/purchases/PurchasesPage";
import ProfitabilityPage from "./pages/profitability/ProfitabilityPage";
import ReportsPage from "./pages/reports/ReportsPage";
import UsersPage from "./pages/users/UsersPage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPasswordPage />
            </PublicRoute>
          }
        />

        {/* App */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="inventory/new" element={<AddEditProductPage />} />
          <Route path="inventory/:productId" element={<ProductDetailPage />} />
          <Route path="inventory/:productId/edit" element={<AddEditProductPage />} />
          <Route path="ingredients" element={<IngredientsPage />} />
          <Route path="purchases" element={<PurchasesPage />} />
          <Route path="profitability" element={<ProfitabilityPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
