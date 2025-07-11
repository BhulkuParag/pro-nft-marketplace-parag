import React, { useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

interface CollectionHeroProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  onReadMore?: () => void;
  onViewAll?: () => void;
}

const MAX_CHARS = 150;

const CollectionHero: React.FC<CollectionHeroProps> = ({
  image,
  title,
  subtitle,
  description,
  onReadMore,
  onViewAll,
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const isLong = description?.length > MAX_CHARS;
  const shownText =
    expanded || !isLong
      ? description
      : description?.slice(0, MAX_CHARS) + '...';

  return (
    <Box
      sx={{
        background: '#241e70',
        borderRadius: '12px',
        p: { xs: 2 },
        display: 'flex',
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        alignItems: 'flex-start',
        gap: { xs: 2, sm: 4, md: 4 },
        mb: 4,
        minHeight: 220,
      }}
    >
      <Box
        sx={{
          // minWidth: 160,
          // minHeight: 160,
          width: { xs: '100%', sm: 212 },
          // height: { xs: 100, md: 212 },
          // width: '100%',
          height: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          alignSelf: 'flex-start',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#fff', opacity: 0.8, mb: 1, fontSize: '14px' }}
        >
          by {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            opacity: 0.9,
            mb: 1,
            display: 'block',
            maxWidth: expanded ? '100%' : '70%',
            wordBreak: 'break-word',
            fontSize: '14px',
          }}
        >
          {shownText}
        </Typography>
        {isLong && (
          <Button
            variant="text"
            sx={{
              color: '#f3f4f6',
              fontWeight: 500,
              textTransform: 'none',
              mb: 1,
              p: 0,
              minWidth: 0,
              textDecoration: 'underline',
            }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </Button>
        )}
        {/* <Link to={'#'} className='text-gray-100 underline'>Read More</Link> */}
        <Box>
          <Button
            variant="contained"
            disableElevation
            disableTouchRipple
            sx={{
              background: '#191919',
              color: '#fff',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              px: 1.5,
              py: 1,
              boxShadow: 'none',
              '&:hover': { background: theme.palette.text.secondary },
            }}
            onClick={onViewAll}
          >
            View All Collections
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionHero;
