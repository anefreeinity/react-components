import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { IMenuProperty, MenuProperty } from "./menu-property";

interface MenuItem {
  label: string;
  leftActionItem?: IconDefinition | JSX.Element;
  rightActionItem?: IconDefinition | JSX.Element;
  children?: MenuItem[];
  action?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  rootElement?: JSX.Element;
  className?: string;
  menuProperty?: IMenuProperty;
}

const Menu: React.FC<MenuProps> = ({
  items,
  rootElement = null,
  className,
  menuProperty = new MenuProperty(),
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<any>({
    bottom: `50px`,
    right: `0`,
    top: `auto`,
    left: `auto`,
    isLeft: false,
    menuWidth: 0,
    menuHeight: 0,
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const menuActionRef = useRef<HTMLDivElement>(null);

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

  const updateMenuPosition = useCallback(() => {
    if (!menuRef.current) return;

    const parentRect = menuRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const menuWidth = menuActionRef
      ? menuActionRef.current
        ? menuActionRef.current.offsetWidth
        : 0
      : 0;
    const menuHeight = menuActionRef
      ? menuActionRef.current
        ? menuActionRef!.current!.offsetHeight
        : 0
      : 0;

    if (
      parentRect.right < screenWidth / 2 &&
      parentRect.bottom < screenHeight / 2
    ) {
      console.log("top left");
      const menu = {
        bottom: null,
        right: null,
        top: `${menuHeight}px`,
        left: `0`,
        isLeft: true,
        menuWidth: menuWidth,
        menuHeight: menuHeight,
      };
      setMenuPosition(menu);
    } else if (
      parentRect.right < screenWidth / 2 &&
      parentRect.bottom >= screenHeight / 2
    ) {
      console.log("bottom left");
      const menu = {
        bottom: `${menuHeight}px`,
        right: null,
        top: null,
        left: `0`,
        isLeft: true,
        menuWidth: menuWidth,
        menuHeight: menuHeight,
      };
      setMenuPosition(menu);
    } else if (
      parentRect.right >= screenWidth / 2 &&
      parentRect.bottom < screenHeight / 2
    ) {
      console.log("top right");
      const menu = {
        bottom: null,
        right: `0`,
        top: `${menuHeight}px`,
        left: null,
        isLeft: false,
        menuWidth: menuWidth,
        menuHeight: menuHeight,
      };
      setMenuPosition(menu);
    } else {
      console.log("bottom right");
      const menu = {
        bottom: `${menuHeight}px`,
        right: `0`,
        top: null,
        left: null,
        isLeft: false,
        menuWidth: menuWidth,
        menuHeight: menuHeight,
      };
      setMenuPosition(menu);
    }
  }, [menuRef, menuActionRef, isOpen]);

  useEffect(() => {
    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
    };
  }, [updateMenuPosition]);

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={menuRef}
    >
      <div onClick={toggleMenu} ref={menuActionRef}>
        {rootElement ? (
          rootElement
        ) : (
          <Button
            className="text-xs md:text-sm font-semibold md:font-normal"
            property={editButtonProperty}
          >
            Options
          </Button>
        )}
      </div>

      {isOpen && (
        <div
          style={menuPosition}
          className={`origin-top-right absolute mt-2 ${
            menuProperty.MenuBorderRadius
          } ${menuProperty.MenuShadow} ${menuProperty.MenuBackgroundColor} ${
            menuProperty.MenuRingDesign
          } focus:outline-none transition ease-out ${
            menuProperty.TransitionDuration
          } transform opacity-0 scale-95 ${
            isOpen ? "opacity-100 scale-100" : ""
          } z-10`}
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
                isSelected={selectedIndex === index}
                onSelect={(argIndex: number | null) =>
                  setSelectedIndex(argIndex)
                }
                setIsOpen={setIsOpen}
                menuRef={menuRef}
                closeAllMenus={closeAllMenus}
                level={2}
                menuPos={menuPosition}
                menuProperty={menuProperty}
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
  isSelected?: boolean;
  onSelect?: (index: number | null) => void;
  level: number;
  menuPos?: any;
  menuProperty?: IMenuProperty;
}

const SubMenu: React.FC<SubMenuProps> = ({
  item,
  index,
  isLast,
  setIsOpen,
  menuRef,
  closeAllMenus,
  isSelected,
  onSelect,
  level,
  menuPos,
  menuProperty = new MenuProperty(),
}) => {
  const [isChildrenOpen, setIsChildrenIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsChildrenIsOpen(false);
      }
    };
    if (isChildrenOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChildrenOpen, menuRef, setIsOpen, setIsChildrenIsOpen]);

  let timer: ReturnType<typeof setTimeout>;
  const setMenu = (state: boolean, interval: number = 0) => {
    timer = setTimeout(() => {
      setIsChildrenIsOpen(state);
    }, interval);
  };
  const hasChildren = item.children && item.children.length > 0;

  const handelClick = () => {
    onSelect!(index);
    clearTimeout(timer);
    setIsChildrenIsOpen(true);
    item && item.action && item.action();
    item && item.children && item.children.length > 0
      ? setIsOpen(true)
      : closeAllMenus();
  };

  const handelOnMouseOver = () => {
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
  };

  const handelMouseOut = () => {
    if (!item.children || item.children.length === 0) {
      clearTimeout(timer);
      return;
    }
    clearTimeout(timer);
    setMenu(false, 100);
  };

  const lastItem = menuProperty.MenuBorderRadius.split("-")[1] ?? "md";

  return (
    <div ref={ref}>
      <button
        key={index}
        className={`flex items-center justify-between ${
          menuProperty.ItemTextColor
        } ${menuProperty.ItemPaddingStyle} ${menuProperty.ItemTextSize} ${
          menuProperty.ItemWidth
        } ${menuProperty.ItemTextPosition} ${
          menuProperty.ItemBackgroundColorOnHover
        } 
                ${index === 0 ? `rounded-t-${lastItem}` : ""} ${
          isLast
            ? `rounded-b-${lastItem}`
            : `border-b ${menuProperty.ItemBorderColor}`
        } ${
          isSelected && isChildrenOpen
            ? `${menuProperty.ItemStyleOnSelect}`
            : `${menuProperty.ItemBackgroundColor}`
        }`}
        role="menuitem"
        onClick={handelClick}
        onMouseOver={handelOnMouseOver}
        onMouseOut={handelMouseOut}
      >
        {item && item.leftActionItem && (
          <div className={`${menuProperty.LeftActionItemStyle}`}>
            {!React.isValidElement(item.leftActionItem) && (
              <FontAwesomeIcon icon={item.leftActionItem as IconDefinition} />
            )}
            {React.isValidElement(item.leftActionItem) && (
              <>{item.leftActionItem}</>
            )}
          </div>
        )}
        {item && item.label}
        {hasChildren && (
          <div className={`ml-auto ${menuProperty.FolderActionItemStyle}`}>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        )}
        {!hasChildren && item && item.rightActionItem && (
          <div className={`ml-auto ${menuProperty.RightActionItemStyle}`}>
            {!React.isValidElement(item.rightActionItem) && (
              <FontAwesomeIcon icon={item.rightActionItem as IconDefinition} />
            )}
            {React.isValidElement(item.rightActionItem) && (
              <>{item.rightActionItem}</>
            )}
          </div>
        )}
      </button>

      {isChildrenOpen && (
        <div
          className={`origin-top-right absolute ${
            menuPos.isLeft
              ? `left-full ${menuProperty.MenuTranslate}`
              : "right-full"
          } top-1 mr-0 ${menuProperty.MenuBorderRadius} ${
            menuProperty.MenuShadow
          } ${menuProperty.MenuBackgroundColor} ${menuProperty.MenuRingDesign}
          focus:outline-none transition ease-out ${
            menuProperty.TransitionDuration
          } transform opacity-0 scale-95 ${
            isChildrenOpen ? "opacity-100 scale-100" : ""
          } z-${level * 10}`}
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
                  isSelected={selectedIndex === childIndex}
                  onSelect={(argIndex: number | null) =>
                    setSelectedIndex(argIndex)
                  }
                  setIsOpen={setIsChildrenIsOpen}
                  menuRef={ref}
                  closeAllMenus={closeAllMenus}
                  level={level + 1}
                  menuPos={menuPos}
                  menuProperty={menuProperty}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
