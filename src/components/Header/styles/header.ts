import styled from '@mui/material/styles/styled';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { white } from '../../../configurations/Constants';

interface StyledAppBarProps extends AppBarProps {
    colour: string;
}

export const StyledHeader = styled(AppBar, {
    shouldForwardProp: (prop: PropertyKey) => prop !== 'colour',
})<StyledAppBarProps>(({ colour, theme }) => ({
    ...({
        backgroundColor: colour,
    }),
}));

export const StyledTypographyH6Logo = styled(Typography)({
    '&.MuiTypography-h6': {
        '& > a': {
            color: white,
            textDecoration: 'none',
        }
    },
});