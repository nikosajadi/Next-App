/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from '@/configs/theme';

type H5Props = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
};

export default function H5({ children, align = 'left' }: H5Props) {
  return (
   
      <h5
        css={css`
          text-align: ${align};
          font-weight: ${theme.typography.h5.fontWeight};
          line-height: ${theme.typography.h5.lineHeight};
          margin-top: 0;
          font-size: ${theme.typography.h5.fontSize}em;
        `}
      >
        {children}
      </h5>
    )
  }
