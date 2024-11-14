import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from '../configs/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
