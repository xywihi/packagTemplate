import React, { useState } from 'react';
import { ButtonBox } from './styled.js';
const Button = ({ className, type="button", background, width, height, color, size, radius, content,disable, onClick }) => {
  console.log(className)
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <ButtonBox disable={disable} radius={radius} onClick={onClick} className={className} background={background ? background : '#fff'} width={width ? width + 'px' : '42px'} height={height ? height + 'px' : '42px'} color={color ? color : '#333'} size={size ? size + 'px' : '14px'}
    >
      <button type={type}>{content}</button>
      
    </ButtonBox>
  );
}

export default Button
