import { motion, AnimatePresence } from "framer-motion";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "default";
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-[rgba(15,23,42,0.2)] backdrop-blur-[2px]"
          onClick={onCancel}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[12px] shadow-[0px_12px_40px_-12px_rgba(15,23,42,0.12),0px_0px_0px_1px_rgba(241,245,249,0.8)] max-w-[400px] w-full overflow-hidden border border-[rgba(241,245,249,0.8)]"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-[#f6f3f2]">
              <div className="flex items-start gap-3">
                {variant === "danger" && (
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5">
                      <path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-[#1c1b1b] text-[16px] tracking-[0.2px]">{title}</h3>
                  <p className="text-[#5c5f61] text-[14px] mt-1 leading-[1.5]">{message}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#fcf8f8] flex justify-end gap-3">
              <button
                onClick={onCancel}
                className="bg-white border border-[#e2e8f0] text-[#0f172a] text-[14px] font-semibold rounded-[8px] px-5 py-2.5 hover:bg-gray-50 transition-colors"
              >
                {cancelLabel}
              </button>
              <button
                onClick={onConfirm}
                className={`text-[14px] font-semibold rounded-[8px] px-5 py-2.5 transition-colors ${
                  variant === "danger"
                    ? "bg-red-600 text-white hover:bg-red-700 shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                    : "bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                }`}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
