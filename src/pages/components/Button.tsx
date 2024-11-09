/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

export default function Button({ type = 'button', children }: ButtonProps) {
  return (
    <button
      type={type}
      css={css`
        background-color: #1e90ff;
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
