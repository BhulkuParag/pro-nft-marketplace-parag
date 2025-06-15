import React, { FC, SVGProps } from "react";

interface RightIconProps extends SVGProps<SVGSVGElement> {
    color?: string;
}

const RightIcon: FC<RightIconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={14}
        // fill={color || "none"}
        {...props}
    >
        <g fillRule="evenodd" clipRule="evenodd">
            <path d="M16.5 1.538 5.498 12.54 1.5 8.543l.496-.495 3.502 3.502L16.005 1.043l.495.495Z" />
            <path d="M17.09 1.538 5.498 13.13.911 8.543l1.085-1.085 3.502 3.503L16.005.454l1.085 1.084ZM5.498 11.55 1.996 8.048l-.496.495 3.998 3.998L16.5 1.537l-.495-.495L5.498 11.55Z" />
        </g>
    </svg>
);

export default RightIcon;
