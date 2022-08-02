import React, { useState } from 'react';
import { TitleBox } from './styled.js';
import { Image} from 'antd-mobile';
const Title = ({className,weight,fontSize,right,img,width,height,name,fit}) => {
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <TitleBox className={className} weight={weight} size={fontSize ? fontSize+'px' : 'unset'}>
      <div className='left'>
      <Image
        src={img}
        width={width || 24}
        height={height || 24}
        fit={fit || 'contain'}
      />
      <span>{name}</span>
      </div>
      
      {right ? <span className='right'>{right}</span> :''}
    </TitleBox>
  );
}

export default Title
