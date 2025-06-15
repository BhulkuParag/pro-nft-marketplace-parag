// import React from 'react';
// import {
//   MenuItem,
//   Select,
//   // SelectChangeEvent,
//   FormControl,
//   // InputLabel,
//   Box,
//   // Typography,
//   type SelectChangeEvent,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // You should import actual icons here (SVGs or use MUI Icons or custom)

// import Ethereum from '../Icon/crypto-icon/Ethereum';
// import Polygon from '../Icon/crypto-icon/Polygon';
// import BNBChain from '../Icon/crypto-icon/BNB_chain';
// import Avalanche from '../Icon/crypto-icon/Avalanche';

// const options = [
//   {
//     label: 'Ethereum',
//     chainId: 1,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'eth',
//   },
//   {
//     label: 'Polygon',
//     chainId: 137,
//     icon: (
//       <Polygon
//         backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//       />
//     ),
//     value: 'matic',
//   },
//   {
//     label: 'Polygon zkEVM',
//     chainId: 1101,
//     icon: (
//       <Polygon
//         backgroundClass="dark:bg-dark-black-light bg-light-black-light w-7 h-7"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//       />
//     ),
//     value: 'zkevm',
//   },
//   {
//     label: 'Base',
//     chainId: 8453,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'base',
//   },
//   {
//     label: 'Avalanche',
//     chainId: 43114,
//     icon: (
//       <Avalanche
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'avax',
//   },
//   {
//     label: 'BNB Smart Chain',
//     chainId: 56,
//     icon: (
//       <BNBChain
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'bnb',
//   },
//   {
//     label: 'Arbitrum',
//     chainId: 42161,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'arb',
//   },
//   {
//     label: 'Arbitrum Nova',
//     chainId: 42170,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'arbnova',
//   },
//   {
//     label: 'Linea',
//     chainId: 59144,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'linea',
//   },
//   {
//     label: 'Optimism',
//     chainId: 10,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'op',
//   },
//   {
//     label: 'ApeChain',
//     chainId: 16350,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'ape',
//   },
//   {
//     label: 'Astar Network',
//     chainId: 592,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'astar',
//   },
//   {
//     label: 'Blast',
//     chainId: 81457,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'blast',
//   },
//   {
//     label: 'Flow',
//     chainId: 1,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'flow',
//   },
//   {
//     label: 'Sei Network',
//     chainId: 713715,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'sei',
//   },
//   {
//     label: 'Zora Network',
//     chainId: 7777777,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'zora',
//   },
//   {
//     label: 'zkSync',
//     chainId: 324,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'zksync',
//   },
//   {
//     label: 'NCN Testnet',
//     chainId: 303,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'ncn_testnet',
//   },
//   {
//     label: 'NCN Mainnet',
//     chainId: 313,
//     icon: (
//       <Ethereum
//         backgroundClass="dark:fill-dark-black-light fill-light-black-light"
//         iconClass="fill-light-primary-light dark:fill-dark-primary-light"
//         className="w-7 h-7"
//       />
//     ),
//     value: 'ncn_mainnet',
//   },
// ];

// interface Props {
//   value?: string;
//   onChange?: (event: SelectChangeEvent) => void;
// }

// const CustomChainDropdown: React.FC<Props> = ({ value, onChange }) => {
//   return (
//     <FormControl
//       fullWidth
//       variant="outlined"
//       sx={{
//         width: '100%',
//         // minWidth: 141,
//         '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
//       }}
//     >
//       <Select
//         labelId="chain-select-label"
//         value={value}
//         size="small"
//         name="chain"
//         IconComponent={ExpandMoreIcon}
//         onChange={onChange}
//         sx={{
//           width: '100%',
//           color: 'white',
//           backgroundColor: '#141416',
//           border: '1px solid #6a7282',
//         }}
//         SelectDisplayProps={{
//           style: {
//             paddingLeft: 5,
//           },
//         }}
//         MenuProps={{
//           PaperProps: {
//             sx: {
//               mt: 0.5,
//               ml: 3.1,
//               scrollbarWidth: 'none',
//               backgroundColor: '#141416',
//               color: 'white',
//               maxHeight: 400,
//               border: '1px solid #6a7282',
//             },
//           },
//         }}
//       >
//         {options?.map(({ label, value, icon }) => (
//           <MenuItem
//             key={value}
//             value={value}
//             sx={{
//               color: 'white',
//               backgroundColor: '#141416',
//               '&:hover ': {
//                 backgroundColor: '#353945',
//               },
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <span>{icon}</span>
//               <span className="text-white text-sm">{label}</span>
//             </Box>
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default CustomChainDropdown;

import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { ReactNode } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (val: string) => {
    onChange(val);
    handleClose();
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        disableTouchRipple
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          px: 2,
          py: 1,
          minWidth: 180,
          color: 'white',
          fontSize: 14,
          border: '1px solid #6a7282',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            minWidth: 200,
            maxHeight: 400,
            boxShadow: 3,
            border: '1px solid #6a7282',
            backgroundColor: '#141416',
            mt: 0.5,
            scrollbarWidth: 'none',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {options.map((option) => (
          <MenuItem
            disableTouchRipple
            disableRipple
            disableGutters
            key={option.value}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
            sx={{
              backgroundColor: '#141416',
              fontSize: 14,
              // '&:hover ': {
              //   backgroundColor: '#353945',
              //   borderRadius: 2
              // },
            }}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomDropdown;
