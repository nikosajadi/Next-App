import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from '../configs/theme';
import GlobalStyles from '@/containers/GlobalStyles/GlobalStyles';



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* Inject global styles */}
      <GlobalStyles />
      {/* Render the page component */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
