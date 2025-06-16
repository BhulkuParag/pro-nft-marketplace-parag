import { type FC, type SVGProps } from 'react';

const NftBrandsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className={props?.className}
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1.522 1.272A4.343 4.343 0 0 1 4.593 0h4.495c.85 0 1.666.338 2.267.94l9.455 9.453a3.206 3.206 0 0 1 0 4.537m0 0-5.63 5.63a3.209 3.209 0 0 1-4.537 0L1.19 11.107A3.207 3.207 0 0 1 .25 8.838V4.343c0-1.152.458-2.256 1.272-3.07m3.071.424a2.646 2.646 0 0 0-2.646 2.646v4.495c0 .401.16.785.443 1.068l9.453 9.454a1.51 1.51 0 0 0 2.136 0l5.631-5.63a1.509 1.509 0 0 0 0-2.136L10.155 2.14a1.51 1.51 0 0 0-1.067-.443H4.593ZM6.34 5.774a.316.316 0 1 0 0 .633.316.316 0 0 0 0-.633Zm-2.013.316a2.014 2.014 0 1 1 4.027 0 2.014 2.014 0 0 1-4.027 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default NftBrandsIcon;
