import { type CSSProperties } from "react";

export const containerStyle: CSSProperties = {
  position: "relative",
  display: "inline-block",
  width: "100%",
  maxWidth: "300px",
};

export const getInputStyle = (
  disabled: boolean,
  hasButton: boolean,
  hasTwoButtons: boolean
): CSSProperties => ({
  width: "100%",
  padding: "10px 12px",
  paddingRight: hasTwoButtons ? "70px" : hasButton ? "40px" : "12px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: disabled ? "#f5f5f5" : "#fff",
  cursor: disabled ? "not-allowed" : "text",
});

export const getButtonStyle = (isSecondButton: boolean): CSSProperties => ({
  position: "absolute",
  right: isSecondButton ? "38px" : "8px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666",
  fontSize: "16px",
});
