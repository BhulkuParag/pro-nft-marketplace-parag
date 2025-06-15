import React, { FC, SVGProps } from "react";

const ListMore: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={15}
        fill="none"
        {...props}
    >
        <path
            // stroke="#777E90"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M14.894 5.515H5.561m9.333-4.045H5.561m9.333 8.045H5.561m9.333 3.94H5.561M2.45 5.515a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Zm0-4.045a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Zm0 8.045a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Zm0 3.94a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Z"
        />
    </svg>
);

export default ListMore;
