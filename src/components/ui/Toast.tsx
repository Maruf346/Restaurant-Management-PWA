import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ToastMessage {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

function ToastItem({ toast, onDismiss }: { toast: ToastMessage; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 3500);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const colors = {
    success: { bg: "bg-[#0f172a]", icon: "#34d399", border: "border-[#1e293b]" },
    error: { bg: "bg-[#991b1b]", icon: "#fca5a5", border: "border-[#7f1d1d]" },
    info: { bg: "bg-[#0f172a]", icon: "#93c5fd", border: "border-[#1e293b]" },
  };
  const c = colors[toast.type ?? "success"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.96 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`flex items-center gap-3 ${c.bg} border ${c.border} text-white rounded-[10px] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] min-w-[260px] max-w-[340px]`}
    >
      {toast.type === "error" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.icon} strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.icon} strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      <span className="text-[13px] font-medium flex-1">{toast.message}</span>
      <button onClick={onDismiss} className="opacity-50 hover:opacity-100 transition-opacity ml-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function Toast({ toasts, onDismiss }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 items-end">
      <AnimatePresence mode="sync">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: ToastMessage["type"] = "success") => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, dismiss };
}

