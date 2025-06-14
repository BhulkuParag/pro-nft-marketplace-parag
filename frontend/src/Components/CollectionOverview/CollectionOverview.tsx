import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../header/Header';
import Sidebar from '../header/Sidebar';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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
        </Box>
    );
};

export default CollectionOverview;