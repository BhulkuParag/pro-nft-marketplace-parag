import { type FC, type SVGProps } from "react";

interface TrendingUpIconProps extends SVGProps<SVGSVGElement> { }

const TrendingUpIcon: FC<TrendingUpIconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} fill="none" {...props}>
        <path
            // fill="#10DAB6"
            fillRule="evenodd"
            d="M6.955 1.608 12.5 0l-1.38 5.606-1.722-1.653-2.777 2.893a.5.5 0 0 1-.722 0L3.86 4.722l-3 3.124a.5.5 0 0 1-.72-.692l3.36-3.5a.5.5 0 0 1 .72 0l2.04 2.124 2.417-2.517-1.722-1.653Z"
            clipRule="evenodd"
        />
    </svg>
);

export default TrendingUpIcon;
