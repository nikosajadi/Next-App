/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type InputProps = {
  type: string;
  placeholder?: string;
  [key: string]: any;
};

export default function Input({ type, placeholder, ...props }: InputProps) {
  return <input type={type} placeholder={placeholder} {...props} />;
}
