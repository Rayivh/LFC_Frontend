import React from 'react';
import {Box, Typography, Link, Grid, ListItem, ListItemText, List, Container} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import StyledIcon from "./HOC/StyledIcon.jsx";

const Footer = () => {
    const address = [
        "938 S Main St.",
        "Salinas, CA 93901",
        "(831) 393-9260",
        "Open: Tuesday - Saturday",
        "Hours: 10AM - 4PM"
    ];

    const quickLinks = [
        { title: 'Donate Money', url: 'https://lfc.harnessapp.com/wv2/donate?checkout=2370' },
        { title: 'Donate Computers', url: 'https://www.loavesfishescomputers.org/donate.html' },
        { title: 'LFC Website', url: 'https://www.loavesfishescomputers.org' }
    ];

    const infoLinks = [
        { title: 'Staff', url: '/staff' },
        { title: 'Mission', url: '/mission' },
        { title: 'Recruitment', url: 'recruitment' }
    ];

    const ListSection = ({ items, isLink = false }) => (
        <List>
            {items.map((item, index) => (
                <ListItem key={index} disablePadding>
                    {isLink ? (
                        <Link href={item.url} variant="body2" underline="none">{item.title}</Link>
                    ) : (
                        <ListItemText variant="body2" primary={item}/>
                    )}
                </ListItem>
            ))}
        </List>
    );

    return (
        <Box mt={3}>
            <Box sx={{bgcolor: 'whitesmoke', p: 8}} mt={3}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="space-between">
                        {/* About Section */}
                        <Grid item md={6}>
                            <Typography variant="h3">ABOUT</Typography>
                            <Typography variant="body1">
                                LFC enables individuals to reach their full potential by providing low-cost computers and computer literacy classes to local low-income families, while providing volunteers the opportunity to learn and explore technology through their service to the community.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 3, mt: 1 }}>
                                {/* Social Media Links */}
                                <StyledIcon href={"https://www.youtube.com/user/LoavesFishesComputer"} icon={YouTubeIcon}/>
                                <StyledIcon href={"https://www.facebook.com/loavesfishescomputers"} icon={FacebookRoundedIcon}/>
                                <StyledIcon href={"https://www.instagram.com/lfc.salinasca/"} icon={InstagramIcon}/>
                                <StyledIcon href={"https://www.linkedin.com/company/loaves-fishes-&-computers-inc-/about/"} icon={LinkedInIcon}/>
                            </Box>
                        </Grid>

                        {/* Contact Section */}
                        <Grid item >
                            <Typography variant="h3">CONTACT</Typography>
                            <Box component="address">
                                <ListSection items={address}/>
                            </Box>
                        </Grid>

                        {/* Info Section */}
                        <Grid item>
                            <Typography variant="h3">INFO</Typography>
                            <ListSection items={infoLinks} isLink={true}/>
                        </Grid>

                        {/* Quick Links Section */}
                        <Grid item >
                            <Typography variant="h3">QUICK LINKS</Typography>
                            <ListSection items={quickLinks} isLink={true}/>
                        </Grid>
                    </Grid>

                </Container>
            </Box>

            {/* Extra Bottom Footer */}
            <Box sx={{ bgcolor: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', mt: 2 }}>
                <Typography variant="body2">© LFC. All Rights Reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
