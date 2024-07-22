import React from "react";
import { IInputProperty } from "./input-property";

interface ErrorRendererProps {
  show: boolean;
  children: React.ReactNode;
  property: IInputProperty;
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

export default ErrorRenderer;
