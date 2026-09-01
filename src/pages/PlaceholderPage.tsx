import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function PlaceholderPage({ title }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-10 min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-gray-100 rounded-[16px] flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c5f61" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </div>
        <h2 className="font-semibold text-[#1c1b1b] text-[20px] mb-2">{title}</h2>
        <p className="text-[#5c5f61] text-[14px]">This section is coming soon.</p>
      </motion.div>
    </div>
  );
}
