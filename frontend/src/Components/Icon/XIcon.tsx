import React, { FC, SVGProps } from "react";

interface XIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const XIcon: FC<XIconProps> = ({ className, ...props }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={13}
        fill="none"
        {...props}
    >
        <path
            // fill="#777E90"
            d="m.613.833 4.956 6.62-4.988 5.38h1.123L6.07 8.122l3.528 4.711h3.82l-5.235-6.99 4.642-5.01h-1.122l-4.022 4.34-3.25-4.34H.613Zm1.65.826h1.755l7.75 10.348h-1.755L2.263 1.66Z"
        />
    </svg>
);

export default XIcon;
