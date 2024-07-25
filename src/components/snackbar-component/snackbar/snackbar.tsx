import React, { useEffect } from "react";
import {
  SnackbarProperty,
  ISnackbarProperty,
  SnackbarType,
} from "./snackbar-property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SnackbarProps {
  title?: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
  actionText?: string;
  actionIcon?: React.ReactNode;
  onActionClick?: () => void;
  staticIcon?: React.ReactNode;
  image?: string;
  type?: SnackbarType;
  property?: ISnackbarProperty;
}

const Snackbar: React.FC<SnackbarProps> = ({
  title,
  message,
  isOpen,
  onClose,
  duration = 3000,
  actionText,
  actionIcon,
  onActionClick,
  staticIcon,
  image,
  type = SnackbarType.Info,
  property = new SnackbarProperty(type),
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const snackbarBodyClassNames = `fixed ${property.SnackbarBorderWidth} ${
    property.SnackbarBorderColor
  } ${property.SnackbarBackgroundOpacity}
  ${
    property.SnackbarPosition
  } transform -translate-x-1/2 max-w-sm md:max-w-md lg:max-w-lg w-3/4 md:w-auto pr-4 ${
    title ? "pl-3" : "pl-2"
  } py-2 ${property.SnackbarBackgroundColor} ${property.SnackbarBorderRadius} ${
    property.SnackbarShadow
  } flex items-center justify-between transition-all ${
    property.SnackbarTransitionDuration
  } ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`;

  const snackbarStaticIconClassNames = `mr-2 ${property.SnackbarIconColor} ${property.SnackbarIconFontSize}`;

  const snackbarImageClassNames = `mr-2 ${property.SnackbarImageSize} ${property.SnackbarBorderRadius}`;

  const snackbarTitleClassNames = `${property.SnackbarTitleFontWeight} ${property.SnackbarTitleColor} ${property.SnackbarTitleSize}`;

  const snackbarMessageClassNames = `flex-grow ${property.SnackbarMessageFontWeight} ${property.SnackbarMessageColor} ${property.SnackbarMessageSize}`;

  const snackbarActionClassNAmes = `ml-4 ${property.SnackbarActionFontWeight} ${property.SnackbarActionSize} ${property.SnackbarActionColor} ${property.SnackbarActionColorOnHover} transition ${property.SnackbarTransitionDuration}`;

  return (
    <div className={snackbarBodyClassNames}>
      <div className="flex items-center flex-grow">
        {(staticIcon && (
          <div className={snackbarStaticIconClassNames}>{staticIcon}</div>
        )) ||
          (!image && property.Icon && (
            <div className={snackbarStaticIconClassNames}>
              <FontAwesomeIcon icon={property.Icon} />
            </div>
          ))}
        {image && (
          <img src={image} alt="static" className={snackbarImageClassNames} />
        )}
        <div className="flex flex-col flex-grow">
          <span className={snackbarTitleClassNames}>{title}</span>
          <span className={snackbarMessageClassNames}>{message}</span>
        </div>
      </div>
      {actionText || actionIcon ? (
        <button onClick={onActionClick} className={snackbarActionClassNAmes}>
          {actionIcon || actionText}
        </button>
      ) : null}
    </div>
  );
};

export default Snackbar;
