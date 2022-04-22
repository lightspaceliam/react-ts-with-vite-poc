import {
    FC,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from './Navigation';
import {
    APPLICATION_NAME,
    black,
} from '../../configurations/Constants';
import {
    StyledHeader,
    StyledTypographyH6Logo,
} from './styles/header';

const Header: FC = (): JSX.Element => {
    const colour = black;
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = (): void => {
        setOpen(true);
    };
    
    const handleDrawerClose = (): void => {
        setOpen(false);
    };

    return (
        <>
            <StyledHeader
                colour={colour}
                position='sticky'
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <StyledTypographyH6Logo variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to='/'>{APPLICATION_NAME}</Link>
                    </StyledTypographyH6Logo>
                </Toolbar>
            </StyledHeader>
            <Navigation
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
        </>
    );
};

export default Header;