/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

export default function Button({ type = 'button', children }: ButtonProps) {
  const theme = useTheme(); // Correctly use the useTheme() hook to access the theme

  return (
    <button
      type={type}
      css={css`
        background-color: ${theme.tertiary}; // Correctly accessing theme value
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #007acc;
        }
      `}
    >
      {children}
    </button>
  );
}
