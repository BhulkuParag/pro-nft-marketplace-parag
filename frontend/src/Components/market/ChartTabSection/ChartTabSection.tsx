import { useState } from 'react';
import Market from './TabContents/Market';
import Sales from './TabContents/Sales';
import CustomTab from '../../../../@ui-component/Comman/Tab';
import { Box } from '@mui/material';

const homeTabsList = [
  {
    label: 'Sales',
    value: 'Sales',
    content: <Sales />,
  },
  {
    label: 'Market',
    value: 'Market',
    content: <Market />,
  },
  {
    label: 'Sweeps',
    value: 'Sweeps',
    content: <>Sweeps</>,
  },
];

const ChartTabSection = () => {
  const [pos, setPos] = useState('Sales');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    console.log('pos ', newValue);
    setPos(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '12px',
        backgroundColor: 'secondary.main',
        borderRadius: '12px',
      }}
    >
      <CustomTab tabs={homeTabsList} handleChange={handleChange} />
      {homeTabsList[homeTabsList.findIndex((i) => i.value === pos)].content}
    </Box>
  );
};

export default ChartTabSection;
