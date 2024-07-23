import React, {
  useState,
  useEffect,
  ChangeEvent,
  FocusEvent,
  useRef,
} from "react";
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
  className?: string;
  autoFillBoxBackgroundColor?: string;
  autoFillBoxTextColor?: string;
  autoFillCaretColor?: string;
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
  className = "",
  autoFillBoxBackgroundColor = "rgba(17, 24, 39, 1)",
  autoFillBoxTextColor = "rgb(255, 255, 255)",
  autoFillCaretColor = "rgb(255, 255, 255)",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    const handleAutofill = (e: AnimationEvent) => {
      if (e.animationName === "onAutoFillStart") {
        inputRef.current?.classList.add("autofilled");
      } else if (e.animationName === "onAutoFillCancel") {
        inputRef.current?.classList.remove("autofilled");
      }
    };

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("animationstart", handleAutofill);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("animationstart", handleAutofill);
      }
    };
  }, []);

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
  } ${className}`;

  return (
    <div className="relative flex flex-col w-full">
      <style>
        {`
          @keyframes onAutoFillStart {
            from { }
            to { }
          }

          @keyframes onAutoFillCancel {
            from { }
            to { }
          }

          .autofilled {
            -webkit-box-shadow: 0 0 0 30px ${autoFillBoxBackgroundColor} inset !important;
            box-shadow: 0 0 0 30px ${autoFillBoxBackgroundColor} inset !important;
            -webkit-text-fill-color: ${autoFillBoxTextColor} !important;
            transition: background-color 0s, color 0s !important;
            caret-color: ${autoFillCaretColor} !important;
          }

          input:-webkit-autofill {
            animation-name: onAutoFillStart;
          }

          input:not(:-webkit-autofill) {
            animation-name: onAutoFillCancel;
          }
        `}
      </style>
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
        ref={inputRef}
        id={id}
        type={showPassword && type === "password" ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${classNames} focus:bg-gray-900`}
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
