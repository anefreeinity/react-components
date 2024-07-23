import React from "react";
import Button from "./button/button";
import {
  ButtonProperty,
  ButtonType,
  IButtonProperty,
  IconLeftOrRight,
} from "./button/button-property";
import {
  faEdit,
  faFileExport,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const ButtonHandler: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const editButtonProperty: IButtonProperty = new ButtonProperty();
  editButtonProperty.Icon = faEdit;
  editButtonProperty.IconLeftOrRight = IconLeftOrRight.Left;

  const exportButtonProperty: IButtonProperty = new ButtonProperty();
  exportButtonProperty.Icon = faFileExport;
  exportButtonProperty.IconLeftOrRight = IconLeftOrRight.Right;

  const savingButtonProperty: IButtonProperty = new ButtonProperty();
  savingButtonProperty.ButtonType = ButtonType.Submit;

  const uploadButtonProperty: IButtonProperty = new ButtonProperty();
  uploadButtonProperty.Icon = faUpload;
  uploadButtonProperty.IconLeftOrRight = IconLeftOrRight.Left;

  return (
    <div className="p-4">
      <div className="pb-6">
        <Button onClick={handleClick} property={editButtonProperty}>
          Edit
        </Button>
      </div>
      <div className="pb-6">
        <Button onClick={handleClick} property={exportButtonProperty}>
          Export
        </Button>
      </div>
      <div className="pb-6">
        <Button
          onClick={handleClick}
          property={savingButtonProperty}
          isLoading={true}
        >
          Saving...
        </Button>
      </div>
      <div>
        <Button
          onClick={handleClick}
          disabled={true}
          property={uploadButtonProperty}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ButtonHandler;
