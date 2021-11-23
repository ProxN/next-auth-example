import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
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
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </ThemeProvider>
  );
};

export default App;
