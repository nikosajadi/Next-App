import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Simple = () => <Button buttonType="primary">Click me</Button>;
export const SimpleWithAll = () => (
  <Button buttonType="secondary" widthAll>
    Click me
  </Button>
);
