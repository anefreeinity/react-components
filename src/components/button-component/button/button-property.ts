import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DEFAULTPROPERTIES from "../../default-properties";

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

export enum IconLeftOrRight {
  Left = "left",
  Right = "right",
}

export interface IButtonProperty {
  ButtonType: ButtonType;
  ButtonSize: string;
  ButtonBackgroundColorOnHover: string;
  ButtonBorderWidth: string;
  ButtonTextColorOnDisabled: string;
  ButtonBackgroundOpacityOnHover: string;
  ButtonTextColorOnHover: string;
  ButtonBackgroundColorOnFocus: string;
  ButtonBackgroundOpacityOnFocus: string;
  ButtonTextColorWhenLoading: string;
  ButtonShadow: string;
  ButtonBackgroundColor: string;
  ButtonBorderColor: string;
  ButtonBorderColorOnFocus: string;
  ButtonBorderColorOnHover: string;
  ButtonBorderRadius: string;
  ButtonBackgroundOpacity: string;
  ButtonTextColor: string;
  ButtonTextSize: string;
  Icon: IconDefinition | null;
  IconLeftOrRight: IconLeftOrRight;
  IconColor: string;
  IconColorOnFocus: string;
  IconFontSize: string;
  TransitionDuration: string;
}

export class ButtonProperty implements IButtonProperty {
  ButtonType: ButtonType;
  ButtonSize: string;
  ButtonBackgroundColorOnHover: string;
  ButtonBorderWidth: string;
  ButtonTextColorOnDisabled: string;
  ButtonBackgroundOpacityOnHover: string;
  ButtonTextColorOnHover: string;
  ButtonBackgroundColorOnFocus: string;
  ButtonBackgroundOpacityOnFocus: string;
  ButtonTextColorWhenLoading: string;
  ButtonShadow: string;
  ButtonBackgroundColor: string;
  ButtonBorderColor: string;
  ButtonBorderColorOnFocus: string;
  ButtonBorderColorOnHover: string;
  ButtonBorderRadius: string;
  ButtonBackgroundOpacity: string;
  ButtonTextColor: string;
  ButtonTextSize: string;
  Icon: IconDefinition | null;
  IconLeftOrRight: IconLeftOrRight;
  IconColor: string;
  IconColorOnFocus: string;
  IconFontSize: string;
  TransitionDuration: string;

  constructor(
    buttonType: ButtonType = ButtonType.Button,
    buttonSize: string = "px-4 py-2",
    buttonBackgroundColorOnHover: string = `hover:${DEFAULTPROPERTIES.BackgroundColor}`,
    buttonBorderWidth: string = "border",
    buttonTextColorOnDisabled: string = "text-gray-500",
    buttonBackgroundOpacityOnHover: string = "hover:bg-opacity-15",
    buttonTextColorOnHover: string = "hover:text-gray-100",
    buttonBackgroundColorOnFocus: string = "focus:bg-gray-200",
    buttonBackgroundOpacityOnFocus: string = "focus:bg-opacity-20",
    buttonTextColorWhenLoading: string = "text-gray-400",
    buttonShadow: string = "shadow-md",
    buttonBackgroundColor: string = DEFAULTPROPERTIES.BackgroundColor,
    buttonBorderColor: string = DEFAULTPROPERTIES.BorderColor,
    buttonBorderColorOnFocus: string = DEFAULTPROPERTIES.BorderColorOnFocus,
    buttonBorderColorOnHover: string = DEFAULTPROPERTIES.BorderColorOnHover,
    buttonBorderRadius: string = DEFAULTPROPERTIES.BorderRadius,
    buttonBackgroundOpacity: string = DEFAULTPROPERTIES.BackgroundOpacity,
    buttonTextColor: string = "text-gray-200",
    buttonTextSize: string = DEFAULTPROPERTIES.TextSize,
    icon: IconDefinition | null = null,
    iconLeftOrRight: IconLeftOrRight = IconLeftOrRight.Left,
    iconColor: string = DEFAULTPROPERTIES.IconColor,
    iconColorOnFocus: string = DEFAULTPROPERTIES.IconColorOnFocus,
    iconFontSize: string = DEFAULTPROPERTIES.IconFontSize,
    transitionDuration: string = DEFAULTPROPERTIES.TransitionDuration
  ) {
    this.ButtonType = buttonType;
    this.ButtonSize = buttonSize;
    this.ButtonBackgroundColorOnHover = buttonBackgroundColorOnHover;
    this.ButtonBorderWidth = buttonBorderWidth;
    this.ButtonTextColorOnDisabled = buttonTextColorOnDisabled;
    this.ButtonBackgroundOpacityOnHover = buttonBackgroundOpacityOnHover;
    this.ButtonTextColorOnHover = buttonTextColorOnHover;
    this.ButtonBackgroundColorOnFocus = buttonBackgroundColorOnFocus;
    this.ButtonBackgroundOpacityOnFocus = buttonBackgroundOpacityOnFocus;
    this.ButtonTextColorWhenLoading = buttonTextColorWhenLoading;
    this.ButtonShadow = buttonShadow;
    this.ButtonBackgroundColor = buttonBackgroundColor;
    this.ButtonBorderColor = buttonBorderColor;
    this.ButtonBorderColorOnFocus = buttonBorderColorOnFocus;
    this.ButtonBorderColorOnHover = buttonBorderColorOnHover;
    this.ButtonBorderRadius = buttonBorderRadius;
    this.ButtonBackgroundOpacity = buttonBackgroundOpacity;
    this.ButtonTextColor = buttonTextColor;
    this.ButtonTextSize = buttonTextSize;
    this.Icon = icon;
    this.IconLeftOrRight = iconLeftOrRight;
    this.IconColor = iconColor;
    this.IconColorOnFocus = iconColorOnFocus;
    this.IconFontSize = iconFontSize;
    this.TransitionDuration = transitionDuration;
  }
}
