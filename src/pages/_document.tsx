import { Html, Head, Main, NextScript } from 'next/document'
import GlobalStyles from '@/containers/GlobalStyles/GlobalStyles';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <GlobalStyles />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
