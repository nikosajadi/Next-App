
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Input from '../Input/Input';

type InputPasswordProps = {
  placeholder?: string;
};

export default function InputPassword({ placeholder }: InputPasswordProps) {
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
