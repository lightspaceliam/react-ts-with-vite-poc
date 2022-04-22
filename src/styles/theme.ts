import createTheme from '@mui/material/styles/createTheme';
import { black } from '../configurations/Constants';

const theme = createTheme({
    components: {
        // Name of the component
        MuiAppBar: {
            styleOverrides: {
                // The default props to change
                root: {
                    boxShadow: 'none',
                    backgroundColor: black,
                }
            },
        },
    },
    typography: {
        //  TODO: ...
        h1: { },
        h2: { },
        body1: { },
    },
});

export default theme;