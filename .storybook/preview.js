import { css, jsx } from '@emotion/react'; 
import { ThemeProvider } from '@emotion/react'; 
import theme from '../src/configs/theme';


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

export const tags = ['autodocs'];

