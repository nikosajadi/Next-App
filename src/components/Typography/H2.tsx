/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '@/configs/theme';

type H2Props = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
};

export default function H2({ children, align = 'left' }: H2Props) {
  return (
    <h1
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h1.fontWeight};
        line-height: ${theme.typography.h1.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h1.fontSize}em;
      `}
    >
      {children}
    </h1>
  );
}
