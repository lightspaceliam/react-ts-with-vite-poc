import { FC } from 'react';
import Typography from '@mui/material/Typography';

const NotFound: FC = (): JSX.Element => {
    return (
        <Typography
            variant='h1'
            align='center'
        >
            404 Not Found
        </Typography>
    );
};

export default NotFound;