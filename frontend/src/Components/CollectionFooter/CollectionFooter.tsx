import React, { useState, useRef } from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import type { SwitchProps } from '@mui/material/Switch';

// NumericStepper component
interface NumericStepperProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}
const NumericStepper = ({
  value,
  setValue,
  min = 1,
  max = 100,
}: NumericStepperProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: `${theme.palette.background.default}`,
        border: '1px solid #353945',
        borderRadius: '12px',
        paddingInline: '16px 0',
        height: 32,
        minWidth: 120,
      }}
    >
      <Typography
        sx={{
          color: `${theme.palette.text.secondary}`,
          fontSize: 16,
          fontWeight: 500,
          mr: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          color: `${theme.palette.text.secondary}`,
          fontSize: 16,
          fontWeight: 500,
          mr: 2,
        }}
      >
        Items
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderLeft: `1px solid  ${theme.palette.text.primary}`,
          ml: 1,
          height: '100%',
        }}
      >
        <ToggleButton
          size="small"
          sx={{
            p: 0.2,
            color: `${theme.palette.text.secondary}`,
            borderRadius: 0,
            minWidth: 12,
            minHeight: 12,
            border: 'none',
          }}
          value="up"
          onClick={() => setValue((v: number) => Math.min(max, v + 1))}
        >
          <ArrowDropUpIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton
          size="small"
          sx={{
            p: 0.2,
            color: `${theme.palette.text.secondary}`,
            borderRadius: 0,
            minWidth: 12,
            minHeight: 12,
            border: 'none',
          }}
          value="down"
          onClick={() => setValue((v: number) => Math.max(min, v - 1))}
        >
          <ArrowDropDownIcon fontSize="small" />
        </ToggleButton>
      </Box>
    </Box>
  );
};

// iOS-style Switch
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 22,
  padding: 0,
  display: 'flex',
  '&:active .MuiSwitch-thumb': {
    width: 18,
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? `${theme.palette.text.primary}`
            : `${theme.palette.text.primary}`,
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 18,
    height: 18,
    borderRadius: 11,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? `${theme.palette.text.secondary}`
        : `${theme.palette.text.secondary}`,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CollectionFooter = () => {
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [itemCount, setItemCount] = useState(49);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [skipPending, setSkipPending] = useState(false);
  const [skipFlagged, setSkipFlagged] = useState(false);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };
  const settingsOpen = Boolean(settingsAnchorEl);
  return (
    <Box
      component={'footer'}
      sx={{
        width: 'calc(100% - 70px)',
        px: '16px',
        borderTop: `1px solid`,
        borderColor: 'divider',
        // height: '66px',
        height: '55px',
        position: 'fixed',
        bottom: 0,
        zIndex: 1000,
        display: { xs: 'none', xl: 'block' },
        backgroundColor: `${theme.palette.background.default}`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" size="small">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" size="small">
              <FormatAlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <Box sx={{ width: 170 }}>
            <Slider
              value={itemCount}
              min={1}
              max={100}
              onChange={(_, value) => setItemCount(value as number)}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                color: theme.palette.text.secondary,
                '& .MuiSlider-valueLabel': {
                  backgroundColor: theme.palette.text.secondary,
                  color: theme.palette.text.primary,
                  fontSize: '10px',
                  borderRadius: '100%',
                  paddingBlock: '10px',
                  width: '35px',
                },
              }}
            />
          </Box>
          <NumericStepper
            value={itemCount}
            setValue={setItemCount}
            min={1}
            max={100}
          />
          <IconButton
            sx={{
              width: 35,
              height: 35,
              borderRadius: '8px',
              background: 'none',
              border: `1px solid ${theme.palette.text.secondary}`,
              color: '#777e90',
              '&:hover': {
                background: 'rgba(119,126,144,0.08)',
              },
            }}
            onClick={handleSettingsClick}
          >
            <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <Popover
            open={settingsOpen}
            anchorEl={settingsAnchorEl}
            onClose={handleSettingsClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            disableScrollLock
            PaperProps={{
              sx: {
                bgcolor: theme.palette.background.default,
                p: 2,
                borderRadius: 2,
                minWidth: 180,
                boxShadow: 3,
              },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontSize: 16,
                mb: 1,
              }}
            >
              Optimize Sweep
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <IOSSwitch
                checked={skipPending}
                onChange={() => setSkipPending((v) => !v)}
                sx={{ mr: 1 }}
              />
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: 16 }}
              >
                Skip Pending
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IOSSwitch
                checked={skipFlagged}
                onChange={() => setSkipFlagged((v) => !v)}
                sx={{ mr: 1 }}
              />
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: 16 }}
              >
                Skip Flagged
              </Typography>
            </Box>
          </Popover>
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: `${theme.palette.text.secondary}`,
              color: `${theme.palette.text.primary}`,
              borderRadius: '12px',
              fontWeight: 500,
              fontSize: '16px',
              boxShadow: 'none',
              px: 5,
              // height: 50,
              textTransform: 'none',
              '&:hover': {
                background: `${theme.palette.text.primary}`,
                color: `${theme.palette.text.secondary}`,
                boxShadow: 'none',
              },
            }}
          >
            Connect
          </Button>
        </Box>
        <Box
          sx={{
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              background: `${theme.palette.text.primary}`,
              color: `${theme.palette.background.default}`,
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '12px',
              px: 1,
              // py: 1.5,
              py: 1,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                background: `${theme.palette.text.primary}`,
                color: `${theme.palette.text.secondary}`,
                boxShadow: 'none',
              },
            }}
          >
            Buy 5 Items 128657.07
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionFooter;
