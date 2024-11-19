/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '@/configs/theme';

type H3Props = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
};

export default function H3({ children, align = 'left' }: H3Props) {
  return (
      <h3
        css={css`
          text-align: ${align};
          font-weight: ${theme.typography.h3.fontWeight};
          line-height: ${theme.typography.h3.lineHeight};
          margin-top: 0;
          font-size: ${theme.typography.h3.fontSize}em;
        `}
        
      >
        {children}
      </h3>
  );
}
