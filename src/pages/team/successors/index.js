import React, { useState, useEffect, useRef } from 'react';
import { Image, NavBar, Tabs, Swiper } from 'antd-mobile';
import { TeamsBox, TabBox, SuccessorsBox, SuccessorCard, RankingTeam, RankingTeamItem } from './styled';
import avtor from "@/assets/images/avtor.png";
import avtor1 from "@/assets/images/avtor1.png";
import avtor2 from "@/assets/images/avtor2.png";
import avtor3 from "@/assets/images/avtor3.png";
import avtor4 from "@/assets/images/avtor4.png";
import avtor5 from "@/assets/images/avtor5.png";
import avtor6 from "@/assets/images/avtor6.png";
import { LeftOutline, TeamOutline } from 'antd-mobile-icons';
import {
    useHistory,
} from 'react-router-dom';
import TopNav from '@/common/TopNav'
const Successors = () => {
    const history = useHistory();
    const avtors = [
        avtor1, avtor2, avtor3, avtor4, avtor5, avtor6
    ];
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0);
    const tabItems = [
        { key: '1st', title: '1st level' },
        { key: '2nd', title: '2nd level' },
        { key: '3st', title: '3st level' },
        { key: '4th', title: '4th level' },
    ];
    const earnings = [
        { id: 'Bejunue', money: '5428.00'},
        { id: 'Jack', money: '3223.00'},
        { id: 'Tom', money: '1463.00'},
    ];
    useEffect(() => {
        console.log(history.location.state, 'level')
    }, []);
    let toBack = () => {
        history.goBack();
    }
    return (
        <SuccessorsBox>
            <div className='top'>
                <TopNav back={null}  left={<span style={{ fontWeight: 'bold' }}><LeftOutline onClick={toBack} />Successor</span>}  right="English"/>
            </div>
            <TabBox>
                <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={key => {
                        const index = tabItems.findIndex(item => item.key === key)
                        setActiveIndex(index)
                        swiperRef.current?.swipeTo(index)
                    }}
                    style={{ '--active-title-color': '#333', '--active-line-height': '0' }}>
                    {tabItems.map(item => (
                        <Tabs.Tab title={item.title} key={item.key} />
                    ))}

                </Tabs>
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
                        <SuccessorCard>
                            <div className='title'>
                                <span>1st level successor</span>
                                <div><span>367</span><span><TeamOutline /></span></div>
                            </div>
                            <div className='avtors'>
                                {avtors.map((item, index) => <Image
                                    src={item}
                                    width={30}
                                    height={30}
                                    fit='cover'
                                    key={index}
                                    style={{ borderRadius: 50 }}
                                />)}
                            </div>
                        </SuccessorCard>
                    </Swiper.Item>
                    <Swiper.Item>
                        <SuccessorCard>
                            <div className='title'>
                                <span>2st level successor</span>
                                <div><span>167</span><span><TeamOutline /></span></div>
                            </div>
                            <div className='avtors'>
                                {avtors.map((item, index) => <Image
                                    src={item}
                                    width={30}
                                    height={30}
                                    fit='cover'
                                    key={index}
                                    style={{ borderRadius: 50 }}
                                />)}
                            </div>
                        </SuccessorCard>
                    </Swiper.Item>
                    <Swiper.Item>
                        <SuccessorCard>
                            <div className='title'>
                                <span>3st level successor</span>
                                <div><span>37</span><span><TeamOutline /></span></div>
                            </div>
                            <div className='avtors'>
                                {avtors.map((item, index) => <Image
                                    src={item}
                                    width={30}
                                    height={30}
                                    fit='cover'
                                    key={index}
                                    style={{ borderRadius: 50 }}
                                />)}
                            </div>
                        </SuccessorCard>
                    </Swiper.Item>
                    <Swiper.Item>
                        <SuccessorCard>
                            <div className='title'>
                                <span>4st level successor</span>
                                <div><span>17</span><span><TeamOutline /></span></div>
                            </div>
                            <div className='avtors'>
                                {avtors.map((item, index) => <Image
                                    src={item}
                                    width={30}
                                    height={30}
                                    fit='cover'
                                    key={index}
                                    style={{ borderRadius: 50 }}
                                />)}
                            </div>
                        </SuccessorCard>
                        <RankingTeam >
                            <RankingTeamItem style={{ marginBottom: "10px" }}>
                                <span style={{ fontWeight: "bold" }}>Ranking of Team </span>
                            </RankingTeamItem>
                            <RankingTeamItem style={{ color: "#B58E0F" }}>
                                <span>ID</span>
                                <span>Earnings</span>
                            </RankingTeamItem>
                            {earnings.map(item => (<RankingTeamItem key={item.id}>
                                <div className='id'><span>{item.id}</span></div>
                                <div className="money">{item.money}</div>
                            </RankingTeamItem>))}
                        </RankingTeam>
                    </Swiper.Item>
                </Swiper>
            </TabBox>
        </SuccessorsBox>
    )
}


export default Successors;