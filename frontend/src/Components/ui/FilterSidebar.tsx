import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  // ListItemIcon,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {
  fetchActivityDataRequest,
  setSelectedActivityFilter,
} from '../../features/collection/collectionSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const { selectedActivityFilter, activityFilters } = useSelector(
    (state: RootState) => state.collection
  );

  const handleChange = (value: string) => {
    let newFilters: string[];
    if (selectedActivityFilter.includes(value) && value !== 'sale') {
      newFilters = selectedActivityFilter.filter((v) => v !== value);
    } else {
      newFilters = [...selectedActivityFilter, value];
    }
    dispatch(setSelectedActivityFilter(newFilters));
    dispatch(fetchActivityDataRequest());
  };

  return (
    <Box
      component={'div'}
      sx={{
        minWidth: 'fit-content',
        width: '20%',
        height: '100%',
        backgroundColor: 'transparent !important',
      }}
    >
      <Box
        sx={{
          width: '100%',
          // bgcolor: 'background.default',
          backgroundColor: 'transparent !important',
          height: '100%',
          p: 2,
          pl: 0.5,
          pt: 2.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 500, color: 'text.primary' }}
        >
          Filters
        </Typography>
        {/* <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Rarity</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion> */}
        <Accordion
          defaultExpanded
          disableGutters
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent !important',
            '&.MuiAccordion-root': {
              backgroundColor: 'transparent !important',
            },
            '& .MuiAccordionSummary-root': {
              backgroundColor: 'transparent !important',
            },
            '& .MuiAccordionDetails-root': {
              paddingLeft: '8px',
              backgroundColor: 'transparent !important',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: 'custom.grey01',
                }}
              />
            }
          >
            <Typography
              sx={{
                color: 'custom.grey01',
              }}
            >
              Sort by
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              {activityFilters.map((item) => (
                <ListItem key={item?.label} disableGutters sx={{ p: 0 }}>
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedActivityFilter.includes(item.value)}
                        onChange={() => handleChange(item.value)}
                        sx={{
                          color: 'text.primary',
                          '&.Mui-checked': {
                            color: 'text.secondary',
                          },
                        }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <Typography
                          sx={{ color: 'text.primary', fontSize: 15 }}
                        >
                          {item?.label}
                        </Typography>
                      </Box>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
