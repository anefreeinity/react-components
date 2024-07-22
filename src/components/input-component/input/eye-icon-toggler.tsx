import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IInputProperty } from "./input-property";

interface EyeIconTogglerProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  property: IInputProperty;
}

const EyeIconToggler: React.FC<EyeIconTogglerProps> = ({
  showPassword,
  togglePasswordVisibility,
  property,
}) => {
  return (
    <FontAwesomeIcon
      icon={showPassword ? property.EyeIcon! : property.SlashEyeIcon!}
      onClick={togglePasswordVisibility}
      className={`absolute ${property.IconPosition} cursor-pointer ${property.IconFontSize} 
      ${property.IconColor} ${property.IconColorOnFocus}`}
    />
  );
};

export default EyeIconToggler;
