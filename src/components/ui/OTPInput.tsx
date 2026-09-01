import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OTPInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
  error?: boolean;
}

export default function OTPInput({ value, onChange, length = 6, error = false }: OTPInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const allFilled = value.every((v) => v !== "");

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.replace(/\D/g, "").slice(-1);
    const next = [...value];
    next[index] = char;
    onChange(next);
    if (char && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (value[index]) {
        const next = [...value];
        next[index] = "";
        onChange(next);
      } else if (index > 0) {
        refs.current[index - 1]?.focus();
        const next = [...value];
        next[index - 1] = "";
        onChange(next);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const next = Array(length).fill("");
    pasted.split("").forEach((c, i) => (next[i] = c));
    onChange(next);
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  const handleClick = (index: number) => {
    refs.current[index]?.select();
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="flex items-center justify-center w-full gap-2">
        {Array.from({ length }).map((_, i) => {
          const isFilled = Boolean(value[i]);
          const isSuccess = allFilled && !error;

          return (
            <motion.div
              key={i}
              className="relative flex-1"
              animate={
                isFilled && !isSuccess
                  ? { scale: [1, 1.06, 1] }
                  : { scale: 1 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <input
                ref={(el) => { refs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value[i] || ""}
                onChange={(e) => handleChange(i, e)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                onClick={() => handleClick(i)}
                className={`
                  w-full h-12 text-center text-[18px] font-semibold rounded-[8px]
                  border-2 outline-none transition-all duration-150 cursor-default
                  ${isSuccess
                    ? "border-[#16a34a] bg-[#f0fdf4] text-[#15803d]"
                    : error
                    ? "border-red-400 bg-red-50 text-red-600"
                    : isFilled
                    ? "border-[#0f172a] bg-[#f8fafc] text-[#0f172a]"
                    : "border-[#d1d5db] bg-white text-[#1c1b1b]"
                  }
                  focus:border-[#2563eb] focus:bg-white
                  ${isSuccess ? "focus:border-[#16a34a]" : ""}
                `}
              />
              {/* Filled dot indicator below */}
              <motion.div
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                animate={{
                  opacity: isFilled ? 1 : 0,
                  backgroundColor: isSuccess ? "#16a34a" : error ? "#ef4444" : "#0f172a",
                  scale: isFilled ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Success checkmark */}
      <AnimatePresence>
        {allFilled && !error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-1.5 text-[#16a34a] text-[13px] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Code entered — tap Verify to continue
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
