import React, { FC, SVGProps } from "react";

const EthIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M6.06776 1L9.1849 6.06602L6.0916 7.91327L3 6.06939L6.06776 1ZM6.08479 8.49L9.1849 6.68493L6.0916 11.0002L3 6.68493L6.08479 8.49Z" />
        </svg>
    );
}

export default EthIcon;
