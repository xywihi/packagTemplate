import React, { useState } from 'react';
import { IconsBox } from './styled.js';
import { Image } from 'antd-mobile';
import grass_icon1 from "@/assets/icons/grass_icon1.png";
import grass_icon2 from "@/assets/icons/grass_icon2.png";
const LevelIcons = ({ className,level}) => {
  const cards = [
    [grass_icon1, grass_icon2, grass_icon2, grass_icon2, grass_icon2],
    [grass_icon1, grass_icon1, grass_icon2, grass_icon2, grass_icon2],
    [grass_icon1, grass_icon1, grass_icon1, grass_icon2, grass_icon2],
    [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon2],
    [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon1],
  ];
  return (
    level ? <IconsBox >
      {cards[level-1].map((item,index) => <Image
            src={item}
            width={21}
            height={21}
            fit='cover'
            key={index}
          />)}
    </IconsBox> : <></>
  );
}

export default LevelIcons
