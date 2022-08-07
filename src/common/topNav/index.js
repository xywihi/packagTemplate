import React, { useState } from 'react';
import { TitleBox } from './styled.js';
import { Image, Picker, NavBar } from 'antd-mobile';
import i18n from "i18next";
import { staticDataSlice } from "@/store";
import {connect} from 'react-redux';
const Title = ({ className, back , right, left , type,handleUpdateData}) => {
  const [showInivate, setShowInivate] = useState(false);
  const [value, setValue] = useState(['M'])
  const handleClick = e => {
    setCurrent(e.key);
  };
  const basicColumns = [
    [
      { label: 'English', value: 'en' },
      { label: '简体中文', value: 'zh' },
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
      <NavBar back={back} left={left} right={right && <span onClick={handleDo}>{basicColumns[0].filter(item=>{
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
          i18n.changeLanguage(v);
          setValue(v);
          handleUpdateData({language:v[0]})
        }}
      />
    </>
  );
}

const getStoreData=(state)=>{
  return {
    userInfo:state.counter.userInfo,
  }
}
const dispatchAction=(dispatch)=>{
  return {
    handleUpdateData:(data)=>dispatch(staticDataSlice.actions.getdata(data)),
    
  }
}
export default connect(getStoreData,dispatchAction)(Title) ;