import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";
import {
  ButtonProperty,
  IButtonProperty,
  IconLeftOrRight,
} from "./button-property";

const spinnerStyle = {
  border: "2px solid rgba(255, 255, 255, 0.2)",
  borderTop: "3px solid #fff",
  borderRadius: "50%",
  width: "1.2rem",
  height: "1.2rem",
  animation: "spin 1s linear infinite",
};

const spinnerKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  property?: IButtonProperty;
  isLoading?: boolean;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  property = new ButtonProperty(),
  isLoading = false,
  ...props
}) => {
  const classNames = `${property.ButtonSize} ${property.ButtonBorderWidth} ${
    property.ButtonBorderColor
  } ${property.ButtonBackgroundColor} ${property.ButtonBackgroundOpacity}
    ${
      disabled
        ? `cursor-not-allowed ${property.ButtonTextColorOnDisabled}`
        : `${property.ButtonTextColor}`
    }
    ${property.ButtonBorderRadius} ${property.ButtonShadow} ${
    property.ButtonBackgroundColorOnHover
  }
    ${
      !disabled &&
      !isLoading &&
      `${property.ButtonBackgroundOpacityOnHover} ${property.ButtonTextColorOnHover}`
    }
    transition ${property.TransitionDuration} ease-in-out 
    ${
      !disabled &&
      !isLoading &&
      `${property.ButtonBorderColorOnHover} focus:outline-none ${property.ButtonBorderColorOnFocus} ${property.ButtonBackgroundOpacityOnFocus}`
    }
    relative overflow-hidden ${
      isLoading ? `pl-10 ${property.ButtonTextColorWhenLoading}` : ""
    } ${className}`;

  return (
    <>
      <style>{spinnerKeyframes}</style>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={classNames}
        {...props}
      >
        {isLoading && (
          <div
            style={spinnerStyle}
            className="absolute left-3 top-2.5 transform -translate-y-1/2"
          ></div>
        )}
        {children &&
          property.Icon &&
          property.IconLeftOrRight === IconLeftOrRight.Left &&
          !isLoading && (
            <FontAwesomeIcon icon={property.Icon} className="mr-2" />
          )}
        {children}
        {children &&
          property.Icon &&
          property.IconLeftOrRight === IconLeftOrRight.Right &&
          !isLoading && (
            <FontAwesomeIcon icon={property.Icon} className="ml-2" />
          )}
        {property.Icon && !children && <FontAwesomeIcon icon={property.Icon} />}
      </button>
    </>
  );
};

export default Button;
