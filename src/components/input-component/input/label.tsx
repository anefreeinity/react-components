import React from "react";
import { IInputProperty } from "./input-property";

interface LabelProps {
  id: string;
  isFocused: boolean;
  value: string;
  hasError: boolean;
  children: React.ReactNode;
  property: IInputProperty;
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

export default Label;
