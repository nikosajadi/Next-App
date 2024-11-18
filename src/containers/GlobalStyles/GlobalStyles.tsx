/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
}
