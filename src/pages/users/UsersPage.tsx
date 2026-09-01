import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toast, { useToast } from "../../components/ui/Toast";

type Role = "Admin" | "Restaurant Manager" | "Inventory" | "Reports Viewer" | "Chef";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
  avatarColor?: string;
  avatarInitials?: string;
  hasPhoto?: boolean;
}

const INITIAL_USERS: User[] = [
  { id: "1", name: "Sarah Jenkins", email: "s.jenkins@profitplate.com", role: "Admin", active: true, avatarColor: "#c4b5a3", hasPhoto: true },
  { id: "2", name: "Michael Chen", email: "m.chen@profitplate.com", role: "Restaurant Manager", active: true, avatarColor: "#a8b8c8", hasPhoto: true },
  { id: "3", name: "Elena Rodriguez", email: "e.rodriguez@profitplate.com", role: "Inventory", active: true, avatarColor: "#d4c5e2", avatarInitials: "ER" },
  { id: "4", name: "David Kim", email: "d.kim@profitplate.com", role: "Inventory", active: false, avatarColor: "#c8d0c4", hasPhoto: true },
  { id: "5", name: "Priya Nair", email: "p.nair@profitplate.com", role: "Reports Viewer", active: true, avatarColor: "#f0c8a8", avatarInitials: "PN" },
  { id: "6", name: "James Taylor", email: "j.taylor@profitplate.com", role: "Chef", active: true, avatarColor: "#b8d4d8", avatarInitials: "JT" },
  { id: "7", name: "Liu Wei", email: "l.wei@profitplate.com", role: "Restaurant Manager", active: true, avatarColor: "#e8c4c4", avatarInitials: "LW" },
  { id: "8", name: "Amara Osei", email: "a.osei@profitplate.com", role: "Inventory", active: false, avatarColor: "#d8e4c0", avatarInitials: "AO" },
  { id: "9", name: "Nina Patel", email: "n.patel@profitplate.com", role: "Chef", active: true, avatarColor: "#e0d4c0", avatarInitials: "NP" },
  { id: "10", name: "Carlos Reyes", email: "c.reyes@profitplate.com", role: "Reports Viewer", active: true, avatarColor: "#c0d4e8", avatarInitials: "CR" },
  { id: "11", name: "Fatima Al-Rashid", email: "f.alrashid@profitplate.com", role: "Admin", active: true, avatarColor: "#e8d4b8", avatarInitials: "FA" },
  { id: "12", name: "Ben Nakamura", email: "b.nakamura@profitplate.com", role: "Chef", active: false, avatarColor: "#d0e0d4", avatarInitials: "BN" },
];

const ROLES: Role[] = ["Admin", "Restaurant Manager", "Inventory", "Reports Viewer", "Chef"];
const PAGE_SIZE = 4;

function roleColor(role: Role) {
  switch (role) {
    case "Admin": return "bg-[#f1f5f9] text-[#334155]";
    case "Restaurant Manager": return "bg-[#f0fdf4] text-[#15803d]";
    case "Inventory": return "bg-[#eff6ff] text-[#1d4ed8]";
    case "Reports Viewer": return "bg-[#fef3c7] text-[#b45309]";
    case "Chef": return "bg-[#fdf4ff] text-[#9333ea]";
  }
}

function Avatar({ user }: { user: User }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[13px] font-semibold text-white overflow-hidden"
      style={{ backgroundColor: user.avatarColor || "#c4c7c8" }}
    >
      {user.avatarInitials ?? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
    </div>
  );
}

function Toggle({ active, onChange }: { active: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${active ? "bg-[#0f172a]" : "bg-[#cbd5e1]"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  );
}

interface InviteModalProps {
  onClose: () => void;
  onInvite: (name: string, email: string, role: Role) => void;
}

function InviteModal({ onClose, onInvite }: InviteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; role?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!role) newErrors.role = "Please select a role.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = () => {
    if (!validate()) return;
    onInvite(name.trim(), email.trim(), role as Role);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(49,48,48,0.15)] backdrop-blur-[5px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[500px] bg-white rounded-[16px] overflow-hidden shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.06)]"
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-5">
          <h2 className="text-[#1c1b1b] text-[22px] font-bold mb-1">Invite New User</h2>
          <p className="text-[#5c5f61] text-[14px]">Send an invitation to join the ProfitPlate management suite.</p>
        </div>

        {/* Body */}
        <div className="px-7 pb-6 flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1c1b1b] text-[14px] font-semibold">Full Name</label>
            <input
              autoFocus
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
              placeholder="e.g. Jane Doe"
              className={`w-full bg-white border rounded-[8px] px-[14px] py-[12px] text-[15px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none transition-all ${errors.name ? "border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]/20" : "border-[#e2e8f0] focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/10"}`}
            />
            {errors.name && <p className="text-[#dc2626] text-[12px]">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1c1b1b] text-[14px] font-semibold">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
              placeholder="jane.doe@example.com"
              className={`w-full bg-white border rounded-[8px] px-[14px] py-[12px] text-[15px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none transition-all ${errors.email ? "border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]/20" : "border-[#e2e8f0] focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/10"}`}
            />
            {errors.email && <p className="text-[#dc2626] text-[12px]">{errors.email}</p>}
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[#1c1b1b] text-[14px] font-semibold">Role</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => { setRole(e.target.value as Role); setErrors((p) => ({ ...p, role: undefined })); }}
                className={`w-full appearance-none bg-white border rounded-[8px] pl-[14px] pr-[36px] py-[12px] text-[15px] focus:outline-none transition-all ${!role ? "text-[#c4c7c8]" : "text-[#1c1b1b]"} ${errors.role ? "border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]/20" : "border-[#e2e8f0] focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/10"}`}
              >
                <option value="">Select a role...</option>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {errors.role && <p className="text-[#dc2626] text-[12px]">{errors.role}</p>}
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 pb-7 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-[#1c1b1b] text-[14px] font-semibold px-5 py-2.5 hover:bg-gray-50 rounded-[8px] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-5 py-2.5 hover:bg-[#1e293b] transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
          >
            Send Invitation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showInvite, setShowInvite] = useState(false);
  const { toasts, addToast, dismiss } = useToast();

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const end = Math.min(safePage * PAGE_SIZE, filtered.length);

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handleToggle = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, active: !u.active } : u))
    );
  };

  const handleInvite = (name: string, email: string, role: Role) => {
    // Check for duplicate email
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      addToast(`A user with email "${email}" already exists.`, "error");
      setShowInvite(false);
      return;
    }
    const newUser: User = {
      id: String(Date.now()),
      name,
      email,
      role,
      active: false,
      avatarInitials: name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase(),
      avatarColor: ["#c4b5a3", "#a8b8c8", "#d4c5e2", "#f0c8a8", "#b8d4d8", "#e8c4c4"][Math.floor(Math.random() * 6)],
    };
    setUsers((prev) => [newUser, ...prev]);
    setShowInvite(false);
    addToast(`Invitation sent to ${name} (${email})`, "success");
  };

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 mx-auto">

        {/* Page Header */}
        <div className="flex items-start justify-between gap-3 mb-6">
          <div className="min-w-0">
            <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold tracking-[-0.32px] leading-tight">Staffing &amp; Users</h1>
            <p className="text-[#444748] text-[12px] sm:text-[16px] mt-0.5 sm:mt-1">Manage system access and roles across locations.</p>
          </div>
          <button
            onClick={() => setShowInvite(true)}
            className="flex items-center gap-2 bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2.5 hover:bg-[#1e293b] transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.08)] flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2Z" fill="white"/>
              <path d="M2 14C2 11.2386 4.68629 9 8 9C8.69 9 9.36 9.09 10 9.26" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12.5 11V15M10.5 13H14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:inline">Invite User</span>
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02)] overflow-hidden">

          {/* Search */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-[#f1f5f9]">
            <div className="relative w-full sm:w-[280px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search users..."
                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] pl-[34px] pr-[12px] py-[8px] text-[13px] sm:text-[14px] text-[#1c1b1b] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#6b7280] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px]">
              <thead>
                <tr className="border-b border-[#f1f5f9]">
                  <th className="text-left px-4 sm:px-6 py-3 text-[#5c5f61] text-[12px] sm:text-[13px] font-medium">User</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-[#5c5f61] text-[12px] sm:text-[13px] font-medium">Role</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-[#5c5f61] text-[12px] sm:text-[13px] font-medium">Access</th>
                </tr>
              </thead>
              <motion.tbody
                key={`${search}-${currentPage}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-14 text-[#9ca3af] text-[14px]">
                      {search ? `No users matching "${search}"` : "No users yet."}
                    </td>
                  </tr>
                ) : (
                  paginated.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <Avatar user={user} />
                          <div className="min-w-0">
                            <div className="text-[#1c1b1b] text-[13px] sm:text-[14px] font-semibold truncate">{user.name}</div>
                            <div className="text-[#5c5f61] text-[11px] sm:text-[13px] truncate">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-medium whitespace-nowrap ${roleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Toggle active={user.active} onChange={() => handleToggle(user.id)} />
                          <span className={`text-[12px] sm:text-[13px] font-medium whitespace-nowrap ${user.active ? "text-[#1c1b1b]" : "text-[#9ca3af]"}`}>
                            {user.active ? "Active" : "Suspended"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </motion.tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="border-t border-[#f1f5f9] px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
            <span className="text-[#444748] text-[11px] sm:text-[13px] whitespace-nowrap">
              {filtered.length === 0 ? "No users" : `${start}–${end} of ${filtered.length}`}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 border border-[#e2e8f0] rounded-[6px] text-[13px] font-medium text-[#5c5f61] hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="5" height="8" viewBox="0 0 6 10" fill="none">
                  <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>
              <span className="text-[#444748] text-[12px] px-1 sm:hidden">
                {safePage}/{totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 bg-[#0f172a] border border-[#0f172a] rounded-[6px] text-[13px] font-medium text-white hover:bg-[#1e293b] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <svg width="5" height="8" viewBox="0 0 6 10" fill="none">
                  <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Modal */}
      <AnimatePresence>
        {showInvite && (
          <InviteModal
            onClose={() => setShowInvite(false)}
            onInvite={handleInvite}
          />
        )}
      </AnimatePresence>

      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
