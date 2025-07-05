import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import banner1 from '../../assets/images/banner1.svg';
import banner2 from '../../assets/images/banner2.svg';
import banner3 from '../../assets/images/banner3.svg';

export default function SlideCard() {
  interface CarouselItem {
    title: string;
    // subtitle: string;
    image: string;
  }

  const carouselItems: CarouselItem[] = [
    {
      title: 'Get Ready for the NFT Launch!',
      // subtitle: 'Prepare for the groundbreaking NFT Launch experience!',
      image: banner1,
    },
    {
      title: 'Explore the Marketplace',
      // subtitle: 'Discover, collect and sell extraordinary NFTs',
      image: banner2,
    },
    {
      title: 'Join the Community',
      // subtitle: 'Be a part of the next big thing in digital assets',
      image: banner3,
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        minHeight: 200,
        padding: '20px',
        paddingY: '10px',
        // fontSize: 14,
        // color: '#fff',
        // margin: 0,
        // padding: 0,
        // boxSizing: 'border-box',
      }}
    >
      <Swiper
        style={{
          width: '100%', // Matches your .swiper CSS
          height: '200px',
          borderRadius: '10px',
        }}
        // spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination]}
      >
        {carouselItems.map((item) => (
          <SwiperSlide
            key={item.title}
            style={{
              // textAlign: 'center',
              // fontSize: 18,
              borderRadius: '10px',
              // display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'start',
            }}
          >
            <div className="relative flex items-center justify-center h-full z-10 ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
            {/* <h1>{item.title}</h1>
              <p>{item.subtitle}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
