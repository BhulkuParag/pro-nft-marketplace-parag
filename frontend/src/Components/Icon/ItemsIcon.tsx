import { type FC, type SVGProps } from 'react';

const ItemsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 21"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.82724 0.312378H13.1727V2.11238H4.82724V0.312378ZM2.37269 3.58511H15.6272V5.38511H2.37269V3.58511ZM0.736328 6.85783H17.2636V20.1124H0.736328V6.85783ZM2.53633 8.65783V18.3124H15.4636V8.65783H2.53633ZM6.62724 10.9487V12.5851H11.3727V10.9487H13.1727V14.3851H4.82724V10.9487H6.62724Z"
    />
  </svg>
);

export default ItemsIcon;
