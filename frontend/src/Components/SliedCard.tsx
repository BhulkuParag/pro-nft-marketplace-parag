import React from 'react';

import Slider, { Settings } from 'react-slick';

import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselItem {
  title: string;
  subtitle: string;
  background: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Get Ready for the NFT Launch!',
    subtitle: 'Prepare for the groundbreaking NFT Launch experience!',
    background: 'linear-gradient(to right, #002fff, #00072d)',
  },
  {
    title: 'Explore the Marketplace',
    subtitle: 'Discover, collect and sell extraordinary NFTs',
    background: 'linear-gradient(to right, #020024, #00d4ff)',
  },
  {
    title: 'Join the Community',
    subtitle: 'Be a part of the next big thing in digital assets',
    background: 'linear-gradient(to right, #000046, #1cb5e0)',
  },
];

const HeroCarousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <Box sx={{ position: 'fixed' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 1400,
          borderRadius: 4,
          overflow: 'hidden',

          marginLeft: '0px',
          marginTop: '60px',
        }}
      >
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                pl: 5,
                pt: 5,
                background: item.background,
                color: '#fff',
                borderRadius: 4,
              }}
            >
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1">{item.subtitle}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
