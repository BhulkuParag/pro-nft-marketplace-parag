import React, { useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

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

  const isLong = description.length > MAX_CHARS;
  const shownText =
    expanded || !isLong ? description : description.slice(0, MAX_CHARS) + '...';

  return (
    <Box
      sx={{
        background: '#241e70',
        borderRadius: '18px',
        p: { xs: 2, md: 4 },
        display: 'flex',
        alignItems: 'flex-start',
        gap: { xs: 2, md: 4 },
        mt: 2,
        mb: 4,
        minHeight: 220,
        justifyContent: 'center',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          minWidth: 160,
          minHeight: 160,
          width: { xs: 100, md: 212 },
          height: { xs: 100, md: 212 },
          borderRadius: '50%',
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
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: '#fff',
            mb: 1,
            fontSize: {
              xs: '30px',
              md: '34px',
            },
          }}
        >
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
            maxWidth: {
              md: expanded ? '100%' : '70%',
            },
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
              color: '#fff',
              fontWeight: 500,
              textTransform: 'none',
              mb: 0.5,
              p: 0,
              minWidth: 0,
              textDecoration: 'underline',
            }}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </Button>
        )}
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
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
