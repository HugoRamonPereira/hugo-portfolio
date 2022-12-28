import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';
import Home from './home';
// import About from './about';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <Home />
      {/* <About /> */}
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
