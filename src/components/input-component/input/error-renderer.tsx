import React from "react";
import { IInputProperty } from "./input-property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

interface ErrorRendererProps {
  show: boolean;
  children: React.ReactNode;
  property: IInputProperty;
  width: number;
}

const ErrorRenderer: React.FC<ErrorRendererProps> = ({
  show,
  children,
  property,
  width,
}) => {
  return (
    <div
      className={`absolute ${
        property.ErrorMessagePosition
      } mt-1 transition-opacity ${property.TransitionDuration} ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ width: `${width}px` }}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          style={{ fontSize: "10px", lineHeight: "12px" }}
          className={`px-1 ${property.ErrorMessageColor} pr-1`}
          icon={faExclamationTriangle}
        />
        <p
          className={`${property.ErrorMessageColor} ${property.ErrorMessageFontSize} 
          text-justify`}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default ErrorRenderer;
