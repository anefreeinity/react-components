import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import DEFAULTPROPERTIES from "../../default-properties";
import {
  faCheckCircle,
  faInfoCircle,
  faTriangleExclamation,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

export enum SnackbarType {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export interface ISnackbarProperty {
  SnackbarType: SnackbarType;
  SnackbarPosition: string;
  SnackbarBackgroundColor: string;
  SnackbarBorderRadius: string;
  SnackbarShadow: string;
  SnackbarIconColor: string;
  SnackbarIconFontSize: string;
  SnackbarImageSize: string;
  SnackbarTitleSize: string;
  SnackbarTitleColor: string;
  SnackbarTitleFontWeight: string;
  SnackbarMessageSize: string;
  SnackbarMessageColor: string;
  SnackbarMessageFontWeight: string;
  SnackbarActionSize: string;
  SnackbarActionColor: string;
  SnackbarActionFontWeight: string;
  SnackbarActionColorOnHover: string;
  SnackbarBorderWidth: string;
  SnackbarBorderColor: string;
  SnackbarBackgroundOpacity: string;
  Icon: IconDefinition | null;
  SnackbarTransitionDuration: string;
}

export class SnackbarProperty implements ISnackbarProperty {
  SnackbarType: SnackbarType;
  SnackbarPosition: string;
  SnackbarBackgroundColor: string;
  SnackbarBorderRadius: string;
  SnackbarShadow: string;
  SnackbarIconColor: string;
  SnackbarIconFontSize: string;
  SnackbarImageSize: string;
  SnackbarTitleSize: string;
  SnackbarTitleColor: string;
  SnackbarTitleFontWeight: string;
  SnackbarMessageSize: string;
  SnackbarMessageColor: string;
  SnackbarMessageFontWeight: string;
  SnackbarActionSize: string;
  SnackbarActionColor: string;
  SnackbarActionFontWeight: string;
  SnackbarActionColorOnHover: string;
  SnackbarBorderWidth: string;
  SnackbarBorderColor: string;
  SnackbarBackgroundOpacity: string;
  Icon: IconDefinition | null;
  SnackbarTransitionDuration: string;

  constructor(type: SnackbarType) {
    this.SnackbarType = SnackbarType.Info;
    this.SnackbarPosition = "bottom-4 left-1/2";
    this.SnackbarBackgroundColor = DEFAULTPROPERTIES.BackgroundColor;
    this.SnackbarBorderRadius = DEFAULTPROPERTIES.BorderRadius;
    this.SnackbarShadow = DEFAULTPROPERTIES.Shadow;
    this.SnackbarIconColor = DEFAULTPROPERTIES.IconColor;
    this.SnackbarIconFontSize = DEFAULTPROPERTIES.IconFontSize;
    this.SnackbarImageSize = "w-6 h-6";
    this.SnackbarTitleSize = "text-lg";
    this.SnackbarTitleColor = DEFAULTPROPERTIES.TextColor;
    this.SnackbarTitleFontWeight = "font-bold";
    this.SnackbarMessageSize = DEFAULTPROPERTIES.TextSize;
    this.SnackbarMessageColor = DEFAULTPROPERTIES.TextColor;
    this.SnackbarMessageFontWeight = "font-normal";
    this.SnackbarActionSize = "text-md";
    this.SnackbarActionColor = DEFAULTPROPERTIES.TextColor;
    this.SnackbarActionFontWeight = "font-bold";
    this.SnackbarActionColorOnHover = "hover:text-blue-700";
    this.SnackbarBorderWidth = "border";
    this.SnackbarBorderColor = DEFAULTPROPERTIES.BorderColor;
    this.SnackbarBackgroundOpacity = DEFAULTPROPERTIES.BackgroundOpacity;
    this.Icon = null;
    this.SnackbarTransitionDuration = DEFAULTPROPERTIES.TransitionDuration;

    switch (type) {
      case SnackbarType.Info:
        this.initializeInfo();
        break;
      case SnackbarType.Success:
        this.initializeSuccess();
        break;
      case SnackbarType.Warning:
        this.initializeWarning();
        break;
      case SnackbarType.Error:
        this.initializeError();
        break;
      default:
        break;
    }
  }

  initializeInfo() {
    this.SnackbarBackgroundColor = "bg-gray-800";
    this.SnackbarBackgroundOpacity = "bg-opacity-10";
    this.SnackbarIconFontSize = "text-xl";
    this.SnackbarImageSize = "w-10 h-10";
    this.SnackbarTitleSize = "text-md";
    this.SnackbarTitleColor = "text-gray-200";
    this.SnackbarTitleFontWeight = "font-semibold";
    this.SnackbarMessageSize = "text-sm";
    this.SnackbarMessageColor = "text-gray-300";
    this.SnackbarMessageFontWeight = "font-normal";
    this.SnackbarActionSize = "text-md";
    this.SnackbarActionColor = "text-gray-300";
    this.SnackbarActionFontWeight = "font-bold";
    this.SnackbarActionColorOnHover = "hover:text-gray-100";
    this.Icon = faInfoCircle;
  }

  initializeSuccess() {
    this.SnackbarBackgroundColor = "bg-green-500";
    this.SnackbarBackgroundOpacity = "bg-opacity-10";
    this.SnackbarIconFontSize = "text-xl";
    this.SnackbarImageSize = "w-10 h-10";
    this.SnackbarTitleSize = "text-md";
    this.SnackbarTitleColor = "text-green-200";
    this.SnackbarTitleFontWeight = "font-semibold";
    this.SnackbarMessageSize = "text-sm";
    this.SnackbarMessageColor = "text-green-300";
    this.SnackbarMessageFontWeight = "font-normal";
    this.SnackbarActionSize = "text-md";
    this.SnackbarActionColor = "text-green-300";
    this.SnackbarActionFontWeight = "font-bold";
    this.SnackbarActionColorOnHover = "hover:text-green-100";
    this.SnackbarIconColor = "text-green-300";
    this.Icon = faCheckCircle;
    this.SnackbarBorderColor = "border-green-600";
  }

  initializeWarning() {
    this.SnackbarBackgroundColor = "bg-yellow-500";
    this.SnackbarBackgroundOpacity = "bg-opacity-10";
    this.SnackbarIconFontSize = "text-xl";
    this.SnackbarImageSize = "w-10 h-10";
    this.SnackbarTitleSize = "text-md";
    this.SnackbarTitleColor = "text-yellow-200";
    this.SnackbarTitleFontWeight = "font-semibold";
    this.SnackbarMessageSize = "text-sm";
    this.SnackbarMessageColor = "text-yellow-300";
    this.SnackbarMessageFontWeight = "font-normal";
    this.SnackbarActionSize = "text-md";
    this.SnackbarActionColor = "text-yellow-300";
    this.SnackbarActionFontWeight = "font-bold";
    this.SnackbarActionColorOnHover = "hover:text-yellow-100";
    this.SnackbarIconColor = "text-yellow-300";
    this.Icon = faTriangleExclamation;
    this.SnackbarBorderColor = "border-yellow-600";
  }

  initializeError() {
    this.SnackbarBackgroundColor = "bg-red-500";
    this.SnackbarBackgroundOpacity = "bg-opacity-10";
    this.SnackbarIconFontSize = "text-xl";
    this.SnackbarImageSize = "w-10 h-10";
    this.SnackbarTitleSize = "text-md";
    this.SnackbarTitleColor = "text-red-200";
    this.SnackbarTitleFontWeight = "font-semibold";
    this.SnackbarMessageSize = "text-sm";
    this.SnackbarMessageColor = "text-red-300";
    this.SnackbarMessageFontWeight = "font-normal";
    this.SnackbarActionSize = "text-md";
    this.SnackbarActionColor = "text-red-300";
    this.SnackbarActionFontWeight = "font-bold";
    this.SnackbarActionColorOnHover = "hover:text-red-100";
    this.SnackbarIconColor = "text-red-300";
    this.Icon = faXmarkCircle;
    this.SnackbarBorderColor = "border-red-600";
  }
}
