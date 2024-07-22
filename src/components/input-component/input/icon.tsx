import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IInputProperty } from "./input-property";

interface IconProps {
  property: IInputProperty;
}

const Icon: React.FC<IconProps> = ({ property }) => {
  return (
    <FontAwesomeIcon
      icon={property.Icon!}
      className={`absolute ${property.IconPosition} ${property.IconFontSize} ${property.IconColor}`}
    />
  );
};

export default Icon;
