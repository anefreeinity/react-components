import DotPulse from "./spinner/dot-pulse";

const DotPulseHandler: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <DotPulse size={50} thickness={10} color="text-blue-400" />
        </div>
    );
};

export default DotPulseHandler;