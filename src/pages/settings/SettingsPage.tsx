import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/imports/Settings/55eaed062e68ceb12b6799e9aecc377c5a03f236.png";
import Toast, { useToast } from "../../components/ui/Toast";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [displayName, setDisplayName] = useState("Eleanor Vance");
  const [displayAvatar, setDisplayAvatar] = useState<string>(profileImg as unknown as string);

  const [draftName, setDraftName] = useState("Eleanor Vance");
  const [draftAvatar, setDraftAvatar] = useState<string>(profileImg as unknown as string);

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const email = "eleanor.v@profitplate.com";
  const { toasts, addToast, dismiss } = useToast();

  const startEdit = () => {
    setDraftName(displayName);
    setDraftAvatar(displayAvatar);
    setIsEditing(true);
  };

  const cancelEdit = () => setIsEditing(false);

  const saveProfile = () => {
    setDisplayName(draftName);
    setDisplayAvatar(draftAvatar);
    setIsEditing(false);
    addToast("Profile updated successfully", "success");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDraftAvatar(URL.createObjectURL(file));
  };

  const cancelPassword = () => {
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
    setIsChangingPassword(false);
  };

  const handleUpdatePassword = () => {
    if (!currentPass) { addToast("Please enter your current password.", "error"); return; }
    if (!newPass) { addToast("Please enter a new password.", "error"); return; }
    if (newPass.length < 6) { addToast("Password must be at least 6 characters.", "error"); return; }
    if (newPass !== confirmPass) { addToast("New passwords do not match.", "error"); return; }
    cancelPassword();
    addToast("Password updated successfully", "success");
  };

  return (
    <div className="min-h-full bg-[#f8fafc] px-4 sm:px-6 pt-6 sm:pt-10 pb-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Page header */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[24px] sm:text-[32px] tracking-[-0.32px] leading-tight">
            Account Settings
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5c5f61] text-[14px] sm:text-[16px] leading-[24px]">
            Manage your personal profile and security preferences.
          </p>
        </div>

        {/* ── Profile Section ── */}
        <div className="bg-white rounded-[8px] border border-[rgba(255,255,255,0.8)] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] p-[25px] flex flex-col gap-4">
          {/* Header */}
          <div className="border-b border-[#e5e2e1] pb-[17px] flex items-center justify-between">
            <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1c1b1b] text-[24px] leading-[33.6px]">
              Profile Information
            </h2>
            {!isEditing && (
              <button
                onClick={startEdit}
                className="flex items-center gap-1.5 px-[9px] sm:px-4 py-2 rounded-[8px] border border-[rgba(196,199,200,0.5)] bg-white hover:bg-gray-50 transition-colors shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              >
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" className="text-[#5c5f61]"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <span className="hidden sm:inline font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px]">
                  Edit Profile
                </span>
              </button>
            )}
          </div>

          {/* Content row */}
          <div className="flex flex-col sm:flex-row gap-4 pb-4">
            {/* Avatar — centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative rounded-full size-24 overflow-hidden bg-[#f1edec] border border-[#e5e2e1]">
                <img
                  src={isEditing ? draftAvatar : displayAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2"
                    >
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                )}
              </div>
              {isEditing && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="font-['Inter:Medium',sans-serif] font-medium text-[#5c5f61] text-[12px] leading-[12px] hover:text-[#1c1b1b] transition-colors"
                >
                  Change Photo
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Fields */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] leading-[14px]">
                  Full Name
                </label>
                {isEditing ? (
                  <div className="bg-white border border-[#6b7280] rounded">
                    <input
                      type="text"
                      value={draftName}
                      onChange={(e) => setDraftName(e.target.value)}
                      className="w-full px-[17px] py-[11px] font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] leading-[24px] outline-none bg-transparent"
                    />
                  </div>
                ) : (
                  <div className="bg-white border border-[#e5e2e1] rounded px-[17px] py-[11px]">
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] leading-[24px]">
                      {displayName}
                    </span>
                  </div>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] leading-[14px]">
                    Email Address
                  </label>
                  {isEditing && (
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[12px]">
                      cannot be changed
                    </span>
                  )}
                </div>
                <div className={`bg-white border border-[#e5e2e1] rounded px-[17px] py-[11px] transition-opacity ${isEditing ? "opacity-40" : ""}`}>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] leading-[24px]">
                    {email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer (edit mode only) */}
          <AnimatePresence>
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="border-t border-[#e5e2e1] pt-[17px] flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-3">
                  <button
                    onClick={cancelEdit}
                    className="px-6 py-2.5 rounded-[8px] border border-[rgba(196,199,200,0.5)] bg-white hover:bg-gray-50 transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] text-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveProfile}
                    className="px-6 py-2.5 rounded-[8px] bg-[#0f172a] hover:bg-[#1e293b] transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px] tracking-[0.28px] text-center"
                  >
                    Save Profile
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Security Section ── */}
        <div className="bg-white rounded-[8px] border border-[rgba(255,255,255,0.8)] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)] p-[25px] flex flex-col gap-4">
          {/* Header */}
          <div className="border-b border-[#e5e2e1] pb-[17px]">
            <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[#1c1b1b] text-[24px] leading-[33.6px]">
              Security
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!isChangingPassword ? (
              <motion.div
                key="trigger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <button
                  onClick={() => setIsChangingPassword(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-[8px] border border-[rgba(196,199,200,0.5)] bg-white hover:bg-gray-50 transition-colors shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                >
                  <svg
                    width="14" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" className="text-[#5c5f61]"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px]">
                    Change Password
                  </span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="w-full sm:max-w-[512px] flex flex-col gap-4 pb-4">
                  {/* Current Password */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] leading-[14px]">
                      Current Password
                    </label>
                    <div className="bg-white border border-[#6b7280] rounded">
                      <input
                        type="password"
                        value={currentPass}
                        onChange={(e) => setCurrentPass(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-[17px] py-[13px] font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] outline-none bg-transparent placeholder:text-[rgba(92,95,97,0.5)]"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] leading-[14px]">
                      New Password
                    </label>
                    <div className="bg-white border border-[#6b7280] rounded">
                      <input
                        type="password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-[17px] py-[13px] font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] outline-none bg-transparent placeholder:text-[rgba(92,95,97,0.5)]"
                      />
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] leading-[14px]">
                      Confirm New Password
                    </label>
                    <div className="bg-white border border-[#6b7280] rounded">
                      <input
                        type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-[17px] py-[13px] font-['Inter:Regular',sans-serif] font-normal text-[#1c1b1b] text-[16px] outline-none bg-transparent placeholder:text-[rgba(92,95,97,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-[#e5e2e1] pt-[17px] flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-3">
                  <button
                    onClick={cancelPassword}
                    className="px-6 py-2.5 rounded-[8px] border border-[rgba(196,199,200,0.5)] bg-white hover:bg-gray-50 transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[14px] tracking-[0.28px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] text-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdatePassword}
                    className="px-6 py-2.5 rounded-[8px] bg-[#0f172a] hover:bg-[#1e293b] transition-colors font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px] tracking-[0.28px] text-center"
                  >
                    Update Password
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
