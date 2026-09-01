import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { getStatsByLocation, getBestDishes, getWorstDishes } from "../../data/dashboard";
import { DishPerformance, Location } from "../../types";

interface OutletContext {
  selectedLocation: Location;
  activeTime: string;
}

// ── Stat card icons ───────────────────────────────────────────────────────────
function RevenueIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 15 15" fill="none">
      <path d="M8.25 6.75H13.4625C13.275 5.375 12.7031 4.20937 11.7469 3.25312C10.7906 2.29687 9.625 1.725 8.25 1.5375V6.75ZM6.75 13.4625V1.5375C5.2375 1.725 3.98437 2.38437 2.99062 3.51562C1.99687 4.64688 1.5 5.975 1.5 7.5C1.5 9.025 1.99687 10.3531 2.99062 11.4844C3.98437 12.6156 5.2375 13.275 6.75 13.4625ZM8.25 13.4625C9.625 13.2875 10.7938 12.7188 11.7563 11.7563C12.7188 10.7938 13.2875 9.625 13.4625 8.25H8.25V13.4625ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.50937 0.196875 10.4156 0.590625C11.3219 0.984375 12.1156 1.52188 12.7969 2.20312C13.4781 2.88437 14.0156 3.67812 14.4094 4.58437C14.8031 5.49062 15 6.4625 15 7.5C15 8.525 14.8031 9.49375 14.4094 10.4062C14.0156 11.3188 13.4812 12.1156 12.8062 12.7969C12.1312 13.4781 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15Z" fill="#5C5F61"/>
    </svg>
  );
}

function FoodCostIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <path d="M9.75 6.75C9.125 6.75 8.59375 6.53125 8.15625 6.09375C7.71875 5.65625 7.5 5.125 7.5 4.5C7.5 3.875 7.71875 3.34375 8.15625 2.90625C8.59375 2.46875 9.125 2.25 9.75 2.25C10.375 2.25 10.9062 2.46875 11.3438 2.90625C11.7812 3.34375 12 3.875 12 4.5C12 5.125 11.7812 5.65625 11.3438 6.09375C10.9062 6.53125 10.375 6.75 9.75 6.75ZM4.5 9C4.0875 9 3.73437 8.85312 3.44062 8.55937C3.14687 8.26562 3 7.9125 3 7.5V1.5C3 1.0875 3.14687 0.734375 3.44062 0.440625C3.73437 0.146875 4.0875 0 4.5 0H15C15.4125 0 15.7656 0.146875 16.0594 0.440625C16.3531 0.734375 16.5 1.0875 16.5 1.5V7.5C16.5 7.9125 16.3531 8.26562 16.0594 8.55937C15.7656 8.85312 15.4125 9 15 9H4.5ZM6 7.5H13.5C13.5 7.0875 13.6469 6.73438 13.9406 6.44063C14.2344 6.14688 14.5875 6 15 6V3C14.5875 3 14.2344 2.85313 13.9406 2.55938C13.6469 2.26563 13.5 1.9125 13.5 1.5H6C6 1.9125 5.85312 2.26563 5.55937 2.55938C5.26562 2.85313 4.9125 3 4.5 3V6C4.9125 6 5.26562 6.14688 5.55937 6.44063C5.85312 6.73438 6 7.0875 6 7.5ZM14.25 12H1.5C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V2.25H1.5V10.5H14.25V12Z" fill="#5C5F61"/>
    </svg>
  );
}

function GrossProfitIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <path d="M10 6V0H18V6H10V6M0 10V0H8V10H0V0M10 18V8H18V18H10V18M0 18V12H8V18H0V18M2 8H6V2H2V8M12 16H16V10H12V16M12 4H16V2H12V4M2 16H6V14H2V16" fill="#5C5F61"/>
    </svg>
  );
}

function ProfitMarginIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <path d="M14 20C12.3333 20 10.9167 19.4167 9.75 18.25C8.58333 17.0833 8 15.6667 8 14C8 12.3333 8.58333 10.9167 9.75 9.75C10.9167 8.58333 12.3333 8 14 8C15.6667 8 17.0833 8.58333 18.25 9.75C19.4167 10.9167 20 12.3333 20 14C20 15.6667 19.4167 17.0833 18.25 18.25C17.0833 19.4167 15.6667 20 14 20ZM14 18C15.1 18 16.0417 17.6083 16.825 16.825C17.6083 16.0417 18 15.1 18 14C18 12.9 17.6083 11.9583 16.825 11.175C16.0417 10.3917 15.1 10 14 10C12.9 10 11.9583 10.3917 11.175 11.175C10.3917 11.9583 10 12.9 10 14C10 15.1 10.3917 16.0417 11.175 16.825C11.9583 17.6083 12.9 18 14 18ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V8.4C0 8.26667 0.0125 8.13333 0.0375 8C0.0625 7.86667 0.1 7.73333 0.15 7.6L2.15 3H2C1.71667 3 1.47917 2.90417 1.2875 2.7125C1.09583 2.52083 1 2.28333 1 2V1C1 0.716667 1.09583 0.479167 1.2875 0.2875C1.47917 0.0958333 1.71667 0 2 0H9C9.28333 0 9.52083 0.0958333 9.7125 0.2875C9.90417 0.479167 10 0.716667 10 1V2C10 2.28333 9.90417 2.52083 9.7125 2.7125C9.52083 2.90417 9.28333 3 9 3H8.85L10.5 6.8C10.1833 6.96667 9.88333 7.14167 9.6 7.325C9.31667 7.50833 9.05 7.71667 8.8 7.95L6.7 3H4.3L2 8.4V16H6.25C6.33333 16.35 6.44583 16.6958 6.5875 17.0375C6.72917 17.3792 6.9 17.7 7.1 18H2Z" fill="#5C5F61"/>
    </svg>
  );
}

// ── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  subtext,
  subtextType,
  icon,
  extra,
  delay = 0,
}: {
  label: string;
  value: string;
  subtext?: string;
  subtextType?: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  extra?: React.ReactNode;
  delay?: number;
}) {
  const subtextColor =
    subtextType === "positive"
      ? "text-[#16a34a]"
      : subtextType === "negative"
      ? "text-[#f97316]"
      : "text-[#5c5f61]";

  const arrowUp = (
    <svg width="12" height="12" viewBox="0 0 20 12" fill="currentColor">
      <path d="M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z" />
    </svg>
  );
  const arrowDown = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ transform: "rotate(180deg)" }}>
      <path d="M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="bg-white border border-[#e5e2e1] rounded-[12px] p-5 flex flex-col gap-3 shadow-[0px_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_12px_rgba(0,0,0,0.06)] transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="text-[#5c5f61] text-[11px] font-semibold tracking-[0.5px] uppercase">{label}</span>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-[#1c1b1b] font-semibold text-[28px] md:text-[32px] tracking-[-0.5px] leading-none">
        {value}
      </div>
      {subtext && (
        <div className={`flex items-center gap-1 text-[13px] font-medium ${subtextColor}`}>
          {subtextType === "positive" && arrowUp}
          {subtextType === "negative" && <span className="text-base">↑</span>}
          {subtext}
        </div>
      )}
      {extra}
    </motion.div>
  );
}

// ── Dish Table ────────────────────────────────────────────────────────────────
function DishTable({
  title,
  titleIcon,
  titleColor,
  dishes,
  type,
  delay,
}: {
  title: string;
  titleIcon: React.ReactNode;
  titleColor: string;
  dishes: DishPerformance[];
  type: "best" | "worst";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="bg-white border border-[#e5e2e1] rounded-[12px] shadow-[0px_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-[#f1f0ef] flex items-center gap-2">
        {titleIcon}
        <h3 className={`font-semibold text-[16px] ${titleColor}`}>{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#f1f0ef]">
              {["DISH NAME", "SALES", "FOOD COST", "PROFIT", "MARGIN"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-[11px] font-semibold text-[#5c5f61] tracking-[0.5px] uppercase whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, i) => (
              <motion.tr
                key={dish.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.05 * i }}
                className="border-b border-[#f8f7f6] last:border-0 hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-4 py-3 text-[14px] text-[#1c1b1b] font-medium max-w-[140px]">
                  {dish.name}
                </td>
                <td className="px-4 py-3 text-[14px] text-[#1c1b1b] whitespace-nowrap">
                  ${dish.sales.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-[14px] text-[#1c1b1b] whitespace-nowrap">
                  ${dish.foodCost.toLocaleString()}
                </td>
                <td className={`px-4 py-3 text-[14px] font-semibold whitespace-nowrap ${type === "best" ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                  ${dish.profit.toLocaleString()}
                </td>
                <td className={`px-4 py-3 text-[14px] font-semibold whitespace-nowrap ${type === "best" ? "text-[#5c5f61]" : "text-[#dc2626]"}`}>
                  {dish.margin}%
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function DashboardPage() {
  const { selectedLocation, activeTime } = useOutletContext<OutletContext>();
  const time = (activeTime || "Daily") as "Daily" | "Weekly" | "Monthly";
  const stats = getStatsByLocation(selectedLocation.id, time);
  const bestPerformingDishes = getBestDishes(selectedLocation.id, time);
  const worstPerformingDishes = getWorstDishes(selectedLocation.id, time);

  const profitBarWidth = Math.min((stats.profitMargin.value / stats.profitMargin.target) * 100, 100);

  return (
    <div className="p-5 md:p-7 max-w-[1400px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h1 className="font-semibold text-[#1c1b1b] text-[26px] md:text-[30px] tracking-[-0.5px]">
          Dashboard Overview
        </h1>
        <p className="text-[#5c5f61] text-[14px] mt-0.5">
          Today's snapshot for {selectedLocation.name}
        </p>
      </motion.div>

      {/* Stat cards */}
      <div key={`${selectedLocation.id}-${time}`} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Revenue"
          value={`$${stats.revenue.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          subtext={`${stats.revenue.change}% ${stats.revenue.changeLabel}`}
          subtextType="positive"
          icon={<RevenueIcon />}
          delay={0.05}
        />
        <StatCard
          label="Food Cost"
          value={`$${stats.foodCost.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          subtext={`${stats.foodCost.overTheoretical}% over theoretical`}
          subtextType="negative"
          icon={<FoodCostIcon />}
          delay={0.1}
        />
        <StatCard
          label="Gross Profit"
          value={`$${stats.grossProfit.value.toLocaleString("en-US", { minimumFractionDigits: 2 })}`}
          subtext={`${stats.grossProfit.change}% ${stats.grossProfit.changeLabel}`}
          subtextType="positive"
          icon={<GrossProfitIcon />}
          delay={0.15}
        />
        <StatCard
          label="Profit Margin"
          value={`${stats.profitMargin.value} %`}
          icon={<ProfitMarginIcon />}
          delay={0.2}
          extra={
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${profitBarWidth}%` }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="h-full bg-[#0f172a] rounded-full"
              />
            </div>
          }
        />
      </div>

      {/* Dish tables */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <DishTable
          title="Best Performing Dishes"
          titleIcon={
            <svg width="18" height="18" viewBox="0 0 20 19" fill="none">
              <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#ca8a04" />
            </svg>
          }
          titleColor="text-[#1c1b1b]"
          dishes={bestPerformingDishes}
          type="best"
          delay={0.25}
        />
        <DishTable
          title="Worst Performing Dishes"
          titleIcon={
            <svg width="18" height="18" viewBox="0 0 22 19" fill="none">
              <path d="M3.45 19H18.55L11 4L3.45 19ZM11 16C11.2833 16 11.5208 15.9042 11.7125 15.7125C11.9042 15.5208 12 15.2833 12 15C12 14.7167 11.9042 14.4792 11.7125 14.2875C11.5208 14.0958 11.2833 14 11 14C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2833 10.0958 15.5208 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16ZM10 13H12V8H10V13Z" fill="#dc2626" />
            </svg>
          }
          titleColor="text-[#1c1b1b]"
          dishes={worstPerformingDishes}
          type="worst"
          delay={0.3}
        />
      </div>
    </div>
  );
}
