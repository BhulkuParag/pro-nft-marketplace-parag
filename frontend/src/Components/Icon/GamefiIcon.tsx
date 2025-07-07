import React from "react";

interface GamefiIconProps {
    className?: string;
    fill?: string;
}

const GamefiIcon: React.FC<GamefiIconProps> = ({ className, fill }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={18}
        fill="none"
    >
        <path
            fill={fill || "#777E90"}
            fillRule="evenodd"
            d="M16.127.438a5.675 5.675 0 0 1 5.587 4.684l1.534 7.92a3.425 3.425 0 0 1-5.824 2.987l-3.81-4.23-3.223.012-3.816 4.219a3.425 3.425 0 0 1-5.823-2.988l.003-.014 1.532-7.883A5.676 5.676 0 0 1 7.875.462l8.252-.024Zm-2.165 9.759h.006l2.155-.009h.003a4.075 4.075 0 0 0 .002-8.15h-.002l-8.248.024h-.003A4.076 4.076 0 0 0 3.861 5.43l-.002.013-1.532 7.883a1.825 1.825 0 0 0 3.076 1.614l4.038-4.464a.8.8 0 0 1 .59-.264l3.931-.015Zm6.916-.98a5.673 5.673 0 0 1-4.75 2.571h-.002l-.367.002 2.84 3.15a1.825 1.825 0 0 0 3.075-1.614l-.796-4.11ZM8.25 3.837a.8.8 0 0 1 .8.8v.7h.7a.8.8 0 1 1 0 1.6h-.7v.7a.8.8 0 1 1-1.6 0v-.7h-.7a.8.8 0 0 1 0-1.6h.7v-.7a.8.8 0 0 1 .8-.8Zm5.2 2.3a.8.8 0 0 1 .8-.8h3a.8.8 0 0 1 0 1.6h-3a.8.8 0 0 1-.8-.8Z"
            clipRule="evenodd"
        />
    </svg>
);

export default GamefiIcon;
