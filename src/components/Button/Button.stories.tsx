import React from 'react';
import Button from './Button';


export default { title: 'Button' };

export const simple = () => <Button>Click me</Button>;

export const simpleWidthAll = () => <Button widthAll>Click me</Button>; // Pass `widthAll`
