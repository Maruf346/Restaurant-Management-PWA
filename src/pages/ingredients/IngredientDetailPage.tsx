import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { INITIAL_INGREDIENTS, type Ingredient } from "./IngredientsPage";

interface PurchaseRecord {
  id: string;
  ingredient_id: string;
  ingredient_name: string;
  supplier_name: string;
  quantity: number;
  unit: string;
  purchase_price: number;
  unit_cost: number;
  purchase_date: string;
}

const INITIAL_PURCHASES: PurchaseRecord[] = [
  {
    id: "p1",
    ingredient_id: "1",
    ingredient_name: "Rice Noodles",
    supplier_name: "Golden Harvest Foods",
    quantity: 25,
    unit: "kg",
    purchase_price: 2200,
    unit_cost: 88,
    purchase_date: "2026-09-05",
  },
  {
    id: "p2",
    ingredient_id: "2",
    ingredient_name: "Shrimp (Medium)",
    supplier_name: "Aqua Prime Supplies",
    quantity: 12.5,
    unit: "kg",
    purchase_price: 7200,
    unit_cost: 576,
    purchase_date: "2026-09-02",
  },
  {
    id: "p3",
    ingredient_id: "1",
    ingredient_name: "Rice Noodles",
    supplier_name: "East Coast Imports",
    quantity: 30,
    unit: "kg",
    purchase_price: 2550,
    unit_cost: 85,
    purchase_date: "2026-08-28",
  },
  {
    id: "p4",
    ingredient_id: "6",
    ingredient_name: "Oyster Sauce",
    supplier_name: "Oriental Pantry",
    quantity: 6,
    unit: "liters",
    purchase_price: 720,
    unit_cost: 120,
    purchase_date: "2026-08-18",
  },
];

const UNITS = ["g", "kg", "liters", "ml", "units", "pieces", "pack"];

interface AddPurchaseModalProps {
  ingredient: Ingredient;
  onClose: () => void;
  onSave: (entry: Omit<PurchaseRecord, "id" | "ingredient_id" | "ingredient_name">) => void;
}

function AddPurchaseModal({ ingredient, onClose, onSave }: AddPurchaseModalProps) {
  const [supplierName, setSupplierName] = useState(ingredient.supplierName || "");
  const [quantity, setQuantity] = useState("0");
  const [unit, setUnit] = useState(ingredient.unit || "kg");
  const [purchasePrice, setPurchasePrice] = useState("0.00");
  const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().slice(0, 10));

  const unitCost = useMemo(() => {
    const qty = Number(quantity) || 0;
    const total = Number(purchasePrice) || 0;
    return qty > 0 ? total / qty : 0;
  }, [quantity, purchasePrice]);

  const handleSave = () => {
    if (!supplierName.trim()) return;
    onSave({
      supplier_name: supplierName.trim(),
      quantity: Number(quantity) || 0,
      unit,
      purchase_price: Number(purchasePrice) || 0,
      unit_cost: Number(unitCost.toFixed(2)),
      purchase_date: purchaseDate,
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
        className="w-full max-w-[560px] bg-white rounded-[12px] overflow-hidden shadow-[0px_12px_24px_-12px_rgba(0,0,0,0.12)] border border-white"
      >
        <div className="px-5 pt-5 pb-4 border-b border-[#f1edec] flex items-center justify-between">
          <h2 className="text-[#1c1b1b] text-[22px] sm:text-[24px] font-medium">Add Purchase</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-gray-100 transition-colors text-[#444748]"
            aria-label="Close add purchase modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" /><line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6 flex flex-col gap-4">
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] px-3 py-2.5">
            <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-[#444748]">Ingredient</p>
            <p className="text-[#1c1b1b] text-[16px] font-semibold mt-1">{ingredient.name}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Supplier Name</label>
            <input
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              placeholder="e.g., Fresh Foods Co."
              className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Quantity</label>
              <input
                type="number"
                step="0.01"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
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
                  <path d="M5 5L0 0H10L5 5V5" fill="#6B7280" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Purchase Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#747878] text-[16px]">฿</span>
                <input
                  type="number"
                  step="0.01"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  className="w-full bg-white border border-[#6b7280] rounded-[8px] pl-[28px] pr-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Purchase Date</label>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[13px] py-[11px] text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
            </div>
          </div>

          <div className="rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] p-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-[#444748]">Unit Cost</p>
            <p className="text-[#1c1b1b] text-[20px] font-semibold mt-1">฿ {Number(unitCost || 0).toFixed(2)}</p>
          </div>
        </div>

        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#f1edec] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-white border border-[#e2e8f0] text-[#1c1b1b] text-[14px] font-semibold rounded-[8px] px-[20px] py-[10px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!supplierName.trim()}
            className="bg-[#0f172a] disabled:opacity-50 text-white text-[14px] font-semibold rounded-[8px] px-[20px] py-[10px] hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          >
            Save Purchase
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IngredientDetailPage() {
  const { ingredientId } = useParams();
  const navigate = useNavigate();
  const [purchaseEntries, setPurchaseEntries] = useState<PurchaseRecord[]>(INITIAL_PURCHASES);
  const [showAddModal, setShowAddModal] = useState(false);

  const ingredient = INITIAL_INGREDIENTS.find((item) => item.id === ingredientId) ?? INITIAL_INGREDIENTS[0];

  const filteredPurchases = purchaseEntries.filter((entry) => entry.ingredient_id === ingredient.id);

  const handleAddPurchase = (entry: Omit<PurchaseRecord, "id" | "ingredient_id" | "ingredient_name">) => {
    const nextEntry: PurchaseRecord = {
      id: `p${Date.now()}`,
      ingredient_id: ingredient.id,
      ingredient_name: ingredient.name,
      ...entry,
    };

    setPurchaseEntries((prev) => [nextEntry, ...prev]);
    setShowAddModal(false);
  };

  const formatCurrency = (value: number) => `฿ ${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const formatDate = (value: string) => {
    if (!value) return "—";
    return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate("/ingredients")}
              className="w-9 h-9 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
              aria-label="Back to ingredients"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <div className="min-w-0">
              <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold tracking-[-0.32px] leading-tight truncate">
                {ingredient.name}
              </h1>
              <p className="text-[#444748] text-[13px] sm:text-[16px] leading-[24px]">Purchase history and inventory tracking</p>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2 hover:bg-[#1e293b] transition-colors flex-shrink-0"
            aria-label="Add purchase"
          >
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 0.5V10.5M0.5 5.5H10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="hidden sm:inline sm:ml-2">Add Purchase</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] overflow-hidden mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6">
            <div className="rounded-[10px] bg-[#f8fafc] border border-[#e2e8f0] p-4">
              <p className="text-[11px] uppercase tracking-[0.6px] text-[#444748] font-medium">Unit</p>
              <p className="text-[#1c1b1b] text-[20px] font-semibold mt-2">{ingredient.unit}</p>
            </div>
            <div className="rounded-[10px] bg-[#f8fafc] border border-[#e2e8f0] p-4">
              <p className="text-[11px] uppercase tracking-[0.6px] text-[#444748] font-medium">Supplier</p>
              <p className="text-[#1c1b1b] text-[20px] font-semibold mt-2">{ingredient.supplierName}</p>
            </div>
            <div className="rounded-[10px] bg-[#f8fafc] border border-[#e2e8f0] p-4">
              <p className="text-[11px] uppercase tracking-[0.6px] text-[#444748] font-medium">Cost / Base Unit</p>
              <p className="text-[#1c1b1b] text-[20px] font-semibold mt-2">{formatCurrency(ingredient.costPerBaseUnit)}</p>
            </div>
            <div className="rounded-[10px] bg-[#f8fafc] border border-[#e2e8f0] p-4">
              <p className="text-[11px] uppercase tracking-[0.6px] text-[#444748] font-medium">Current Stock</p>
              <p className="text-[#1c1b1b] text-[20px] font-semibold mt-2">{ingredient.currentStock}</p>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                  <th className="text-left px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Ingredient Name</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Supplier Name</th>
                  <th className="text-right px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Quantity</th>
                  <th className="text-left px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Unit</th>
                  <th className="text-right px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Purchase Price</th>
                  <th className="text-right px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Unit Cost</th>
                  <th className="text-right px-4 sm:px-6 py-3 text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">Purchase Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredPurchases.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-16 text-[#5c5f61] text-[14px]">
                      No purchase history yet for this ingredient.
                    </td>
                  </tr>
                ) : (
                  filteredPurchases.map((entry) => (
                    <tr key={entry.id} className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors">
                      <td className="px-4 sm:px-6 py-[16px] text-[#1c1b1b] text-[14px] font-medium">{entry.ingredient_name}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-[#444748] text-[14px]">{entry.supplier_name}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-right text-[#1c1b1b] text-[14px]">{entry.quantity}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-left text-[#444748] text-[14px]">{entry.unit}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-right text-[#1c1b1b] text-[14px]">{formatCurrency(entry.purchase_price)}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-right text-[#1c1b1b] text-[14px]">{formatCurrency(entry.unit_cost)}</td>
                      <td className="px-4 sm:px-6 py-[16px] text-right text-[#444748] text-[14px]">{formatDate(entry.purchase_date)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showAddModal && (
          <AddPurchaseModal
            ingredient={ingredient}
            onClose={() => setShowAddModal(false)}
            onSave={handleAddPurchase}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
