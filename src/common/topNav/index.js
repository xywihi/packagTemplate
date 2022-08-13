import React, { useState } from 'react';
import { TitleBox } from './styled.js';
import { Image, Picker, NavBar } from 'antd-mobile';
import i18n from "i18next";
import { staticDataSlice } from "@/store";
import {connect} from 'react-redux';
const Title = ({ className, back , right, left , type, staticData, handleUpdateData}) => {
  const [showInivate, setShowInivate] = useState(false);
  const [value, setValue] = useState(['M'])
  const handleClick = e => {
    setCurrent(e.key);
  };
  const basicColumns = [
    [
      { label: 'English', value: 'en' },
      { label: 'Portuguese', value: 'pg' },
      { label: 'Spanish', value: 'sp' },
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
      <NavBar back={back} left={left} right={right && <span onClick={handleDo}>{ basicColumns[0].filter(item=>{
       return item.value==staticData?.language
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
    staticData:state.staticData.data
  }
}
const dispatchAction=(dispatch)=>{
  return {
    handleUpdateData:(data)=>dispatch(staticDataSlice.actions.getdata(data)),
    
  }
}
export default connect(getStoreData,dispatchAction)(Title) ;