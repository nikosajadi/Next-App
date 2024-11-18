/** @jsxImportSource @emotion/react */
import theme from '@/configs/theme';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

type FormControl = {
  children: ReactNode;
};

export default function FormControl({ children }: FormControl) {
  return (
    <div
      css={css`
        display: flex;
        padding: ${theme.spaces[3]} 0;
      `}
    >
    <div>{children}</div>  
    </div>
  );
}
