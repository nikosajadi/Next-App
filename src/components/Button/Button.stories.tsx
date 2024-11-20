/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

export const Button = () => {
  return (
    <button
      css={css`
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: #0056b3;
        }
      `}
    >
      Click Me
    </button>
  );
};

export default {
  title: 'Example/Button',
  component: Button,
};
