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
import TopNav from '@/common/TopNav';
import { getTeamsDetail } from '@/api';
import Skeletons from "@/common/skeletons";
const Successors = () => {
    const history = useHistory();
    const avtors = [
        avtor1, avtor2, avtor3, avtor4, avtor5, avtor6
    ];
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0);
    const [detailData, setDetailData] = useState();
    const [tabItems, setTabItems] = useState([]);
    useEffect(() => {
        getTeamsDetail().then(res => {
            console.log(res, 'iyyyyyyyyyyyyyy')
            let newTabItems = Object.keys(res).map(item => {
                switch (item) {
                    case 1:

                        return ({ key: item + 'st', title: item + 'st level' })
                    case 2:

                        return ({ key: item + 'nd', title: item + 'nd level' })
                    case 3:

                        return ({ key: item + 'st', title: item + 'st level' })

                    default:
                        return ({ key: item + 'th', title: item + 'th level' })
                }

            })
            setTabItems(newTabItems);
            setDetailData(res);
            // console.log(history.location.state.level,'uuuuuuuuu')
            let currentIndex=history.location.state.level-1;
            setActiveIndex(currentIndex);
            swiperRef.current?.swipeTo(currentIndex);
        })
    }, []);
    let toBack = () => {
        history.goBack();
    }
    return (
        detailData ?
            <SuccessorsBox>
                <div className='top'>
                    <TopNav back={null} left={<span style={{ fontWeight: 'bold' }}><LeftOutline onClick={toBack} />Successor</span>} right="English" />
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
                        {tabItems.map(element => (
                            <Swiper.Item key={element.key}>
                                <SuccessorCard>
                                    <div className='title'>
                                        <span>{element.key} level successor</span>
                                        <div><span>{detailData[activeIndex + 1].length}</span><span><TeamOutline /></span></div>
                                    </div>
                                    <div className='avtors'>
                                        {detailData[activeIndex + 1].map((item, index) => <Image
                                            src={item.user.avatar}
                                            width={30}
                                            height={30}
                                            fit='cover'
                                            key={item.user_id}
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
                                    {detailData[activeIndex + 1].map(item => (<RankingTeamItem key={item.user_id}>
                                        <div className='id'><span>{item.user.phone}</span></div>
                                        <div className="money">{item.earnings}</div>
                                    </RankingTeamItem>))}
                                </RankingTeam>
                            </Swiper.Item>
                        ))}

                    </Swiper>
                </TabBox>
            </SuccessorsBox> :
            <Skeletons/>
    )
}


export default Successors;