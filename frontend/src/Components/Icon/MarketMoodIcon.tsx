import { type FC, type SVGProps } from 'react';

const MarketMoodIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className={props?.className}
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#777E90"
      fillRule="evenodd"
      d="M11 1.5A9.25 9.25 0 1 0 11 20a9.25 9.25 0 0 0 0-18.5ZM.25 10.75C.25 4.813 5.063 0 11 0s10.75 4.813 10.75 10.75S16.937 21.5 11 21.5.25 16.687.25 10.75Zm6.908.596a3.842 3.842 0 0 0 7.684 0h1.5a5.342 5.342 0 0 1-10.684 0h1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default MarketMoodIcon;
