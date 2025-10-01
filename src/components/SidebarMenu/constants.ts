// Colors
export const COLORS = {
  OVERLAY_BG: "rgba(0,0,0,0.4)",
  PANEL_BG: "#ffffff",
  PANEL_SHADOW: "0 10px 30px rgba(0,0,0,0.15)",
  BORDER_COLOR: "#e5e7eb",
  TEXT_PRIMARY: "#111827",
  TEXT_SECONDARY: "#374151",
  TEXT_MUTED: "#6b7280",
} as const;

// Z-Index
export const Z_INDEX = {
  OVERLAY: 999,
  PANEL: 1000,
} as const;

// Transitions
export const TRANSITIONS = {
  OVERLAY: "opacity 200ms ease",
  PANEL: "transform 240ms ease",
  CHEVRON: "transform 160ms ease",
  SUBMENU: "opacity 180ms ease, transform 180ms ease",
} as const;

// Default values
export const DEFAULTS = {
  TITLE: "Menu",
  WIDTH: 320,
  CLOSE_ON_NAVIGATE: true,
} as const;

// Keyboard keys
export const KEYS = {
  ESCAPE: "Escape",
} as const;
