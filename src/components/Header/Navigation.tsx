import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import People from '@mui/icons-material/People';
import Layers from '@mui/icons-material/Layers';
import Home from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
    drawerWidth,
    StyledDrawer,
    DrawerHeader,
} from './styles/navigation';

interface NavigationProps {
    open: boolean;
    handleDrawerClose: () => void;
}
const Navigation: FC<NavigationProps> = ({
    open,
    handleDrawerClose,
}): JSX.Element => {
    const theme = useTheme();
    
    return (
        <StyledDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem button
                    component={Link}
                    to={'/'}
                    onClick={handleDrawerClose}
                >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/members'
                    onClick={handleDrawerClose}
                >
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary='Members' />
                </ListItem>
            </List>
        </StyledDrawer>
    );
};

export default Navigation;