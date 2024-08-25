import React, { useState, useEffect, useRef } from "react";
import {
  ButtonProperty,
  IButtonProperty,
  IconLeftOrRight,
} from "../../button-component/button/button-property";
import Button from "../../button-component/button/button";

interface MenuItem {
  label: string;
  children?: MenuItem[];
  action?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  rootElement?: JSX.Element;
  isRoot?: boolean;
}

const Menu: React.FC<MenuProps> = ({
  items,
  rootElement = null,
  isRoot = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const editButtonProperty: IButtonProperty = new ButtonProperty();
  editButtonProperty.IconLeftOrRight = IconLeftOrRight.Left;

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {isRoot && (
        <div onClick={toggleMenu}>
          {rootElement ? (
            rootElement
          ) : (
            <Button className="px-4" property={editButtonProperty}>
              Options
            </Button>
          )}
        </div>
      )}

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200 transform opacity-0 scale-95 ${
            isOpen ? "opacity-100 scale-100" : ""
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div role="none">
            {items.map((item, index) => (
              <SubMenu
                key={index}
                item={item}
                index={index}
                isLast={index === items.length - 1}
                setIsOpen={setIsOpen}
                menuRef={menuRef}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface SubMenuProps {
  item: MenuItem;
  index: number;
  isLast: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const SubMenu: React.FC<SubMenuProps> = ({
  item,
  index,
  isLast,
  setIsOpen,
  menuRef,
}) => {
  const [isChildrenOpen, setIsChildrenIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsChildrenIsOpen(false);
    }
  };

  let timer: ReturnType<typeof setTimeout>;
  const setMenu = (state: boolean, interval: number = 0) => {
    timer = setTimeout(() => {
      setIsChildrenIsOpen(state);
    }, interval);
  };

  useEffect(() => {
    if (isChildrenOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChildrenOpen]);

  return (
    <div ref={ref}>
      <button
        key={index}
        className={`text-gray-200 block px-4 py-2 text-sm w-48 text-left hover:bg-slate-700 
                ${index === 0 ? "rounded-t-md" : ""} ${
          isLast ? "rounded-b-md" : ""
        }`}
        role="menuitem"
        onClick={() => {
          setIsChildrenIsOpen((prev) => !prev);
          item && item.action && item.action();
          item && item.children && item.children.length > 0
            ? setIsOpen(true)
            : setIsOpen(false);
        }}
        onMouseOver={() => {
          if (!item.children || item.children.length === 0) {
            clearTimeout(timer);
            return;
          }
          if (timer) {
            clearTimeout(timer);
            setMenu(true);
          } else {
            clearTimeout(timer);
            setMenu(true, 500);
          }
        }}
        onMouseOut={() => {
          if (!item.children || item.children.length === 0) {
            clearTimeout(timer);
            return;
          }
          clearTimeout(timer);
          setMenu(false, 200);
        }}
      >
        {item && item.label}
      </button>

      {isChildrenOpen && (
        <div
          className={`origin-top-right absolute right-full top-0 mr-2 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200 transform opacity-0 scale-95 ${
            isChildrenOpen ? "opacity-100 scale-100" : ""
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          onMouseOver={() => {
            clearTimeout(timer);
            setIsChildrenIsOpen(true);
          }}
        >
          <div role="none">
            {item.children &&
              item.children.map((item, index) => (
                <SubMenu
                  key={index}
                  item={item}
                  index={index}
                  isLast={
                    index === (item.children ? item.children.length : 0) - 1
                  }
                  setIsOpen={setIsChildrenIsOpen}
                  menuRef={ref}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
