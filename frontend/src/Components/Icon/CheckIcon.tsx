import React, { SVGProps } from "react";

interface CheckIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({ className, ...props }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
            <path d="M6.0001 10.7799L3.2201 7.9999L2.27344 8.9399L6.0001 12.6666L14.0001 4.66656L13.0601 3.72656L6.0001 10.7799Z" />
        </svg>
    );
};

export default CheckIcon;
