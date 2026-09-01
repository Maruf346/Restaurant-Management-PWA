import { useState, useRef, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "../stores/authStore";
import { useSidebar } from "../hooks/useSidebar";
import { locations } from "../data/dashboard";
import { Location } from "../types";
import NotificationsDrawer, { Notification } from "../components/NotificationsDrawer";

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: "1", title: "Low stock alert", body: "Tomatoes running low at Casa Thai — Casa 1", time: "2 min ago", read: false },
  { id: "2", title: "New price update", body: "Chicken breast price increased by 12%", time: "15 min ago", read: false },
  { id: "3", title: "Report ready", body: "Weekly profitability report is available", time: "1 hour ago", read: false },
  { id: "4", title: "User joined", body: "Jamie Chen joined as Manager at Bangkok Bowl", time: "3 hours ago", read: true },
  { id: "5", title: "Inventory synced", body: "Inventory sync completed successfully", time: "Yesterday", read: true },
  { id: "6", title: "Purchase order", body: "PO #3842 approved and sent to supplier", time: "2 days ago", read: true },
];

type TimeRange = "Daily" | "Weekly" | "Monthly";

// ── Icon paths ───────────────────────────────────────────────────────────────
const ICON_PATHS = {
  dashboard: { d: "M10 6V0H18V6H10V6M0 10V0H8V10H0V0M10 18V8H18V18H10V18M0 18V12H8V18H0V18M2 8H6V2H2V8M12 16H16V10H12V16M12 4H16V2H12V4M2 16H6V14H2V16", vb: "0 0 18 18" },
  inventory: { d: "M3 20C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18V6.725C0.7 6.54167 0.458333 6.30417 0.275 6.0125C0.0916667 5.72083 0 5.38333 0 5V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V5C20 5.38333 19.9083 5.72083 19.725 6.0125C19.5417 6.30417 19.3 6.54167 19 6.725V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H3M3 7V18H17V7H3M2 5H18V2H2V5M7 12H13V10H7V12", vb: "0 0 20 20" },
  ingredients: { d: "M14 20C12.3333 20 10.9167 19.4167 9.75 18.25C8.58333 17.0833 8 15.6667 8 14C8 12.3333 8.58333 10.9167 9.75 9.75C10.9167 8.58333 12.3333 8 14 8C15.6667 8 17.0833 8.58333 18.25 9.75C19.4167 10.9167 20 12.3333 20 14C20 15.6667 19.4167 17.0833 18.25 18.25C17.0833 19.4167 15.6667 20 14 20V20M14 18C15.1 18 16.0417 17.6083 16.825 16.825C17.6083 16.0417 18 15.1 18 14C18 12.9 17.6083 11.9583 16.825 11.175C16.0417 10.3917 15.1 10 14 10C12.9 10 11.9583 10.3917 11.175 11.175C10.3917 11.9583 10 12.9 10 14C10 15.1 10.3917 16.0417 11.175 16.825C11.9583 17.6083 12.9 18 14 18V18M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V8.4C0 8.26667 0.0125 8.13333 0.0375 8C0.0625 7.86667 0.1 7.73333 0.15 7.6L2.15 3H2C1.71667 3 1.47917 2.90417 1.2875 2.7125C1.09583 2.52083 1 2.28333 1 2V1C1 0.716667 1.09583 0.479167 1.2875 0.2875C1.47917 0.0958333 1.71667 0 2 0H9C9.28333 0 9.52083 0.0958333 9.7125 0.2875C9.90417 0.479167 10 0.716667 10 1V2C10 2.28333 9.90417 2.52083 9.7125 2.7125C9.52083 2.90417 9.28333 3 9 3H8.85L10.5 6.8C10.1833 6.96667 9.88333 7.14167 9.6 7.325C9.31667 7.50833 9.05 7.71667 8.8 7.95L6.7 3H4.3L2 8.4V16V16V16H6.25C6.33333 16.35 6.44583 16.6958 6.5875 17.0375C6.72917 17.3792 6.9 17.7 7.1 18H2V18M14 7C13.3 7 12.7083 6.75833 12.225 6.275C11.7417 5.79167 11.5 5.2 11.5 4.5C11.5 3.8 11.7417 3.20833 12.225 2.725C12.7083 2.24167 13.3 2 14 2V7C14 6.3 14.2417 5.70833 14.725 5.225C15.2083 4.74167 15.8 4.5 16.5 4.5C17.2 4.5 17.7917 4.74167 18.275 5.225C18.7583 5.70833 19 6.3 19 7H14V7", vb: "0 0 20 20" },
  purchases: { d: "M3 20C2.16667 20 1.45833 19.7083 0.875 19.125C0.291667 18.5417 0 17.8333 0 17V14H3V0L4.5 1.5L6 0L7.5 1.5L9 0L10.5 1.5L12 0L13.5 1.5L15 0L16.5 1.5L18 0V17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20H3ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17V3H5V14H14V17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM6 7V5H12V7H6ZM6 10V8H12V10H6ZM14 7C13.7167 7 13.4792 6.90417 13.2875 6.7125C13.0958 6.52083 13 6.28333 13 6C13 5.71667 13.0958 5.47917 13.2875 5.2875C13.4792 5.09583 13.7167 5 14 5C14.2833 5 14.5208 5.09583 14.7125 5.2875C14.9042 5.47917 15 5.71667 15 6C15 6.28333 14.9042 6.52083 14.7125 6.7125C14.5208 6.90417 14.2833 7 14 7ZM14 10C13.7167 10 13.4792 9.90417 13.2875 9.7125C13.0958 9.52083 13 9.28333 13 9C13 8.71667 13.0958 8.47917 13.2875 8.2875C13.4792 8.09583 13.7167 8 14 8C14.2833 8 14.5208 8.09583 14.7125 8.2875C14.9042 8.47917 15 8.71667 15 9C15 9.28333 14.9042 9.52083 14.7125 9.7125C14.5208 9.90417 14.2833 10 14 10ZM3 18H12V16H2V17C2 17.2833 2.09583 17.5208 2.2875 17.7125C2.47917 17.9042 2.71667 18 3 18ZM2 18C2 18 2 17.9042 2 17.7125C2 17.5208 2 17.2833 2 17V16V18Z", vb: "0 0 18 20" },
  profitability: { d: "M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z", vb: "0 0 20 12" },
  reports: { d: "M12 16V9H16V16H12M6 16V0H10V16H6M0 16V5H4V16H0", vb: "0 0 16 16" },
  users: { d: "M0 12V10.425C0 9.70833 0.366667 9.125 1.1 8.675C1.83333 8.225 2.8 8 4 8C4.21667 8 4.425 8.00417 4.625 8.0125C4.825 8.02083 5.01667 8.04167 5.2 8.075C4.96667 8.425 4.79167 8.79167 4.675 9.175C4.55833 9.55833 4.5 9.95833 4.5 10.375V12H0M6 12V10.375C6 9.84167 6.14583 9.35417 6.4375 8.9125C6.72917 8.47083 7.14167 8.08333 7.675 7.75C8.20833 7.41667 8.84583 7.16667 9.5875 7C10.3292 6.83333 11.1333 6.75 12 6.75C12.8833 6.75 13.6958 6.83333 14.4375 7C15.1792 7.16667 15.8167 7.41667 16.35 7.75C16.8833 8.08333 17.2917 8.47083 17.575 8.9125C17.8583 9.35417 18 9.84167 18 10.375V12H6M19.5 12V10.375C19.5 9.94167 19.4458 9.53333 19.3375 9.15C19.2292 8.76667 19.0667 8.40833 18.85 8.075C19.0333 8.04167 19.2208 8.02083 19.4125 8.0125C19.6042 8.00417 19.8 8 20 8C21.2 8 22.1667 8.22083 22.9 8.6625C23.6333 9.10417 24 9.69167 24 10.425V12H19.5M4 7C3.45 7 2.97917 6.80417 2.5875 6.4125C2.19583 6.02083 2 5.55 2 5C2 4.43333 2.19583 3.95833 2.5875 3.575C2.97917 3.19167 3.45 3 4 3C4.56667 3 5.04167 3.19167 5.425 3.575C5.80833 3.95833 6 4.43333 6 5C6 5.55 5.80833 6.02083 5.425 6.4125C5.04167 6.80417 4.56667 7 4 7M20 7C19.45 7 18.9792 6.80417 18.5875 6.4125C18.1958 6.02083 18 5.55 18 5C18 4.43333 18.1958 3.95833 18.5875 3.575C18.9792 3.19167 19.45 3 20 3C20.5667 3 21.0417 3.19167 21.425 3.575C21.8083 3.95833 22 4.43333 22 5C22 5.55 21.8083 6.02083 21.425 6.4125C21.0417 6.80417 20.5667 7 20 7M12 6C11.1667 6 10.4583 5.70833 9.875 5.125C9.29167 4.54167 9 3.83333 9 3C9 2.15 9.29167 1.4375 9.875 0.8625C10.4583 0.2875 11.1667 0 12 0C12.85 0 13.5625 0.2875 14.1375 0.8625C14.7125 1.4375 15 2.15 15 3C15 3.83333 14.7125 4.54167 14.1375 5.125C13.5625 5.70833 12.85 6 12 6M12 4C12.2833 4 12.5208 3.90417 12.7125 3.7125C12.9042 3.52083 13 3.28333 13 3C13 2.71667 12.9042 2.47917 12.7125 2.2875C12.5208 2.09583 12.2833 2 12 2C11.7167 2 11.4792 2.09583 11.2875 2.2875C11.0958 2.47917 11 2.71667 11 3C11 3.28333 11.0958 3.52083 11.2875 3.7125C11.4792 3.90417 11.7167 4 12 4", vb: "0 0 24 12" },
  settings: { d: "M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375V9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625V10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3M10.1 13.5C11.0667 13.5 11.8917 13.1583 12.575 12.475C13.2583 11.7917 13.6 10.9667 13.6 10C13.6 9.03333 13.2583 8.20833 12.575 7.525C11.8917 6.84167 11.0667 6.5 10.1 6.5C9.11667 6.5 8.2875 6.84167 7.6125 7.525C6.9375 8.20833 6.6 9.03333 6.6 10C6.6 10.9667 6.9375 11.7917 7.6125 12.475C8.2875 13.1583 9.11667 13.5 10.1 13.5", vb: "0 0 20 20" },
  logout: { d: "M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2M13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14", vb: "0 0 18 18" },
  location: { d: "M0.75 1.5V0H12.75V1.5H0.75M0.75 12V7.5H0V6L0.75 2.25H12.75L13.5 6V7.5H12.75V12H11.25V7.5H8.25V12H0.75M2.25 10.5H6.75V7.5H2.25V10.5M1.5375 6H11.9625L11.5125 3.75H1.9875L1.5375 6", vb: "0 0 13.5 12" },
  bell: { d: "M8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0", vb: "0 0 16 20" },
};

const navItems = [
  { label: "Dashboard", icon: ICON_PATHS.dashboard, to: "/dashboard" },
  { label: "Inventory", icon: ICON_PATHS.inventory, to: "/inventory" },
  { label: "Ingredients", icon: ICON_PATHS.ingredients, to: "/ingredients" },
  { label: "Purchases & Prices", icon: ICON_PATHS.purchases, to: "/purchases" },
  { label: "Profitability", icon: ICON_PATHS.profitability, to: "/profitability" },
  { label: "Reports", icon: ICON_PATHS.reports, to: "/reports" },
  { label: "Users", icon: ICON_PATHS.users, to: "/users" },
  { label: "Settings", icon: ICON_PATHS.settings, to: "/settings" },
];

// ── Location Dropdown ────────────────────────────────────────────────────────
function LocationDropdown({ selected, onSelect }: { selected: Location; onSelect: (l: Location) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-[7px] rounded-[8px] border border-[#e2e8f0] bg-white hover:bg-gray-50 transition-colors"
      >
        <svg width="13.5" height="12" viewBox="0 0 13.5 12" fill="none">
          <path d={ICON_PATHS.location.d} fill="#5D5F5F" />
        </svg>
        <span className="font-semibold text-[#5d5f5f] text-[14px] tracking-[0.28px] whitespace-nowrap max-w-[160px] truncate">
          {selected.name}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="9" height="6" viewBox="0 0 9 6" fill="none"
        >
          <path d="M0 0L4.5 4.5L9 0" stroke="#5D5F5F" strokeWidth="1.2" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full mt-2 z-50 backdrop-blur-[12px] bg-[rgba(252,248,248,0.95)] rounded-[12px] border border-[rgba(196,199,200,0.3)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] p-[9px] min-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => { onSelect(loc); setOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-[8px] w-full text-left transition-colors ${
                    selected.id === loc.id ? "bg-[rgba(93,95,95,0.1)]" : "hover:bg-[rgba(93,95,95,0.06)]"
                  }`}
                >
                  <svg width="13.5" height="12" viewBox="0 0 13.5 12" fill="none">
                    <path d={ICON_PATHS.location.d} fill={selected.id === loc.id ? "#5D5F5F" : "#5C5F61"} />
                  </svg>
                  <span className={`font-semibold text-[14px] tracking-[0.28px] whitespace-nowrap ${selected.id === loc.id ? "text-[#5d5f5f]" : "text-[#5c5f61]"}`}>
                    {loc.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppLayout() {
  const { collapsed, toggle } = useSidebar();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const routerLocation = useLocation();
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTime, setActiveTime] = useState<TimeRange>("Daily");

  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const handleClearRead = () =>
    setNotifications((prev) => prev.filter((n) => !n.read));

  const handleDeleteNotification = (id: string) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const handleMarkRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const sidebarWidth = collapsed ? 72 : 216;

  return (
    <div className="flex h-full bg-[#f8fafc] overflow-hidden">
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        role="complementary"
        animate={{ width: sidebarWidth }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`
          bg-white border-r border-[#e5e2e1] flex flex-col h-full shrink-0 overflow-hidden
          fixed md:relative z-30 md:z-auto transition-transform md:transform-none duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ width: sidebarWidth }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-[#e5e2e1] shrink-0 overflow-hidden">
          <div className="w-9 h-9 bg-[#0f172a] rounded-[8px] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 15 20" fill="white">
              <path d="M3 20V10.85C2.15 10.6167 1.4375 10.15 0.8625 9.45C0.2875 8.75 0 7.93333 0 7V0H2V7H3V0H5V7H6V0H8V7C8 7.93333 7.7125 8.75 7.1375 9.45C6.5625 10.15 5.85 10.6167 5 10.85V20H3ZM13 20V12H10V5C10 3.61667 10.4875 2.4375 11.4625 1.4625C12.4375 0.4875 13.6167 0 15 0V20H13Z" />
            </svg>
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <div className="font-semibold text-[#1c1b1b] text-[15px] leading-tight">ProfitPlate</div>
                <div className="text-[#5c5f61] text-[11px]">Management Suite</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={collapsed ? item.label : undefined}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `relative flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-[8px] mb-0.5 transition-all overflow-hidden
                ${isActive
                  ? "bg-[#f6f3f2] text-[#1a1c1c]"
                  : "text-[#5c5f61] hover:bg-gray-100 hover:text-[#1c1b1b]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-[8px] border-r-4 border-[#5d5f5f] pointer-events-none" />
                  )}
                  <svg width="18" height="18" viewBox={item.icon.vb} fill="currentColor" className="shrink-0">
                    <path d={item.icon.d} />
                  </svg>
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                        className="font-medium text-[14px] whitespace-nowrap leading-none"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-2 py-3 border-t border-[#e5e2e1] shrink-0">
          <button
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] w-full text-[#5c5f61] hover:bg-red-50 hover:text-red-600 transition-all overflow-hidden"
          >
            <svg width="18" height="18" viewBox={ICON_PATHS.logout.vb} fill="currentColor" className="shrink-0">
              <path d={ICON_PATHS.logout.d} />
            </svg>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="font-medium text-[14px] whitespace-nowrap"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-[#e5e2e1] px-4 md:px-6 h-[60px] flex items-center gap-3 shrink-0 z-10">
          {/* Toggle */}
          <button
            onClick={() => { toggle(); setMobileOpen((o) => !o); }}
            className="w-8 h-8 flex items-center justify-center rounded-[6px] text-[#5c5f61] hover:bg-gray-100 transition-colors shrink-0"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
              <path d="M0 14v-2h20v2H0zm0-6V6h20v2H0zm0-6V0h20v2H0z" />
            </svg>
          </button>

          {routerLocation.pathname !== "/settings" && (
            <LocationDropdown selected={selectedLocation} onSelect={setSelectedLocation} />
          )}

          {/* Time tabs — dashboard only */}
          {routerLocation.pathname === "/dashboard" && (
            <div className="hidden sm:flex items-center bg-gray-100 rounded-[8px] p-0.5 gap-0.5">
              {(["Daily", "Weekly", "Monthly"] as TimeRange[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTime(t)}
                  className={`px-3 py-1 rounded-[6px] text-sm font-medium transition-all ${
                    activeTime === t ? "bg-white text-[#1c1b1b] shadow-sm" : "text-[#5c5f61] hover:text-[#1c1b1b]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1" />

          {/* Bell */}
          <button
            onClick={() => setNotificationsOpen((o) => !o)}
            className="relative w-8 h-8 flex items-center justify-center rounded-[6px] text-[#5c5f61] hover:bg-gray-100 transition-colors"
          >
            <svg width="14" height="18" viewBox={ICON_PATHS.bell.vb} fill="currentColor">
              <path d={ICON_PATHS.bell.d} />
            </svg>
            <AnimatePresence>
              {unreadCount > 0 && (
                <motion.span
                  key={unreadCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                />
              )}
            </AnimatePresence>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-semibold">
                {user?.name?.[0] ?? "A"}
              </div>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <motion.div
            key={routerLocation.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-full"
          >
            <Outlet context={{ selectedLocation, activeTime }} />
          </motion.div>
        </main>
      </div>

      <NotificationsDrawer
        open={notificationsOpen}
        notifications={notifications}
        onClose={() => setNotificationsOpen(false)}
        onMarkAllRead={handleMarkAllRead}
        onClearRead={handleClearRead}
        onDelete={handleDeleteNotification}
        onMarkRead={handleMarkRead}
      />
    </div>
  );
}
