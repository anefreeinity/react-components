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
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  property?: IButtonProperty;
  isLoading?: boolean;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  property = new ButtonProperty(),
  isLoading = false,
  ...props
}) => {
  return (
    <>
      <style>{spinnerKeyframes}</style>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`px-4 py-2 border border-gray-600 bg-gray-100 bg-opacity-10
            ${disabled ? "cursor-not-allowed text-gray-500" : "text-gray-200"}
            rounded-md shadow-md
            ${
              !disabled &&
              !isLoading &&
              "hover:bg-opacity-15 hover:text-gray-100"
            }
            transition duration-300 ease-in-out 
            ${
              !disabled &&
              !isLoading &&
              "hover:border-gray-400 focus:outline-none focus:bg-gray-200 focus:bg-opacity-20"
            }
            relative overflow-hidden ${
              isLoading ? "pl-10 text-gray-400" : ""
            } ${className}`}
        {...props}
      >
        {isLoading && (
          <div
            style={spinnerStyle}
            className="absolute left-3 top-2.5 transform -translate-y-1/2"
          ></div>
        )}
        {property.Icon &&
          property.IconLeftOrRight === IconLeftOrRight.Left &&
          !isLoading && (
            <FontAwesomeIcon icon={property.Icon} className="mr-2" />
          )}
        {children}
        {property.Icon &&
          property.IconLeftOrRight === IconLeftOrRight.Right &&
          !isLoading && (
            <FontAwesomeIcon icon={property.Icon} className="ml-2" />
          )}
      </button>
    </>
  );
};

export default Button;
