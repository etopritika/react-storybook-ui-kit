import type { CSSProperties } from "react";
import { COLORS, Z_INDEX, TRANSITIONS } from "./constants";

export const getOverlayStyle = (open: boolean): CSSProperties => {
  return {
    position: "fixed",
    inset: 0,
    background: COLORS.OVERLAY_BG,
    opacity: open ? 1 : 0,
    transition: TRANSITIONS.OVERLAY,
    pointerEvents: open ? "auto" : "none",
    zIndex: Z_INDEX.OVERLAY,
  };
};

export const getPanelStyle = (
  open: boolean,
  width: number | string
): CSSProperties => {
  const w = typeof width === "number" ? `${width}px` : width;
  return {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: w,
    maxWidth: "90vw",
    background: COLORS.PANEL_BG,
    boxShadow: COLORS.PANEL_SHADOW,
    transform: open ? "translateX(0)" : "translateX(100%)",
    transition: TRANSITIONS.PANEL,
    zIndex: Z_INDEX.PANEL,
    display: "flex",
    flexDirection: "column",
    outline: "none",
  };
};

export const headerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 16px",
  borderBottom: `1px solid ${COLORS.BORDER_COLOR}`,
};

export const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: "16px",
  fontWeight: 600,
  color: COLORS.TEXT_PRIMARY,
};

export const closeBtnStyle: CSSProperties = {
  background: "transparent",
  border: `1px solid ${COLORS.BORDER_COLOR}`,
  borderRadius: 6,
  cursor: "pointer",
  padding: "6px 10px",
  fontSize: "16px",
  lineHeight: 1,
  color: COLORS.TEXT_SECONDARY,
};

export const listStyle: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export const sectionStyle = (level: number): CSSProperties => ({
  paddingLeft: 12 + level * 12,
});

export const itemRowStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
  padding: "10px 16px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  borderRadius: 6,
  textAlign: "left",
  userSelect: "none",
};

export const labelStyle: CSSProperties = {
  fontSize: 14,
  color: COLORS.TEXT_PRIMARY,
};

export const linkStyle: CSSProperties = {
  textDecoration: "none",
};

export const expandBtnStyle: CSSProperties = {
  ...itemRowStyle,
};

export const chevronStyle = (open: boolean): CSSProperties => ({
  display: "inline-block",
  transform: open ? "rotate(90deg)" : "rotate(0deg)",
  transition: TRANSITIONS.CHEVRON,
  color: COLORS.TEXT_MUTED,
});

export const submenuWrapBase: CSSProperties = {
  overflow: "hidden",
  transformOrigin: "top",
  transition: TRANSITIONS.SUBMENU,
};

export const submenuWrapStyle = (open: boolean): CSSProperties => {
  return {
    ...submenuWrapBase,
    opacity: open ? 1 : 0,
    transform: open ? "scaleY(1)" : "scaleY(0.96)",
    display: open ? "block" : "none",
    paddingTop: open ? 4 : 0,
  };
};
