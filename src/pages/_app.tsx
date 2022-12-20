import type { AppProps } from 'next/app';
import { Saira } from '@next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../components/Home';
import customTheme from '../styles/theme';
import About from '../components/About';

const saira = Saira({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={customTheme}>
      <main className={saira.className}>
        <Component {...pageProps} />
        <Home />
        <About />
      </main>
    </ChakraProvider>
  );
}
