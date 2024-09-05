import React from "react";
import colorHashTable from "../../utils/colorHashTable";

interface SpinnerProps {
    size?: number;
    thickness?: number;
    color?: string;
  }
const DotPulse: React.FC<SpinnerProps> = ({
    size = 50,
    thickness = 10,
    color = "text-gray-200",
}) => {
    const colorHash = colorHashTable[color];
    return (
        <>
            <div className="container">
                <div className="dot" />
            </div>

    <style>
    {
        `
            .container {
            --uib-size: ${size}px;
            --uib-color: ${colorHash};
            --uib-speed: 1.3s;
            --uib-dot-size: calc(var(--uib-size) * 0.24);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: var(--uib-dot-size);
            width: var(--uib-size);
        }

        .dot,
        .container::before,
        .container::after {
            content: '';
            display: block;
            height: var(--uib-dot-size);
            width: var(--uib-dot-size);
            border-radius: 50%;
            background-color: var(--uib-color);
            transform: scale(0);
            transition: background-color 0.3s ease;
        }

        .container::before {
            animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.375)
            infinite;
        }

        .dot {
            animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.25)
            infinite both;
        }

        .container::after {
            animation: pulse var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.125)
            infinite;
        }

        @keyframes pulse {
            0%,
            100% {
            transform: scale(0);
            }

            50% {
            transform: scale(1);
            }
        }  `
    }
    </style>
    </>
    );
};

export default DotPulse;    