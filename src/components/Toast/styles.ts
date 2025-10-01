import type { CSSProperties } from "react";
import type { ToastType } from "./index";
import { TOAST_COLORS } from "./constants";

export const containerStyle: CSSProperties = {
  position: "fixed",
  right: "16px",
  bottom: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 9999,
};

export const baseToastStyle: CSSProperties = {
  minWidth: "260px",
  maxWidth: "360px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 14px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)",
  color: "#0f172a",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  // transition for "fade+slide"
  transition: "transform 200ms ease, opacity 200ms ease",
  transform: "translateY(0)",
  opacity: 1,
};

const typeColors: Record<
  ToastType,
  { bg: string; border: string; text: string }
> = {
  success: TOAST_COLORS.SUCCESS,
  info: TOAST_COLORS.INFO,
  warning: TOAST_COLORS.WARNING,
  error: TOAST_COLORS.ERROR,
};

export const getToastStyle = (
  type: ToastType,
  open: boolean
): CSSProperties => {
  const c = typeColors[type];
  return {
    ...baseToastStyle,
    backgroundColor: c.bg,
    borderColor: c.border,
    color: c.text,
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(16px)",
    pointerEvents: open ? "auto" : "none",
  };
};

export const messageStyle: CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.4,
  flex: 1,
};

export const closeBtnStyle: CSSProperties = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  lineHeight: 1,
  color: "inherit",
  padding: "4px 6px",
};
