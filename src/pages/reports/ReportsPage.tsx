import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Period = "Daily" | "Weekly" | "Monthly";

const REPORT_DATA = {
  Daily: {
    sales: 124500,
    foodCost: 32370,
    grossProfit: 92130,
    profitMargin: 74.0,
    date: "Oct 24, 2023",
    topDishes: [
      { name: "Wagyu Ribeye", sales: 45000, margin: 78 },
      { name: "Truffle Risotto", sales: 22500, margin: 82 },
      { name: "Lobster Thermidor", sales: 18200, margin: 65 },
    ],
    inventoryUsage: [
      { name: "Wagyu Beef (A5)", consumed: 8, unit: "kg", maxCapacity: 10 },
      { name: "Black Truffle", consumed: 450, unit: "g", maxCapacity: 600 },
      { name: "Saffron", consumed: 12, unit: "g", maxCapacity: 15, critical: true },
    ],
    theoreticalVsActual: [
      { item: "Wagyu Beef", variance: "+2.5%", positive: true },
      { item: "Caviar", variance: "-0.5%", positive: false },
      { item: "Truffle", variance: "+1.2%", positive: true },
    ],
  },
  Weekly: {
    sales: 871500,
    foodCost: 226590,
    grossProfit: 644910,
    profitMargin: 74.0,
    date: "Week of Oct 18, 2023",
    topDishes: [
      { name: "Wagyu Ribeye", sales: 315000, margin: 78 },
      { name: "Truffle Risotto", sales: 157500, margin: 82 },
      { name: "Lobster Thermidor", sales: 127400, margin: 65 },
    ],
    inventoryUsage: [
      { name: "Wagyu Beef (A5)", consumed: 56, unit: "kg", maxCapacity: 70 },
      { name: "Black Truffle", consumed: 3150, unit: "g", maxCapacity: 4200 },
      { name: "Saffron", consumed: 84, unit: "g", maxCapacity: 105, critical: true },
    ],
    theoreticalVsActual: [
      { item: "Wagyu Beef", variance: "+2.1%", positive: true },
      { item: "Caviar", variance: "-0.3%", positive: false },
      { item: "Truffle", variance: "+0.9%", positive: true },
    ],
  },
  Monthly: {
    sales: 3735000,
    foodCost: 971100,
    grossProfit: 2763900,
    profitMargin: 74.0,
    date: "October 2023",
    topDishes: [
      { name: "Wagyu Ribeye", sales: 1350000, margin: 78 },
      { name: "Truffle Risotto", sales: 675000, margin: 82 },
      { name: "Lobster Thermidor", sales: 546000, margin: 65 },
    ],
    inventoryUsage: [
      { name: "Wagyu Beef (A5)", consumed: 240, unit: "kg", maxCapacity: 300 },
      { name: "Black Truffle", consumed: 13500, unit: "g", maxCapacity: 18000 },
      { name: "Saffron", consumed: 360, unit: "g", maxCapacity: 450, critical: true },
    ],
    theoreticalVsActual: [
      { item: "Wagyu Beef", variance: "+1.8%", positive: true },
      { item: "Caviar", variance: "-0.4%", positive: false },
      { item: "Truffle", variance: "+1.1%", positive: true },
    ],
  },
};

function formatBaht(amount: number) {
  return `฿${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getMarginColor(margin: number) {
  if (margin >= 75) return "bg-[#dbeafe] text-[#1d4ed8]";
  if (margin >= 65) return "bg-[#fef9c3] text-[#a16207]";
  return "bg-[#fee2e2] text-[#dc2626]";
}


function formatWeekDisplay(weekStr: string): string {
  if (!weekStr || !weekStr.includes("-W")) return "Select week";
  const [yearStr, wStr] = weekStr.split("-W");
  const year = parseInt(yearStr);
  const weekNum = parseInt(wStr);
  const jan4 = new Date(year, 0, 4);
  const week1Mon = new Date(jan4);
  week1Mon.setDate(jan4.getDate() - ((jan4.getDay() || 7) - 1));
  const weekStart = new Date(week1Mon);
  weekStart.setDate(week1Mon.getDate() + (weekNum - 1) * 7);
  return `Week of ${weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
}

function formatMonthDisplay(monthStr: string): string {
  if (!monthStr) return "Select month";
  const [yearStr, monthNum] = monthStr.split("-");
  const d = new Date(parseInt(yearStr), parseInt(monthNum) - 1, 1);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function ReportsPage() {
  const [period, setPeriod] = useState<Period>("Daily");
  const [selectedDay, setSelectedDay] = useState("2023-10-24");
  const [selectedWeek, setSelectedWeek] = useState("2023-W43");
  const [selectedMonth, setSelectedMonth] = useState("2023-10");

  const data = REPORT_DATA[period];

  const pickerLabel =
    period === "Daily"
      ? new Date(selectedDay + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : period === "Weekly"
      ? formatWeekDisplay(selectedWeek)
      : formatMonthDisplay(selectedMonth);

  const handlePeriodChange = (p: Period) => {
    setPeriod(p);
  };

  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="max-w-[1440px] px-4 sm:px-6 pt-6 pb-16 mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
          <h1 className="text-[#1c1b1b] text-[22px] sm:text-[32px] font-semibold leading-tight tracking-[-0.32px]">
            {period} Report
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Period toggle */}
            <div className="flex items-center bg-white border border-[#e2e8f0] rounded-[8px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
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
            {/* Date picker — period-aware, overlay technique for reliable native picker */}
            <div className="relative flex items-center bg-white border border-[#e2e8f0] rounded-[8px] pl-[32px] pr-[28px] py-[8px] text-[13px] text-[#1c1b1b] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.04)] whitespace-nowrap select-none overflow-hidden">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10" width="14" height="14" viewBox="0 0 18 20" fill="none">
                <path d="M1 7H17M5 1V3M13 1V3M1 3C1 2.44772 1.44772 2 2 2H16C16.5523 2 17 2.44772 17 3V18C17 18.5523 16.5523 19 16 19H2C1.44772 19 1 18.5523 1 18V3Z" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="pointer-events-none z-10 relative">{pickerLabel}</span>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-10" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#5C5F61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type={period === "Daily" ? "date" : period === "Weekly" ? "week" : "month"}
                value={period === "Daily" ? selectedDay : period === "Weekly" ? selectedWeek : selectedMonth}
                onChange={(e) => {
                  if (period === "Daily") setSelectedDay(e.target.value);
                  else if (period === "Weekly") setSelectedWeek(e.target.value);
                  else setSelectedMonth(e.target.value);
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={period}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {[
              { label: "Sales", value: formatBaht(data.sales) },
              { label: "Food Cost", value: formatBaht(data.foodCost) },
              { label: "Gross Profit", value: formatBaht(data.grossProfit) },
              { label: "Profit Margin", value: `${data.profitMargin}%` },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-[12px] border border-[#f1f5f9] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] p-4 sm:p-6">
                <p className="text-[#5c5f61] text-[13px] sm:text-[14px] font-medium mb-1 sm:mb-2">{card.label}</p>
                <p className="text-[#1c1b1b] text-[20px] sm:text-[28px] font-bold leading-tight break-all">{card.value}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          {/* Product Performance */}
          <div className="bg-white rounded-[12px] border border-[#f1f5f9] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] p-6">
            <h3 className="text-[#1c1b1b] text-[20px] font-semibold mb-1">Product Performance</h3>
            <p className="text-[#5c5f61] text-[14px] mb-5">Top performing dishes by sales and margin.</p>
            <div className="border-b border-[#f1f5f9] pb-2 mb-3 grid grid-cols-3">
              <span className="text-[#5c5f61] text-[12px] font-medium">Dish</span>
              <span className="text-[#5c5f61] text-[12px] font-medium text-right">Sales</span>
              <span className="text-[#5c5f61] text-[12px] font-medium text-right">Margin</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={period}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col gap-4"
              >
                {data.topDishes.map((dish) => (
                  <div key={dish.name} className="grid grid-cols-3 items-center">
                    <span className="text-[#1c1b1b] text-[14px]">{dish.name}</span>
                    <span className="text-[#1c1b1b] text-[14px] text-right">฿{dish.sales.toLocaleString()}</span>
                    <div className="flex justify-end">
                      <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[12px] font-semibold ${getMarginColor(dish.margin)}`}>
                        {dish.margin}%
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">

            {/* Inventory Usage */}
            <div className="bg-white rounded-[12px] border border-[#f1f5f9] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] p-6">
              <h3 className="text-[#1c1b1b] text-[20px] font-semibold mb-1">Inventory Usage</h3>
              <p className="text-[#5c5f61] text-[14px] mb-4">Summary of key ingredient depletion.</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={period}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-3"
                >
                  {data.inventoryUsage.map((item) => {
                    const pct = Math.min(100, (item.consumed / item.maxCapacity) * 100);
                    return (
                      <div key={item.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[#1c1b1b] text-[14px]">{item.name}</span>
                          <span className={`text-[13px] font-medium ${item.critical ? "text-[#dc2626]" : "text-[#5c5f61]"}`}>
                            {item.consumed}{item.unit}
                          </span>
                        </div>
                        <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                          <motion.div
                            key={period + item.name}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={`h-full rounded-full ${item.critical ? "bg-[#dc2626]" : pct > 80 ? "bg-[#f59e0b]" : "bg-[#0f172a]"}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Theoretical vs Actual */}
            <div className="bg-white rounded-[12px] border border-[#f1f5f9] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] p-6">
              <h3 className="text-[#1c1b1b] text-[20px] font-semibold mb-1">Theoretical vs Actual</h3>
              <p className="text-[#5c5f61] text-[14px] mb-4">Variance based on sales vs depletion.</p>
              <div className="border-b border-[#f1f5f9] pb-2 mb-3 grid grid-cols-2">
                <span className="text-[#5c5f61] text-[12px] font-medium">Item</span>
                <span className="text-[#5c5f61] text-[12px] font-medium text-right">Variance</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={period}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-3"
                >
                  {data.theoreticalVsActual.map((item) => (
                    <div key={item.item} className="grid grid-cols-2 items-center">
                      <span className="text-[#1c1b1b] text-[14px]">{item.item}</span>
                      <div className="flex justify-end">
                        <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[12px] font-semibold ${item.positive ? "bg-[#fee2e2] text-[#dc2626]" : "bg-[#dcfce7] text-[#16a34a]"}`}>
                          {item.variance}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
