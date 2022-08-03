import React from 'react';
import { TabBox } from './styled.js';
import { Popup, Tabs, Image } from 'antd-mobile';
import QRCode from "@/assets/images/QRCode.png";
import linkImg from "@/assets/images/linkImg.png";
import Button from "@/common/Button";
const Inivite = ({ className, showInivate,setShowInivate }) => {
  console.log(className)
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <Popup
                visible={showInivate}
                onMaskClick={() => {
                    setShowInivate(false)
                }}
                bodyStyle={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    minHeight: '40vh',
                }}
            >
                <TabBox>
                    <Tabs style={{ '--active-title-color': '#333', '--active-line-height': '0' }}>
                        <Tabs.Tab title='Password' key='password'>
                            <div className='linkBox'>
                                <Image
                                    src={linkImg}
                                    width={280}
                                    height={166}
                                    fit='contain'
                                    className='hecaiImg'
                                />
                                <div className='link'>https://teuwcw.com/dfuwq/56wq82</div>
                                <div className='des'>Copy this link and share it with your friends.</div>
                                <Button content="Copy" color="#fff" radius="10" background="#00B578" height={44} width={86} />
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab title='Verification' key='verification'>
                            <div className='QRCodeBox'>
                                <Image
                                    src={QRCode}
                                    width={280}
                                    height={166}
                                    fit='contain'
                                    className='hecaiImg'
                                />
                                <div className='des'>Invite friends by scanning QR code.</div>
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </TabBox>

            </Popup>
  );
}

export default Inivite
