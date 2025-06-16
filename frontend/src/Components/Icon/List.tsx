import { type FC, type SVGProps } from 'react';

const List: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={13}
    fill="none"
    {...props}
  >
    <path
      // stroke="#777E90"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M14.894 6.462H5.561m9.333-4.666H5.561m9.333 9.333H5.561M2.45 6.462a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Zm0-4.666a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Zm0 9.333a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0Z"
    />
  </svg>
);

export default List;
