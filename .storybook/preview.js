import { css, jsx } from '@emotion/react'; // Emotion imports
import { ThemeProvider } from '@emotion/react'; // Use Emotion's modern ThemeProvider
import theme from '../configs/theme';


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          max-width: 600px;
          display: flex;
          margin: 20px auto;
          direction: rtl;
        `}
      >
        {/* <GlobalStyles />
        <Story /> */}
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  docs: {
    autodocs: true, // Enable autodocs for your stories
  },
};

