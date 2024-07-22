import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import DEFAULTPROPERTIES from "../default-properties";

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
    buttonBackgroundColor: string = DEFAULTPROPERTIES.BackgroundColor,
    buttonBorderColor: string = DEFAULTPROPERTIES.BorderColor,
    buttonBorderColorOnFocus: string = DEFAULTPROPERTIES.BorderColorOnFocus,
    buttonBorderColorOnHover: string = DEFAULTPROPERTIES.BorderColorOnHover,
    buttonBorderRadius: string = DEFAULTPROPERTIES.BorderRadius,
    buttonBackgroundOpacity: string = DEFAULTPROPERTIES.BackgroundOpacity,
    buttonTextColor: string = DEFAULTPROPERTIES.TextColor,
    buttonTextSize: string = DEFAULTPROPERTIES.TextSize,
    icon: IconDefinition | null = null,
    iconLeftOrRight: IconLeftOrRight = IconLeftOrRight.Left,
    iconColor: string = DEFAULTPROPERTIES.IconColor,
    iconColorOnFocus: string = DEFAULTPROPERTIES.IconColorOnFocus,
    iconFontSize: string = DEFAULTPROPERTIES.IconFontSize,
    transitionDuration: string = DEFAULTPROPERTIES.TransitionDuration
  ) {
    this.ButtonType = buttonType;
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
