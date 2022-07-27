import React, { useState } from 'react';
import { TitleBox } from './styled.js';
import { Image} from 'antd-mobile';
const Title = (props) => {
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <TitleBox weight={props.weight} size={props.fontSize}>
      <Image
        src={props.img}
        width={props.width || 24}
        height={props.height || 24}
        fit={props.fit || 'contain'}
      />
      <span>{props.name}</span>
    </TitleBox>
  );
}

export default Title
