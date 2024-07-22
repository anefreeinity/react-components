import React from "react";
import Button from "./button";

const ButtonHandler: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="p-4">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default ButtonHandler;
