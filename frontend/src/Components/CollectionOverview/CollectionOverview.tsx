import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    useTheme,
    Popover,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../header/Header';
import Sidebar from '../header/Sidebar';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import CollectionHero from '../CollectionHero/CollectionHero';
import "./CollectionOverview.css";

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
}));

const StatValue = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

const CollectionOverview = () => {
    const theme = useTheme();
    const [liked, setLiked] = useState(false);
    const [copied, setCopied] = useState(false);
    const [refreshed, setRefreshed] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDropdownOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    useEffect(() => {
        document.documentElement.style.setProperty('--mui-text-primary', theme.palette.text.primary);
    }, [theme]);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    useEffect(() => {
        if (refreshed) {
            const timer = setTimeout(() => setRefreshed(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [refreshed]);

    const stats = [
        {
            title: 'NFT Volume (24H)',
            value: '119.47',
            change: '+12.5%',
            isPositive: true,
            icon:
                <Tooltip title="Info" arrow placement='top'>
                    <IconButton>
                        <InfoOutlineIcon sx={{ color: '#777e90' }} />
                    </IconButton>
                </Tooltip>
        },
        {
            title: 'Floor Price',
            value: '0.45',
            change: '-2.3%',
            isPositive: false,
            icon:
                <Tooltip title="Info" arrow placement='top'>
                    <IconButton>
                        <InfoOutlineIcon sx={{ color: '#777e90' }} />
                    </IconButton>
                </Tooltip>
        },
        {
            title: 'Items Listed',
            value: '1,234',
            change: '+5.2%',
            isPositive: true,
            icon:
                <Tooltip title="Info" arrow placement='top'>
                    <IconButton>
                        <InfoOutlineIcon sx={{ color: '#777e90' }} />
                    </IconButton>
                </Tooltip>
        },
        {
            title: 'Owners',
            value: '567',
            change: '+8.1%',
            isPositive: true,
            icon:
                <Tooltip title="Info" arrow placement='top'>
                    <IconButton>
                        <InfoOutlineIcon sx={{ color: '#777e90' }} />
                    </IconButton>
                </Tooltip>
        }
    ];
    const bannerDetails = [
        {
            title: 'Mutant Ape Yacht Club',
            likes: '467',
            icon:
                <VerifiedIcon
                    sx={{ color: theme.palette.text.secondary, width: "20px", height: "20px" }} />,
            rank: 1,
            contractKind: "erc721",
            onSale: 577,
            owner: 11828,
            totalSupply: 19697,
            floorPrice: 1.825,
            topBid: 5.08,
        }
    ];
    const dropdownItems = [
        { label: 'Floor Price', value: `${bannerDetails[0].floorPrice}`, icon: <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 10, height: 10, verticalAlign: 'middle', marginLeft: 4 }} /> },
        { label: 'Top Bid', value: `${bannerDetails[0].topBid}`, icon: <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 10, height: 10, verticalAlign: 'middle', marginLeft: 4 }} /> },
        { label: 'Best Offer', value: '3.27', icon: <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 10, height: 10, verticalAlign: 'middle', marginLeft: 4 }} /> },
        { label: 'Contract Type', value: bannerDetails[0].contractKind, icon: <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 10, height: 10, verticalAlign: 'middle', marginLeft: 4 }} />, },
        { label: 'Total Vol', value: '57.97651', extra: <span style={{ color: '#1bc47d', fontWeight: 500, fontSize: 14, marginLeft: 10 }}>1.01%</span> },
        { label: 'Market Cap', value: '30.69K' },
        { label: 'Owners', value: bannerDetails[0].owner },
        { label: 'Supply', value: '19551' },
        { label: 'Rank', value: bannerDetails[0].rank },
        { label: 'Holders', value: '3,537' },
        { label: 'Royalty', value: '5%' },
        { label: 'Floor Sale', value: '1.79', extra: <span style={{ color: '#1bc47d', fontWeight: 500, fontSize: 13, marginLeft: 4 }}>1.02%</span> },
        { label: 'Minted Time', value: '7 months ago' },
    ];
    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                position: 'relative',
            }}
        >
            {/* Sidebar at the top, fixed */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1200,
                }}
            >
                <Sidebar />
            </Box>

            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Header />
                <Box
                    sx={{
                        paddingInline: '80px',
                        width: '100%',
                        paddingTop: '10px',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 4,
                            color: theme.palette.text.primary
                        }}
                    >
                        Collection Overview
                    </Typography>

                    {/*Banner Section Section*/}
                    <Box className="banner-section">
                        <Box className="banner-thumbnail">
                            <img
                                src="https://img.reservoir.tools/images/v2/mainnet/z9JRSpLYGu7%2BCZoKWtAuAEcOUGySakBXk7K81S4M3usl4TSfYfHL%2BlFeG2FU1xA%2FT2O0uFyODPcfGEyTKOBRxR1Vvqel2SiykN8YLzPJob0lRVCJRwf0dlZuyFZqoER381lhyfETGxSzb4xu9S3P03z2rJ9xwQ%2BbVRwbl51tBeaqMzjQYCpZoIlaacibJjyDtPy9wMtrl86k%2FjbTEQThGg%3D%3D"
                                alt="thumbnail"
                                className='banner-image'
                            />
                        </Box>
                        <Box className="banner-content">
                            <img
                                src="https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAL4v83jn3jtpVIO3s%252BzOvztJqa5dvM8sRQqWqJxNeLprZLk7t%252FkKV14mfw6ax5Z%252FAKVk5y7e4bemc5zTfUUG5yDP0SFukSjUsdQGmQKcKezFnGdbphLT3%252Fk9v3OUYIaaEVzHYKUgQoV%252Bq8aKahdtgXphuoQwP84%252FuONfP%252F4i3OUkm%252FpudGx8XstMS9yAZrtbTGKHRxTKwkJCjb7v6qI5VO6ro4nvj0F16%252FRcLaGeY7WqfJS3JVCa%252FacTF0MWbMnllg47eFISdt%252Fu8B7dkR53OO4%253D%3Fwidth%3D250&w=640&q=75"
                                alt="thumbnail"
                                style={{ borderRadius: "100%", width: "96px", height: "96px" }}
                                className='banner-logo'
                            />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: "20px"
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: "center",
                                        gap: "10px",
                                        width: "max-content",
                                        paddingRight: "15px",
                                        borderRight: `1px solid ${theme.palette.text.primary}`
                                    }}>
                                        <Typography
                                            variant="h3"
                                            color="text.primary"
                                            sx={{ fontSize: '24px', fontWeight: 600 }}
                                        >
                                            {bannerDetails[0].title}
                                        </Typography>
                                        {bannerDetails[0].icon}
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: "center",
                                        paddingLeft: "10px",
                                        gap: "10px"
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: "center",
                                            gap: "5px"
                                        }}>
                                            <Tooltip title="Add to Favourite" arrow placement='top'>
                                                <IconButton onClick={() => setLiked(liked => !liked)} size="small" style={{ padding: 0 }}>
                                                    {liked ? (
                                                        <FavoriteIcon sx={{ color: '#fe749b', width: '20px', height: '20px' }} />
                                                    ) : (
                                                        <FavoriteBorderIcon sx={{ color: theme.palette.text.secondary, width: '20px', height: '20px' }} />
                                                    )}
                                                </IconButton>
                                            </Tooltip>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].likes}
                                            </Typography>
                                        </Box>

                                        <Tooltip title="Click to Copy Address" arrow placement='top'>
                                            <IconButton onClick={() => setCopied(true)} size="small" style={{ padding: 0 }}>
                                                {copied ? (
                                                    <CheckIcon sx={{ color: theme.palette.text.secondary, width: '20px', height: '20px' }} />
                                                ) : (
                                                    <ContentCopyIcon sx={{ color: theme.palette.text.secondary, width: '20px', height: '20px' }} />
                                                )}
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Refresh Metadata" arrow placement='top'>
                                            <IconButton onClick={() => setRefreshed(true)} size="small">
                                                {refreshed ? (
                                                    <CheckIcon sx={{ color: theme.palette.text.secondary, width: '20px', height: '20px' }} />
                                                ) : (
                                                    <RotateLeftIcon sx={{ color: theme.palette.text.secondary, width: '20px', height: '20px' }} />
                                                )}
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: "center",
                                    gap: "10px",
                                }}>
                                    <Box className="data-list"
                                        sx={{
                                            display: 'flex',
                                            alignItems: "center",
                                            gap: "10px",
                                        }}>
                                        <Box className="data-item"
                                            sx={{
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "4px 8px",
                                                borderRadius: "20px",
                                                backgroundColor: "#e7e7e7"
                                            }}>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                Rank
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].rank}
                                            </Typography>

                                        </Box>
                                        <Box className="data-item"
                                            sx={{
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "4px 8px",
                                                borderRadius: "20px",
                                                backgroundColor: "#e7e7e7"
                                            }}>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                Contract Kind
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].contractKind}
                                            </Typography>

                                        </Box>
                                        <Box className="data-item"
                                            sx={{
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "4px 8px",
                                                borderRadius: "20px",
                                                backgroundColor: "#e7e7e7"
                                            }}>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                On Sale
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].onSale}
                                            </Typography>

                                        </Box>
                                        <Box className="data-item"
                                            sx={{
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "4px 8px",
                                                borderRadius: "20px",
                                                backgroundColor: "#e7e7e7"
                                            }}>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                Owner
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].owner}
                                            </Typography>

                                        </Box>
                                        <Box className="data-item"
                                            sx={{
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: "4px 8px",
                                                borderRadius: "20px",
                                                backgroundColor: "#e7e7e7"
                                            }}>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                Total Supply
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.primary"
                                                sx={{ fontSize: '12px' }}
                                            >
                                                {bannerDetails[0].totalSupply}
                                            </Typography>

                                        </Box>
                                    </Box>
                                    {/* Floor Price & Top Bid Section */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 1,
                                        py: 1,
                                    }}>
                                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                            Floor Price
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 700, mx: 0.5 }}>
                                            {bannerDetails[0].floorPrice}
                                        </Typography>
                                        <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 12, height: 12, marginRight: 12 }} />
                                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                            Top Bid
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ color: 'text.primary', fontWeight: 700, mx: 0.5 }}>
                                            {bannerDetails[0].topBid}
                                        </Typography>
                                        <img src="https://marketplace.polycruz.io/eth.svg" alt="ETH" style={{ width: 12, height: 12, marginRight: 12 }} />
                                        <IconButton sx={{ border: '1px solid #bdbdbd', borderRadius: 2, width: 36, height: 36, ml: 1 }} onClick={handleDropdownOpen}>
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#23262f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </IconButton>
                                        <Popover
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleDropdownClose}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}

                                        >
                                            <Box sx={{ p: 2 }}>
                                                {dropdownItems.map((item, idx) => (
                                                    <Box
                                                        key={item.label}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px',
                                                            mb: idx === dropdownItems.length - 1 ? 0 : 2,
                                                        }}
                                                    >
                                                        <Typography sx={{ color: 'text.secondary', fontSize: "14px" }}>{item.label}</Typography>
                                                        <Typography sx={{ color: 'text.primary', fontSize: "14px", fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                                            {item.value}
                                                            {item.icon}
                                                            {item.extra}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Popover>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    {/*Hero Section*/}
                    <CollectionHero
                        image="https://marketplace.polycruz.io/_next/image?url=https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuAA79K674Y2b4%252F48FTC1v%252BJ4rEwpjEK3D0qjUdzqyInvnSJFH5IaIgEk7pF0NEn6WqgSgbCdGL27rkoWAYjQhV2aH%252F8nBd9uVO2ymg2znWvbXJa379tKUzlm4lW4%252BFvX3Lkybz6boYKjCsVC4GCdwAv31e%252BCSMdhCyyVeL2Un9dcLOA78C2fikkVa0IrHu8NT7ZLNEHOGf3f%252F6Glrmk5hPMQCESBDZgtca2GNwcP7lvjzDJXMS9jKgLqNBZFUSYsb2g%253D%253D%3Fwidth%3D250&w=640&q=75"
                        title="Bored Ape Yacht Club"
                        subtitle="BAYC"
                        description="The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants acces, a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants acces."
                        onReadMore={() => window.open('https://boredapeyachtclub.com/', '_blank')}
                        onViewAll={() => alert('View All Collections clicked!')}
                    />

                    {/*Items card Section*/}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(3, 1fr)'
                            },
                            gap: 3
                        }}
                    >
                        {stats.map((stat, index) => (
                            <StyledCard key={index} sx={{ width: '100%', height: '100%' }}>
                                <CardContent>
                                    <TitleContainer>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.primary"
                                            sx={{ fontSize: '18px' }}
                                        >
                                            {stat.title}
                                        </Typography>
                                        {stat.icon}
                                    </TitleContainer>

                                    <StatValue>
                                        <img
                                            src="https://marketplace.polycruz.io/eth.svg"
                                            alt="ETH"
                                            style={{ width: '16px', height: '16px' }}
                                        />
                                        <Typography
                                            variant="h6"
                                            component="h6"
                                            sx={{ fontWeight: 'bold' }}
                                        >
                                            {stat.value}
                                        </Typography>
                                    </StatValue>
                                </CardContent>
                            </StyledCard>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default CollectionOverview;