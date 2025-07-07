import { Box, Chip, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { MdOutlineShoppingCart } from 'react-icons/md';

interface ItemCardProps {
  item: any;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  return (
    <Link
      className="rounded-xl group"
      to={`/trendingCollections/assets/${item?.token?.collection?.id}:${item?.token?.tokenId}`}
    >
      <Box
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#232323',
          position: 'relative',
          cursor: 'pointer',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          '&:hover': {
            transform: 'scale(1.01) translatez(-4px)',
            boxShadow: 6,
            // p: 0,
          },
          '&:hover .price-section': { display: 'none' },
          '&:hover .buy-now-section': { display: 'flex' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1/1',
            background: '#222',
            overflow: 'hidden',
          }}
        >
          <Typography
            component="img"
            className={`nft-thumbnail group-hover:scale-105`}
            loading="lazy"
            src={item?.token?.image}
            alt={`NFT #${item?.id}`}
            sx={{
              // borderBottomLeftRadius: '0px',
              // borderTopRightRadius: '12px',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
              // ':hover': {
              //   scale: 1.1,
              // },
              //transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
            }}
          />

          <Box
            // sx={{ position: 'absolute', bottom: 10, left: 15 }}
            sx={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '0.5rem',
              color: '#fff',
              backgroundColor: '#0006',
              backdropFilter: 'blur(2px)',
              borderRadius: '16px',
            }}
          >
            <Chip
              // label={item.token.name}
              label={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                  }}
                >
                  <Box
                    component="img"
                    src="https://analytic.polycruz.io/icons/rarity.svg"
                  />
                  <Typography
                    variant="body1"
                    color="custom.primary"
                    sx={{
                      fontSize: '0.7rem',
                    }}
                  >
                    {item?.token?.rarityRank}
                  </Typography>
                </Box>
              }
              // variant="outlined"
            />
          </Box>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedIds((ids) =>
                ids.includes(item.id)
                  ? ids.filter((id) => id !== item.id)
                  : [...ids, item.id]
              );
            }}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: selectedIds.includes(item.id)
                ? '#1976d2'
                : 'rgba(30,32,38,0.8)',
              color: '#fff',
              width: 36,
              height: 36,
              boxShadow: 1,
              '&:hover': {
                background: selectedIds.includes(item.id) ? '#1976d2' : '#333',
              },
            }}
          >
            {selectedIds.includes(item.id) ? <CheckIcon /> : <AddIcon />}
          </IconButton>
        </Box>

        <Box
          sx={{
            backgroundColor: 'secondary.main',
            border: '1px solid',
            borderColor: 'divider',
            color: '#fff',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            // p: 1,
            // pt: 1.5,
            // pb: '11px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            gap: 1,
            '&:hover': {
              p: 0, // remove padding on hover
            },
            // padding: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 12,
              ml: 0.5,
              px: '0.5rem',
              pt: '0.7rem',
            }}
          >
            {item?.token?.name}
            {/*  #{item?.token?.tokenId} */}
          </Typography>

          <Box
            className="price-section"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              // transition: 'all 0.3s ease-in-out',
              opacity: 1,
              px: '1rem',
              pb: '1rem',
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: '#fff', fontWeight: 700, fontSize: 10 }}
              >
                Price
              </Typography>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // flexDirection: 'column',
                }}
              >
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  width={16}
                  height={16}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                    fontSize: 10,
                  }}
                >
                  {item?.token?.collection?.floorAskPrice?.amount?.decimal?.toFixed(
                    2
                  )}
                </Typography>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  fontSize: 10,
                }}
              >
                Last Sale
              </Typography>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  // flexDirection: 'column',
                }}
              >
                <img
                  src="https://marketplace.polycruz.io/eth.svg"
                  alt="ETH"
                  width={16}
                  height={16}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 700,
                    fontSize: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {item?.token?.collection?.floorAskPrice?.amount?.decimal?.toFixed(
                    2
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            className="buy-now-section"
            sx={{
              display: 'none',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              p: '0.7rem',
              width: '100%',
              backgroundColor: 'custom.PrimaryButton',
            }}
          >
            <Typography component="p" sx={{ color: '#fff' }}>
              Buy Now
            </Typography>
            <MdOutlineShoppingCart color="#fff" />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default React.memo(ItemCard);
