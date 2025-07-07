import React, { SVGProps } from "react";

const BullsEyeArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 19"
            fill="none"
            {...props}
        >
            <path
                d="M11.8936 6.27539V3.90039L14.2686 1.52539L15.0603 3.10873L16.6436 3.90039L14.2686 6.27539H11.8936ZM11.8936 6.27539L8.72694 9.44202M16.6436 9.44206C16.6436 13.8143 13.0992 17.3587 8.72696 17.3587C4.35471 17.3587 0.810303 13.8143 0.810303 9.44206C0.810303 5.0698 4.35471 1.52539 8.72696 1.52539M12.6853 9.44206C12.6853 11.6281 10.9131 13.4004 8.72696 13.4004C6.54084 13.4004 4.76863 11.6281 4.76863 9.44206C4.76863 7.25593 6.54084 5.48373 8.72696 5.48373"
                // stroke="#777E90"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default BullsEyeArrowIcon;
