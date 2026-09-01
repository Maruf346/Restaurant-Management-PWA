import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  loading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0f172a] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-[#0f172a] text-white hover:bg-[#1e293b] active:scale-[0.99]",
    secondary: "bg-white text-[#1c1b1b] border border-[#d1d5db] hover:bg-gray-50 active:bg-gray-100",
    ghost: "bg-transparent text-[#5c5f61] hover:bg-gray-100",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} px-5 py-2.5 text-[14px] tracking-[0.3px] ${className}`}
      disabled={disabled || loading}
      {...(props as any)}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
