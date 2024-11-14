/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Input from '../Input/Input';

type InputPasswordProps = {
  placeholder?: string;
};

export default function InputPassword({ placeholder = 'Enter your password' }: InputPasswordProps) {
  return (
    <div
      css={css`
        width: 100%;
        margin-bottom: 1rem;
      `}
    >
      <Input type="password" placeholder={placeholder} />
    </div>
  );
}
