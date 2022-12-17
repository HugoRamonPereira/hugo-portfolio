import type { AppProps } from 'next/app';
import { Saira } from '@next/font/google';
import { Sidebar } from '../components/Sidebar';
import { ChakraProvider } from '@chakra-ui/react';

const saira = Saira({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={saira.className}>
        <Component {...pageProps} />
        <Sidebar />
      </main>
    </ChakraProvider>
  );
}
