import React, { useState,useEffect } from 'react';
import { ButtonBox } from './styled.js';
import { Image } from 'antd-mobile';
import ActionModal from './actionModal.js';
const Modals = ({ type,visible, children }) => {
  const [current, setCurrent] = useState('mail');
  const handleClick = e => {
    setCurrent(e.key);
  };
  useEffect(()=>{
    console.log('sahhhhhhhhhh')
  },[visible])
  console.log(visible)
  let getModal=(type)=>{
    switch (type) {
      case 'action':
        return <ActionModal content={children} visible={visible}/>
    
      default:
        return <></>
    }
  }
  return (
    <>
      {getModal(type)}
    </>
  );
}

export default Modals
