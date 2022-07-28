import React, { useState, useRef } from 'react';
import { NavBar, Input, Image, Space, Swiper } from 'antd-mobile';
import SwiperRef from 'antd-mobile/es/components/swiper';
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
    PioneerCard,
    ForestBox,
    ForestContent,
    SwiperItem,
    ForestItemDes,
    ModalContentBox,
    ModalTopCad,
    ModalContent,
    ModalButton,
    RadiuBox,
    Radiu,
    RadiuInner,
    GrassesImg
} from './styled';
import { BellOutline, TeamOutline } from 'antd-mobile-icons';
import level from "@/assets/icons/level.png";
import about from "@/assets/icons/about.png";
import recharge from "@/assets/icons/recharge.png";
import inivate from "@/assets/icons/inivate.png";
import water from "@/assets/icons/water.png";
import pioneer from "@/assets/icons/pioneer.png";
import ordinary from "@/assets/icons/ordinary.png";
import cactus from "@/assets/icons/cactus.png";
import grass from "@/assets/icons/grass.png";
import forest from "@/assets/icons/forest.png";
import pioneerVip from "@/assets/icons/pioneer-vip.png";
import swiper1 from "@/assets/images/swiper1.jpg";
import swiper2 from "@/assets/images/swiper2.jpg";
import swiper3 from "@/assets/images/swiper3.jpg";
import swiper4 from "@/assets/images/swiper4.jpg";
import grasses from "@/assets/images/grasses.png";
import hecai from "@/assets/images/hecai.png";
import Title from "@/common/title";
import Button from "@/common/Button";
import Modals from "@/common/modals";
import { FloatingBubble } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'
const HomePage = () => {
    const [donateValue, setDonateValue] = useState('');
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [num, setNum] = useState({ value: 0, done: false });
    const [cions, setCions] = useState({ cion: 2356, got: false });
    const [visible, setVisible] = useState(false)
    const icons = [{ key: level, name: 'Level' }, { key: about, name: 'About' }, { key: recharge, name: 'Recharge' }, { key: inivate, name: 'Inivate' }]
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const swiperImgs = [swiper1, swiper2, swiper3, swiper4];
    const ref = useRef(null)
    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <SwiperItem bgImg={swiperImgs[index]} active={swiperIndex == index && 'active'} onClick={() => { ref.current.swipeNext(); console.log(ref.current) }}>
                <span>Forest{index + 1}</span>
                <div><TeamOutline /><span>326</span></div>
            </SwiperItem>
        </Swiper.Item>
    ))
    let getNum = () => {
        let timer = setInterval(() => {
            let newNum = Math.floor(Math.random() * 100);
            setNum({ ...num, value: newNum })
        }, 50);
        let timer2 = setTimeout(() => {

            setNum(value => ({ ...value, done: true }))
            clearInterval(timer);
            clearTimeout(timer2);
        }, 1200);
    }
    let handleGetCions = () => {
        let oldCions = Number(cions.cion)
        oldCions += 10;

        setCions({ cion: oldCions, got: true });
    }
    return (
        <HomeBox>
            <div className='top'>
                <NavBar back={null} left={<span style={{ color: 'white' }}>LOGO</span>} right={<span style={{ color: 'white' }}>English</span>}></NavBar>
            </div>
            <HomeInnerBoxFirst>

                <HomeContentBox>
                    <NoticeBox>
                        <BellOutline />
                        <span>Environmental protection public welfare donation!</span>
                    </NoticeBox>
                    <GetCionsBox got={cions.got}>
                        <div className='leftBox'>
                            <div className='top'>
                                <span className='topLeft'>
                                    <span>{cions.cion}</span>
                                    <span>USDT</span>
                                </span>
                                <span className='topRight'>+10 every day</span>
                                <span className='topRight_got'>Got it today</span>
                            </div>
                            <div className='bot'>Remember to come and receive this every day!</div>
                        </div>
                        <Button disable={cions.got} content="Get" color="#fff" background="#00B578" height={48} width={48} className='rightBox' onClick={handleGetCions}>Get</Button>
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
                                <Button onClick={() => { getNum(); setVisible(true); }} className="btn" content="Play" color="#fff" background="#00B578" width={40} height={24} />
                            </PioneerCard>
                            <PioneerCard bgImg={grass}>
                                <Title img={pioneerVip} width={15} height={15} name="Pioneer lottery" fit="cover" fontSize={13} />
                                <span className='des'>The higher the level of pioneer, the richer the prize.</span>
                                <Button onClick={() => { getNum(); setVisible(true) }} className="btn" content="Play" color="#fff" background="#00B578" width={40} height={24} />
                            </PioneerCard>
                        </PioneerContent>
                    </PioneerBox>

                    <ForestBox>
                        <Title img={forest} name="All forests" weight="bold" right={<><TeamOutline /><span>3276</span></>} />
                        <ForestContent>
                            <Swiper

                                ref={ref}
                                onIndexChange={(index) => setSwiperIndex(index)}
                                stuckAtBoundary={false}
                                trackOffset={0}
                                slideSize={60}
                                defaultIndex={swiperIndex}
                                loop
                            >
                                {items}
                            </Swiper>
                            <ForestItemDes>
                                Forests, known as the "lungs" of the earth, are not far from our lives. If deforestation and the disappearance of forests will lead to environmental degradation and the reduction of species, as well as changes in climate and geographical environment. Many times, we can do very little. But we can do something to protect the forest, such as finding some environmental
                            </ForestItemDes>
                        </ForestContent>
                    </ForestBox>
                </HomeContentBox>
            </HomeInnerBoxFirst>
            <FloatingBubble
                axis='xy'
                magnetic='x'
                style={{
                    '--initial-position-bottom': '68px',
                    '--initial-position-right': '12px',
                    '--edge-distance-bottom': '60px',
                    '--background': 'none',
                    '--border-radius': '0%',
                    '--size': '100px',
                    alignItems: 'end'
                }}
            >
                <RadiuBox>
                    <Image
                        src={grasses}
                        width={40}
                        height={40}
                        fit='cover'
                        className='grassesImg'
                    />
                    <div className='waters'>
                        <Radiu></Radiu>
                        <RadiuInner></RadiuInner>
                    </div>
                </RadiuBox>

            </FloatingBubble>
            <Modals type="action" width={295} height={226} visible={visible}>
                <ModalContentBox finish={num.done}>
                    <Image
                        src={hecai}
                        width={280}
                        height={166}
                        fit='cover'
                        className='hecaiImg'
                    />
                    <ModalTopCad>
                        <span>{
                            num.value

                        }</span><span>USDT</span>
                    </ModalTopCad>
                    <ModalContent>
                        <p>Congratulations on winning the above rewards through the ordinary lottery!!!</p>
                        <p>
                            Use 10u ,you will have the opportunity to get 3-100u.
                        </p>
                    </ModalContent>
                    <ModalButton onClick={() => { setVisible(false); setNum({ ...num, done: false }) }}>Okay</ModalButton>

                </ModalContentBox>
            </Modals>

        </HomeBox>
    )
}


export default HomePage;