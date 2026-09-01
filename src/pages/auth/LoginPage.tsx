import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../../stores/authStore";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);
    await login(email, password);
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div
      className="flex items-center justify-center min-h-full px-5 py-10"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-[17px] border border-[#e5e2e1] shadow-[0px_5.6px_28px_-2.8px_rgba(0,0,0,0.05),0px_0px_1.4px_0px_rgba(0,0,0,0.1)] w-full max-w-[672px]"
      >
        {/* Top lighting effect */}
        <div className="absolute left-[1.4px] right-[1.4px] top-[1.4px] h-[1.4px] bg-white opacity-50 rounded-t-[17px]" />

        <div className="p-[44px] md:p-[68px] flex flex-col gap-[44px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-semibold text-[#1c1b1b] text-[52px] md:text-[69px] tracking-[-1.4px] leading-tight text-center">
              ProfitPlate
            </h1>
            <p className="text-[#5c5f61] text-[22px] md:text-[26px] font-normal text-center">
              Management Suite
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white border border-[#e2e8f0] rounded-[17px] shadow-[0px_2.8px_5.6px_-1.4px_rgba(0,0,0,0.02)] p-[36px] md:p-[48px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[23px]">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 rounded-[11px] px-4 py-3 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <Input
                label="Email"
                type="text"
                placeholder="Enter your email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />

              <div className="flex flex-col gap-[11px]">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  rightElement={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-[#747878] hover:text-[#1c1b1b] transition-colors p-1"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  }
                />
                <div className="flex justify-end pt-1">
                  <Link
                    to="/forgot-password"
                    className="text-[#5c5f61] text-[13px] sm:text-[14px] hover:text-[#1c1b1b] transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Button type="submit" fullWidth loading={loading} className="mt-1">
                Login
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
