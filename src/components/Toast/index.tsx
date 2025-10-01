import React, { useEffect, useRef, useState } from "react";
import {
  containerStyle,
  getToastStyle,
  closeBtnStyle,
  messageStyle,
} from "./styles";
import { TOAST_TYPES, DEFAULT_DURATION } from "./constants";

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = TOAST_TYPES.INFO,
  duration = DEFAULT_DURATION,
  closable = true,
  onClose,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (duration > 0) {
      timerRef.current = window.setTimeout(() => {
        setOpen(false);
      }, duration);
    }
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [duration]);

  const handleTransitionEnd = () => {
    if (!open) onClose?.();
  };

  return (
    <div
      style={{
        ...getToastStyle(type, open),
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <span style={messageStyle}>{message}</span>
      {closable && (
        <button onClick={() => setOpen(false)} style={closeBtnStyle}>
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;

export const ToastContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div style={containerStyle}>{children}</div>;
};
