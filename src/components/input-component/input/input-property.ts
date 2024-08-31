import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import DEFAULTPROPERTIES from "../../default-properties";

export enum InputType {
  Text = "text",
  Email = "email",
  Password = "password",
}

export interface IInputProperty {
  InputType: InputType;
  RequiredStarPosition: string;
  RequiredStarColor: string;
  RequiredStarFontSize: string;
  // InputBoxBackgroundColorOnFocus: string;
  InputBoxBackgroundColor: string;
  InputBoxBackgroundColorOnError: string;
  InputBoxBorderColor: string;
  InputBoxBorderColorOnFocus: string;
  InputBoxBorderColorOnHover: string;
  InputBoxBorderColorOnError: string;
  InputBoxBorderRadius: string;
  InputBoxBackgroundOpacity: string;
  InputBoxBackgroundOpacityOnError: string;
  InputBoxTextColor: string;
  InputBoxTextSize: string;
  LabelPosition: string;
  LabelColor: string;
  LabelColorOnFocus: string;
  LabelColorOnError: string;
  LabelFontSize: string;
  LabelBackgroundColorOnFocus: string;
  LabelFontSizeOnFocus: string;
  Icon: IconDefinition | null;
  IconPosition: string;
  IconColor: string;
  IconColorOnFocus: string;
  IconFontSize: string;
  EyeIcon: IconDefinition | null;
  SlashEyeIcon: IconDefinition | null;
  ErrorMessageColor: string;
  ErrorMessageFontSize: string;
  ErrorMessagePosition: string;
  TransitionDuration: string;
  InputPaddingStyle: string;
}

export class InputProperty implements IInputProperty {
  InputType: InputType;
  RequiredStarPosition: string;
  RequiredStarColor: string;
  RequiredStarFontSize: string;
  InputBoxBackgroundColor: string;
  InputBoxBackgroundColorOnError: string;
  InputBoxBorderColor: string;
  InputBoxBorderColorOnFocus: string;
  InputBoxBorderColorOnHover: string;
  InputBoxBorderColorOnError: string;
  InputBoxBorderRadius: string;
  InputBoxBackgroundOpacity: string;
  InputBoxBackgroundOpacityOnError: string;
  InputBoxTextColor: string;
  InputBoxTextSize: string;
  LabelPosition: string;
  LabelColor: string;
  LabelColorOnFocus: string;
  LabelColorOnError: string;
  LabelBackgroundColorOnFocus: string;
  LabelFontSize: string;
  LabelFontSizeOnFocus: string;
  Icon: IconDefinition | null;
  IconPosition: string;
  IconColor: string;
  IconColorOnFocus: string;
  IconFontSize: string;
  EyeIcon: IconDefinition | null;
  SlashEyeIcon: IconDefinition | null;
  ErrorMessageColor: string;
  ErrorMessageFontSize: string;
  ErrorMessagePosition: string;
  TransitionDuration: string;
  InputPaddingStyle: string;

  constructor(
    inputType: InputType = InputType.Text,
    requiredStarPosition: string = DEFAULTPROPERTIES.RequiredStarPosition,
    requiredStarColor: string = DEFAULTPROPERTIES.RequiredStarColor,
    requiredStarFontSize: string = DEFAULTPROPERTIES.RequiredStarFontSize,
    inputBoxBackgroundColor: string = DEFAULTPROPERTIES.BackgroundColor,
    inputBoxBackgroundColorOnError: string = DEFAULTPROPERTIES.BackgroundColorOnError,
    inputBoxBorderColor: string = DEFAULTPROPERTIES.BorderColor,
    inputBoxBorderColorOnFocus: string = DEFAULTPROPERTIES.BorderColorOnFocus,
    inputBoxBorderColorOnHover: string = DEFAULTPROPERTIES.BorderColorOnHover,
    inputBoxBorderColorOnError: string = DEFAULTPROPERTIES.BorderColorOnError,
    inputBoxBorderRadius: string = DEFAULTPROPERTIES.BorderRadius,
    inputBoxBackgroundOpacity: string = DEFAULTPROPERTIES.BackgroundOpacity,
    inputBoxBackgroundOpacityOnError: string = DEFAULTPROPERTIES.BackgroundOpacityOnError,
    inputBoxTextColor: string = DEFAULTPROPERTIES.TextColor,
    inputBoxTextSize: string = DEFAULTPROPERTIES.TextSize,
    labelPosition: string = "left-3 top-2.5",
    labelColor: string = DEFAULTPROPERTIES.LabelColor,
    labelColorOnFocus: string = DEFAULTPROPERTIES.LabelColorOnFocus,
    labelColorOnError: string = DEFAULTPROPERTIES.LabelColorOnError,
    labelBackgroundColorOnFocus: string = "bg-slate-900",
    labelFontSize: string = DEFAULTPROPERTIES.LabelFontSize,
    labelFontSizeOnFocus: string = "text-xs",
    icon: IconDefinition | null = null,
    iconPosition: string = "right-3 top-3.5 md:top-5",
    iconColor: string = DEFAULTPROPERTIES.IconColor,
    iconColorOnFocus: string = DEFAULTPROPERTIES.IconColorOnFocus,
    iconFontSize: string = DEFAULTPROPERTIES.IconFontSize,
    eyeIcon: IconDefinition | null = faEye,
    slashEyeIcon: IconDefinition | null = faEyeSlash,
    errorMessageColor: string = DEFAULTPROPERTIES.ErrorMessageColor,
    errorMessageFontSize: string = DEFAULTPROPERTIES.ErrorMessageFontSize,
    errorMessagePosition: string = DEFAULTPROPERTIES.ErrorMessagePosition,
    transitionDuration: string = DEFAULTPROPERTIES.TransitionDuration,
    inputPaddingStyle: string = "px-3 pt-2 md:pt-6 pb-2 md:pb-2"
  ) {
    this.InputType = inputType;
    this.RequiredStarPosition = requiredStarPosition;
    this.RequiredStarColor = requiredStarColor;
    this.RequiredStarFontSize = requiredStarFontSize;
    this.InputBoxBackgroundColor = inputBoxBackgroundColor;
    this.InputBoxBackgroundColorOnError = inputBoxBackgroundColorOnError;
    this.InputBoxBorderColor = inputBoxBorderColor;
    this.InputBoxBorderColorOnFocus = inputBoxBorderColorOnFocus;
    this.InputBoxBorderColorOnHover = inputBoxBorderColorOnHover;
    this.InputBoxBorderColorOnError = inputBoxBorderColorOnError;
    this.InputBoxBorderRadius = inputBoxBorderRadius;
    this.InputBoxBackgroundOpacity = inputBoxBackgroundOpacity;
    this.InputBoxBackgroundOpacityOnError = inputBoxBackgroundOpacityOnError;
    this.InputBoxTextColor = inputBoxTextColor;
    this.InputBoxTextSize = inputBoxTextSize;
    this.LabelPosition = labelPosition;
    this.LabelColor = labelColor;
    this.LabelColorOnFocus = labelColorOnFocus;
    this.LabelColorOnError = labelColorOnError;
    this.LabelBackgroundColorOnFocus = labelBackgroundColorOnFocus;
    this.LabelFontSize = labelFontSize;
    this.LabelFontSizeOnFocus = labelFontSizeOnFocus;
    this.Icon = icon;
    this.IconPosition = iconPosition;
    this.IconColor = iconColor;
    this.IconColorOnFocus = iconColorOnFocus;
    this.IconFontSize = iconFontSize;
    this.EyeIcon = eyeIcon;
    this.SlashEyeIcon = slashEyeIcon;
    this.ErrorMessageColor = errorMessageColor;
    this.ErrorMessageFontSize = errorMessageFontSize;
    this.ErrorMessagePosition = errorMessagePosition;
    this.TransitionDuration = transitionDuration;
    this.InputPaddingStyle = inputPaddingStyle;
  }
}
