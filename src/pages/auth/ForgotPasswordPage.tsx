import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import OTPInput from "../../components/ui/OTPInput";
import { MOCK_OTP } from "../../data/auth";

type Step = "email" | "otp" | "newPassword";

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [resendCount, setResendCount] = useState(0);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Please enter your email."); return; }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setStep("otp");
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const entered = otp.join("");
    if (entered.length < 6) { setError("Please enter all 6 digits."); return; }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    if (entered !== MOCK_OTP) {
      setError(`Invalid OTP. (Hint: use ${MOCK_OTP})`);
      return;
    }
    setStep("newPassword");
  };

  const handleResend = async () => {
    setOtp(Array(6).fill(""));
    setResendCount((c) => c + 1);
  };

  const handleNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters."); return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match."); return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    navigate("/", { replace: true });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-full px-5 py-10"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-[44px] w-full max-w-[672px]"
      >
        {/* Back link */}
        <Link
          to="/"
          className="flex items-center gap-[11px] text-[#5c5f61] font-semibold text-[14px] tracking-[0.28px] hover:text-[#1c1b1b] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.1875 7.5L7.85417 12.1667L6.66667 13.3333L0 6.66667L6.66667 0L7.85417 1.16667L3.1875 5.83333H13.3333V7.5H3.1875Z" fill="#5C5F61" />
          </svg>
          Back to Login
        </Link>

        {/* Card */}
        <div className="bg-white rounded-[17px] border border-[#e5e2e1] shadow-[0px_5.6px_28px_-2.8px_rgba(0,0,0,0.05),0px_0px_1.4px_0px_rgba(0,0,0,0.1)] overflow-hidden">
          <AnimatePresence mode="wait">
            {step === "email" && (
              <motion.div
                key="email"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-[44px] md:p-[68px] flex flex-col gap-[44px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <h1 className="font-semibold text-[#1c1b1b] text-[44px] text-center tracking-[-1.1px]">
                    ProfitPlate
                  </h1>
                  <div className="bg-[#5d5f5f]/20 h-[5.6px] rounded-full w-[67px]" />
                </div>
                <div className="flex flex-col items-center gap-[11px]">
                  <h2 className="font-medium text-[#1c1b1b] text-[33px] text-center">
                    Forgot Password?
                  </h2>
                  <p className="text-[#444748] text-[19.6px] text-center max-w-[448px]">
                    Enter your email address and we"ll send you a one-time code to reset your password.
                  </p>
                </div>
                <form onSubmit={handleSendOtp} className="flex flex-col gap-[22px]">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-[11px] px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  <Button type="submit" fullWidth loading={loading}>
                    Send OTP
                  </Button>
                </form>
              </motion.div>
            )}

            {step === "otp" && (
              <motion.div
                key="otp"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-[44px] md:p-[68px] flex flex-col gap-[44px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <h1 className="font-semibold text-[#1c1b1b] text-[44px] text-center tracking-[-1.1px]">
                    ProfitPlate
                  </h1>
                  <div className="bg-[#5d5f5f]/20 h-[5.6px] rounded-full w-[67px]" />
                </div>
                <div className="flex flex-col items-center gap-[11px] pt-[44px]">
                  <h2 className="font-medium text-[#1c1b1b] text-[33px] text-center">
                    Verification Required
                  </h2>
                  <p className="text-[#444748] text-[19.6px] text-center max-w-[448px]">
                    We've sent a 6-digit code to <strong>{email}</strong>. Please enter it below to reset your password.
                    {resendCount > 0 && <span className="block text-sm text-[#5c5f61] mt-1">Code resent {resendCount} time{resendCount > 1 ? "s" : ""}.</span>}
                  </p>
                </div>
                <form onSubmit={handleVerifyOtp} className="flex flex-col gap-[44px]">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-[11px] px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  <OTPInput value={otp} onChange={setOtp} />
                  <div className="flex flex-col gap-[22px] pt-[11px]">
                    <Button type="submit" fullWidth loading={loading}>
                      Verify Code
                    </Button>
                    <Button type="button" variant="secondary" fullWidth onClick={handleResend}>
                      Resend Code
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === "newPassword" && (
              <motion.div
                key="newPassword"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-[44px] md:p-[68px] flex flex-col gap-[44px]"
              >
                <div className="flex flex-col items-center gap-3">
                  <h1 className="font-semibold text-[#1c1b1b] text-[44px] text-center tracking-[-1.1px]">
                    ProfitPlate
                  </h1>
                  <div className="bg-[#5d5f5f]/20 h-[5.6px] rounded-full w-[67px]" />
                </div>
                <div className="flex flex-col items-center gap-[11px] pt-[44px]">
                  <h2 className="font-medium text-[#1c1b1b] text-[33px] text-center">
                    Set New Password
                  </h2>
                  <p className="text-[#444748] text-[19.6px] text-center max-w-[448px]">
                    Your identity has been verified. Please enter your new password below.
                  </p>
                </div>
                <form onSubmit={handleNewPassword} className="flex flex-col gap-[22px]">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-[11px] px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  <Input
                    label="New Password"
                    type={showNew ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    rightElement={
                      <button type="button" onClick={() => setShowNew(!showNew)} tabIndex={-1} className="text-[#747878] hover:text-[#1c1b1b] transition-colors p-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {showNew ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>}
                        </svg>
                      </button>
                    }
                  />
                  <Input
                    label="Confirm New Password"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    rightElement={
                      <button type="button" onClick={() => setShowConfirm(!showConfirm)} tabIndex={-1} className="text-[#747878] hover:text-[#1c1b1b] transition-colors p-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {showConfirm ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></> : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>}
                        </svg>
                      </button>
                    }
                  />
                  <Button type="submit" fullWidth loading={loading} className="mt-2">
                    Reset Password
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
