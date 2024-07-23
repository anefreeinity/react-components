import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "./button-component/button/button";
import {
  ButtonProperty,
  IButtonProperty,
} from "./button-component/button/button-property";
import {
  faCompress,
  faExpand,
  faSmile,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";

const DashBoard: React.FC = () => {
  const inputButton: IButtonProperty = new ButtonProperty();
  inputButton.ButtonBackgroundColor = "bg-blue-600";
  inputButton.ButtonBackgroundOpacity = "bg-opacity-30";
  inputButton.ButtonBackgroundOpacityOnHover = "hover:bg-opacity-100";
  inputButton.ButtonBorderColor = "border-blue-500";
  inputButton.ButtonBorderColorOnHover = "hover:border-blue-300";
  inputButton.ButtonBorderColorOnFocus = "focus:border-blue-200";
  inputButton.ButtonTextColor = "text-gray-200";
  inputButton.ButtonTextColorOnHover = "hover:text-white";
  inputButton.ButtonTextColorOnDisabled = "disabled:text-gray-500";
  inputButton.ButtonShadow = "shadow-lg";
  inputButton.ButtonBackgroundColorOnFocus = "focus:bg-blue-900";
  inputButton.ButtonBackgroundOpacityOnFocus = "focus:bg-opacity-100";
  inputButton.ButtonBorderWidth = "border-2";
  inputButton.ButtonBackgroundColorOnHover = "hover:bg-blue-600";
  inputButton.Icon = faSmile;
  inputButton.IconColor = "text-gray-200";
  // const [inputButtonState, setInputButtonState] =
  //   useState<IButtonProperty>(inputButton);

  const buttonButton: IButtonProperty = new ButtonProperty();
  buttonButton.ButtonBackgroundColor = "bg-red-600";
  buttonButton.ButtonBackgroundOpacity = "bg-opacity-30";
  buttonButton.ButtonBackgroundOpacityOnHover = "hover:bg-opacity-100";
  buttonButton.ButtonBorderColor = "border-red-500";
  buttonButton.ButtonBorderColorOnHover = "hover:border-red-300";
  buttonButton.ButtonBorderColorOnFocus = "focus:border-red-200";
  buttonButton.ButtonTextColor = "text-gray-200";
  buttonButton.ButtonTextColorOnHover = "hover:text-white";
  buttonButton.ButtonTextColorOnDisabled = "disabled:text-gray-500";
  buttonButton.ButtonShadow = "shadow-lg";
  buttonButton.ButtonBackgroundColorOnFocus = "focus:bg-red-700";
  buttonButton.ButtonBackgroundOpacityOnFocus = "focus:bg-opacity-80";
  buttonButton.ButtonBorderWidth = "border-2";
  buttonButton.ButtonBackgroundColorOnHover = "hover:bg-red-600";
  buttonButton.Icon = faSmileBeam;
  buttonButton.IconColor = "text-gray-200";

  const fsButton: IButtonProperty = new ButtonProperty();
  fsButton.Icon = faExpand;

  // const [isFullscreen, setIsFullscreen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (elementRef.current) {
      if (!document.fullscreenElement) {
        elementRef.current
          .requestFullscreen()
          .then(() => {
            // setIsFullscreen(true);
            fsButton.Icon = faCompress;
          })
          .catch((err) => {
            console.error("Error attempting to enter fullscreen mode:", err);
          });
      } else {
        document
          .exitFullscreen()
          .then(() => {
            // setIsFullscreen(false);
            fsButton.Icon = faExpand;
          })
          .catch((err) => {
            console.error("Error attempting to exit fullscreen mode:", err);
          });
      }
    }
  };

  return (
    <div
      ref={elementRef}
      className="h-screen w-screen justify-center items-center"
    >
      <div className="flex flex-row gap-4 h-1/6 bg-gray-800 justify-center items-center">
        <NavLink to="dashboard/input-handler">
          <Button property={inputButton}>Input Examples</Button>
        </NavLink>

        <NavLink to="dashboard/button-handler">
          {" "}
          <Button property={buttonButton}>Button Examples</Button>
        </NavLink>
      </div>
      <div className="flex flex-col h-5/6 justify-center items-center bg-slate-900">
        <div className="flex flex-col w-10/12 lg:w-1/3 md:w-1/2 justify-center items-center">
          <Outlet />
        </div>
        <div className="absolute bottom-2 right-2">
          <Button property={fsButton} onClick={handleFullscreen}></Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
