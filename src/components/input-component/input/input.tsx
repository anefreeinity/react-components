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
  validationPattern?: RegExp | null;
  validationMessage?: string;
  isRequired?: boolean;
  hasError?: boolean;
  setError?: (error: boolean) => void;
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
  setError = () => {},
  property = new InputProperty(),
  className = "",
  autoFillBoxBackgroundColor = "rgba(15, 22, 42, 0.95)",
  autoFillBoxTextColor = "rgb(255, 255, 255)",
  autoFillCaretColor = "rgb(255, 255, 255)",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [elementWidth, setElementWidth] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = elementRef.current;
    if (current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setElementWidth(entry.contentRect.width);
        }
      });

      resizeObserver.observe(elementRef.current);

      return () => {
        resizeObserver.unobserve(current);
      };
    }
  }, []);

  useEffect(() => {
    if (validationPattern && isFocused && hasError) {
      if (hasError) {
        validationMessage && setErrorMessage(validationMessage);
      }
    }

    if (!validationPattern) {
      if (hasError) {
        setErrorMessage(validationMessage);
        setError(true);
      } else {
        setErrorMessage("");
        setError(false);
      }
    }
  }, [validationMessage, isFocused, hasError, validationPattern, setError]);

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

  const handleValidation = (e: FocusEvent<HTMLInputElement>) => {
    if (!validationPattern) return;

    if (
      validationPattern &&
      validationPattern &&
      !validationPattern.test(e.target.value)
    ) {
      setErrorMessage(validationMessage);
      setError(true);
    } else {
      setErrorMessage("");
      setError(false);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
    setErrorMessage("");
    setError(false);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    handleValidation(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const classNames = `peer ${property.InputPaddingStyle} border focus:${
    property.InputBoxBorderColor
  } 
          ${property.InputBoxBorderRadius} focus:outline-none ${
    hasError
      ? `${property.InputBoxBackgroundColor} ${property.InputBoxBackgroundOpacity} 
            ${property.InputBoxBorderColorOnError}`
      : `${property.InputBoxBackgroundColor} ${property.InputBoxBackgroundOpacity} 
            ${property.InputBoxBorderColor} ${property.InputBoxBorderColorOnHover}`
  } ${property.InputBoxTextColor} placeholder-transparent transition-all ${
    property.TransitionDuration
  } ${className}`;

  return (
    <div className="relative flex flex-col w-full" ref={elementRef}>
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
      <ErrorRenderer
        show={!!errorMessage}
        width={elementWidth}
        property={property}
      >
        {errorMessage}
      </ErrorRenderer>
    </div>
  );
};

export default Input;

//${property.InputBoxBackgroundColorOnError} ${property.InputBoxBackgroundOpacityOnError}
