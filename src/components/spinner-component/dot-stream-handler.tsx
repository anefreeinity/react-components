import DotStream from "./spinner/dot-stream";

const DotStreamHandler: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <DotStream size={100} color="text-red-400" />
    </div>
  );
};

export default DotStreamHandler;
