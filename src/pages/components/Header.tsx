/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header
      css={css`
        background-color: #007acc;
        color: white;
        padding: 10px;
        text-align: center;
      `}
    >
      {children}
    </header>
  );
}
