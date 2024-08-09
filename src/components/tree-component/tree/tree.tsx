import { useState } from "react";
import { TreeNode, ITreeNode } from "./tree-node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const Tree: React.FC = () => {
  const root: ITreeNode = new TreeNode().demo();
  return (
    <div className="absolute">
      <TreeEngine root={root}></TreeEngine>
    </div>
  );
};

export default Tree;

interface ITreeEngineProps {
  root: ITreeNode;
}

const TreeEngine: React.FC<ITreeEngineProps> = ({ root }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handelActionClick = () => {
    setShowChildren((prev) => !prev);
  };
  return (
    <div>
      <div className="text-white flex">
        <div onClick={handelActionClick}>
          <FontAwesomeIcon
            className="text-slate-400 text-xs"
            icon={showChildren ? faChevronDown : faChevronRight}
          ></FontAwesomeIcon>
        </div>
        <div className="ml-4">
          <FontAwesomeIcon
            className="text-slate-400"
            icon={showChildren ? faFolderOpen : faFolder}
          ></FontAwesomeIcon>
        </div>
        <div className="ml-2">{root.name}</div>
      </div>
      <div
        style={{ marginLeft: "10px" }}
        className={`transition-all ease-in-out duration-1000 overflow-hidden ${
          showChildren ? "max-h-screen" : "max-h-0"
        }`}
      >
        {showChildren &&
          root.children.map((node, index) => (
            <div key={index} className="text-white flex">
              <TreeEngine root={node} />
            </div>
          ))}
      </div>
    </div>
  );
};
