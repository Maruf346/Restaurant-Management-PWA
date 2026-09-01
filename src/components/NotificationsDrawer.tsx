import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

interface NotificationsDrawerProps {
  open: boolean;
  notifications: Notification[];
  onClose: () => void;
  onMarkAllRead: () => void;
  onClearRead: () => void;
  onDelete: (id: string) => void;
  onMarkRead: (id: string) => void;
}

export default function NotificationsDrawer({
  open,
  notifications,
  onClose,
  onMarkAllRead,
  onClearRead,
  onDelete,
  onMarkRead,
}: NotificationsDrawerProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

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

      {/* Drawer panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[68px] right-4 z-50 w-[380px] max-h-[calc(100vh-88px)] flex flex-col bg-white rounded-[12px] border border-[rgba(196,199,200,0.3)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e2e1] shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1c1b1b] text-[16px] leading-[24px]">
                  Notifications
                </span>
                <AnimatePresence>
                  {unreadCount > 0 && (
                    <motion.span
                      key={unreadCount}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 bg-[#0f172a] text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] rounded-full"
                    >
                      {unreadCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onMarkAllRead}
                  className="font-['Inter:Medium',sans-serif] font-medium text-[#5c5f61] text-[13px] hover:text-[#1c1b1b] transition-colors"
                >
                  Mark as Read
                </button>
                <div className="w-px h-4 bg-[rgba(196,199,200,0.5)]" />
                <button
                  onClick={onClearRead}
                  className="font-['Inter:Medium',sans-serif] font-medium text-[#5c5f61] text-[13px] hover:text-red-500 transition-colors"
                >
                  Clear Read
                </button>
              </div>
            </div>

            {/* Notification list */}
            <div className="flex-1 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-6 gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f1edec] flex items-center justify-center shrink-0">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path
                        d="M8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0"
                        fill="#d1d5db"
                      />
                    </svg>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5c5f61] text-[14px] text-center">
                    {"You're all caught up!"}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[13px] text-center leading-[18px]">
                    No notifications to show right now.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  {notifications.map((n, idx) => (
                    <NotificationRow
                      key={n.id}
                      notification={n}
                      hasBorder={idx < notifications.length - 1}
                      onDelete={() => onDelete(n.id)}
                      onMarkRead={() => onMarkRead(n.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NotificationRow({
  notification,
  hasBorder,
  onDelete,
  onMarkRead,
}: {
  notification: Notification;
  hasBorder: boolean;
  onDelete: () => void;
  onMarkRead: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !notification.read && onMarkRead()}
      className={`relative flex items-start gap-3 px-5 py-4 transition-colors cursor-pointer ${
        notification.read
          ? "bg-white hover:bg-gray-50"
          : "bg-[#faf9f8] hover:bg-[#f4f0ef]"
      } ${hasBorder ? "border-b border-[#f0eeec]" : ""}`}
    >
      {/* Unread dot */}
      <div className="flex items-start justify-center w-5 pt-1.5 shrink-0">
        <AnimatePresence>
          {!notification.read && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.15 }}
              className="w-2 h-2 rounded-full bg-[#0f172a] shrink-0"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] ${
            notification.read ? "text-[#5c5f61]" : "text-[#1c1b1b]"
          }`}
        >
          {notification.title}
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5c5f61] text-[13px] leading-[18px] mt-0.5">
          {notification.body}
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#9ca3af] text-[12px] leading-[16px] mt-1">
          {notification.time}
        </p>
      </div>

      {/* Delete button — appears on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="shrink-0 w-7 h-7 flex items-center justify-center rounded-[6px] text-[#9ca3af] hover:text-red-500 hover:bg-red-50 transition-colors mt-0.5"
          >
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
