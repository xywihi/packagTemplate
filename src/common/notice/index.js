import React, { useState,useEffect } from 'react';
import { NoticeBox, NoticeItem } from './styled.js';
import { BellOutline } from 'antd-mobile-icons';
const Notice = ({ className, notices }) => {
  console.log(className)
  const [currentNum, setCurrentNum] = useState(0);
  const handleClick = e => {
    setCurrent(e.key);
  };
  let changeNum=()=>{
    let currentNum2=currentNum;
    return ()=>{
      if(currentNum2<notices.length-1){
        let newNum=currentNum2+1
        currentNum2=newNum;
        setCurrentNum((value)=>{
          return newNum
        })
      }else{
        currentNum2=0;
        setCurrentNum(0)
      }
    }
  }
  let getNum=changeNum();
  useEffect(()=>{
    let timer=setInterval(() => {
      console.log(currentNum,notices.length-1)
      getNum()
    }, 3000);
    return ()=>{ clearInterval(timer)}
  },[])
  
  return (
    <NoticeBox >
      <BellOutline className={className}/>
        <div className='contentBox'>
          {notices.map((item,index)=><NoticeItem key={item} toMove={currentNum==index}>{item}</NoticeItem>)}
        </div>
    </NoticeBox>
  );
}

export default Notice
