import Spinner from "./spinner/spinner";

const SpinnerHandler: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size={100} thickness={20} color="text-blue-400" />
    </div>
  );
};

export default SpinnerHandler;
