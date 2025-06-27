import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsDataRequest } from '../../features/collection/collectionSlice';
import type { RootState } from '../../app/store';

const items = [
  {
    id: 8360,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 9415,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 5268,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1001,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1002,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1003,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1004,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1005,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1006,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1007,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1008,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1009,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1010,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1011,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1012,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
  {
    id: 1013,
    image:
      'https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BVwE2FetTNFc0%252F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%252F%252BVFdKnHXkr3nQR90%253D.png%3Fwidth%3D512&w=828&q=75',
    price: '11.97964',
  },
];

const ethIcon = 'https://marketplace.polycruz.io/eth.svg';

const CollectionItems = () => {
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
  const dispatch = useDispatch();
  const { tabData } = useSelector((state: RootState) => state.collection);

  useEffect(() => {
    dispatch(fetchItemsDataRequest());
  }, []);

  return (
    <Box sx={{ background: '#191919', minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(8, 1fr)',
          },
          gap: 3,
        }}
      >
        {tabData['items']?.map((item: any) => (
          <Link
            to={`/trendingCollections/assets/${item?.token?.collection?.id}:${item?.token?.tokenId}`}
            key={item?.token?.id}
          >
            <Card
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#232323',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: 'none',
                transition:
                  'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
                '&:hover': {
                  transform: 'scale(1.02) translatez(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  background: '#222',
                }}
              >
                <img
                  className="nft-thumbnail"
                  loading="lazy"
                  src={item.token.metadata.imageOriginal}
                  alt={`NFT #${item.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                  }}
                />
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
                      background: selectedIds.includes(item.id)
                        ? '#1976d2'
                        : '#333',
                    },
                  }}
                >
                  {selectedIds.includes(item.id) ? <CheckIcon /> : <AddIcon />}
                </IconButton>
              </Box>
              <CardContent
                sx={{
                  background: '#191919',
                  border: '1px solid rgb(53, 57, 69)',
                  color: '#fff',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px',
                  p: 2,
                  pt: 1.5,
                  pb: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: '#fff', fontWeight: 600, fontSize: 14, mb: 0.5 }}
                >
                  {item?.token?.name} #{item?.token?.tokenId}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#fff', fontWeight: 700, fontSize: 14 }}
                  >
                    {item?.token?.collection?.floorAskPrice?.amount?.decimal}
                  </Typography>
                  <img
                    src="https://marketplace.polycruz.io/eth.svg"
                    alt="ETH"
                    style={{ width: '16px', height: '16px' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CollectionItems;
