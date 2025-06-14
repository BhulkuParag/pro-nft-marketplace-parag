import React, { FC, SVGProps } from "react";

interface CloseIconProps extends SVGProps<SVGSVGElement> {
    className?: string;
}

const CloseIcon: FC<CloseIconProps> = ({ className, ...props }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                // fill="#36343B"
                d="M12.6663 4.27325L11.7263 3.33325L7.99967 7.05992L4.27301 3.33325L3.33301 4.27325L7.05967 7.99992L3.33301 11.7266L4.27301 12.6666L7.99967 8.93992L11.7263 12.6666L12.6663 11.7266L8.93967 7.99992L12.6663 4.27325Z"
            />
        </svg>
    );
};

export default CloseIcon;
