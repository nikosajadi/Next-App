/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type InputProps = {
  type?: string;
  placeholder?: string;
};


export default function Input({ type = 'text', placeholder }: InputProps) {
  return (
    <div
      css={css`
       width: 100%;
        margin-bottom: 1rem;
      `}
    >
      <input type='{type}' placeholder='{placeholder}'/>
    </div>
  );
}
