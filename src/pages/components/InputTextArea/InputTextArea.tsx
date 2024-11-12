/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Input from '../Input/Input';

type InputTextAreaProps = {
  placeholder?: string;
};

export default function InputTextArea({ placeholder }: InputTextAreaProps) {
  return (
    <div
      css={css`
        width: 100%;
        margin-bottom: 1rem;
      `}
    >
      <Input type="text" placeholder={placeholder} />
    </div>
  );
}
