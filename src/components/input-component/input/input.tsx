import React, { useState, useEffect, ChangeEvent, FocusEvent } from "react";
import { IInputProperty, InputProperty } from "./input-property";
import Label from "./label";
import EyeIconToggler from "./eye-icon-toggler";
import Icon from "./icon";
import ErrorRenderer from "./error-renderer";
import "./input.css";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  validationPattern?: RegExp;
  validationMessage?: string;
  isRequired?: boolean;
  hasError?: boolean;
  property?: IInputProperty;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  id = "input-field",
  label = "Enter Text:",
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  validationPattern,
  validationMessage = "",
  isRequired = false,
  hasError = false,
  property = new InputProperty(),
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isFocused) {
      if (validationPattern) {
        const isValid = validationPattern.test(value);
        if (isValid) {
          setErrorMessage("");
        } else {
          setErrorMessage(validationMessage);
        }
      } else {
        setErrorMessage("");
      }
    } else {
      if (hasError) {
        validationMessage && setErrorMessage(validationMessage);
      }
    }
  }, [value, type, validationPattern, validationMessage, isFocused, hasError]);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const classNames = `peer px-3 pt-6 pb-2 border focus:${
    property.InputBoxBorderColor
  } 
          ${property.InputBoxBorderRadius} focus:outline-none ${
    hasError
      ? `${property.InputBoxBackgroundColorOnError} ${property.InputBoxBackgroundOpacityOnError} 
            ${property.InputBoxBorderColorOnError}`
      : `${property.InputBoxBackgroundColor} ${property.InputBoxBackgroundOpacity} 
            ${property.InputBoxBorderColor} ${property.InputBoxBorderColorOnHover}`
  } ${property.InputBoxTextColor} placeholder-transparent transition-all ${
    property.TransitionDuration
  }`;

  return (
    <div className="relative flex flex-col w-full">
      {isRequired && (
        <div
          className={`absolute 
            ${property.RequiredStarPosition} 
            ${property.RequiredStarColor} 
            ${property.RequiredStarFontSize}`}
        >
          *
        </div>
      )}
      <input
        id={id}
        type={showPassword && type === "password" ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={classNames}
        placeholder=" "
        {...rest}
      />
      <Label
        id={id}
        isFocused={isFocused}
        value={value}
        hasError={hasError}
        property={property}
      >
        {label}
      </Label>
      {type === "password" && (
        <EyeIconToggler
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          property={property}
        />
      )}
      {property.Icon && <Icon property={property} />}
      <ErrorRenderer show={!!errorMessage} property={property}>
        {errorMessage}
      </ErrorRenderer>
    </div>
  );
};

export default Input;
