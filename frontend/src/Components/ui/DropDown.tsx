// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { type SelectChangeEvent } from '@mui/material/Select';

// type DropDownProps = {
//   label: string;
//   value?: string;
//   option?: string[];
//   onChange?: (value: string) => void; // Add this for controlled usage
// };

// const DropDown = ({
//   label = '',
//   value = '',
//   option = [],
//   onChange,
// }: DropDownProps) => {
//   const handleChange = (event: SelectChangeEvent) => {
//     onChange?.(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="dropdown-label">{label}</InputLabel>
//         <Select
//           labelId="dropdown-label"
//           id="dropdown"
//           value={value}
//           label={label}
//           onChange={handleChange}
//         >
//           {(Array.isArray(option) ? option : []).map((item, index) => (
//             <MenuItem key={index} value={item}>
//               {item}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default DropDown;
import React from 'react';
import {
  MenuItem,
  Select,
  // SelectChangeEvent,
  FormControl,
  InputLabel,
  Box,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';

// You should import actual icons here (SVGs or use MUI Icons or custom)

import EthereumIcon from '../Icon/crypto-icon/Ethereum';
// import PolygonIcon from '../Icon/crypto-icon/Polygon';
import BNBIcon from '../Icon/crypto-icon/BNB_chain';
import Avalanche from '../Icon/crypto-icon/Avalanche';

// Add the rest of your icons

interface Chain {
  label: string;
  value: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const chains: Chain[] = [
  { label: 'Ethereum', value: 'ethereum', Icon: EthereumIcon },
  { label: 'Polygon', value: 'polygon', Icon: EthereumIcon },
  { label: 'Polygon zkEVM', value: 'polygon-zkevm', Icon: EthereumIcon },
  { label: 'Base', value: 'base', Icon: EthereumIcon },
  { label: 'Avalanche', value: 'avalanche', Icon: Avalanche },
  { label: 'BNB Smart Chain', value: 'bnb', Icon: BNBIcon },
  { label: 'Arbitrum', value: 'arbitrum', Icon: EthereumIcon },
  { label: 'Arbitrum Nova', value: 'arbitrum-nova', Icon: EthereumIcon },
  { label: 'Linea', value: 'linea', Icon: EthereumIcon },
];

interface Props {
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
}

const CustomChainDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ minWidth: 200 }}>
      {/* <InputLabel id="chain-select-label">Chain</InputLabel> */}
      <Select
        labelId="chain-select-label"
        value={value}
        onChange={onChange}
        // label="Chain"
        sx={{
          color: 'white',
          backgroundColor: '#111',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#777',
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#0c0c0c',
              color: 'white',
              maxHeight: 400,
            },
          },
        }}
      >
        {chains.map(({ label, value, Icon }) => (
          <MenuItem key={value} value={value}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Icon style={{ width: 18, height: 18 }} />
              <Typography>{label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomChainDropdown;
