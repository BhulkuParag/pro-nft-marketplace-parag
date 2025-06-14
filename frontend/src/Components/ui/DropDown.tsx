import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

type DropDownProps = {
  label: string;
  value?: string;
  option?: string[];
  onChange?: (value: string) => void; // Add this for controlled usage
};

const DropDown = ({
  label = '',
  value = '',
  option = [],
  onChange,
}: DropDownProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label">{label}</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {(Array.isArray(option) ? option : []).map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
