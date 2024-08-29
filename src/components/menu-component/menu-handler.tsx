import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu/menu";
import { IMenuProperty, MenuProperty } from "./menu/menu-property";

const MenuHandler: React.FC = () => {
  const handleItemClick = (label: string) => {
    alert(`You clicked on ${label}`);
  };

  const menuItems = [
    {
      label: "Profile",
      leftActionItem: faUser,
      children: [
        {
          label: "view dp",
          children: [],
          action: () => handleItemClick("view dp"),
        },
        {
          label: "change dp",
          children: [],
          action: () => handleItemClick("change dp"),
        },
      ],
    },
    {
      label: "Settings",
      children: [
        {
          label: "Profile Settings",
          action: () => handleItemClick("Profile Settings"),
          children: [
            {
              label: "Profile Settings 1",
              children: [],
              action: () => handleItemClick("Profile Settings 1"),
            },
            {
              label: "General Settings 2",
              children: [],
              action: () => handleItemClick("General Settings 2"),
            },
          ],
        },
        {
          label: "General Settings",
          children: [],
          action: () => handleItemClick("General Settings"),
        },
      ],
      action: () => handleItemClick("Settings"),
    },
    { label: "Logout", action: () => handleItemClick("Logout") },
  ];

  const menuProperty: IMenuProperty = new MenuProperty();
  menuProperty.MenuBorderRadius = "rounded-sm";
  menuProperty.MenuBackgroundColor = "bg-gray-300";
  menuProperty.ItemBackgroundColor = "bg-gray-300";
  menuProperty.ItemTextColor = "text-gray-950 font-bold";
  menuProperty.ItemBorderColor = "border-gray-400";
  menuProperty.ItemBackgroundColorOnHover = "hover:bg-gray-400 opacity-80";
  menuProperty.ItemStyleOnSelect = "bg-gray-400";
  menuProperty.LeftActionItemStyle = "pr-3 text-xs text-blue-600 font-bold";
  menuProperty.RightActionItemStyle = "text-xs text-blue-600 font-bold";
  menuProperty.FolderActionItemStyle = "text-blue-600 font-bold";

  return (
    <div>
      <div className="absolute top-60 left-16">
        <Menu items={menuItems} />
      </div>
      <div className="absolute top-3/4 left-16">
        <Menu items={menuItems} />
      </div>
      <div className="absolute top-60 left-3/4">
        <Menu items={menuItems} />
      </div>
      <div className="absolute top-3/4 left-3/4">
        <Menu items={menuItems} menuProperty={menuProperty} />
      </div>
    </div>
  );
};

export default MenuHandler;
