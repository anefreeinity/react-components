import React, { useState, useEffect, ChangeEvent, FocusEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./input.css";
import { InputProperty } from "./input-property";

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
  property?: InputProperty;
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
        className={`peer px-3 pt-6 pb-2 border focus:${
          property.InputBoxBorderColor
        } 
          ${property.InputBoxBorderRadius} focus:outline-none ${
          hasError
            ? `${property.InputBoxBackgroundColorOnError} ${property.InputBoxBackgroundOpacityOnError} 
            ${property.InputBoxBorderColorOnError}`
            : `${property.InputBoxBackgroundColor} ${property.InputBoxBackgroundOpacity} 
            ${property.InputBoxBorderColor} ${property.InputBoxBorderColorOnHover}`
        } ${
          property.InputBoxTextColor
        } placeholder-transparent transition-all ${
          property.TransitionDuration
        }`}
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

interface LabelProps {
  id: string;
  isFocused: boolean;
  value: string;
  hasError: boolean;
  children: React.ReactNode;
  property: InputProperty;
}

const Label: React.FC<LabelProps> = ({
  id,
  isFocused,
  value,
  hasError,
  children,
  property,
}) => {
  return (
    <label
      htmlFor={id}
      className={`absolute ${property.LabelPosition} transition-transform ${
        property.TransitionDuration
      } transform ${
        isFocused || value
          ? `${property.LabelFontSizeOnFocus} py-0 ${
              hasError ? property.LabelColorOnError : property.LabelColorOnFocus
            }`
          : `translate-y-2 ${property.LabelFontSize} ${
              hasError ? property.LabelColorOnError : property.LabelColor
            }`
      }`}
    >
      {children}
    </label>
  );
};

interface EyeIconTogglerProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  property: InputProperty;
}

const EyeIconToggler: React.FC<EyeIconTogglerProps> = ({
  showPassword,
  togglePasswordVisibility,
  property,
}) => {
  return (
    <FontAwesomeIcon
      icon={showPassword ? property.EyeIcon : property.SlashEyeIcon}
      onClick={togglePasswordVisibility}
      className={`absolute ${property.IconPosition} cursor-pointer ${property.IconFontSize} 
      ${property.IconColor} ${property.IconColorOnFocus}`}
    />
  );
};

interface IconProps {
  property: InputProperty;
}

const Icon: React.FC<IconProps> = ({ property }) => {
  return (
    <FontAwesomeIcon
      icon={property.Icon}
      className={`absolute ${property.IconPosition} ${property.IconFontSize} ${property.IconColor}`}
    />
  );
};

interface ErrorRendererProps {
  show: boolean;
  children: React.ReactNode;
  property: InputProperty;
}

const ErrorRenderer: React.FC<ErrorRendererProps> = ({
  show,
  children,
  property,
}) => {
  return (
    <div
      className={`absolute ${
        property.ErrorMessagePosition
      } mt-1 transition-opacity ${property.TransitionDuration} ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <p
        className={`${property.ErrorMessageColor} ${property.ErrorMessageFontSize}`}
      >
        {children}
      </p>
    </div>
  );
};

export default Input;
