import Ring from "./spinner/ring";

const RingHandler: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Ring size={100} thickness={20} color="text-orange-400" />
    </div>
  );
};

export default RingHandler;
