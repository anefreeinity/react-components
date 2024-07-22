import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export enum InputType {
  Text = "text",
  Email = "email",
  Password = "password",
}

export class InputProperty {
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
  LabelFontSize: string;
  LabelFontSizeOnFocus: string;
  Icon: IconDefinition | null; // You might want to refine this type if you know the exact type for Icon
  IconPosition: string;
  IconColor: string;
  IconColorOnFocus: string;
  IconFontSize: string;
  EyeIcon: IconDefinition | null; // Refine this if you know the specific type (e.g., FontAwesomeIcon)
  SlashEyeIcon: IconDefinition | null; // Refine this if you know the specific type (e.g., FontAwesomeIcon)
  ErrorMessageColor: string;
  ErrorMessageFontSize: string;
  ErrorMessagePosition: string;
  TransitionDuration: string;

  constructor(
    inputType: InputType = InputType.Text,
    requiredStarPosition: string = "right-2 top-1",
    requiredStarColor: string = "text-red-500",
    requiredStarFontSize: string = "text-lg",
    inputBoxBackgroundColor: string = "bg-gray-100",
    inputBoxBackgroundColorOnError: string = "bg-red-400",
    inputBoxBorderColor: string = "border-gray-600",
    inputBoxBorderColorOnFocus: string = "border-gray-200",
    inputBoxBorderColorOnHover: string = "hover:border-gray-400",
    inputBoxBorderColorOnError: string = "border-red-600",
    inputBoxBorderRadius: string = "rounded-md",
    inputBoxBackgroundOpacity: string = "bg-opacity-5",
    inputBoxBackgroundOpacityOnError: string = "bg-opacity-30",
    inputBoxTextColor: string = "text-white",
    inputBoxTextSize: string = "text-md",
    labelPosition: string = "left-3 top-2",
    labelColor: string = "text-slate-400",
    labelColorOnFocus: string = "text-slate-300",
    labelColorOnError: string = "text-red-600",
    labelFontSize: string = "text-md",
    labelFontSizeOnFocus: string = "text-xs",
    icon: IconDefinition | null = null, // Refine this type if needed
    iconPosition: string = "right-3 top-5",
    iconColor: string = "text-gray-400",
    iconColorOnFocus: string = "hover:text-gray-300",
    iconFontSize: string = "text-xl",
    eyeIcon: IconDefinition | null = faEye, // Refine this type if needed
    slashEyeIcon: IconDefinition | null = faEyeSlash, // Refine this type if needed
    errorMessageColor: string = "text-red-600",
    errorMessageFontSize: string = "text-xs",
    errorMessagePosition: string = "left-0 top-full",
    transitionDuration: string = "duration-300"
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
  }
}
