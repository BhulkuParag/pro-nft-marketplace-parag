import { type FC, type SVGProps } from 'react';

const MarketIndexIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className={props?.className}
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g>
      {/* Uncomment the fill attribute in the paths if needed */}
      {/* <path fill={props?.fill || "#777E90"}> */}
      <path d="M9.11 16.9H5.32c-.41 0-.75-.34-.75-.75v-5.12c0-1.04.85-1.89 1.89-1.89h2.65c.41 0 .75.34.75.75v6.25c0 .42-.34.76-.75.76Zm-3.04-1.5h2.29v-4.75h-1.9a.39.39 0 0 0-.39.39v4.36Z" />
      <path d="M12.89 16.9H9.1c-.41 0-.75-.34-.75-.75V6.49c0-1.04.85-1.89 1.89-1.89h1.52c1.04 0 1.89.85 1.89 1.89v9.66c-.01.41-.34.75-.76.75Zm-.74-1.5V6.49a.39.39 0 0 0-.39-.39h-1.52a.39.39 0 0 0-.39.39v8.91h2.3Z" />
      <path d="M16.68 16.9h-3.79c-.41 0-.75-.34-.75-.75V11.6c0-.41.34-.75.75-.75h2.65c1.04 0 1.89.85 1.89 1.89v3.41c0 .41-.33.75-.75.75Zm-3.04-1.5h2.29v-2.66a.39.39 0 0 0-.39-.39h-1.9v3.05Z" />
      <path d="M14 21.5H8c-5.43 0-7.75-2.32-7.75-7.75v-6C.25 2.32 2.57 0 8 0h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20c-4.61 0-6.25 1.64-6.25 6.25v6C1.75 18.36 3.39 20 8 20h6c4.61 0 6.25-1.64 6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25H8Z" />
      {/* </path> */}
    </g>
  </svg>
);

export default MarketIndexIcon;
