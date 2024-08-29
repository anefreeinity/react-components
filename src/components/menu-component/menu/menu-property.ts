export interface IMenuProperty {
  MenuBorderRadius: string;
  MenuShadow: string;
  MenuBackgroundColor: string;
  MenuRingDesign: string;
  TransitionDuration: string;
  MenuTranslate: string;
  ItemBackgroundColor: string;
  ItemTextColor: string;
  ItemTextSize: string;
  ItemPaddingStyle: string;
  ItemTextPosition: string;
  ItemWidth: string;
  ItemBackgroundColorOnHover: string;
  ItemStyleOnSelect: string;
  ItemBorderColor: string;
  LeftActionItemStyle: string;
  RightActionItemStyle: string;
  FolderActionItemStyle: string;
}

export class MenuProperty implements IMenuProperty {
  MenuBorderRadius: string;
  MenuShadow: string;
  MenuBackgroundColor: string;
  MenuRingDesign: string;
  TransitionDuration: string;
  MenuTranslate: string;
  ItemBackgroundColor: string;
  ItemTextColor: string;
  ItemTextSize: string;
  ItemPaddingStyle: string;
  ItemTextPosition: string;
  ItemWidth: string;
  ItemBackgroundColorOnHover: string;
  ItemStyleOnSelect: string;
  ItemBorderColor: string;
  LeftActionItemStyle: string;
  RightActionItemStyle: string;
  FolderActionItemStyle: string;

  constructor() {
    this.MenuBorderRadius = "rounded-md";
    this.MenuShadow = "shadow-lg";
    this.MenuBackgroundColor = "bg-slate-800";
    this.MenuRingDesign = "ring-1 ring-black ring-opacity-5";
    this.TransitionDuration = "duration-300";
    this.MenuTranslate = "-translate-x-2 md:-translate-x-2.5";
    this.ItemBackgroundColor = "bg-slate-800";
    this.ItemTextColor = "text-gray-200";
    this.ItemTextSize = "text-xs md:text-sm";
    this.ItemPaddingStyle = "px-2 md:px-3 py-2";
    this.ItemTextPosition = "text-left";
    this.ItemWidth = "w-32 md:w-48";
    this.ItemBackgroundColorOnHover = "hover:bg-slate-700 opacity-80";
    this.ItemStyleOnSelect = "bg-slate-700";
    this.ItemBorderColor = "border-slate-700";
    this.LeftActionItemStyle = "pr-3 text-xs text-gray-200";
    this.RightActionItemStyle = "text-xs text-gray-200";
    this.FolderActionItemStyle = "text-gray-200";
  }
}
