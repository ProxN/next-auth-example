import { AppProps } from 'next/app';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles } from '@lib/styles';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={{ ...Theme, colorMode: 'dark' }}>
      <Preflight />
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
