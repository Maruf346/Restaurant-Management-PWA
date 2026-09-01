import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Period = "Daily" | "Weekly" | "Monthly";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  emoji: string;
  sellingPrice: { Daily: number; Weekly: number; Monthly: number };
  foodCost: { Daily: number; Weekly: number; Monthly: number };
  sales: { Daily: number; Weekly: number; Monthly: number };
}

interface TheoreticalItem {
  id: string;
  ingredient: string;
  icon: string;
  theoretical: { Daily: number; Weekly: number; Monthly: number };
  actual: { Daily: number; Weekly: number; Monthly: number };
  unit: string;
  variance: { Daily: number; Weekly: number; Monthly: number };
}

const MENU_ITEMS: MenuItem[] = [
  { id: "1", name: "Pad Thai (Shrimp)", category: "Noodles", emoji: "🍜", sellingPrice: { Daily: 18.5, Weekly: 18.5, Monthly: 18.5 }, foodCost: { Daily: 4.2, Weekly: 4.1, Monthly: 4.0 }, sales: { Daily: 452, Weekly: 3164, Monthly: 13560 } },
  { id: "2", name: "Green Curry Chicken", category: "Curries", emoji: "🍛", sellingPrice: { Daily: 21.0, Weekly: 21.0, Monthly: 21.0 }, foodCost: { Daily: 5.8, Weekly: 5.6, Monthly: 5.5 }, sales: { Daily: 318, Weekly: 2226, Monthly: 9540 } },
  { id: "3", name: "Tom Yum Goong", category: "Soups", emoji: "🍲", sellingPrice: { Daily: 24.0, Weekly: 24.0, Monthly: 24.0 }, foodCost: { Daily: 8.5, Weekly: 8.2, Monthly: 8.0 }, sales: { Daily: 285, Weekly: 1995, Monthly: 8550 } },
  { id: "4", name: "Massaman Beef", category: "Curries", emoji: "🥩", sellingPrice: { Daily: 26.5, Weekly: 26.5, Monthly: 26.5 }, foodCost: { Daily: 11.2, Weekly: 10.8, Monthly: 10.5 }, sales: { Daily: 190, Weekly: 1330, Monthly: 5700 } },
  { id: "5", name: "Mango Sticky Rice", category: "Desserts", emoji: "🥭", sellingPrice: { Daily: 12.0, Weekly: 12.0, Monthly: 12.0 }, foodCost: { Daily: 2.1, Weekly: 2.0, Monthly: 1.9 }, sales: { Daily: 412, Weekly: 2884, Monthly: 12360 } },
  { id: "6", name: "Larb Moo", category: "Salads", emoji: "🥗", sellingPrice: { Daily: 16.0, Weekly: 16.0, Monthly: 16.0 }, foodCost: { Daily: 4.8, Weekly: 4.6, Monthly: 4.4 }, sales: { Daily: 142, Weekly: 994, Monthly: 4260 } },
  { id: "7", name: "Khao Pad Sapparod", category: "Rice", emoji: "🍍", sellingPrice: { Daily: 15.5, Weekly: 15.5, Monthly: 15.5 }, foodCost: { Daily: 3.9, Weekly: 3.8, Monthly: 3.6 }, sales: { Daily: 225, Weekly: 1575, Monthly: 6750 } },
  { id: "8", name: "Som Tam", category: "Salads", emoji: "🥕", sellingPrice: { Daily: 11.0, Weekly: 11.0, Monthly: 11.0 }, foodCost: { Daily: 2.5, Weekly: 2.4, Monthly: 2.3 }, sales: { Daily: 390, Weekly: 2730, Monthly: 11700 } },
];

const THEORETICAL_ITEMS: TheoreticalItem[] = [
  { id: "1", ingredient: "Atlantic Salmon", icon: "🐟", theoretical: { Daily: 45.0, Weekly: 315.0, Monthly: 1350.0 }, actual: { Daily: 52.5, Weekly: 368.0, Monthly: 1580.0 }, unit: "kg", variance: { Daily: 7.5, Weekly: 53.0, Monthly: 230.0 } },
  { id: "2", ingredient: "Organic Tomatoes", icon: "🍅", theoretical: { Daily: 120.0, Weekly: 840.0, Monthly: 3600.0 }, actual: { Daily: 121.2, Weekly: 850.0, Monthly: 3640.0 }, unit: "kg", variance: { Daily: 1.2, Weekly: 10.0, Monthly: 40.0 } },
  { id: "3", ingredient: "Free Range Eggs", icon: "🥚", theoretical: { Daily: 300, Weekly: 2100, Monthly: 9000 }, actual: { Daily: 285, Weekly: 2000, Monthly: 8600 }, unit: "dozen", variance: { Daily: -15, Weekly: -100, Monthly: -400 } },
  { id: "4", ingredient: "Truffle Oil", icon: "🫙", theoretical: { Daily: 2.5, Weekly: 17.5, Monthly: 75.0 }, actual: { Daily: 3.8, Weekly: 26.5, Monthly: 114.0 }, unit: "L", variance: { Daily: 1.3, Weekly: 9.0, Monthly: 39.0 } },
  { id: "5", ingredient: "Wagyu Beef A5", icon: "🥩", theoretical: { Daily: 8.0, Weekly: 56.0, Monthly: 240.0 }, actual: { Daily: 8.5, Weekly: 59.5, Monthly: 255.0 }, unit: "kg", variance: { Daily: 0.5, Weekly: 3.5, Monthly: 15.0 } },
  { id: "6", ingredient: "Jasmine Rice", icon: "🍚", theoretical: { Daily: 50.0, Weekly: 350.0, Monthly: 1500.0 }, actual: { Daily: 48.5, Weekly: 340.0, Monthly: 1450.0 }, unit: "kg", variance: { Daily: -1.5, Weekly: -10.0, Monthly: -50.0 } },
  { id: "7", ingredient: "Coconut Cream", icon: "🥥", theoretical: { Daily: 15.0, Weekly: 105.0, Monthly: 450.0 }, actual: { Daily: 16.2, Weekly: 115.0, Monthly: 490.0 }, unit: "L", variance: { Daily: 1.2, Weekly: 10.0, Monthly: 40.0 } },
  { id: "8", ingredient: "Thai Chillies", icon: "🌶️", theoretical: { Daily: 3.0, Weekly: 21.0, Monthly: 90.0 }, actual: { Daily: 3.4, Weekly: 24.0, Monthly: 102.0 }, unit: "kg", variance: { Daily: 0.4, Weekly: 3.0, Monthly: 12.0 } },
  { id: "9", ingredient: "Lemongrass", icon: "🌿", theoretical: { Daily: 4.5, Weekly: 31.5, Monthly: 135.0 }, actual: { Daily: 4.2, Weekly: 29.5, Monthly: 126.0 }, unit: "kg", variance: { Daily: -0.3, Weekly: -2.0, Monthly: -9.0 } },
  { id: "10", ingredient: "Galangal", icon: "🫚", theoretical: { Daily: 2.0, Weekly: 14.0, Monthly: 60.0 }, actual: { Daily: 2.1, Weekly: 14.8, Monthly: 63.0 }, unit: "kg", variance: { Daily: 0.1, Weekly: 0.8, Monthly: 3.0 } },
  { id: "11", ingredient: "Kaffir Lime", icon: "🍋", theoretical: { Daily: 800, Weekly: 5600, Monthly: 24000 }, actual: { Daily: 820, Weekly: 5750, Monthly: 24600 }, unit: "g", variance: { Daily: 20, Weekly: 150, Monthly: 600 } },
  { id: "12", ingredient: "Shrimp (Large)", icon: "🦐", theoretical: { Daily: 22.0, Weekly: 154.0, Monthly: 660.0 }, actual: { Daily: 24.5, Weekly: 172.0, Monthly: 735.0 }, unit: "kg", variance: { Daily: 2.5, Weekly: 18.0, Monthly: 75.0 } },
];

const PAGE_SIZE_MENU = 5;
const PAGE_SIZE_THEORETICAL = 4;

function getMarginColor(margin: number) {
  if (margin >= 75) return { bg: "bg-[#dcfce7]", text: "text-[#15803d]" };
  if (margin >= 65) return { bg: "bg-[#fef9c3]", text: "text-[#a16207]" };
  return { bg: "bg-[#fee2e2]", text: "text-[#dc2626]" };
}

function PaginationBar({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) {
  const pages: (number | "...")[] = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push("...");
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
    if (current < total - 2) pages.push("...");
    pages.push(total);
  }
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => onChange(Math.max(1, current - 1))} disabled={current === 1} className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-100 transition-colors">
        <svg width="5.5" height="9" viewBox="0 0 6 9" fill="none"><path d="M5 1L1 4.5L5 8" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`e${i}`} className="w-8 h-8 flex items-center justify-center text-[#747878] text-[16px]">...</span>
        ) : (
          <button key={p} onClick={() => onChange(p as number)} className={`w-8 h-8 rounded-[4px] text-[12px] font-medium flex items-center justify-center transition-colors ${current === p ? "bg-white border border-[#e2e8f0] text-[#1c1b1b] shadow-[0_1px_1px_rgba(0,0,0,0.05)]" : "text-[#444748] hover:bg-gray-100"}`}>{p}</button>
        )
      )}
      <button onClick={() => onChange(Math.min(total, current + 1))} disabled={current === total} className="p-2 rounded-[4px] disabled:opacity-30 hover:bg-gray-100 transition-colors">
        <svg width="5.5" height="9" viewBox="0 0 6 9" fill="none"><path d="M1 1L5 4.5L1 8" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

export default function ProfitabilityPage() {
  const [period, setPeriod] = useState<Period>("Monthly");
  const [menuPage, setMenuPage] = useState(1);
  const [theoreticalPage, setTheoreticalPage] = useState(1);
  const [menuSearch, setMenuSearch] = useState("");
  const [theoreticalSearch, setTheoreticalSearch] = useState("");

  const filteredMenu = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(menuSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(menuSearch.toLowerCase())
  );
  const totalMenuPages = Math.max(1, Math.ceil(filteredMenu.length / PAGE_SIZE_MENU));
  const safeMenuPage = Math.min(menuPage, totalMenuPages);
  const paginatedMenu = filteredMenu.slice((safeMenuPage - 1) * PAGE_SIZE_MENU, safeMenuPage * PAGE_SIZE_MENU);

  const filteredTheoretical = THEORETICAL_ITEMS.filter((item) =>
    item.ingredient.toLowerCase().includes(theoreticalSearch.toLowerCase())
  );
  const totalTheorPages = Math.max(1, Math.ceil(filteredTheoretical.length / PAGE_SIZE_THEORETICAL));
  const safeTheorPage = Math.min(theoreticalPage, totalTheorPages);
  const paginatedTheoretical = filteredTheoretical.slice((safeTheorPage - 1) * PAGE_SIZE_THEORETICAL, safeTheorPage * PAGE_SIZE_THEORETICAL);

  const theorStart = filteredTheoretical.length === 0 ? 0 : (safeTheorPage - 1) * PAGE_SIZE_THEORETICAL + 1;
  const theorEnd = Math.min(safeTheorPage * PAGE_SIZE_THEORETICAL, filteredTheoretical.length);

  const handlePeriodChange = (p: Period) => {
    setPeriod(p);
    setMenuPage(1);
    setTheoreticalPage(1);
  };

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 pb-16 mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[#1c1b1b] text-[28px] sm:text-[32px] font-semibold tracking-[-0.32px] leading-[40px]">Profitability</h1>
            <p className="text-[#444748] text-[15px] sm:text-[16px] mt-1">Analyze dish performance and margins across your menu.</p>
          </div>
          <div className="flex items-center bg-white border border-[#e2e8f0] rounded-[8px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] self-start shrink-0">
            {(["Daily", "Weekly", "Monthly"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => handlePeriodChange(p)}
                className={`px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] font-semibold transition-colors ${period === p ? "bg-[#0f172a] text-white" : "text-[#444748] hover:text-[#1c1b1b]"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Table */}
        <div className="bg-white rounded-[12px] border border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] overflow-hidden mb-8">
          <div className="bg-[rgba(248,250,252,0.5)] border-b border-[#f1f5f9] px-6 py-4 flex items-center justify-between">
            <h2 className="text-[#1c1b1b] text-[20px] font-semibold">Menu Items</h2>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={menuSearch}
                onChange={(e) => { setMenuSearch(e.target.value); setMenuPage(1); }}
                placeholder="Filter dishes..."
                className="bg-white border border-[#e2e8f0] rounded-[8px] pl-[32px] pr-[12px] py-[7px] text-[13px] text-[#1c1b1b] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#6b7280] transition-all w-[180px]"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                  <th className="text-left px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">DISH</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">SELLING PRICE</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">FOOD COST</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">GROSS PROFIT</th>
                  <th className="text-center px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">MARGIN (%)</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[11px] font-medium tracking-[0.6px] uppercase">SALES (UNITS)</th>
                </tr>
              </thead>
              <motion.tbody
                key={`menu-${safeMenuPage}-${menuSearch}-${period}`}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {paginatedMenu.length === 0 ? (
                  <tr><td colSpan={6} className="text-center py-12 text-[#9ca3af] text-[14px]">No dishes match your filter.</td></tr>
                ) : (
                  paginatedMenu.map((item) => {
                    const selling = item.sellingPrice[period];
                    const cost = item.foodCost[period];
                    const grossProfit = selling - cost;
                    const margin = (grossProfit / selling) * 100;
                    const sales = item.sales[period];
                    const { bg, text } = getMarginColor(margin);
                    return (
                      <tr
                        key={item.id}
                        className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors"
                      >
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-[6px] bg-[#f6f3f2] flex items-center justify-center text-[18px] flex-shrink-0">{item.emoji}</div>
                            <div>
                              <div className="text-[#1c1b1b] text-[14px] font-semibold">{item.name}</div>
                              <div className="text-[#5c5f61] text-[13px]">{item.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-right text-[#1c1b1b] text-[14px]">${selling.toFixed(2)}</td>
                        <td className="px-6 py-3 text-right text-[#1c1b1b] text-[14px]">${cost.toFixed(2)}</td>
                        <td className="px-6 py-3 text-right text-[#1c1b1b] text-[14px] font-semibold">${grossProfit.toFixed(2)}</td>
                        <td className="px-6 py-3 text-center">
                          <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[12px] font-semibold ${bg} ${text}`}>
                            {margin.toFixed(1)}%
                          </span>
                        </td>
                        <td className="px-6 py-3 text-right text-[#1c1b1b] text-[14px]">{sales.toLocaleString()}</td>
                      </tr>
                    );
                  })
                )}
              </motion.tbody>
            </table>
          </div>
          {totalMenuPages > 1 && (
            <div className="bg-[#f8fafc] border-t border-[#f1f5f9] px-6 py-3 flex items-center justify-between">
              <span className="text-[#444748] text-[13px]">
                {filteredMenu.length === 0 ? "No items" : `Showing ${(safeMenuPage - 1) * PAGE_SIZE_MENU + 1}–${Math.min(safeMenuPage * PAGE_SIZE_MENU, filteredMenu.length)} of ${filteredMenu.length} items`}
              </span>
              <PaginationBar current={safeMenuPage} total={totalMenuPages} onChange={(p) => setMenuPage(p)} />
            </div>
          )}
        </div>

        {/* Theoretical vs Actual */}
        <h2 className="text-[#1c1b1b] text-[32px] font-bold leading-tight mb-1">Theoretical vs Actual</h2>
        <p className="text-[#444748] text-[16px] mb-6">Compare expected ingredient usage against actual consumption.</p>

        <div className="bg-white rounded-[8px] border border-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="px-6 py-3 flex items-center justify-between border-b border-[#f1f5f9]">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z" stroke="#747878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                value={theoreticalSearch}
                onChange={(e) => { setTheoreticalSearch(e.target.value); setTheoreticalPage(1); }}
                placeholder="Filter ingredients..."
                className="bg-white border border-[#e2e8f0] rounded-[8px] pl-[32px] pr-[12px] py-[7px] text-[13px] text-[#1c1b1b] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#6b7280] transition-all w-[180px]"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                  <th className="text-left px-6 py-3 text-[#444748] text-[13px] font-medium whitespace-nowrap">Ingredient</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[13px] font-medium whitespace-nowrap">Theoretical (Expected)</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[13px] font-medium whitespace-nowrap">Actual (Consumed)</th>
                  <th className="text-right px-6 py-3 text-[#444748] text-[13px] font-medium whitespace-nowrap">Variance</th>
                </tr>
              </thead>
              <motion.tbody
                key={`theoretical-${safeTheorPage}-${theoreticalSearch}-${period}`}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {paginatedTheoretical.length === 0 ? (
                  <tr><td colSpan={4} className="text-center py-12 text-[#9ca3af] text-[14px]">No ingredients match your filter.</td></tr>
                ) : (
                  paginatedTheoretical.map((item) => {
                    const v = item.variance[period];
                    const theo = item.theoretical[period];
                    const act = item.actual[period];
                    const isOver = v > 0;
                    const isUnder = v < 0;
                    const isNeutral = v === 0;
                    const varBg = isOver
                      ? (Math.abs(v) / theo > 0.1 ? "bg-[#fee2e2] text-[#dc2626]" : "bg-[#fef3c7] text-[#d97706]")
                      : isUnder ? "bg-[#f0fdf4] text-[#16a34a]"
                      : "bg-[#f1f5f9] text-[#64748b]";
                    return (
                      <tr
                        key={item.id}
                        className="border-t border-[#f1f5f9] hover:bg-[#fafafa] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-[4px] bg-[#f1edec] flex items-center justify-center text-[14px] flex-shrink-0">{item.icon}</div>
                            <span className="text-[#1c1b1b] text-[14px] font-medium">{item.ingredient}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-[#1c1b1b] text-[14px]">{theo.toLocaleString()} {item.unit}</td>
                        <td className="px-6 py-4 text-right text-[#1c1b1b] text-[14px]">{act.toLocaleString()} {item.unit}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold ${varBg}`}>
                            {isOver && (
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1L9 9H1L5 1Z" fill="currentColor"/></svg>
                            )}
                            {isUnder && (
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 9L1 1H9L5 9Z" fill="currentColor"/></svg>
                            )}
                            {isNeutral && <span>→</span>}
                            {v > 0 ? "+" : ""}{v} {item.unit}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </motion.tbody>
            </table>
          </div>
          <div className="bg-[#f8fafc] border-t border-[#f1f5f9] px-6 py-3 flex items-center justify-between">
            <span className="text-[#444748] text-[13px]">
              {filteredTheoretical.length === 0 ? "No items" : `Showing ${theorStart} to ${theorEnd} of ${filteredTheoretical.length} items`}
            </span>
            <PaginationBar current={safeTheorPage} total={totalTheorPages} onChange={(p) => setTheoreticalPage(p)} />
          </div>
        </div>
      </div>
    </div>
  );
}
