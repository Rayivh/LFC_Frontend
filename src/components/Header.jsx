import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomDropdown from "./HOC/CustomDropdown.jsx";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    MenuItem,
    Box, ListItemText, Drawer, ListItemButton, ListItem, List,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Turn as Hamburger } from 'hamburger-react'

const Header = () => {
    const matches = useMediaQuery('(min-width:1024px)');

    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const aboutToggle = <Button color="inherit">About</Button>;
    const userButton =
        <Button color="inherit">
            <AccountCircleIcon />
            <Typography variant="button" noWrap style={{marginLeft: '5px' }}>Sign In</Typography>
        </Button>

    const responsiveMenu =
            <Drawer anchor={'top'} open={open} onClose={handleToggle} sx={{ width: 'auto'}}>
                <Toolbar />
                    <List>
                        {['Home', 'Staff', 'Mission', 'Register', 'Login'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton component={"a"} href="/">
                                    <ListItemText primary={text} primaryTypographyProps={{ textAlign: 'center' }}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
            </Drawer>


    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="relative" sx={{backgroundColor: '#34675c', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Button color="inherit" component={"a"} href="/">LFC</Button>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {matches &&
                            <div>
                                <CustomDropdown toggleButton={aboutToggle}>
                                    <MenuItem component={"a"} href="/staff">Staff</MenuItem>
                                    <MenuItem component={"a"} href="/mission">Mission</MenuItem>
                                </CustomDropdown>

                                <Button color="inherit" component={"a"} href="/recruitment">Recruitment</Button>
                            </div>
                        }
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {matches &&
                            <React.Fragment>
                                <Button color="inherit" component="a" href="https://lfc.harnessapp.com/wv2/donate?checkout=2370" target="_blank">Donate</Button>
                                <Button color="inherit" component={"a"} href="/contact">Contact</Button>

                                <CustomDropdown toggleButton={userButton}>
                                    <MenuItem component={"a"} href="/register">Register</MenuItem>
                                    <MenuItem component={"a"} href="/login">Login</MenuItem>
                                </CustomDropdown>
                            </React.Fragment>
                        }

                        {!matches &&
                            <Hamburger toggled={open} onToggle={handleToggle}/>
                        }
                    </Box>
                </Toolbar>

            </AppBar>
            {!matches && responsiveMenu}
        </Box>
    );
};

export default Header;