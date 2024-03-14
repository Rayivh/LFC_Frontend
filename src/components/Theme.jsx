import { createTheme } from '@mui/material/styles';
import "@fontsource/open-sans";
import '@fontsource/shadows-into-light';

const theme = createTheme({
    palette: {
        primary: {
            main: '#262626',
        },
        secondary: {
            main: '#19857b',
        },
    },
    typography: {
        h1: {
            color: '#FFFFFF',
            fontSize: '5rem',
            fontStyle: 'italic',
            letterSpacing: '2px',
            fontWeight: 'bold',
            fontFamily: 'Shadows Into Light',
            lineHeight: 1.1,
        },
        subtitle1: {
            color: '#FFFFFF',
            fontSize: '1.2em',
            fontFamily: 'Open Sans',
        },
        h2: {
            fontSize: '1.5em',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            letterSpacing: '1px',
        },
        h3: {
            color: '#262626',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            fontSize: '1.17em',
            lineHeight: 1.7
        },
        h4: {
            fontFamily: 'Open Sans',
            fontStyle: 'italic',
            fontSize: '1.5em',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: 'Open Sans',
            fontStyle: 'italic',
            fontWeight: '300',
        },
        body1: {
            color: '#262626',
            fontFamily: 'Open Sans',
            fontSize: '0.85em',
            lineHeight: 1.7
        },
        body2: {
            color: '#262626',
            fontFamily: 'Open Sans',
            fontSize: '0.85em',
            lineHeight: 2.0
        },
        icon:{
            color: "#030",
            padding:1.5,
            border: 1,
            borderRadius: 50
        }
        // allVariants: {
        //     fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
        //     fontSize: '0.75rem',
        //     lineHeight: 2, // This applies the line height to all typography variants
        // },

    }

});

export default theme
