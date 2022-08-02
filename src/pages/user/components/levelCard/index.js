import React, { useState } from 'react';
import { CardBox, CardContentLeft, CardContentRight } from './styled.js';
import { Image } from 'antd-mobile';
import Button from "@/common/Button";
const LevelCard = ({ className, icons,index }) => {
  let handleGetCions = () => {
    console.log('去支付')
  }
  return (
    <CardBox >
      <CardContentLeft>
        <div>
          <div class="icons">{icons.map((item,index) => <Image
            src={item}
            width={21}
            height={21}
            fit='cover'
            key={index}
          />)}</div>
          <div>1st class environmentalist</div>
        </div>
        <div className='price'>
          <span>{(index+1)*100}</span>
          <span>USDT</span>
        </div>
      </CardContentLeft>
      <CardContentRight>
        <Button content="Get" color="#fff" background="#00B578" height={56} width={56} className='rightBox' onClick={handleGetCions} />
      </CardContentRight>
    </CardBox>
  );
}

export default LevelCard
