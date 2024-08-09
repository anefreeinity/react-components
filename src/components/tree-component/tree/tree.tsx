import React, { useState } from "react";
import { TreeNode, ITreeNode } from "./tree-node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Tree: React.FC = () => {
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  const root: ITreeNode = new TreeNode().demo();

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollableElement = event.currentTarget;
    const scrollTop = scrollableElement.scrollTop;
    scrollTop > 0 ? setIsScroll(true) : setIsScroll(false);
  };

  return (
    <div className="w-full h-full overflow-auto" onScroll={handleScroll}>
      <TreeEngine
        root={root}
        focusedItem={focusedItem}
        setFocusedItem={setFocusedItem}
        sticky={true}
        isScroll={isScroll}
      />
    </div>
  );
};

export default Tree;

interface ITreeEngineProps {
  root: ITreeNode;
  focusedItem: string | null;
  setFocusedItem: React.Dispatch<React.SetStateAction<string | null>>;
  sticky?: boolean;
  isScroll?: boolean;
}

const TreeEngine: React.FC<ITreeEngineProps> = ({
  root,
  focusedItem,
  setFocusedItem,
  sticky = false,
  isScroll = false,
}) => {
  const [showChildren, setShowChildren] = useState(false);

  const handelActionClick = () => {
    setShowChildren((prev) => !prev);
    setFocusedItem(root.name);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handelActionClick();
    }
  };

  return (
    <div className={`w-full`}>
      <div
        className={`text-gray-300 flex items-center pr-6 cursor-pointer bg-slate-800 bg-opacity-0 hover:bg-opacity-100 w-full rounded-md ${
          focusedItem === root.name ? "bg-opacity-60" : ""
        } ${root.isFolder ? "" : "py-1 pl-3"} ${
          sticky && root.isFolder && isScroll
            ? "sticky top-0 z-10 bg-opacity-100 bg-zinc-700 transition-all ease-in-out duration-300"
            : ""
        }`}
        onClick={handelActionClick}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {root.isFolder && (
          <div className="w-5 py-1 hover:bg-slate-700 rounded-md">
            <FontAwesomeIcon
              className="text-slate-400 text-xs w-full"
              icon={showChildren ? faChevronDown : faChevronRight}
            />
          </div>
        )}
        {root.icon && root.iconOnClick && (
          <div className={`ml-1 ${root.isFolder ? "pl-0" : "pl-2"}`}>
            <FontAwesomeIcon
              className="text-slate-400 w-5"
              icon={showChildren ? root.iconOnClick : root.icon}
            />
          </div>
        )}
        <div className="ml-2 select-none hover:select-text truncate overflow-hidden whitespace-nowrap">
          {root.name}
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-300 overflow-hidden ml-2 border-l border-slate-700 ${
          showChildren ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transform ${showChildren ? "translate-y-0" : "-translate-y-2"}`}
      >
        {showChildren &&
          root.children.map((node, index) => (
            <div key={index} className="text-white flex mt-1">
              <TreeEngine
                root={node}
                focusedItem={focusedItem}
                setFocusedItem={setFocusedItem}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
