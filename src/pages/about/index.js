import React,{useRef, useState } from 'react';
import { Image, Swiper, Slider } from 'antd-mobile';
import { AboutBox, AboutContBoxTop, VedioCard, AboutContBox, KnowBox, DesItem } from './styled';
import swiper2 from "@/assets/images/swiper2.jpg";
import company from "@/assets/icons/company.png";
import {
    useHistory,
} from 'react-router-dom';
import Title from "@/common/title";
import TopNav from "@/common/TopNav";
import { LeftOutline  } from 'antd-mobile-icons';
const Aboutus = () => {
    const history = useHistory();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [touched, setTouched] = useState(false);
    let toBack = () => {
        history.goBack();
    }
    let changeContent = (e) => {
        let index=e/25-1;
        setActiveIndex(index);
        swiperRef.current?.swipeTo(index)
    }
    let touchCircle = () => {
        setTouched(!touched)
    }
    return (
        <AboutBox>
            <div className='top'>
                <TopNav back={null}  left={<span style={{ fontWeight: 'bold' }}><LeftOutline onClick={toBack} />About us</span>} right="English"/>
            </div>
            <AboutContBoxTop>
                <VedioCard>
                    <Image
                        src={swiper2}
                        width="100%"
                        height="100%"
                        fit='cover'
                        style={{ borderRadius: 10 }}
                    />
                </VedioCard>
            </AboutContBoxTop>
            <AboutContBox>
                <KnowBox touched={touched}>
                    <Title img={company} name="Know us" weight="bold" right={<div onTouchStart={touchCircle} onTouchEnd={touchCircle}><Slider step={25} value={(activeIndex+1)*25} min={25}  onChange={changeContent} style={{width:40,'--fill-color': '#07B9B9'}}/></div>} />
                    <Swiper
                    direction='horizontal'
                    loop
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={index => {
                        setActiveIndex(index)
                    }}
                >
                    <Swiper.Item>
                        <DesItem>
                            <div className='title'>Company profile</div>
                            <div className='content'>Forests, known as the "lungs" of the earth, are not far from our lives. If deforestation and the disappearance of forests will lead to environmental degradation and the reduction of species, as well as changes in climate and geographical environment. Many times, we can do very little. But we can do something to protect the forest, such as finding some environmental protection products when buying goods, or products with environmental protection certification in the forest.</div>
                        </DesItem>
                    </Swiper.Item>
                    <Swiper.Item>
                        <DesItem>
                            <div className='title'>Company profile</div>
                            <div className='content'>Forests, known as the "lungs" of the earth, are not far from our lives. If deforestation and the disappearance of forests will lead to environmental degradation and the reduction of species, as well as changes in climate and geographical environment. Many times, we can do very little. But we can do something to protect the forest, such as finding some environmental protection products when buying goods, or products with environmental protection certification in the forest.</div>
                        </DesItem>
                    </Swiper.Item>
                    <Swiper.Item>
                        <DesItem>
                            <div className='title'>Company profile</div>
                            <div className='content'>Forests, known as the "lungs" of the earth, are not far from our lives. If deforestation and the disappearance of forests will lead to environmental degradation and the reduction of species, as well as changes in climate and geographical environment. Many times, we can do very little. But we can do something to protect the forest, such as finding some environmental protection products when buying goods, or products with environmental protection certification in the forest.</div>
                        </DesItem>
                    </Swiper.Item>
                    <Swiper.Item>
                        <DesItem>
                            <div className='title'>Company profile</div>
                            <div className='content'>Forests, known as the "lungs" of the earth, are not far from our lives. If deforestation and the disappearance of forests will lead to environmental degradation and the reduction of species, as well as changes in climate and geographical environment. Many times, we can do very little. But we can do something to protect the forest, such as finding some environmental protection products when buying goods, or products with environmental protection certification in the forest.</div>
                        </DesItem>
                    </Swiper.Item>
                </Swiper>
                </KnowBox>
            </AboutContBox>
        </AboutBox>
    )
}


export default Aboutus;