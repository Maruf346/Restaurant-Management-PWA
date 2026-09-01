import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toast, { useToast } from "../../components/ui/Toast";

interface PurchaseEntry {
  id: string;
  ingredient: string;
  ingredientIcon: string;
  quantity: number;
  unit: string;
  purchasePrice: number;
  date: string;
}

const INGREDIENT_OPTIONS = [
  { name: "Rice Noodles", icon: "🍜" },
  { name: "Shrimp (Medium)", icon: "🦐" },
  { name: "Tofu (Firm)", icon: "🫙" },
  { name: "Bean Sprouts", icon: "🌱" },
  { name: "Thai Basil", icon: "🌿" },
  { name: "Oyster Sauce", icon: "🍶" },
  { name: "Palm Sugar", icon: "🍬" },
  { name: "Fish Sauce", icon: "🐟" },
  { name: "Rice Noodles (Premium)", icon: "🍜" },
  { name: "Black Tiger Shrimp", icon: "🦐" },
  { name: "Firm Tofu", icon: "🫙" },
  { name: "Oyster Sauce (Gallon)", icon: "🍶" },
];

const INITIAL_ENTRIES: PurchaseEntry[] = [
  { id: "1", ingredient: "Rice Noodles (Premium)", ingredientIcon: "🍜", quantity: 50, unit: "kg", purchasePrice: 2500.0, date: "Oct 24, 2023" },
  { id: "2", ingredient: "Black Tiger Shrimp", ingredientIcon: "🦐", quantity: 20, unit: "kg", purchasePrice: 8400.0, date: "Oct 23, 2023" },
  { id: "3", ingredient: "Firm Tofu", ingredientIcon: "🫙", quantity: 500, unit: "units", purchasePrice: 1500.0, date: "Oct 22, 2023" },
  { id: "4", ingredient: "Oyster Sauce (Gallon)", ingredientIcon: "🍶", quantity: 10, unit: "liters", purchasePrice: 1200.0, date: "Oct 20, 2023" },
  { id: "5", ingredient: "Thai Basil", ingredientIcon: "🌿", quantity: 5, unit: "kg", purchasePrice: 450.0, date: "Oct 19, 2023" },
  { id: "6", ingredient: "Bean Sprouts", ingredientIcon: "🌱", quantity: 15, unit: "kg", purchasePrice: 750.0, date: "Oct 18, 2023" },
  { id: "7", ingredient: "Shrimp (Medium)", ingredientIcon: "🦐", quantity: 30, unit: "kg", purchasePrice: 16800.0, date: "Oct 17, 2023" },
  { id: "8", ingredient: "Rice Noodles", ingredientIcon: "🍜", quantity: 100, unit: "kg", purchasePrice: 800.0, date: "Oct 16, 2023" },
  { id: "9", ingredient: "Fish Sauce", ingredientIcon: "🐟", quantity: 20, unit: "liters", purchasePrice: 1600.0, date: "Oct 15, 2023" },
  { id: "10", ingredient: "Palm Sugar", ingredientIcon: "🍬", quantity: 10, unit: "kg", purchasePrice: 650.0, date: "Oct 14, 2023" },
  { id: "11", ingredient: "Tofu (Firm)", ingredientIcon: "🫙", quantity: 200, unit: "units", purchasePrice: 600.0, date: "Oct 13, 2023" },
  { id: "12", ingredient: "Oyster Sauce", ingredientIcon: "🍶", quantity: 5, unit: "liters", purchasePrice: 400.0, date: "Oct 12, 2023" },
];

const UNITS = ["kg", "g", "liters", "ml", "units", "pieces", "pack"];
const PAGE_SIZE = 5;

interface AddEntryModalProps {
  onClose: () => void;
  onSave: (entry: Omit<PurchaseEntry, "id">) => void;
}

function AddEntryModal({ onClose, onSave }: AddEntryModalProps) {
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [quantity, setQuantity] = useState("0.00");
  const [unit, setUnit] = useState("kg");
  const [purchasePrice, setPurchasePrice] = useState("0.00");
  const [date, setDate] = useState("");

  const filteredIngredients = INGREDIENT_OPTIONS.filter((ing) =>
    ing.name.toLowerCase().includes(ingredientSearch.toLowerCase())
  );

  const handleSelectIngredient = (name: string) => {
    setSelectedIngredient(name);
    setIngredientSearch(name);
    setShowDropdown(false);
  };

  const handleSave = () => {
    if (!selectedIngredient.trim()) return;
    const icon = INGREDIENT_OPTIONS.find((i) => i.name === selectedIngredient)?.icon ?? "📦";
    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : "—";
    onSave({
      ingredient: selectedIngredient,
      ingredientIcon: icon,
      quantity: parseFloat(quantity) || 0,
      unit,
      purchasePrice: parseFloat(purchasePrice) || 0,
      date: formattedDate,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(49,48,48,0.1)] backdrop-blur-[5px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[512px] bg-white rounded-[12px] overflow-visible shadow-[0px_12px_24px_-12px_rgba(0,0,0,0.12)] border border-white"
      >
        {/* Header */}
        <div className="px-[25px] pt-[25px] pb-[17px] border-b border-[#f1edec] flex items-center justify-between">
          <h2 className="text-[#1c1b1b] text-[24px] font-medium leading-[33.6px]">Add Purchase Entry</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-gray-100 transition-colors text-[#444748]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" /><line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-[25px] py-[24px] flex flex-col gap-[24px]">

          {/* Ingredient Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Ingredient Name</label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10" width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={ingredientSearch}
                onChange={(e) => {
                  setIngredientSearch(e.target.value);
                  setSelectedIngredient("");
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                placeholder="Search ingredients..."
                className="w-full bg-white border border-[#6b7280] rounded-[8px] pl-[41px] pr-[36px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#747878] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="5" viewBox="0 0 10 5" fill="none">
                <path d="M5 5L0 0H10L5 5V5" fill="#747878" />
              </svg>
              <AnimatePresence>
                {showDropdown && filteredIngredients.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-[8px] shadow-[0px_8px_20px_-4px_rgba(0,0,0,0.1)] z-50 max-h-[180px] overflow-y-auto"
                  >
                    {filteredIngredients.map((ing) => (
                      <button
                        key={ing.name}
                        onMouseDown={() => handleSelectIngredient(ing.name)}
                        className="w-full text-left px-4 py-2.5 text-[14px] text-[#1c1b1b] hover:bg-[#f8fafc] transition-colors flex items-center gap-2"
                      >
                        <span>{ing.icon}</span>
                        <span>{ing.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quantity + Unit */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-[2]">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Purchase Quantity</label>
              <input
                type="number"
                step="0.01"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Unit</label>
              <div className="relative">
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-[8px] pl-[13px] pr-[36px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#6b7280] transition-all"
                >
                  {UNITS.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path d="M7.2 9.6L12 14.4L16.8 9.6" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Purchase Price + Date */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Purchase Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#747878] text-[16px]">$</span>
                <input
                  type="number"
                  step="0.01"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  className="w-full bg-white border border-[#6b7280] rounded-[8px] pl-[28px] pr-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Date</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 18 20" fill="none">
                  <path d="M1 7H17M5 1V3M13 1V3M1 3C1 2.44772 1.44772 2 2 2H16C16.5523 2 17 2.44772 17 3V18C17 18.5523 16.5523 19 16 19H2C1.44772 19 1 18.5523 1 18V3Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#6b7280] rounded-[8px] pl-[36px] pr-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-[25px] pt-[17px] pb-[25px] border-t border-[#f1edec] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-white border border-[#e2e8f0] text-[#1c1b1b] text-[14px] font-semibold rounded-[8px] px-[25px] py-[11px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!selectedIngredient.trim()}
            className="bg-[#0f172a] disabled:opacity-50 text-white text-[14px] font-semibold rounded-[8px] px-[24px] py-[11px] hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          >
            Add Entry
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PaginationBar({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (page: number) => void;
}) {
  const pages: (number | "...")[] = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push("...");
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push("...");
    pages.push(total);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
      >
        <svg width="5.5" height="9" viewBox="0 0 6.17 10" fill="none">
          <path d="M5 1L1 5L5 9" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center text-[#747878] text-[16px]">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`w-8 h-8 rounded-[4px] text-[12px] font-medium flex items-center justify-center transition-colors ${
              current === p
                ? "bg-white border border-[#e2e8f0] text-[#1c1b1b] shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
                : "text-[#444748] hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
      >
        <svg width="5.5" height="9" viewBox="0 0 6.17 10" fill="none">
          <path d="M1 1L5 5L1 9" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default function PurchasesPage() {
  const [entries, setEntries] = useState<PurchaseEntry[]>(INITIAL_ENTRIES);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { toasts, addToast, dismiss } = useToast();

  const filtered = entries.filter((e) =>
    e.ingredient.toLowerCase().includes(search.toLowerCase())
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

  const handleAdd = (data: Omit<PurchaseEntry, "id">) => {
    setEntries((prev) => [{ ...data, id: String(Date.now()) }, ...prev]);
    setShowModal(false);
    addToast(`Purchase entry for "${data.ingredient}" added successfully`, "success");
  };

  const formatPrice = (price: number) =>
    `฿ ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 mx-auto">

        {/* Page Header */}
        <div className="mb-6">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold tracking-[-0.32px] leading-tight">
                {"Purchases & Prices"}
              </h1>
              <p className="text-[#444748] text-[12px] sm:text-[16px] leading-snug max-w-[672px]">
                Manage and monitor ingredient purchase records. Track quantity, cost, and historical pricing to maintain accurate inventory valuation and cost analysis.
              </p>
            </div>
            {/* Add Entry — always visible, icon-only on mobile */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-[8px] sm:py-2 hover:bg-[#1e293b] transition-colors flex-shrink-0 mt-1"
            >
              <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                <path d="M5.5 0.5V10.5M0.5 5.5H10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="hidden sm:inline">Add Entry</span>
            </button>
          </div>

          {/* Search — full-width row on mobile, right-aligned on desktop */}
          <div className="mt-4 sm:mt-3 flex sm:justify-end">
            <div className="relative w-full sm:w-[220px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search ingredients..."
                className="w-full bg-white border border-[#e2e8f0] rounded-[8px] pl-[34px] pr-[10px] py-[8px] text-[13px] sm:text-[14px] text-[#1c1b1b] placeholder:text-[#747878] focus:outline-none focus:border-[#6b7280] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-[8px] border border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[440px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                  <th className="text-left px-4 py-3 text-[#444748] text-[14px] font-semibold tracking-[0.28px] whitespace-nowrap">Ingredient</th>
                  <th className="text-right px-4 py-3 text-[#444748] text-[14px] font-semibold tracking-[0.28px] whitespace-nowrap">Purchase Quantity</th>
                  <th className="text-right px-4 py-3 text-[#444748] text-[14px] font-semibold tracking-[0.28px] whitespace-nowrap">Purchase Price</th>
                  <th className="text-right px-4 py-3 text-[#444748] text-[14px] font-semibold tracking-[0.28px] whitespace-nowrap">Date</th>
                </tr>
              </thead>
              <motion.tbody
                key={`${safePage}-${search}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-16 text-[#5c5f61] text-[14px]">
                      {search ? `No entries matching "${search}"` : "No purchase entries yet."}
                    </td>
                  </tr>
                ) : (
                  paginated.map((entry) => (
                    <tr
                      key={entry.id}
                      className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#f1edec] rounded-[4px] size-8 flex items-center justify-center flex-shrink-0 text-[14px]">
                            {entry.ingredientIcon}
                          </div>
                          <span className="text-[#1c1b1b] text-[14px] font-medium leading-[21px]">{entry.ingredient}</span>
                        </div>
                      </td>
                      <td className="px-4 py-[18px] text-right text-[#1c1b1b] text-[14px] leading-[21px]">
                        {entry.quantity} {entry.unit}
                      </td>
                      <td className="px-4 py-[18px] text-right text-[#1c1b1b] text-[14px] leading-[21px]">
                        {formatPrice(entry.purchasePrice)}
                      </td>
                      <td className="px-4 py-[18px] text-right text-[#444748] text-[14px] leading-[21px]">
                        {entry.date}
                      </td>
                    </tr>
                  ))
                )}
              </motion.tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-[#f8fafc] border-t border-[#f1f5f9] px-4 py-3 flex items-center justify-between gap-2">
            <span className="text-[#444748] text-[12px] sm:text-[14px]">
              {filtered.length === 0
                ? "No entries"
                : `Showing ${start}–${end} of ${filtered.length}`}
            </span>
            <PaginationBar
              current={safePage}
              total={totalPages}
              onChange={(p) => setCurrentPage(p)}
            />
          </div>
        </div>
      </div>

      {/* Add Entry Modal */}
      <AnimatePresence>
        {showModal && (
          <AddEntryModal
            onClose={() => setShowModal(false)}
            onSave={handleAdd}
          />
        )}
      </AnimatePresence>

      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
