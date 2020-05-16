import '../styles/styles.scss';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import { CssBaseline } from '@material-ui/core';

const MyApp = ({ Component, pageProps }) => {
  const [light, setLight] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: light ? 'light' : 'dark',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} setLight={setLight} light={light} />
    </ThemeProvider>
  );
};

export default MyApp;
