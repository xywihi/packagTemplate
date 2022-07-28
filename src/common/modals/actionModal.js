import React, { useState } from 'react';
import { ModalBox } from './styled.js';
import { Button, Mask, Space } from 'antd-mobile'
const ActionModal = ({ content,visible=false }) => {
  
  return (
    <ModalBox>
      <Mask visible={visible} onMaskClick={() => setVisible(false)} style={{"--z-index":50}}>
        <div className="overlayContent">{content}</div>
        
      </Mask>
    </ModalBox>
  );
}

export default ActionModal
