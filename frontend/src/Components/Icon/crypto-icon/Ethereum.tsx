import React, { FC, SVGProps } from "react";

interface EthereumProps extends SVGProps<SVGSVGElement> {
    backgroundClass?: string;
    iconClass?: string;
}

const Ethereum: FC<EthereumProps> = ({ backgroundClass, iconClass, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z"
            className={backgroundClass}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6812 6L15.4217 12.0791L11.7098 14.2958L8 12.0831L11.6812 6ZM11.7017 14.9878L15.4217 12.8218L11.7098 18L8 12.8218L11.7017 14.9878Z"
            className={iconClass}
        />
    </svg>
);

export default Ethereum;
