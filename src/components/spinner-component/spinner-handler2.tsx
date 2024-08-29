import Spinner from "./spinner/spinner";

const SpinnerHandler2: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size={50} thickness={10} color="text-red-400" />
    </div>
  );
};

export default SpinnerHandler2;
