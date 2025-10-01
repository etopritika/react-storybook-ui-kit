export const TOAST_TYPES = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
} as const;

export const DEFAULT_DURATION = 3000;

export const TOAST_COLORS = {
  SUCCESS: { bg: "#ecfdf5", border: "#10b981", text: "#065f46" },
  INFO: { bg: "#eff6ff", border: "#3b82f6", text: "#1e3a8a" },
  WARNING: { bg: "#fffbeb", border: "#f59e0b", text: "#7c2d12" },
  ERROR: { bg: "#fef2f2", border: "#ef4444", text: "#7f1d1d" },
} as const;
