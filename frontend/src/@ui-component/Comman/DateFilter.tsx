import DropDown from './DropDown';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface CustomProps {
  timeOptions: Option[];
  selectedTime: string;
  wantBorder?: boolean;
  handleChange: (value: string) => void;
}
const DateFilter = ({
  timeOptions,
  selectedTime,
  handleChange,
  wantBorder = false,
}: CustomProps) => {
  const theme = useTheme();
  const isMobileOrLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {isMobileOrLaptop ? (
        <DropDown
          options={timeOptions}
          value={selectedTime}
          onChange={handleChange}
          disableMenuItemTouchRipple
          disableTouchRipple
          minWidth={64}
          maxHeight={'30vh'}
          padding="6px 10px"
        />
      ) : (
        <Box
          display="flex"
          sx={{
            border: wantBorder ? '1px solid' : '',
            borderColor: wantBorder ? 'divider' : '',
            p: '4px',
            borderRadius: 2,
            gap: 1,
          }}
        >
          {timeOptions.map((time) => (
            <Button
              key={time.value}
              disableTouchRipple
              disableElevation
              variant={selectedTime === time.value ? 'contained' : 'text'}
              size="small"
              onClick={() => handleChange(time.value)}
              sx={{
                minWidth: '35.52px',
                height: '36px',
                padding: '6px 8px',
                color:
                  selectedTime === time.value
                    ? 'text.secondary'
                    : 'custom.lightGrey',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 400,
                borderRadius: 1.5,
                transition: 'none',
                backgroundColor:
                  selectedTime === time.value
                    ? '#A49BFF33'
                    : 'transparent',
                '&:hover': {
                  backgroundColor:
                    selectedTime === time.value
                      ? '#A49BFF33'
                      : 'transparent',
                  color: 'text.secondary',
                },
              }}
            >
              {time.label}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
};

export default DateFilter;
