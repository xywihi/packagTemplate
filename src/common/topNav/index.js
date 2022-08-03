import React, { useState } from 'react';
import { TitleBox } from './styled.js';
import { Image, Picker, NavBar } from 'antd-mobile';
const Title = ({ className, back , right, left , type }) => {
  const [showInivate, setShowInivate] = useState(false);
  const [value, setValue] = useState(['M'])
  const handleClick = e => {
    setCurrent(e.key);
  };
  const basicColumns = [
    [
      { label: 'English', value: 'en' },
      { label: 'Frence', value: 'fr' },
      { label: '简体中文', value: 'jz' },
      { label: '繁体中文', value: 'fz' },
    ]
  ]
  let handleDo=()=>{
    if(type==='set'){
      
    }else{
      setShowInivate(true)
    }
  }
  return (
    <>
      <NavBar back={back} left={left} right={<span onClick={handleDo}>{basicColumns[0].filter(item=>{
        console.log(item,value[0],'ooooooooo')
       return item.value==value[0]
      })[0]?.label || 'English'}</span>}></NavBar>
      <Picker
        columns={basicColumns}
        visible={showInivate}
        onClose={() => {
          setShowInivate(false)
        }}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      />
    </>
  );
}

export default Title
