import React, { useState, type ChangeEvent } from "react";
import { containerStyle, getInputStyle, getButtonStyle } from "./styles";
import { ClearIcon, EyeIcon, EyeOffIcon } from "./icons";
import { INPUT_TYPES } from "./constants";

interface InputProps {
  type?: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
  clearable?: boolean;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  type = INPUT_TYPES.TEXT,
  clearable = false,
  placeholder = "",
  disabled = false,
  defaultValue = "",
  onChange,
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setValue("");
    onChange?.("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    type === INPUT_TYPES.PASSWORD && showPassword ? INPUT_TYPES.TEXT : type;
  const showClearButton = clearable && value.length > 0 && !disabled;
  const showPasswordToggle = type === INPUT_TYPES.PASSWORD && !disabled;
  const hasButton = showClearButton || showPasswordToggle;
  const hasTwoButtons = showClearButton && showPasswordToggle;

  return (
    <div style={containerStyle}>
      <input
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        style={getInputStyle(disabled, hasButton, hasTwoButtons)}
      />

      {showClearButton && (
        <button
          type="button"
          onClick={handleClear}
          style={getButtonStyle(showPasswordToggle)}
        >
          <ClearIcon />
        </button>
      )}

      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={getButtonStyle(false)}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      )}
    </div>
  );
};

export default Input;
