/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { Children } from 'react';

export default function Button({children}: {childre: React.ReactNode}) {
  return (
    <button
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


