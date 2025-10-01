import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";
import { INPUT_TYPES } from "./constants";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: Object.values(INPUT_TYPES),
      description: "The type of input field",
    },
    clearable: {
      control: "boolean",
      description: "Shows a clear button when input has value",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field",
    },
    defaultValue: {
      control: "text",
      description: "Default value for the input",
    },
    onChange: {
      action: "valueChanged",
      description: "Called with the new value",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Text Input Story
export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name...",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Text Input
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Basic text input with placeholder
      </p>
    </div>
  ),
};

// Password Input Story
export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password...",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Password Input
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Password input with eye icon to toggle visibility
      </p>
    </div>
  ),
};

// Clearable Input Story
export const ClearableInput: Story = {
  args: {
    type: "text",
    clearable: true,
    placeholder: "Type something to see clear button...",
    defaultValue: "Clear me!",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Clearable Input
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Input with clear button (X) - appears when input has value
      </p>
    </div>
  ),
};

// Number Input Story
export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number...",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Number Input
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Number input with browser's native number controls
      </p>
    </div>
  ),
};

// Disabled Input Story
export const DisabledInput: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
    defaultValue: "Cannot edit this",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Disabled Input
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Disabled input field with grayed out appearance
      </p>
    </div>
  ),
};

// Clearable Password Story
export const ClearablePassword: Story = {
  args: {
    type: "password",
    clearable: true,
    placeholder: "Password with clear option...",
    defaultValue: "secret123",
  },
  render: (args) => (
    <div style={{ padding: "20px" }}>
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Clearable Password
      </label>
      <Input {...args} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Password input with both toggle visibility and clear functionality
      </p>
    </div>
  ),
};

// All Features Combined Story
export const AllFeatures: Story = {
  render: (args) => (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Standard Text
        </label>
        <Input
          type="text"
          placeholder="Enter text..."
          onChange={args.onChange}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Clearable Text
        </label>
        <Input
          type="text"
          clearable
          placeholder="Clearable text..."
          defaultValue="Sample text"
          onChange={args.onChange}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Password with Toggle
        </label>
        <Input
          type="password"
          placeholder="Enter password..."
          defaultValue="password123"
          onChange={args.onChange}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Number Input
        </label>
        <Input
          type="number"
          placeholder="Enter number..."
          onChange={args.onChange}
        />
      </div>

      <div>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Disabled Input
        </label>
        <Input
          type="text"
          disabled
          defaultValue="Cannot edit"
          onChange={args.onChange}
        />
      </div>
    </div>
  ),
};
