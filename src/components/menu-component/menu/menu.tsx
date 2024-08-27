import React, { useState, useEffect, useRef } from "react";
import {
  ButtonProperty,
  IButtonProperty,
  IconLeftOrRight,
} from "../../button-component/button/button-property";
import Button from "../../button-component/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  label: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const closeAllMenus = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

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
                isSelecetd={selectedIndex === index}
                onSelect={(argIndex: number | null) =>
                  setSelectedIndex(argIndex)
                }
                setIsOpen={setIsOpen}
                menuRef={menuRef}
                closeAllMenus={closeAllMenus}
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
  closeAllMenus: () => void;
  isSelecetd?: boolean;
  onSelect?: (index: number | null) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({
  item,
  index,
  isLast,
  setIsOpen,
  menuRef,
  closeAllMenus,
  isSelecetd,
  onSelect,
}) => {
  const [isChildrenOpen, setIsChildrenIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
  }, [isChildrenOpen, handleClickOutside]);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div ref={ref}>
      <button
        key={index}
        className={`flex items-center justify-between text-gray-200 px-3 py-2 text-sm w-48 text-left hover:bg-slate-700 
                ${index === 0 ? "rounded-t-md" : ""} ${
          isLast ? "rounded-b-md" : ""
        } ${isSelecetd && isChildrenOpen ? "bg-slate-700" : "bg-slate-800"}`}
        role="menuitem"
        onClick={() => {
          onSelect!(index);
          clearTimeout(timer);
          setIsChildrenIsOpen(true);
          item && item.action && item.action();
          item && item.children && item.children.length > 0
            ? setIsOpen(true)
            : closeAllMenus();
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
            setMenu(true, 300);
          }
          onSelect!(index);
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
        {item && item.leftIcon && (
          <div className="pr-3 text-xs">
            <FontAwesomeIcon icon={item.leftIcon} />
          </div>
        )}
        {item && item.label}
        {hasChildren && (
          <div className="ml-auto">
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        )}
        {!hasChildren && item && item.rightIcon && (
          <div className="ml-auto">
            <FontAwesomeIcon icon={item.rightIcon} />
          </div>
        )}
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
            onSelect!(index);
          }}
        >
          <div role="none">
            {item.children &&
              item.children.map((childItem, childIndex) => (
                <SubMenu
                  key={childIndex}
                  item={childItem}
                  index={childIndex}
                  isLast={childIndex === item.children!.length - 1}
                  isSelecetd={selectedIndex === childIndex}
                  onSelect={(argIndex: number | null) =>
                    setSelectedIndex(argIndex)
                  }
                  setIsOpen={setIsChildrenIsOpen}
                  menuRef={ref}
                  closeAllMenus={closeAllMenus}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
