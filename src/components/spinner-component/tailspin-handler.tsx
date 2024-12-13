import Spinner3 from "./spinner/tailspin";

const TailspinHandler: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner3 size={100} thickness={10} color="text-red-400" />
    </div>
  );
};

export default TailspinHandler;
