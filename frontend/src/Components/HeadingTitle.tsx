import React from 'react';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
}

function HeadingTitle({ children, className, title }: TitleProps) {
  return (
    <div className={'text-2xl font-semibold' + className}>
      {title}
      {children}
    </div>
  );
}

export default HeadingTitle;
