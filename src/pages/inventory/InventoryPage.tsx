import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInventoryStore } from "../../stores/inventoryStore";
import {
  getProductFoodCost,
  getProductGrossProfit,
  getProductMargin,
  recentUpdates,
} from "../../data/inventory";
import Toast, { useToast } from "../../components/ui/Toast";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

const PAGE_SIZE = 5;

function MarginBadge({ margin }: { margin: number }) {
  const isGood = margin >= 65;
  if (isGood) {
    return (
      <span className="inline-flex items-center gap-1 px-[9px] py-[5px] rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[12px] font-medium whitespace-nowrap">
        {margin.toFixed(1)}%
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-[9px] py-[5px] rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] text-[12px] font-medium whitespace-nowrap">
      <svg width="11" height="9.6" viewBox="0 0 13 11" fill="none">
        <path d="M6.5 0.5L12.5 10.5H0.5L6.5 0.5Z" fill="#991B1B" stroke="#991B1B" strokeWidth="0.5" strokeLinejoin="round"/>
        <line x1="6.5" y1="5" x2="6.5" y2="8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="6.5" cy="9.5" r="0.5" fill="white"/>
      </svg>
      {margin.toFixed(1)}%
    </span>
  );
}

function ProductThumbnail({ color, name }: { color: string; name: string }) {
  return (
    <div
      className="w-10 h-10 rounded-[4px] flex-shrink-0 flex items-center justify-center text-white text-[13px] font-bold"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function AddCategoryModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (name: string) => void;
}) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim());
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-[rgba(15,23,42,0.2)] backdrop-blur-[2px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[448px] bg-[rgba(255,255,255,0.97)] backdrop-blur-[6px] rounded-[12px] overflow-hidden border border-[rgba(241,245,249,0.8)] shadow-[0px_12px_40px_-12px_rgba(15,23,42,0.08),0px_0px_0px_1px_rgba(241,245,249,0.5)]"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-[17px] border-b border-[#f6f3f2] flex items-start justify-between">
          <div>
            <h2 className="text-[#1c1b1b] text-[24px] font-medium">Add New Category</h2>
            <p className="text-[#444748] text-[14px] mt-2">Organize your menu by creating a new product group.</p>
          </div>
          <button
            onClick={onClose}
            className="mt-1 p-2 rounded-full hover:bg-gray-100 transition-colors text-[#444748]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px]">Category Name</label>
            <div className="relative">
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="e.g., Appetizers, Main Course, Beverages"
                className="w-full bg-white border border-[#6b7280] rounded-[8px] px-[17px] py-[15px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-[17px] bg-[#fcf8f8] border-t border-[#f6f3f2] flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-white border border-[#e2e8f0] text-[#0f172a] text-[14px] font-semibold rounded-[8px] px-[25px] py-[11px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!name.trim()}
            className="bg-[#0f172a] disabled:opacity-50 text-white text-[14px] font-semibold rounded-[8px] px-[24px] py-[11px] hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          >
            Add Category
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InventoryPage() {
  const navigate = useNavigate();
  const { categories, products, addCategory, deleteProduct } = useInventoryStore();
  const { toasts, addToast, dismiss } = useToast();

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);

  const filtered = products.filter((p) => p.categoryId === activeCategory);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const start = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(currentPage * PAGE_SIZE, filtered.length);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(1);
  };

  const handleAddCategory = (name: string) => {
    addCategory(name);
    addToast(`Category "${name}" added successfully`);
  };

  const handleDeleteProduct = () => {
    if (!deletingProductId) return;
    const product = products.find((p) => p.id === deletingProductId);
    deleteProduct(deletingProductId);
    setDeletingProductId(null);
    addToast(`"${product?.name}" deleted`, "error");
    if (paginated.length === 1 && currentPage > 1) setCurrentPage((p) => p - 1);
  };

  // Category performance data
  const categoryStats = categories.map((cat) => {
    const catProducts = products.filter((p) => p.categoryId === cat.id);
    const avgMargin =
      catProducts.length === 0
        ? 0
        : catProducts.reduce((sum, p) => sum + getProductMargin(p), 0) / catProducts.length;
    return { ...cat, avgMargin: Number(avgMargin.toFixed(1)) };
  });
  const maxMargin = Math.max(...categoryStats.map((c) => c.avgMargin), 1);

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-10 pt-6 pb-12 mx-auto">

        {/* Page Header */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold tracking-[-0.32px]">Menu &amp; Recipes</h1>
            <p className="text-[#5c5f61] text-[12px] sm:text-[16px]">Manage your product offerings and track theoretical margins.</p>
          </div>
          <div className="flex items-center gap-[11px]">
            <button
              onClick={() => setShowAddCategory(true)}
              className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#1c1b1b] text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-[17px] py-[9px] hover:bg-gray-50 transition-colors"
            >
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                <path d="M7.5 0V12M0 6H15" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="hidden sm:inline">Add Category</span>
            </button>
            <button
              onClick={() => navigate("/inventory/new")}
              className="flex items-center gap-2 bg-[#0f172a] text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-4 py-2 hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              <svg width="10.5" height="10.5" viewBox="0 0 11 11" fill="none">
                <path d="M5.5 0.5V10.5M0.5 5.5H10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="hidden sm:inline">Add Product</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left: Table Section */}
          <div className="flex-1 min-w-0 w-full flex flex-col gap-6">

            {/* Category Tabs */}
            <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur-[10px] border-b border-[#f1f5f9] pb-px">
              <div className="flex items-center gap-6 px-[10px] pt-3 pb-0 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className="relative pb-[10px] flex-shrink-0 transition-colors"
                  >
                    <span
                      className={`text-[14px] font-semibold tracking-[0.28px] transition-colors ${
                        activeCategory === cat.id ? "text-[#0f172a]" : "text-[#5c5f61] hover:text-[#1c1b1b]"
                      }`}
                    >
                      {cat.name}
                    </span>
                    {activeCategory === cat.id && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0f172a] rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Table Card */}
            <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.01)] overflow-hidden">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                      <th className="text-left px-4 py-[17.5px] text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        PRODUCT NAME
                      </th>
                      <th className="text-right px-4 py-3 text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        SELLING<br />PRICE
                      </th>
                      <th className="text-right px-4 py-3 text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        FOOD<br />COST
                      </th>
                      <th className="text-right px-4 py-3 text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        GROSS<br />PROFIT
                      </th>
                      <th className="text-center px-4 py-[17.5px] text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        MARGIN
                      </th>
                      <th className="text-center px-4 py-[17.5px] text-[#5c5f61] text-[12px] font-medium tracking-[0.6px] uppercase whitespace-nowrap">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <motion.tbody
                    key={`${activeCategory}-${currentPage}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {paginated.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-16 text-[#5c5f61] text-[14px]">
                          No products in this category.
                        </td>
                      </tr>
                    ) : (
                      paginated.map((product) => {
                        const foodCost = getProductFoodCost(product);
                        const grossProfit = getProductGrossProfit(product);
                        const margin = getProductMargin(product);
                        const isLowMargin = margin < 65;

                        return (
                          <tr
                            key={product.id}
                            className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors cursor-pointer"
                            onClick={() => navigate(`/inventory/${product.id}`)}
                          >
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <ProductThumbnail color={product.imageColor} name={product.name} />
                                <div className="min-w-0">
                                  <div className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px] truncate max-w-[200px]">
                                    {product.name}
                                  </div>
                                  <div className="text-[#5c5f61] text-[14px]">
                                    {product.ingredients.length} Ingredients
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <div className="text-[#1c1b1b] text-[14px]">
                                <div className="text-[#5c5f61]">฿</div>
                                <div>{foodCost > 0 ? product.sellingPrice.toFixed(2) : "—"}</div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <div className={`text-[14px] ${isLowMargin ? "text-[#ba1a1a] font-medium" : "text-[#1c1b1b]"}`}>
                                <div className={isLowMargin ? "text-[#ba1a1a]" : "text-[#5c5f61]"}>฿</div>
                                <div>{foodCost.toFixed(2)}</div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <div className="text-[#1c1b1b] text-[14px]">
                                <div className="text-[#5c5f61]">฿</div>
                                <div>{grossProfit.toFixed(2)}</div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-center">
                              <div className="flex justify-center">
                                <MarginBadge margin={margin} />
                              </div>
                            </td>
                            <td
                              className="px-4 py-4 text-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  onClick={() => navigate(`/inventory/${product.id}/edit`)}
                                  className="p-2 rounded hover:bg-gray-100 transition-colors text-[#5c5f61] hover:text-[#1c1b1b]"
                                  title="Edit product"
                                >
                                  <svg width="13.5" height="13.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => setDeletingProductId(product.id)}
                                  className="p-2 rounded hover:bg-red-50 transition-colors text-[#5c5f61] hover:text-red-600"
                                  title="Delete product"
                                >
                                  <svg width="12" height="13.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                    <path d="M10 11v6M14 11v6" />
                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </motion.tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="bg-[#f8fafc] border-t border-[#f1f5f9] px-4 py-3 flex items-center justify-between">
                <span className="text-[#5c5f61] text-[14px]">
                  {filtered.length === 0
                    ? "No entries"
                    : `Showing ${start} to ${end} of ${filtered.length} entries`}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-200 transition-colors"
                  >
                    <svg width="5.5" height="9" viewBox="0 0 6 9" fill="none">
                      <path d="M5 1L1 4.5L5 8" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-200 transition-colors"
                  >
                    <svg width="5.5" height="9" viewBox="0 0 6 9" fill="none">
                      <path d="M1 1L5 4.5L1 8" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-6">

            {/* Category Performance Card */}
            <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.01)] p-[25px]">
              <h3 className="text-[#5c5f61] text-[14px] font-semibold tracking-[0.7px] uppercase mb-4">
                CATEGORY PERFORMANCE
              </h3>
              <div className="flex flex-col gap-4">
                {categoryStats.map((cat) => {
                  const barWidth = maxMargin > 0 ? (cat.avgMargin / maxMargin) * 100 : 0;
                  const isGood = cat.avgMargin >= 65;
                  return (
                    <div key={cat.id} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1c1b1b] text-[14px]">{cat.name}</span>
                        <span
                          className={`text-[14px] font-medium ${isGood ? "text-[#065f46]" : "text-[#991b1b]"}`}
                        >
                          Avg {cat.avgMargin.toFixed(1)}% Margin
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#f1f5f9] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${barWidth}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: isGood ? "#10b981" : "#ef4444" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Updates Card */}
            <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.01)] p-[25px] flex-1">
              <h3 className="text-[#5c5f61] text-[14px] font-semibold tracking-[0.7px] uppercase mb-4">
                RECENT UPDATES
              </h3>
              <div className="flex flex-col gap-4">
                {recentUpdates.map((update) => (
                  <div key={update.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f6f3f2] border border-[rgba(196,199,200,0.3)] flex items-center justify-center flex-shrink-0">
                      {update.type === "recipe" ? (
                        <svg width="12" height="10.7" viewBox="0 0 12 11" fill="none">
                          <path d="M1 10L5 6L8 9L11 1" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="13.3" height="8" viewBox="0 0 14 8" fill="none">
                          <path d="M13 7L7 1L1 7" stroke="#BA1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#1c1b1b] text-[14px] leading-[21px]">
                        {update.title}: <strong>{update.boldPart}</strong>
                      </p>
                      <p className="text-[#5c5f61] text-[12px] font-medium leading-[1.4] mt-0.5">{update.description}</p>
                      <p className="text-[#5c5f61] text-[12px] font-medium mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      <AnimatePresence>
        {showAddCategory && (
          <AddCategoryModal
            onClose={() => setShowAddCategory(false)}
            onAdd={handleAddCategory}
          />
        )}
      </AnimatePresence>

      {/* Delete Confirm Dialog */}
      <ConfirmDialog
        open={Boolean(deletingProductId)}
        title="Delete Product"
        message={`Are you sure you want to delete "${products.find((p) => p.id === deletingProductId)?.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={handleDeleteProduct}
        onCancel={() => setDeletingProductId(null)}
      />

      {/* Toast */}
      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
