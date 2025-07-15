import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CustomAccordionProps {
  title: string;
  children: React.ReactNode;
}

const CustomAccordion = ({ title, children }: CustomAccordionProps) => {
  return (
    <Accordion
      disableGutters
      sx={{
        boxShadow: 'none',
        '&::before': {
          display: 'none',
        },
        paddingLeft: '0px',
        backgroundColor: 'background.default',
        '&.MuiAccordion-root': {
          backgroundColor: 'background.default',
          transition: 'none',
          paddingLeft: '0px',
        },
        '& .MuiAccordionSummary-root': {
          backgroundColor: 'background.default',
          transition: 'none',
          paddingLeft: '0px',
        },
        '& .MuiAccordionDetails-root': {
          backgroundColor: 'background.default',
          transition: 'none',
          paddingLeft: '0px',
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: 'custom.grey01',
              fontSize: 20,
            }}
          />
        }
      >
        <Typography
          sx={{
            color: 'custom.grey01',
            fontSize: 13,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default React.memo(CustomAccordion);
