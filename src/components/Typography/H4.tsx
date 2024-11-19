/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '@/configs/theme';

type H4Props = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
};

export default function H4({ children, align = 'left' }: H4Props) {
  return (
    <h4
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.h4.fontWeight};
        line-height: ${theme.typography.h4.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h4.fontSize}em;
      `}
    >
      {children}
    </h4>
  )
}

