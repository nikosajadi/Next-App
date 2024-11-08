/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Button() {
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
      Click Me
    </button>
  );
}


