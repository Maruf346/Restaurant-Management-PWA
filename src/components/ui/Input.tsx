import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, rightElement, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="font-semibold text-[#1c1b1b] text-[13px] tracking-[0.3px]">
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            ref={ref}
            className={`w-full bg-white border border-[#e2e8f0] rounded-[8px] px-4 py-2.5 text-[15px] text-[#1c1b1b] placeholder:text-[#a0a5a5] focus:outline-none focus:border-[#0f172a] focus:ring-1 focus:ring-[#0f172a]/20 transition-all ${
              error ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""
            } ${rightElement ? "pr-11" : ""} ${className}`}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightElement}</div>
          )}
        </div>
        {error && (
          <p className="text-red-500 text-[12px] font-medium mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
