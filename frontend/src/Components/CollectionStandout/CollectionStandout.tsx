import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './CollectionStandout.css'

const ethIcon = 'https://marketplace.polycruz.io/eth.svg';

const topHolders = [
    { id: "0xf76246", price: '11.560', transactions: '11 Transactions' },
    { id: "0xf76246", price: '12.499', transactions: '15 Transactions' },
    { id: "0xf76246", price: '12.160', transactions: '17 Transactions' },
    { id: "0xf76246", price: '12.070', transactions: '21 Transactions' },
    { id: "0xf76246", price: '16.190', transactions: '22 Transactions' },
    { id: "0xf76246", price: '12.190', transactions: '22 Transactions' },
    { id: "0xf76246", price: '12.190', transactions: '1 Transactions' },
    { id: "0xf76246", price: '11.850', transactions: '1 Transactions' },
    { id: "0xf76246", price: '11.850', transactions: '1 Transactions' },
];

const topSales = [
    { id: 3776, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '11.560', time: '11 hours ago' },
    { id: 5482, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '12.499', time: '15 hours ago' },
    { id: 5482, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '12.160', time: '17 hours ago' },
    { id: 6145, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '12.070', time: '21 hours ago' },
    { id: 2378, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '16.190', time: '22 hours ago' },
    { id: 267, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '12.190', time: '22 hours ago' },
    { id: 1807, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '12.190', time: '1 day ago' },
    { id: 1050, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '11.850', time: '1 day ago' },
    { id: 9150, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf88Tr3x0uX%2FOSQoSNYWrKxRxCvLXCJ686Dk%2Bjsf%2FAkpIDYQCOgjl2mT%2FWrg24eHd71Y%2FdBtmjDXN4ErtRXQPdq4%3D.png', price: '11.850', time: '1 day ago' },
];

const listings = [
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '10 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '17 seconds ago' },
    { id: 9415, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '18 seconds ago' },
    { id: 7015, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '14.410', time: '18 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '20 seconds ago' },
    { id: 4641, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '22 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '23 seconds ago' },
    { id: 9415, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '24 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf%2BVwE2FetTNFc0%2F9Ruh5ZoWFf7RD7wBWS9mR2n6vsFyzI8UHVCGQrFV4POt8qANXUW25MG%2F%2BVFdKnHXkr3nQR90%3D.png', price: '11.979', time: '30 seconds ago' },
];

const transfers = [
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '10 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '17 seconds ago' },
    { id: 9415, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '18 seconds ago' },
    { id: 7015, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '14.410', time: '18 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '20 seconds ago' },
    { id: 4641, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '22 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '23 seconds ago' },
    { id: 9415, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '24 seconds ago' },
    { id: 8360, img: 'https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvfzmev96XYJs36H7fnDyZPcGdT98%2BvWeDkyQU77CRgw%2B%2FXUegwAYrZj9%2BPydI1jfG%2Fiv4TzJCy7uNCLs7BweIVuE%3D.png', price: '11.979', time: '30 seconds ago' },
];

const cardStyle = {
    background: '#232532',
    borderRadius: '12px',
    flex: 1,
    minWidth: 320,
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgb(100, 116, 139)',
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#2c2f3a',
    borderTopLeftRadius: '14px',
    borderTopRightRadius: '14px',
    px: 2,
    py: 1.5,
};

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(28, 28, 28)',
    borderTop: '0.5px solid rgb(100, 116, 139)',
    px: 1.5,
    py: 1,
    '&:hover': {
        backgroundColor: 'rgb(20, 20, 22)',
    },
};

const CollectionStandout = () => {
    return (
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', padding: 3 }}>
            {/* Top Holders Card */}
            <Box sx={cardStyle}>
                <Box sx={headerStyle}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 400 }}>Top Holders</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#bfc3d0', fontWeight: 400 }}>7 Days</Typography>
                </Box>
                {topHolders.map((item, idx) => (
                    <Box key={idx} sx={itemStyle} className="item">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}> {item.id} </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{item.price}</Typography>
                                <img src={ethIcon} alt="ETH" style={{ width: 14, height: 14 }} />
                            </Box>
                            <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>{item.transactions}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Top Sales Card */}
            <Box sx={cardStyle}>
                <Box sx={headerStyle}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 400 }}>Top Sales</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#bfc3d0', fontWeight: 400 }}>7 Days</Typography>
                </Box>
                {topSales.map((item, idx) => (
                    <Box key={idx} sx={itemStyle} className="item">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Avatar src={item.img} alt={String(item.id)} sx={{ width: 36, height: 36, mr: 1 }} variant="square" />
                            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}> {item.id} </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{item.price}</Typography>
                                <img src={ethIcon} alt="ETH" style={{ width: 14, height: 14 }} />
                            </Box>
                            <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>{item.time}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Listing Card */}
            <Box sx={cardStyle}>
                <Box sx={headerStyle}>
                    <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 400 }}>Top Listing</Typography>
                </Box>
                {listings.map((item, idx) => (
                    <Box key={idx} sx={itemStyle} className="item">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Avatar src={item.img} alt={String(item.id)} sx={{ width: 36, height: 36, mr: 1 }} variant="square" />
                            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}> {item.id} </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{item.price}</Typography>
                                <img src={ethIcon} alt="ETH" style={{ width: 14, height: 14 }} />
                            </Box>
                            <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>{item.time}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Transfer Card */}
            <Box sx={cardStyle}>
                <Box sx={headerStyle}>
                    <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 400 }}>Transfer</Typography>
                </Box>
                {transfers.map((item, idx) => (
                    <Box key={idx} sx={itemStyle} className="item">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Avatar src={item.img} alt={String(item.id)} sx={{ width: 36, height: 36, mr: 1 }} variant="square" />
                            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}> {item.id} </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: 14 }}>{item.price}</Typography>
                                <img src={ethIcon} alt="ETH" style={{ width: 14, height: 14 }} />
                            </Box>
                            <Typography sx={{ color: '#bfc3d0', fontSize: 12 }}>{item.time}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CollectionStandout;