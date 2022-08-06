import React, { useState } from 'react';
import { CardBox, CardContentLeft, CardContentRight } from './styled.js';
import { Image } from 'antd-mobile';
import Button from "@/common/Button";
import {getLevelName} from '@/utils';
import { t } from 'i18next';
const LevelCard = ({ className, icons,index,item }) => {
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
          <div>{getLevelName(item.star)} {t('l_classEnvironmentalist')}</div>
        </div>
        <div className='price'>
          <span>{item.price}</span>
          <span>USDT</span>
        </div>
      </CardContentLeft>
      <CardContentRight>
        <Button radius="50" content={t('get')} color="#fff" background="#00B578" height={56} width={56} className='rightBox' onClick={handleGetCions} />
      </CardContentRight>
    </CardBox>
  );
}

export default LevelCard
