import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Period = "Daily" | "Weekly" | "Monthly";

interface DatePickerDrawerProps {
  open: boolean;
  period: Period;
  selectedDate: string; // YYYY-MM-DD for Daily
  selectedWeek: string; // YYYY-Www for Weekly
  selectedMonth: string; // YYYY-MM for Monthly
  onDateChange: (date: string) => void;
  onWeekChange: (week: string) => void;
  onMonthChange: (month: string) => void;
  onClose: () => void;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getWeeksInYear(year: number) {
  const dec31 = new Date(year, 11, 31);
  const jan4 = new Date(year, 0, 4);
  const weeksDiff = (dec31.getTime() - jan4.getTime()) / (7 * 24 * 60 * 60 * 1000);
  return Math.ceil((weeksDiff + ((jan4.getDay() + 1) - 1)) / 7);
}

function parseWeek(weekStr: string): { year: number; week: number } {
  if (!weekStr) return { year: new Date().getFullYear(), week: 1 };
  const [yearStr, wStr] = weekStr.split("-W");
  return { year: parseInt(yearStr), week: parseInt(wStr) };
}

function getWeekStartDate(year: number, week: number): Date {
  const jan4 = new Date(year, 0, 4);
  const week1Mon = new Date(jan4);
  week1Mon.setDate(jan4.getDate() - ((jan4.getDay() || 7) - 1));
  const weekStart = new Date(week1Mon);
  weekStart.setDate(week1Mon.getDate() + (week - 1) * 7);
  return weekStart;
}

// Daily Picker Component
function DailyPicker({ selected, onChange }: { selected: string; onChange: (date: string) => void }) {
  const [displayMonth, setDisplayMonth] = useState(() => {
    const [year, month] = selected.split("-");
    return { year: parseInt(year), month: parseInt(month) - 1 };
  });

  const daysInMonth = getDaysInMonth(displayMonth.year, displayMonth.month);
  const firstDayOfMonth = new Date(displayMonth.year, displayMonth.month, 1).getDay();

  const selectedDate = new Date(selected + "T00:00:00");
  const selectedDateNum = selectedDate.getDate();
  const isSelectedMonth =
    selectedDate.getFullYear() === displayMonth.year &&
    selectedDate.getMonth() === displayMonth.month;

  const monthName = new Date(displayMonth.year, displayMonth.month).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setDisplayMonth((prev) => {
      if (prev.month === 0) {
        return { year: prev.year - 1, month: 11 };
      }
      return { ...prev, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setDisplayMonth((prev) => {
      if (prev.month === 11) {
        return { year: prev.year + 1, month: 0 };
      }
      return { ...prev, month: prev.month + 1 };
    });
  };

  const handleDayClick = (day: number) => {
    const dateStr = `${displayMonth.year}-${String(displayMonth.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(dateStr);
  };

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-[#1c1b1b] font-semibold text-[16px]">{monthName}</h3>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-center text-[#5c5f61] text-[12px] font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days grid - no scrolling, compact on desktop */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) =>
          day ? (
            <button
              key={idx}
              onClick={() => handleDayClick(day)}
              className={`aspect-square rounded-lg font-medium text-[13px] sm:text-[14px] transition-all flex items-center justify-center ${
                isSelectedMonth && day === selectedDateNum
                  ? "bg-[#0f172a] text-white"
                  : "text-[#1c1b1b] hover:bg-[#f1f5f9]"
              }`}
            >
              {day}
            </button>
          ) : (
            <div key={idx} />
          )
        )}
      </div>
    </div>
  );
}

// Weekly Picker Component
function WeeklyPicker({ selected, onChange }: { selected: string; onChange: (week: string) => void }) {
  const { year: selectedYear, week: selectedWeek } = parseWeek(selected);
  const [displayYear, setDisplayYear] = useState(selectedYear);

  const weeksInYear = getWeeksInYear(displayYear);
  const weeks = Array.from({ length: weeksInYear }, (_, i) => i + 1);

  const handlePrevYear = () => setDisplayYear((prev) => prev - 1);
  const handleNextYear = () => setDisplayYear((prev) => prev + 1);

  const handleWeekClick = (week: number) => {
    onChange(`${displayYear}-W${String(week).padStart(2, "0")}`);
  };

  const getWeekRange = (year: number, week: number) => {
    const startDate = getWeekStartDate(year, week);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
  };

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4">
      {/* Year Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevYear}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-[#1c1b1b] font-semibold text-[16px]">{displayYear}</h3>
        <button
          onClick={handleNextYear}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Weeks grid - limited height on desktop to avoid scrolling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[320px] overflow-y-auto">
        {weeks.map((week) => {
          const isSelected = displayYear === selectedYear && week === selectedWeek;
          return (
            <button
              key={week}
              onClick={() => handleWeekClick(week)}
              className={`p-3 rounded-lg text-[13px] font-medium text-center transition-all ${
                isSelected
                  ? "bg-[#0f172a] text-white"
                  : "bg-[#f1f5f9] text-[#1c1b1b] hover:bg-[#e2e8f0]"
              }`}
            >
              <div className="font-semibold">W{String(week).padStart(2, "0")}</div>
              <div className={`text-[11px] mt-1 ${isSelected ? "text-[#e2e8f0]" : "text-[#5c5f61]"}`}>
                {getWeekRange(displayYear, week)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Monthly Picker Component
function MonthlyPicker({ selected, onChange }: { selected: string; onChange: (month: string) => void }) {
  const [year, month] = selected.split("-").map((x) => parseInt(x));
  const [displayYear, setDisplayYear] = useState(year);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevYear = () => setDisplayYear((prev) => prev - 1);
  const handleNextYear = () => setDisplayYear((prev) => prev + 1);

  const handleMonthClick = (monthNum: number) => {
    onChange(`${displayYear}-${String(monthNum + 1).padStart(2, "0")}`);
  };

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4">
      {/* Year Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevYear}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-[#1c1b1b] font-semibold text-[16px]">{displayYear}</h3>
        <button
          onClick={handleNextYear}
          className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Months grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {months.map((monthName, monthNum) => {
          const isSelected = displayYear === year && monthNum + 1 === month;
          return (
            <button
              key={monthNum}
              onClick={() => handleMonthClick(monthNum)}
              className={`p-3 rounded-lg text-[14px] font-medium text-center transition-all ${
                isSelected
                  ? "bg-[#0f172a] text-white"
                  : "bg-[#f1f5f9] text-[#1c1b1b] hover:bg-[#e2e8f0]"
              }`}
            >
              {monthName.substring(0, 3)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DatePickerDrawer({
  open,
  period,
  selectedDate,
  selectedWeek,
  selectedMonth,
  onDateChange,
  onWeekChange,
  onMonthChange,
  onClose,
}: DatePickerDrawerProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        {/* Mobile Drawer - Bottom Sheet */}
        {/* Backdrop */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/30 z-40"
            />
          )}
        </AnimatePresence>

        {/* Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[20px] max-h-[90vh] overflow-y-auto"
            >
              {/* Handle bar for mobile */}
              <div className="sticky top-0 bg-white rounded-t-[20px] flex justify-center pt-3 pb-2 border-b border-[#e2e8f0]">
                <div className="w-12 h-1 bg-[#d1d5db] rounded-full" />
              </div>

              {/* Header */}
              <div className="sticky top-6 bg-white px-4 sm:px-6 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
                <h2 className="text-[#1c1b1b] text-[18px] sm:text-[20px] font-semibold">
                  Select {period}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Picker Content */}
              <motion.div
                key={period}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {period === "Daily" && (
                  <DailyPicker selected={selectedDate} onChange={onDateChange} />
                )}
                {period === "Weekly" && (
                  <WeeklyPicker selected={selectedWeek} onChange={onWeekChange} />
                )}
                {period === "Monthly" && (
                  <MonthlyPicker selected={selectedMonth} onChange={onMonthChange} />
                )}
              </motion.div>

              {/* Close Button */}
              <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] p-4 sm:p-6">
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-[#0f172a] text-white font-semibold rounded-lg hover:bg-[#1a1f2e] transition-colors"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop - Popup Modal
  return (
    <>
      {/* Invisible backdrop to close on outside click */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      {/* Popup Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[68px] right-4 z-50 w-[420px] max-h-[calc(100vh-88px)] flex flex-col bg-white rounded-[12px] border border-[rgba(196,199,200,0.3)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0] shrink-0">
              <h2 className="text-[#1c1b1b] text-[18px] font-semibold">
                Select {period}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto">
              <motion.div
                key={period}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {period === "Daily" && (
                  <DailyPicker selected={selectedDate} onChange={onDateChange} />
                )}
                {period === "Weekly" && (
                  <WeeklyPicker selected={selectedWeek} onChange={onWeekChange} />
                )}
                {period === "Monthly" && (
                  <MonthlyPicker selected={selectedMonth} onChange={onMonthChange} />
                )}
              </motion.div>
            </div>

            {/* Close Button */}
            <div className="border-t border-[#e2e8f0] p-6 shrink-0 bg-white">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0f172a] text-white font-semibold rounded-lg hover:bg-[#1a1f2e] transition-colors"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
