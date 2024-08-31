import React, { useEffect, useState } from "react";
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
  const smallScreenWidth = 640;
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < smallScreenWidth
  );

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < smallScreenWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <label
      htmlFor={id}
      className={`absolute transition-transform ${
        property.TransitionDuration
      } transform ${
        isFocused || value
          ? `${property.LabelFontSizeOnFocus} py-0 ${
              hasError ? property.LabelColorOnError : property.LabelColorOnFocus
            } ${
              isSmallScreen
                ? `left-2 -top-1.5 ${property.LabelBackgroundColorOnFocus} leading-none px-px rounded`
                : `${property.LabelPosition}`
            }`
          : `md:translate-y-2 ${property.LabelFontSize} ${
              hasError ? property.LabelColorOnError : property.LabelColor
            } ${property.LabelPosition}`
      }`}
    >
      {children}
    </label>
  );
};

export default Label;
