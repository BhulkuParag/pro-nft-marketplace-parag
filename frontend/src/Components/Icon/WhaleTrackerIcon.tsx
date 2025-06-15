import React, { FC, SVGProps } from "react";

interface WhaleTrackerIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const WhaleTrackerIcon: FC<WhaleTrackerIconProps> = ({ className, ...props }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <g
        // fill={props?.fill || "#777E90"}
        >
            <path d="M11 19c-4.55 0-8.25-3.7-8.25-8.25S6.45 2.5 11 2.5s8.25 3.7 8.25 8.25S15.55 19 11 19Zm0-15c-3.72 0-6.75 3.03-6.75 6.75S7.28 17.5 11 17.5s6.75-3.03 6.75-6.75S14.72 4 11 4Z" />
            <path d="M11 14.5c-2.07 0-3.75-1.68-3.75-3.75C7.25 8.68 8.93 7 11 7c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S9.76 13 11 13s2.25-1.01 2.25-2.25S12.24 8.5 11 8.5ZM11 3.5c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM3 11.5H1c-.41 0-.75-.34-.75-.75S.59 10 1 10h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 21.5c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM21 11.5h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z" />
        </g>
    </svg>
);

export default WhaleTrackerIcon;
