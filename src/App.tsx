import { FC } from 'react';
import ApplicationRouter from './routes/ApplicationRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
			<ApplicationRouter />
		</ThemeProvider>
  );
}

export default App;