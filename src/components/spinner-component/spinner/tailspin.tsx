import React from "react";
import colorHashTable from "../../utils/colorHashTable";

interface SpinnerProps {
  size?: number;
  thickness?: number;
  color?: string;
}

const Spinner3: React.FC<SpinnerProps> = ({
  size = 50,
  thickness = 10,
  color = "text-gray-200",
}) => {
  const colorHash = colorHashTable[color];
  return (
    <>
      <div className="container"></div>
      <style>
        {`
            .container {
                --uib-size: ${size}px;
                --uib-color: ${colorHash};
                --uib-speed: .9s;
                --uib-stroke: ${thickness}px;
                --mask-size: calc(var(--uib-size) / 2 - var(--uib-stroke));
                position: relative;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                height: var(--uib-size);
                width: var(--uib-size);
                -webkit-mask: radial-gradient(
                circle var(--mask-size),
                transparent 99%,
                #000 100%
                );
                mask: radial-gradient(circle var(--mask-size), transparent 99%, #000 100%);
                background-image: conic-gradient(transparent 25%, var(--uib-color));
                animation: spin calc(var(--uib-speed)) linear infinite;
                border-radius: 50%;
            }

            @keyframes spin {
                0% {
                transform: rotate(0deg);
                }
                100% {
                transform: rotate(360deg);
                }
            }
          `}
      </style>
    </>
  );
};

export default Spinner3;
