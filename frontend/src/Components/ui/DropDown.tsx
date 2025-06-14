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
  // InputLabel,
  Box,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// You should import actual icons here (SVGs or use MUI Icons or custom)

import Ethereum from '../Icon/crypto-icon/Ethereum';
import Polygon from '../Icon/crypto-icon/Polygon';
import BNBChain from '../Icon/crypto-icon/BNB_chain';
import Avalanche from '../Icon/crypto-icon/Avalanche';
import { Padding } from '@mui/icons-material';

// Add the rest of your icons

// interface Chain {
//   label: string;
//   value: string;
//   chainId: number;
//   Icon: React.FC<React.SVGProps<SVGSVGElement>>;
// }

const options = [
  {
    label: 'Ethereum',
    chainId: 1,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'eth',
  },
  {
    label: 'Polygon',
    chainId: 137,
    icon: (
      <Polygon
        backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
      />
    ),
    value: 'matic',
  },
  {
    label: 'Polygon zkEVM',
    chainId: 1101,
    icon: (
      <Polygon
        backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
      />
    ),
    value: 'zkevm',
  },
  {
    label: 'Base',
    chainId: 8453,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'base',
  },
  {
    label: 'Avalanche',
    chainId: 43114,
    icon: (
      <Avalanche
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'avax',
  },
  {
    label: 'BNB Smart Chain',
    chainId: 56,
    icon: (
      <BNBChain
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'bnb',
  },
  {
    label: 'Arbitrum',
    chainId: 42161,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'arb',
  },
  {
    label: 'Arbitrum Nova',
    chainId: 42170,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'arbnova',
  },
  {
    label: 'Linea',
    chainId: 59144,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'linea',
  },
  {
    label: 'Optimism',
    chainId: 10,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'op',
  },
  {
    label: 'ApeChain',
    chainId: 16350,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'ape',
  },
  {
    label: 'Astar Network',
    chainId: 592,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'astar',
  },
  {
    label: 'Blast',
    chainId: 81457,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'blast',
  },
  {
    label: 'Flow',
    chainId: 1,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'flow',
  },
  {
    label: 'Sei Network',
    chainId: 713715,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'sei',
  },
  {
    label: 'Zora Network',
    chainId: 7777777,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'zora',
  },
  {
    label: 'zkSync',
    chainId: 324,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'zksync',
  },
  {
    label: 'NCN Testnet',
    chainId: 303,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'ncn_testnet',
  },
  {
    label: 'NCN Mainnet',
    chainId: 313,
    icon: (
      <Ethereum
        backgroundClass="dark:fill-dark-black-light fill-light-black-light"
        iconClass="fill-light-primary-light dark:fill-dark-primary-light"
        className="w-7 h-7"
      />
    ),
    value: 'ncn_mainnet',
  },
];

interface Props {
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
}

const CustomChainDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        width: '100%',
        // minWidth: 141,
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
      }}
    >
      <Select
        labelId="chain-select-label"
        value={value}
        size="small"
        name="chain"
        IconComponent={ExpandMoreIcon}
        onChange={onChange}
        sx={{
          width: '100%',
          color: 'white',
          backgroundColor: '#141416',
          border: '1px solid #6a7282',
        }}
        SelectDisplayProps={{
          style: {
            paddingLeft: 5,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 0.5,
              ml: 3.1,
              scrollbarWidth: 'none',
              backgroundColor: '#141416',
              color: 'white',
              maxHeight: 400,
              border: '1px solid #6a7282',
            },
          },
        }}
      >
        {options?.map(({ label, value, icon }) => (
          <MenuItem
            key={value}
            value={value}
            sx={{
              color: 'white',
              backgroundColor: '#141416',
              '&:hover ': {
                backgroundColor: '#353945',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>{icon}</span>
              <span className="text-white text-sm">{label}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomChainDropdown;
