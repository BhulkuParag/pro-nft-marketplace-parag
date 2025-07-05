import { Box } from '@mui/material';
import React from 'react';

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
}

function HeadingTitle({ children, className, title }: TitleProps) {
  return (
    <Box
      sx={{
        fontSize: 24,
        fontWeight: 600,
        color: 'text.primary',
      }}
      className={'text-2xl font-semibold' + className}
    >
      {title}
      {children}
    </Box>
  );
}

export default HeadingTitle;
