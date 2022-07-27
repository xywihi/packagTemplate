import React, { useState } from 'react';
import { ButtonBox } from './styled.js';
import { Image } from 'antd-mobile';
const Button = ({ className,background, width, height, color, size, content }) => {
  console.log(className)
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <ButtonBox className={className} background={background ? background : '#fff'} width={width ? width + 'px' : '42px'} height={height ? height + 'px' : '42px'} color={color ? color : '#333'} size={size ? size + 'px' : '14px'}
    >
      {content}
    </ButtonBox>
  );
}

export default Button
