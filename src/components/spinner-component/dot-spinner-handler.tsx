import DotSpinner from "./spinner/dot-spinner";

const DotSpinnerHandler: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <DotSpinner size={100} thickness={10} color="text-green-400" />
        </div>
    );
};

export default DotSpinnerHandler;