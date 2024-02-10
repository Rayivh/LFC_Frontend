import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {ThemeProvider} from "@mui/material";
import theme from './Theme.jsx'; // Import the theme object you created

const Layout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer/>
            </ThemeProvider>
        </>
    );
};
export default Layout;