import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toast, { useToast } from "../../components/ui/Toast";

interface Ingredient {
  id: string;
  name: string;
  unit: string;
  purchasePrice: number;
  currentStock: number;
  minStockAlert: number;
}

const INITIAL_INGREDIENTS: Ingredient[] = [
  { id: "1", name: "Rice Noodles", unit: "g", purchasePrice: 0.08, currentStock: 15000, minStockAlert: 2000 },
  { id: "2", name: "Shrimp (Medium)", unit: "kg", purchasePrice: 560.0, currentStock: 12.5, minStockAlert: 2 },
  { id: "3", name: "Tofu (Firm)", unit: "g", purchasePrice: 0.14, currentStock: 5000, minStockAlert: 500 },
  { id: "4", name: "Bean Sprouts", unit: "kg", purchasePrice: 50.0, currentStock: 8.0, minStockAlert: 1 },
  { id: "5", name: "Thai Basil", unit: "kg", purchasePrice: 90.0, currentStock: 3.5, minStockAlert: 0.5 },
  { id: "6", name: "Oyster Sauce", unit: "liters", purchasePrice: 120.0, currentStock: 10, minStockAlert: 2 },
  { id: "7", name: "Palm Sugar", unit: "kg", purchasePrice: 65.0, currentStock: 6.0, minStockAlert: 1 },
  { id: "8", name: "Fish Sauce", unit: "liters", purchasePrice: 80.0, currentStock: 8.5, minStockAlert: 1 },
  { id: "9", name: "Galangal", unit: "kg", purchasePrice: 180.0, currentStock: 2.0, minStockAlert: 0.5 },
  { id: "10", name: "Lemongrass", unit: "kg", purchasePrice: 120.0, currentStock: 4.5, minStockAlert: 0.5 },
  { id: "11", name: "Kaffir Lime Leaves", unit: "g", purchasePrice: 0.5, currentStock: 800, minStockAlert: 100 },
  { id: "12", name: "Coconut Milk", unit: "liters", purchasePrice: 45.0, currentStock: 20, minStockAlert: 5 },
];

const UNITS = ["g", "kg", "liters", "ml", "units", "pieces", "pack"];
const PAGE_SIZE = 5;

interface IngredientModalProps {
  initial?: Ingredient | null;
  onClose: () => void;
  onSave: (ing: Omit<Ingredient, "id">) => void;
}

function IngredientModal({ initial, onClose, onSave }: IngredientModalProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [unit, setUnit] = useState(initial?.unit ?? "kg");
  const [purchasePrice, setPurchasePrice] = useState(initial?.purchasePrice.toString() ?? "0.00");
  const [currentStock, setCurrentStock] = useState(initial?.currentStock.toString() ?? "0");
  const [minStockAlert, setMinStockAlert] = useState(initial?.minStockAlert.toString() ?? "0");

  const isEdit = Boolean(initial);

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({
      name: name.trim(),
      unit,
      purchasePrice: parseFloat(purchasePrice) || 0,
      currentStock: parseFloat(currentStock) || 0,
      minStockAlert: parseFloat(minStockAlert) || 0,
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
        className="w-full max-w-[500px] bg-white rounded-[12px] overflow-hidden shadow-[0px_12px_24px_-12px_rgba(0,0,0,0.12)] border border-white"
      >
        {/* Header */}
        <div className="px-[25px] pt-[25px] pb-[17px] border-b border-[#f1edec] flex items-center justify-between">
          <h2 className="text-[#1c1b1b] text-[24px] font-medium leading-[33.6px]">
            {isEdit ? "Edit Ingredient" : "Add New Ingredient"}
          </h2>
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
          {!isEdit && (
            <p className="text-[#444748] text-[14px] -mt-[10px]">
              Enter details to add a new raw material to your inventory.
            </p>
          )}

          {/* Ingredient Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Ingredient Name</label>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Wagyu Beef A5"
              className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
            />
          </div>

          {/* Unit + Purchase Price */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Unit</label>
              <div className="relative">
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-[8px] pl-[13px] pr-[36px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#6b7280] transition-all"
                >
                  {UNITS.map((u) => (
                    <option key={u} value={u}>{u === "kg" ? "Kilogram (kg)" : u === "g" ? "Gram (g)" : u === "liters" ? "Liter (L)" : u === "ml" ? "Milliliter (ml)" : u}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path d="M5 5L0 0H10L5 5V5" fill="#6B7280" />
                </svg>
              </div>
            </div>
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
          </div>

          {/* Current Stock + Min Stock Alert */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Current Stock</label>
              <input
                type="number"
                step="0.01"
                value={currentStock}
                onChange={(e) => setCurrentStock(e.target.value)}
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px] flex items-center gap-1">
                Minimum Stock Alert
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="1.4"/>
                  <line x1="8" y1="7" x2="8" y2="11.5" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="8" cy="5" r="0.7" fill="#9CA3AF"/>
                </svg>
              </label>
              <input
                type="number"
                step="0.01"
                value={minStockAlert}
                onChange={(e) => setMinStockAlert(e.target.value)}
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
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
            disabled={!name.trim()}
            className="bg-[#0f172a] disabled:opacity-50 text-white text-[14px] font-semibold rounded-[8px] px-[24px] py-[11px] hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          >
            {isEdit ? "Save Changes" : "Add Ingredient"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(null);
  const { toasts, addToast, dismiss } = useToast();

  const filtered = ingredients.filter((ing) =>
    ing.name.toLowerCase().includes(search.toLowerCase())
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

  const handleAdd = (data: Omit<Ingredient, "id">) => {
    setIngredients((prev) => [...prev, { ...data, id: String(Date.now()) }]);
    setShowModal(false);
    addToast(`"${data.name}" added successfully`, "success");
  };

  const handleEdit = (data: Omit<Ingredient, "id">) => {
    if (!editingIngredient) return;
    setIngredients((prev) =>
      prev.map((ing) => (ing.id === editingIngredient.id ? { ...data, id: ing.id } : ing))
    );
    setEditingIngredient(null);
    addToast(`"${data.name}" updated successfully`, "success");
  };

  const formatPrice = (price: number) => `฿ ${price.toFixed(2)}`;
  const formatStock = (stock: number) =>
    Number.isInteger(stock) ? stock.toLocaleString() : stock.toString();

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 mx-auto">

        {/* Page Header */}
        <div className="flex items-start justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold tracking-[-0.32px] leading-tight">Ingredients</h1>
            <p className="text-[#444748] text-[14px] sm:text-[16px] leading-[24px]">{"Manage your restaurant's raw materials and purchase costs."}</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2 hover:bg-[#1e293b] transition-colors flex-shrink-0"
          >
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 0.5V10.5M0.5 5.5H10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:inline">Add Ingredients</span>
          </button>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] overflow-hidden">

          {/* Table header bar */}
          <div className="bg-[rgba(248,250,252,0.5)] border-b border-[#f1f5f9] px-4 sm:px-6 py-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-[#1c1b1b] text-[18px] sm:text-[24px] font-medium leading-[33.6px]">Ingredient Directory</h2>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search ingredients..."
                className="bg-white border border-[#e2e8f0] rounded-[8px] pl-[34px] pr-[10px] py-[7px] text-[13px] sm:text-[14px] text-[#1c1b1b] placeholder:text-[#747878] focus:outline-none focus:border-[#6b7280] transition-all w-full sm:w-[200px]"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                  <th className="text-left px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">INGREDIENT NAME</th>
                  <th className="text-left px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">UNIT</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">PURCHASE PRICE</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">CURRENT STOCK</th>
                  <th className="text-center px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">ACTIONS</th>
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
                    <td colSpan={5} className="text-center py-16 text-[#5c5f61] text-[14px]">
                      {search ? `No ingredients matching "${search}"` : "No ingredients yet."}
                    </td>
                  </tr>
                ) : (
                  paginated.map((ing) => (
                    <tr
                      key={ing.id}
                      className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors"
                    >
                      <td className="px-6 py-[18px] text-[#1c1b1b] text-[16px] font-medium">{ing.name}</td>
                      <td className="px-6 py-[18px] text-[#444748] text-[16px]">{ing.unit}</td>
                      <td className="px-6 py-[18px] text-[#1c1b1b] text-[16px] text-right">{formatPrice(ing.purchasePrice)}</td>
                      <td className="px-6 py-[18px] text-[#1c1b1b] text-[16px] text-right">{formatStock(ing.currentStock)}</td>
                      <td className="px-6 py-[16.5px] text-center">
                        <button
                          onClick={() => setEditingIngredient(ing)}
                          className="border border-[#e2e8f0] text-[#5c5f61] text-[12px] font-medium rounded-[6px] px-[13px] py-[7px] hover:bg-gray-50 hover:border-[#cbd5e1] transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </motion.tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-[rgba(248,250,252,0.3)] border-t border-[#f1f5f9] px-6 py-[16px] flex items-center justify-between">
            <span className="text-[#444748] text-[14px]">
              {filtered.length === 0 ? "No ingredients" : `Showing ${start} of ${filtered.length} ingredients`}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-200 transition-colors"
              >
                <svg width="5.5" height="9" viewBox="0 0 6.17 10" fill="none">
                  <path d="M5 1L1 5L5 9" stroke="#444748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-200 transition-colors"
              >
                <svg width="5.5" height="9" viewBox="0 0 6.17 10" fill="none">
                  <path d="M1 1L5 5L1 9" stroke="#444748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Ingredient Modal */}
      <AnimatePresence>
        {showModal && (
          <IngredientModal
            onClose={() => setShowModal(false)}
            onSave={handleAdd}
          />
        )}
      </AnimatePresence>

      {/* Edit Ingredient Modal */}
      <AnimatePresence>
        {editingIngredient && (
          <IngredientModal
            initial={editingIngredient}
            onClose={() => setEditingIngredient(null)}
            onSave={handleEdit}
          />
        )}
      </AnimatePresence>

      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
