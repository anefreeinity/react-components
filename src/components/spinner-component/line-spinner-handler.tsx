import LineSpinner from "./spinner/line-spinner";

const LineSpinnerHandler: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <LineSpinner size={100} thickness={10} color="text-lime-400" />
    </div>
  );
};

export default LineSpinnerHandler;
