import React, { useState } from 'react';
import { NavBar, Input, Image, Space } from 'antd-mobile';
import {
    HomeBox,
    HomeInnerBoxFirst,
    HomeContentBox,
    NoticeBox,
    GetCionsBox,
    IconsTabBox,
    DonationBox,
    DonationContent,
    PioneerBox,
    PioneerContent,
    PioneerCard
} from './styled';
import { BellOutline } from 'antd-mobile-icons';
import level from "@/assets/icons/level.png";
import about from "@/assets/icons/about.png";
import recharge from "@/assets/icons/recharge.png";
import inivate from "@/assets/icons/inivate.png";
import water from "@/assets/icons/water.png";
import pioneer from "@/assets/icons/pioneer.png";
import ordinary from "@/assets/icons/ordinary.png";
import cactus from "@/assets/icons/cactus.png";
import grass from "@/assets/icons/grass.png";
import pioneerVip from "@/assets/icons/pioneer-vip.png";
import Title from "@/common/title/index.js";
import Button from "@/common/Button/index.js";
import { FloatingBubble } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'
const HomePage = () => {
    const [donateValue, setDonateValue] = useState('');
    const icons = [{ key: level, name: 'Level' }, { key: about, name: 'About' }, { key: recharge, name: 'Recharge' }, { key: inivate, name: 'Inivate' }]
    return (
        <HomeBox>
            <HomeInnerBoxFirst>
                <div className='top'>
                    <NavBar back={null} left="LOGO" right="English"></NavBar>
                </div>
                <HomeContentBox>
                    <NoticeBox>
                        <BellOutline />
                        <span>Environmental protection public welfare donation!</span>
                    </NoticeBox>
                    <GetCionsBox>
                        <div className='leftBox'>
                            <div className='top'>
                                <span className='topLeft'>
                                    <span>2356</span>
                                    <span>USDT</span>
                                </span>
                                <span className='topRight'>+10 every day</span>
                            </div>
                            <div className='bot'>Remember to come and receive this every day!</div>
                        </div>
                        <div className='rightBox'>Get</div>
                    </GetCionsBox>
                    <IconsTabBox>
                        <Space block wrap>
                            {icons.map(item => <div className='iconBox' key={item.name}><Image
                                src={item.key}
                                width={64}
                                height={64}
                                fit='cover'
                                style={{ borderRadius: 32 }}
                            /><span className='iconName'>{item.name}</span></div>)}
                        </Space>

                    </IconsTabBox>
                    <DonationBox>
                        <Title img={water} name="Donation area" weight="bold" />
                        <DonationContent>
                            <Input
                                placeholder='Enter your amount'
                                value={donateValue}
                                onChange={val => {
                                    setDonateValue(val)
                                }}

                                className="donationInp"
                            />
                            <Button content="Donate" background="#1AFFB2" height={44} width={86} />
                        </DonationContent>
                    </DonationBox>
                    <PioneerBox>
                        <Title img={pioneer} name="Pioneer Paradise" weight="bold" />
                        <PioneerContent>
                            <PioneerCard bgImg={cactus}>
                                <Title img={ordinary} width={15} height={15} name="Ordinary lottery" fit="cover" fontSize={13} />
                                <span className='des'>Use 10u ,you will have the opportunity to get 3-100u.</span>
                                <Button className="btn" content="Play" color="#fff" background="#00B578" width={40} height={24} />
                            </PioneerCard>
                            <PioneerCard bgImg={grass}>
                                <Title img={pioneerVip} width={15} height={15} name="Pioneer lottery" fit="cover" fontSize={13} />
                                <span className='des'>The higher the level of pioneer, the richer the prize.</span>
                                <Button className="btn" content="Play" color="#fff" background="#00B578" width={40} height={24} />
                            </PioneerCard>
                        </PioneerContent>
                    </PioneerBox>
                </HomeContentBox>
            </HomeInnerBoxFirst>
            <FloatingBubble
                axis='xy'
                magnetic='x'
                style={{
                    '--initial-position-bottom': '68px',
                    '--initial-position-right': '12px',
                    '--edge-distance': '24px',
                }}
            >
                <MessageFill fontSize={32} />
            </FloatingBubble>
        </HomeBox>
    )
}


export default HomePage;