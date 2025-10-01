import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toast, {
  ToastContainer,
  type ToastProps,
  type ToastType,
} from "./index";
import { TOAST_TYPES } from "./constants";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: { layout: "fullscreen" },
  argTypes: {
    type: {
      control: "select",
      options: Object.values(TOAST_TYPES),
      description: "Toast variant",
    },
    duration: {
      control: "number",
      description: "Auto dismiss duration (ms). Set 0 to disable.",
    },
    message: { control: "text" },
    closable: { control: "boolean" },
  },
  args: {
    type: TOAST_TYPES.INFO,
    message: "This is an info toast",
    duration: 3000,
    closable: true,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Wrapper component for remounting Toast
const DemoWrapper: React.FC<{ toastProps: ToastProps }> = ({ toastProps }) => {
  const [key, setKey] = useState<number>(0);
  return (
    <>
      <div style={{ padding: 24 }}>
        <button
          onClick={() => setKey((k) => k + 1)}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        >
          Show toast
        </button>
        <p style={{ marginTop: 12, color: "#6b7280" }}>
          Click to show the toast again.
        </p>
      </div>

      <ToastContainer>
        <Toast key={key} {...toastProps} />
      </ToastContainer>
    </>
  );
};

// Basic Toast Story
export const Basic: Story = {
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Success Toast Story
export const Success: Story = {
  args: { type: TOAST_TYPES.SUCCESS, message: "Saved successfully!" },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Warning Toast Story
export const Warning: Story = {
  args: { type: TOAST_TYPES.WARNING, message: "Please check your input." },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Error Toast Story
export const Error: Story = {
  args: { type: TOAST_TYPES.ERROR, message: "Something went wrong." },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Long Duration Toast Story
export const LongDuration: Story = {
  args: { duration: 6000, message: "This toast stays longer (6s)." },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// No Auto Dismiss Toast Story
export const NoAutoDismiss: Story = {
  args: { duration: 0, message: "No auto-dismiss. Close manually." },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Not Closable Toast Story
export const NotClosable: Story = {
  args: { closable: false, message: "No close button, auto-dismiss only." },
  render: (args) => <DemoWrapper toastProps={args} />,
};

// Separate component for demonstrating toast stack
const StackedExample: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);
  const addToast = () => setItems((arr) => [...arr, Date.now()]);

  const types: ToastType[] = Object.values(TOAST_TYPES);

  return (
    <>
      <div style={{ padding: 24 }}>
        <button
          onClick={addToast}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        >
          Add toast
        </button>
      </div>

      <ToastContainer>
        {items.map((id, idx) => (
          <Toast
            key={id}
            type={types[idx % types.length]}
            message={`Toast #${idx + 1}`}
            duration={2500}
            onClose={() => setItems((arr) => arr.filter((x) => x !== id))}
          />
        ))}
      </ToastContainer>
    </>
  );
};

// Stacked Toasts Story
export const Stacked: Story = {
  render: () => <StackedExample />,
};
