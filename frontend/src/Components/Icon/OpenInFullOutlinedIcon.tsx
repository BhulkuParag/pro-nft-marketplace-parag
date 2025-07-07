import React, { SVGProps } from "react";

interface OpenInFullOutlinedIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const OpenInFullOutlinedIcon: React.FC<OpenInFullOutlinedIconProps> = ({ className, ...props }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" {...props}>
            <path
                d="M10.6667 7.33333L16.5 1.5L10.6667 7.33333ZM16.5 1.5H11.5H16.5ZM16.5 1.5V6.5V1.5ZM7.33333 10.6667L1.5 16.5L7.33333 10.6667ZM1.5 16.5H6.5H1.5ZM1.5 16.5V11.5V16.5Z"
            //    fill="black"
            />
            <path
                d="M10.6667 7.33333L16.5 1.5M16.5 1.5H11.5M16.5 1.5V6.5M7.33333 10.6667L1.5 16.5M1.5 16.5H6.5M1.5 16.5V11.5"
                //    stroke="#777E91"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default OpenInFullOutlinedIcon;
