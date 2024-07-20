import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const InputType = {
  Text: "text",
  Email: "email",
  Password: "password",
};

export class InputProperty {
  constructor(
    inputType = InputType.Text,
    requiredStarPosition = "right-2 top-1",
    requiredStarColor = "text-red-500",
    requiredStarFontSize = "text-lg",
    inputBoxBackgroundColor = "bg-gray-100",
    inputBoxBackgroundColorOnError = "bg-red-400",
    inputBoxBorderColor = "border-gray-600",
    inputBoxBorderColorOnFocus = "border-gray-200",
    inputBoxBorderColorOnHover = "border-gray-400",
    inputBoxBorderColorOnError = "border-red-600",
    inputBoxBorderRadius = "rounded-md",
    inputBoxBackgroundOpacity = "bg-opacity-5",
    inputBoxBackgroundOpacityOnError = "bg-opacity-30",
    inputBoxTextColor = "text-white",
    inputBoxTextSize = "text-md",
    labelPosition = "left-3 top-2",
    labelColor = "text-slate-400",
    labelColorOnFocus = "text-slate-300",
    labelColorOnError = "text-red-600",
    labelFontSize = "text-md",
    labelFontSizeOnFocus = "text-xs",
    icon = null,
    iconPosition = "right-3 top-5",
    iconColor = "text-gray-400",
    iconColorOnFocus = "text-gray-300",
    iconFontSize = "text-xl",
    eyeIcon = faEye,
    slashEyeIcon = faEyeSlash,
    errorMessageColor = "text-red-600",
    errorMessageFontSize = "text-xs",
    errorMessagePosition = "left-0 top-full",
    transitionDuration = "duration-300"
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
