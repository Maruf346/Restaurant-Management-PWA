import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInventoryStore } from "../../stores/inventoryStore";
import { RecipeIngredient } from "../../data/inventory";
import Toast, { useToast } from "../../components/ui/Toast";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

const UNITS = ["g", "kg", "ml", "L", "pcs", "pc", "stalks", "leaves", "sheets", "pack"];
const IMAGE_COLORS = [
  "#f97316", "#dc2626", "#ca8a04", "#16a34a", "#2563eb",
  "#7c3aed", "#db2777", "#0891b2", "#d97706", "#0f172a",
];

const AVAILABLE_INGREDIENTS = [
  { id: "rice-noodles", name: "Rice Noodles", unit: "g", costPerBaseUnit: 0.08 },
  { id: "shrimp-medium", name: "Shrimp (Medium)", unit: "kg", costPerBaseUnit: 560 },
  { id: "tofu-firm", name: "Tofu (Firm)", unit: "g", costPerBaseUnit: 0.14 },
  { id: "bean-sprouts", name: "Bean Sprouts", unit: "kg", costPerBaseUnit: 50 },
  { id: "thai-basil", name: "Thai Basil", unit: "kg", costPerBaseUnit: 90 },
  { id: "oyster-sauce", name: "Oyster Sauce", unit: "liters", costPerBaseUnit: 120 },
  { id: "fish-sauce", name: "Fish Sauce", unit: "liters", costPerBaseUnit: 80 },
  { id: "palm-sugar", name: "Palm Sugar", unit: "kg", costPerBaseUnit: 65 },
  { id: "chicken-thigh", name: "Chicken Thigh", unit: "kg", costPerBaseUnit: 120 },
  { id: "beef-patty", name: "Beef Patty", unit: "pcs", costPerBaseUnit: 65 },
  { id: "lemongrass", name: "Lemongrass", unit: "kg", costPerBaseUnit: 120 },
  { id: "coconut-milk", name: "Coconut Milk", unit: "liters", costPerBaseUnit: 45 },
  { id: "lime", name: "Lime", unit: "pcs", costPerBaseUnit: 4 },
  { id: "egg", name: "Egg", unit: "pcs", costPerBaseUnit: 4 },
  { id: "garlic", name: "Garlic", unit: "kg", costPerBaseUnit: 70 },
] as const;

let ingCounter = 9000;

interface IngredientRow {
  id: string;
  ingredientId: string;
  name: string;
  quantity: string;
  unit: string;
  cost: string;
  costPerBaseUnit: number;
}

function newIngredientRow(): IngredientRow {
  return { id: `new-${++ingCounter}`, ingredientId: "", name: "", quantity: "1", unit: "g", cost: "0.00", costPerBaseUnit: 0 };
}

export default function AddEditProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { products, categories, addProduct, updateProduct } = useInventoryStore();
  const { toasts, addToast, dismiss } = useToast();

  const isEdit = productId !== "new" && Boolean(productId);
  const existing = isEdit ? products.find((p) => p.id === productId) : undefined;

  const [name, setName] = useState(existing?.name ?? "");
  const [categoryId, setCategoryId] = useState(existing?.categoryId ?? categories[0]?.id ?? "");
  const [sellingPrice, setSellingPrice] = useState(existing?.sellingPrice?.toString() ?? "");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [lightspeedItemId, setLightspeedItemId] = useState(existing?.lightspeedItemId ?? "");
  const [imageColor, setImageColor] = useState(existing?.imageColor ?? IMAGE_COLORS[0]);
  const [productImageUrl, setProductImageUrl] = useState(existing?.imageUrl ?? "");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showIngredientDrawer, setShowIngredientDrawer] = useState(false);
  const [activeIngredientRowId, setActiveIngredientRowId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [ingredients, setIngredients] = useState<IngredientRow[]>(
    existing?.ingredients.map((i) => ({
      id: i.id,
      ingredientId: i.ingredientId ?? "",
      name: i.name,
      quantity: i.quantity.toString(),
      unit: i.unit,
      cost: i.cost.toString(),
      costPerBaseUnit: i.costPerBaseUnit ?? 0,
    })) ?? [newIngredientRow()]
  );

  const totalCost = ingredients.reduce((sum, i) => sum + (parseFloat(i.cost) || 0), 0);
  const price = parseFloat(sellingPrice) || 0;
  const projectedProfit = price - totalCost;
  const projectedMargin = price > 0 ? ((projectedProfit / price) * 100) : 0;

  const updateIngredient = (id: string, field: keyof IngredientRow, value: string | number) => {
    setIngredients((rows) => rows.map((r) => {
      if (r.id !== id) return r;

      const nextRow = { ...r, [field]: value } as IngredientRow;
      if (field === "ingredientId" && typeof value === "string") {
        const selected = AVAILABLE_INGREDIENTS.find((item) => item.id === value);
        if (selected) {
          return {
            ...nextRow,
            name: selected.name,
            unit: selected.unit,
            costPerBaseUnit: selected.costPerBaseUnit,
            quantity: nextRow.quantity || "1",
            cost: ((parseFloat(nextRow.quantity || "1") || 1) * selected.costPerBaseUnit).toFixed(2),
          };
        }
      }

      if (field === "quantity" && typeof value === "string" && r.ingredientId) {
        const selected = AVAILABLE_INGREDIENTS.find((item) => item.id === r.ingredientId);
        if (selected) {
          return {
            ...nextRow,
            cost: ((parseFloat(value) || 0) * selected.costPerBaseUnit).toFixed(2),
          };
        }
      }

      return nextRow;
    }));
  };

  const removeIngredient = (id: string) => {
    setIngredients((rows) => rows.filter((r) => r.id !== id));
  };

  const addIngredient = () => {
    setIngredients((rows) => [...rows, newIngredientRow()]);
  };

  const handleIngredientSelect = (rowId: string, ingredientId: string) => {
    const selected = AVAILABLE_INGREDIENTS.find((item) => item.id === ingredientId);
    if (!selected) return;

    setIngredients((rows) => rows.map((row) => {
      if (row.id !== rowId) return row;
      const quantity = parseFloat(row.quantity) || 1;
      return {
        ...row,
        ingredientId,
        name: selected.name,
        unit: selected.unit,
        costPerBaseUnit: selected.costPerBaseUnit,
        quantity: row.quantity || "1",
        cost: (quantity * selected.costPerBaseUnit).toFixed(2),
      };
    }));
    setShowIngredientDrawer(false);
    setActiveIngredientRowId(null);
  };

  const handleSave = () => {
    if (!name.trim()) { addToast("Please enter a dish name.", "error"); return; }
    if (!sellingPrice || parseFloat(sellingPrice) <= 0) {
      addToast("Please enter a valid selling price.", "error"); return;
    }

    const cleanIngredients: RecipeIngredient[] = ingredients
      .filter((i) => i.name.trim())
      .map((i) => {
        const selectedIngredient = AVAILABLE_INGREDIENTS.find((item) => item.id === i.ingredientId);
        const quantity = parseFloat(i.quantity) || 0;
        const costPerBaseUnit = selectedIngredient?.costPerBaseUnit ?? i.costPerBaseUnit ?? 0;
        const calculatedCost = selectedIngredient ? quantity * costPerBaseUnit : (parseFloat(i.cost) || 0);

        return {
          id: i.id,
          ingredientId: selectedIngredient?.id ?? i.ingredientId,
          name: selectedIngredient?.name ?? i.name.trim(),
          quantity,
          unit: selectedIngredient?.unit ?? i.unit,
          cost: calculatedCost,
          costPerBaseUnit,
        };
      });

    const productData = {
      name: name.trim(),
      categoryId,
      sellingPrice: parseFloat(sellingPrice),
      description: description.trim(),
      lightspeedItemId: lightspeedItemId.trim(),
      ingredients: cleanIngredients,
      imageColor,
      imageUrl: productImageUrl || undefined,
    };

    if (isEdit && productId) {
      updateProduct(productId, productData);
      addToast("Product updated successfully");
    } else {
      addProduct(productData);
      addToast("Product saved successfully");
    }

    setSaved(true);
    setTimeout(() => navigate("/inventory"), 1200);
  };

  const hasChanges = name !== (existing?.name ?? "") ||
    sellingPrice !== (existing?.sellingPrice?.toString() ?? "") ||
    description !== (existing?.description ?? "") ||
    lightspeedItemId !== (existing?.lightspeedItemId ?? "") ||
    categoryId !== (existing?.categoryId ?? categories[0]?.id ?? "");

  const selectedCategory = categories.find((c) => c.id === categoryId);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProductImageUrl(String(reader.result ?? ""));
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-full bg-[#fcf8f8]">
      <div className="max-w-[1440px] px-4 sm:px-10 pt-6 sm:pt-10 pb-16 mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-between gap-3 mb-10 sm:mb-16 flex-wrap"
        >
          <div>
            <h1 className="text-[#0f172a] text-[24px] sm:text-[32px] font-semibold tracking-[-0.32px]">
              {isEdit ? "Edit Product" : "Add / Edit Product"}
            </h1>
            <p className="text-[#444748] text-[14px] sm:text-[16px] mt-1 sm:mt-2">Manage product details and recipe costing.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => hasChanges ? setShowCancelConfirm(true) : navigate("/inventory")}
              className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#5c5f61] text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-[25px] py-[9px] hover:bg-gray-50 transition-colors"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="11" y2="11"/><line x1="11" y1="1" x2="1" y2="11"/>
              </svg>
              <span className="hidden sm:inline">Cancel</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saved}
              className="flex items-center gap-2 bg-[#0f172a] disabled:opacity-60 text-white text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-6 py-[9px] hover:bg-[#1e293b] transition-colors shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
              {saved ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="hidden sm:inline">Saving…</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                    <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                  </svg>
                  <span className="hidden sm:inline">Save Product</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Left: Product Details Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="col-span-12 lg:col-span-4 self-start"
          >
            <div className="bg-white rounded-[12px] border border-[#e2e8f0] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.01)] p-[25px]">
              <h2 className="text-[#0f172a] text-[24px] font-medium mb-6">Product Details</h2>

              <div className="flex flex-col gap-6">
                {/* Dish Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Dish Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Pad Thai Kung"
                    className="w-full bg-white border border-[#e2e8f0] rounded-[8px] px-[13px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Category</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                      className="w-full bg-white border border-[#e2e8f0] rounded-[8px] px-[13px] py-[13px] text-left text-[16px] text-[#1c1b1b] flex items-center justify-between hover:border-[#0f172a] transition-all"
                    >
                      <span>{selectedCategory?.name ?? "Select category"}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {showCategoryDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-10 overflow-hidden">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => { setCategoryId(cat.id); setShowCategoryDropdown(false); }}
                            className={`w-full px-4 py-3 text-left text-[15px] hover:bg-[#f8fafc] transition-colors ${cat.id === categoryId ? "bg-[#f6f3f2] font-medium text-[#1c1b1b]" : "text-[#5c5f61]"}`}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Selling Price */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Selling Price</label>
                  <div className="relative">
                    <span className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[#444748] text-[16px]">฿</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-white border border-[#e2e8f0] rounded-[8px] pl-[33px] pr-[13px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Product Picture / Icon */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Product Picture</label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => document.getElementById("product-image-upload")?.click()}
                      className="relative w-16 h-16 rounded-[12px] border border-dashed border-[#cbd5e1] bg-[#f8fafc] overflow-hidden flex items-center justify-center text-[#0f172a] hover:border-[#0f172a] transition-colors"
                    >
                      {productImageUrl ? (
                        <img src={productImageUrl} alt="Product preview" className="w-full h-full object-cover" />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-[22px] font-bold text-white"
                          style={{ backgroundColor: imageColor }}
                        >
                          {name.trim().charAt(0).toUpperCase() || "P"}
                        </div>
                      )}
                    </button>
                    <div className="flex flex-col gap-1">
                      <input id="product-image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      <button
                        type="button"
                        onClick={() => document.getElementById("product-image-upload")?.click()}
                        className="text-[#0f172a] text-[13px] font-semibold underline underline-offset-2"
                      >
                        Upload image
                      </button>
                      <button
                        type="button"
                        onClick={() => setProductImageUrl("")}
                        className="text-[#5c5f61] text-[12px] hover:text-[#0f172a] transition-colors text-left"
                      >
                        Remove image
                      </button>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Color Picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Thumbnail Color</label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {IMAGE_COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() => setImageColor(color)}
                        className="w-7 h-7 rounded-full transition-all border-2 flex items-center justify-center"
                        style={{
                          backgroundColor: color,
                          borderColor: imageColor === color ? "#0f172a" : "transparent",
                          boxShadow: imageColor === color ? `0 0 0 2px white, 0 0 0 3px ${color}` : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Lightspeed Item ID */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Lightspeed Item ID</label>
                  <input
                    value={lightspeedItemId}
                    onChange={(e) => setLightspeedItemId(e.target.value)}
                    placeholder="e.g., LS-10024"
                    className="w-full bg-white border border-[#e2e8f0] rounded-[8px] px-[13px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1c1b1b] text-[14px] font-semibold tracking-[0.28px]">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Add a short product description"
                    className="w-full bg-white border border-[#e2e8f0] rounded-[8px] px-[13px] py-[13px] text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Recipe Ingredients Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-8 self-start"
          >
            <div className="bg-white rounded-[12px] border border-[#e2e8f0] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.01)]">
              {/* Card Header */}
              <div className="flex items-center justify-between px-[25px] pb-6 pt-[25px]">
                <h2 className="text-[#0f172a] text-[24px] font-medium">Recipe Ingredients</h2>
                <button
                  onClick={addIngredient}
                  className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#5c5f61] text-[14px] font-semibold rounded-[8px] px-[9px] sm:px-[17px] py-[9px] hover:bg-[#f8fafc] transition-colors"
                >
                  <svg width="8.2" height="8.2" viewBox="0 0 9 9" fill="none">
                    <path d="M4.5 0.5V8.5M0.5 4.5H8.5" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="hidden sm:inline">Add Ingredient</span>
                </button>
              </div>

              {/* Table */}
              <div className="border border-[#f1f5f9] rounded-[8px] mx-[25px] mb-6 overflow-x-auto">
                <table className="w-full min-w-[480px]">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="text-left px-4 py-[18px] text-[#444748] text-[14px] font-semibold tracking-[0.28px] border-b border-[#f1f5f9]">
                        Ingredient
                      </th>
                      <th className="text-left px-4 py-[18px] text-[#444748] text-[14px] font-semibold tracking-[0.28px] border-b border-[#f1f5f9] w-28">
                        Quantity
                      </th>
                      <th className="text-left px-4 py-[18px] text-[#444748] text-[14px] font-semibold tracking-[0.28px] border-b border-[#f1f5f9] w-20">
                        Unit
                      </th>
                      <th className="text-right px-4 py-[13px] text-[#444748] text-[14px] font-semibold tracking-[0.28px] border-b border-[#f1f5f9] w-36">
                        Calculated<br />Cost
                      </th>
                      <th className="border-b border-[#f1f5f9] w-14" />
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing, idx) => (
                      <tr key={ing.id} className={idx > 0 ? "border-t border-[#f1f5f9]" : ""}>
                        <td className="px-4 py-[15.5px] border-b border-[#f1f5f9]">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveIngredientRowId(ing.id);
                              setShowIngredientDrawer(true);
                            }}
                            className="w-full flex items-center justify-between gap-3 text-left rounded px-1 -mx-1 py-1.5 text-[16px] text-[#1c1b1b] hover:bg-[#f8fafc] transition-colors"
                          >
                            <span className={ing.name ? "text-[#1c1b1b]" : "text-[#c4c7c8]"}>{ing.name || "Select ingredient"}</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </button>
                        </td>
                        <td className="px-4 py-[15.5px] border-b border-[#f1f5f9]">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={ing.quantity}
                            onChange={(e) => updateIngredient(ing.id, "quantity", e.target.value)}
                            placeholder="0"
                            className="w-full text-[16px] text-[#1c1b1b] placeholder:text-[#c4c7c8] bg-transparent focus:outline-none focus:bg-[#f8fafc] rounded px-1 -mx-1 py-0.5"
                          />
                        </td>
                        <td className="px-4 py-[15.5px] border-b border-[#f1f5f9]">
                          <div className="text-[16px] text-[#1c1b1b] bg-transparent px-1 -mx-1 py-0.5">
                            {ing.unit || "g"}
                          </div>
                        </td>
                        <td className="px-4 py-[15.5px] border-b border-[#f1f5f9] text-right">
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[#444748] text-[16px]">฿</span>
                            <span className="min-w-[60px] text-right text-[16px] text-[#1c1b1b]">
                              {(parseFloat(ing.cost) || 0).toFixed(2)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-[12px] border-b border-[#f1f5f9] text-center">
                          <button
                            onClick={() => removeIngredient(ing.id)}
                            className="p-1 rounded hover:bg-red-50 transition-colors text-[#c4c7c8] hover:text-red-500"
                          >
                            <svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                              <path d="M10 11v6M14 11v6" />
                              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {ingredients.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-[#5c5f61] text-[14px] border-b border-[#f1f5f9]">
                          No ingredients yet. Click "Add Ingredient" to add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Totals Footer */}
              <div className="mx-[25px] mb-[25px] bg-[#f8fafc] border border-[#f1f5f9] rounded-[8px] p-[25px] flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <p className="text-[#444748] text-[14px] font-semibold tracking-[0.28px]">Total Ingredient Cost</p>
                  <p className="text-[#0f172a] text-[24px] font-medium mt-1">฿ {totalCost.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#444748] text-[14px] font-semibold tracking-[0.28px] text-right">Projected Gross Profit</p>
                  <div className="flex items-baseline gap-2 justify-end mt-1">
                    <p className={`text-[24px] font-medium ${projectedProfit >= 0 ? "text-[#565e74]" : "text-red-600"}`}>
                      ฿ {projectedProfit.toFixed(2)}
                    </p>
                    <p className={`text-[14px] ${projectedMargin >= 65 ? "text-[#065f46]" : projectedMargin > 0 ? "text-[#b45309]" : "text-red-600"}`}>
                      ({projectedMargin.toFixed(1)}%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showIngredientDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.25)] p-4 backdrop-blur-[2px]" onClick={() => setShowIngredientDrawer(false)}>
          <div className="w-full max-w-[540px] rounded-[16px] bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] border border-[#e2e8f0] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-[#f1f5f9] flex items-center justify-between">
              <h3 className="text-[#0f172a] text-[22px] font-medium">Select Ingredient</h3>
              <button type="button" onClick={() => setShowIngredientDrawer(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/>
                </svg>
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto p-3">
              {AVAILABLE_INGREDIENTS.map((ingredient) => (
                <button
                  key={ingredient.id}
                  type="button"
                  onClick={() => {
                    if (activeIngredientRowId) {
                      handleIngredientSelect(activeIngredientRowId, ingredient.id);
                    }
                  }}
                  className="w-full flex items-center justify-between gap-3 rounded-[10px] px-3 py-3 text-left hover:bg-[#f8fafc] transition-colors border border-transparent hover:border-[#e2e8f0]"
                >
                  <div>
                    <div className="text-[#1c1b1b] text-[15px] font-medium">{ingredient.name}</div>
                    <div className="text-[#5c5f61] text-[12px] mt-0.5">{ingredient.unit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#0f172a] text-[13px] font-medium">฿{ingredient.costPerBaseUnit.toFixed(2)}</div>
                    <div className="text-[#5c5f61] text-[11px]">per {ingredient.unit}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cancel Confirm Dialog */}
      <ConfirmDialog
        open={showCancelConfirm}
        title="Discard Changes?"
        message="You have unsaved changes. Are you sure you want to leave without saving?"
        confirmLabel="Discard"
        cancelLabel="Keep Editing"
        variant="default"
        onConfirm={() => navigate("/inventory")}
        onCancel={() => setShowCancelConfirm(false)}
      />

      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
