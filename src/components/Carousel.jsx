import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Box, Typography, Button, Grid, alpha} from '@mui/material';

const backgroundImages = [
    '/img/teamwork_img1.jpg',
    '/img/teamwork_img2.jpg',
    '/img/teamwork_img3.jpg',
];

const ImageCarousel = () => {
    return (
        <Box sx={{
            position: 'relative',
            height: 500,
        }}>
            <Carousel
                animation="slide"
                duration={750}
                indicators={true}
                navButtonsAlwaysInvisible={true}
                autoPlay={true}
                cycleNavigation={true}

            >
                {backgroundImages.map((image, i) => (
                    <Paper key={i} sx={{
                        height: 500,
                        backgroundPosition: 'center 15%',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                    }}/>
                ))}
            </Carousel>

            {/* Gradient Overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, black, transparent)',
                zIndex: 1,
            }}/>


            <Grid container sx={{
                width: '85%',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',

                flexWrap: 'wrap',
                rowGap: '10px',

                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',

                zIndex: 2,
            }}>
                {/* Left Box */}
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',

                }}>
                    <Typography variant="h1" sx={{textAlign: { xs: 'center', md: 'left' } }}>Loaves</Typography>
                    <Typography variant="h1" sx={{textAlign: { xs: 'center', md: 'left' } }}>Fishes</Typography>
                    <Typography variant="h1" sx={{textAlign: { xs: 'center', md: 'left' } }}>Computers</Typography>
                    <Typography variant="subtitle1" sx={{textAlign: { xs: 'center', md: 'left'} }}>A proud non-profit organization!</Typography>
                </Grid>
                {/* Right Box */}
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        border: '4px solid #fff',
                        background: alpha('#000000', 0.6),
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography variant="h2" component="h2" sx={{ color: '#fff', textAlign: 'center' }}>BECOME A VOLUNTEER!</Typography>
                        <Button variant="contained" href="/mission" sx={{ width: '100%', backgroundColor:'#86ac41', mt: 2 }}>LEARN MORE</Button>

                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default ImageCarousel;
