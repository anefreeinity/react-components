import { faUser } from "@fortawesome/free-solid-svg-icons";
import Menu from "./menu/menu";

const MenuHandler: React.FC = () => {
  const handleItemClick = (label: string) => {
    alert(`You clicked on ${label}`);
  };

  const menuItems = [
    {
      label: "Profile",
      leftIcon: faUser,
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
        <Menu items={menuItems} />
      </div>
    </div>
  );
};

export default MenuHandler;
