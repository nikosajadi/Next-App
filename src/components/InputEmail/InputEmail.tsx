
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Input from '../Input/Input';

type InputEmailProps = {
  placeholder?: string;
};

export default function InputEmail({ placeholder = 'Enter your email' }: InputEmailProps) {
  return (
    <div css={css`width: 100%; margin-bottom: 1rem;`}>
      <Input type="email" placeholder={placeholder} />
    </div>
  );
}
