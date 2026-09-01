import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInventoryStore } from "../../stores/inventoryStore";
import {
  getProductFoodCost,
  getProductGrossProfit,
  getProductMargin,
} from "../../data/inventory";
import Toast, { useToast } from "../../components/ui/Toast";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import { useState } from "react";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { products, categories, deleteProduct } = useInventoryStore();
  const { toasts, addToast, dismiss } = useToast();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const product = products.find((p) => p.id === productId);
  const category = categories.find((c) => c.id === product?.categoryId);

  if (!product) {
    return (
      <div className="min-h-full flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <p className="text-[#5c5f61] text-[16px]">Product not found.</p>
          <button
            onClick={() => navigate("/inventory")}
            className="mt-4 text-[#0f172a] text-[14px] font-semibold underline"
          >
            Back to Inventory
          </button>
        </div>
      </div>
    );
  }

  const foodCost = getProductFoodCost(product);
  const grossProfit = getProductGrossProfit(product);
  const margin = getProductMargin(product);

  const handleDelete = () => {
    deleteProduct(product.id);
    addToast(`"${product.name}" deleted`, "error");
    setTimeout(() => navigate("/inventory"), 800);
  };

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 sm:pt-16 pb-16 mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex items-center justify-between gap-3 mb-8 flex-wrap"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/inventory")}
              className="w-9 h-9 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C1B1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <h1 className="text-[#0f172a] text-[24px] sm:text-[32px] font-semibold tracking-[-0.32px]">Product Details</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/inventory/${product.id}/edit`)}
              className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#1c1b1b] text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2.5 hover:bg-gray-50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span className="hidden sm:inline">Edit Product</span>
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center gap-2 bg-white border border-[#fecaca] text-red-600 text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2.5 hover:bg-red-50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
              <span className="hidden sm:inline">Delete</span>
            </button>
          </div>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-[25px]">
            <div>
              <p className="text-[#444748] text-[12px] font-medium tracking-[0.6px] uppercase mb-1">
                CATEGORY: {category?.name?.toUpperCase() ?? "UNKNOWN"}
              </p>
              <h2 className="text-[#0f172a] text-[24px] font-medium">{product.name}</h2>
            </div>
            <div className="sm:text-right">
              <p className="text-[#444748] text-[12px] font-medium">Selling Price</p>
              <p className="text-[#0f172a] text-[28px] sm:text-[32px] font-semibold tracking-[-0.32px]">
                ฿ {product.sellingPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: Ingredients Table + Profitability */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Ingredients Table (2 cols) */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] overflow-hidden self-start">
            {/* Table Header */}
            <div className="bg-[#f8fafc] border-b border-[#f1f5f9] px-6 py-5 flex items-center justify-between">
              <h3 className="text-[#1c1b1b] text-[24px] font-medium">Recipe Ingredients</h3>
              <span className="bg-[#e2e8f0] text-[#0f172a] text-[12px] font-medium px-[10px] py-1 rounded-full">
                {product.ingredients.length} Items
              </span>
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f1f5f9]">
                  <th className="text-left px-6 py-3 text-[#444748] text-[12px] font-medium">Ingredient</th>
                  <th className="text-left px-6 py-3 text-[#444748] text-[12px] font-medium">Quantity</th>
                  <th className="text-left px-6 py-3 text-[#444748] text-[12px] font-medium">Unit</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[12px] font-medium">Calculated Cost</th>
                </tr>
              </thead>
              <tbody>
                {product.ingredients.map((ing, idx) => (
                  <tr key={ing.id} className={idx > 0 ? "border-t border-[#f1f5f9]" : ""}>
                    <td className="px-6 py-[16.5px] text-[#1c1b1b] text-[14px] font-medium">{ing.name}</td>
                    <td className="px-6 py-[16.5px] text-[#1c1b1b] text-[14px]">{ing.quantity}</td>
                    <td className="px-6 py-[16.5px] text-[#444748] text-[14px]">{ing.unit}</td>
                    <td className="px-6 py-[16.5px] text-right text-[#1c1b1b] text-[14px]">฿ {ing.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Profitability Card (1 col) */}
          <div className="bg-[#0f172a] rounded-[12px] overflow-hidden relative self-start">
            {/* Subtle background gradient */}
            <div
              className="absolute right-0 top-0 w-32 h-32 rounded-bl-full opacity-50"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)" }}
            />

            <div className="p-[25px] relative">
              <h3 className="text-white text-[24px] font-medium mb-6">Profitability</h3>

              {/* Selling Price Row */}
              <div className="pb-[17px] border-b border-[rgba(255,255,255,0.1)] flex items-end justify-between">
                <span className="text-[rgba(255,255,255,0.7)] text-[16px]">Selling Price</span>
                <span className="text-white text-[24px] font-medium">฿ {product.sellingPrice.toFixed(2)}</span>
              </div>

              {/* Ingredient Cost Row */}
              <div className="py-[17px] border-b border-[rgba(255,255,255,0.1)] flex items-end justify-between">
                <span className="text-[rgba(255,255,255,0.7)] text-[16px]">Total Ingredient Cost</span>
                <span className="text-[#fca5a5] text-[24px] font-medium">฿ {foodCost.toFixed(2)}</span>
              </div>

              {/* Gross Profit */}
              <div className="pt-2 flex items-end justify-between">
                <span className="text-[rgba(255,255,255,0.9)] text-[18px] font-semibold">Gross Profit</span>
                <span className="text-[#34d399] text-[32px] font-semibold tracking-[-0.32px]">฿ {grossProfit.toFixed(2)}</span>
              </div>

              {/* Margin Bar */}
              <div className="pt-6 border-t border-[rgba(255,255,255,0.2)] mt-8">
                <p className="text-[rgba(255,255,255,0.7)] text-[12px] font-medium tracking-[0.3px] uppercase mb-2">
                  PROFIT MARGIN
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(margin, 100)}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-[#34d399] rounded-full relative"
                    >
                      <div
                        className="absolute right-0 top-0 bottom-0 w-4 rounded-full"
                        style={{ background: "linear-gradient(to left, rgba(255,255,255,0.3), rgba(255,255,255,0))" }}
                      />
                    </motion.div>
                  </div>
                  <span className="text-[#34d399] text-[24px] font-bold">{margin.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Delete Confirm */}
      <ConfirmDialog
        open={showDeleteConfirm}
        title="Delete Product"
        message={`Are you sure you want to delete "${product.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />

      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
