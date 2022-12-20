import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import customTheme from '../styles/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
