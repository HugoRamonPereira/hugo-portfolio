import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    purple: {
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
    }
  }
});

export default customTheme;
