import Tree from "./tree/tree";

const TreeHandler: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-40  rounded-md p-2 w-2/3 lg:w-1/2">
      <div className="w-full h-72 bg-opacity-40  rounded-md">
        <Tree />
      </div>
    </div>
  );
};

export default TreeHandler;
