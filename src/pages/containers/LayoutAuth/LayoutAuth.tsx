/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

type LayoutAuthProps = {
  children: ReactNode;
};

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        max-width: 400px;
        margin: auto;
        text-align: center;
      `}
    >
      {children}
    </div>
  );
}
