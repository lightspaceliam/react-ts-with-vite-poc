import {
    FC,
    ReactNode,
} from 'react';
import Container from '@mui/material/Container';
import Header from '../Header/Header';

interface LayoutProps {
    children: ReactNode;
}

const AnonymousLayout: FC<LayoutProps> = ({
    children,
}): JSX.Element => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default AnonymousLayout;