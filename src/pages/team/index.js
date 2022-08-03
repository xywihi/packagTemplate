import React, { useState } from 'react';
import { Image, ProgressBar } from 'antd-mobile';
import { TeamsBox, TeamsContBox, TeamsContBoxTop, LevelCard, TeamBox, CurrentSuccessors, RankingTeam, SuccessorsList, RankingTeamItem,  } from './styled';
import Title from "@/common/title";
import Button from "@/common/Button";
import TopNav from "@/common/TopNav";
import Inivite from "@/common/inivate";
import { TeamOutline } from 'antd-mobile-icons'
import QRCode from "@/assets/images/QRCode.png";
import level4 from "@/assets/icons/level4.png";
import level5 from "@/assets/icons/level5.png";
import team from "@/assets/icons/team.png";
import level4Big from "@/assets/images/level4Big.png";
import avtor from "@/assets/images/avtor.png";
import {
    useHistory,
  } from 'react-router-dom';
const TeamsPage = () => {
    const [showInivate, setShowInivate] = useState(false);
    const earnings = [
        { id: 'Bejunue', money: '5428.00'},
        { id: 'Jack', money: '3223.00'},
        { id: 'Tom', money: '1463.00'},
    ];
    const history = useHistory();
    let toSuccessorList=(level)=>{
        history.push('/team/list',{level})
    }
    return (
        <TeamsBox>
            <div className='top'>
                <TopNav back={null} left={<span>LOGO</span>}  right="English"/>
            </div>
            <TeamsContBoxTop>
                <Image
                    src={avtor}
                    width={50}
                    height={50}
                    fit='cover'
                    style={{ borderRadius: 50 }}
                />
                <div className='userInf'>
                    <div>Time of joined: March,1,2020</div>
                    <div>All Earnings: 21456.00 USDT≈MYR0.00</div>
                </div>
            </TeamsContBoxTop>
            <TeamsContBox>
                <LevelCard>
                    <div className="topCont">
                        <div>
                            <div>
                                <span className='count'>+12</span>
                                <span >people</span>
                            </div>
                            <div className='des'>New quantity in the latest month</div>

                        </div>
                        <Image
                            src={level4Big}
                            width={80}
                            height={80}
                            fit='cover'
                        />

                    </div>
                    <div>
                        <div className='levelIcons'>
                            <Image
                                src={level4}
                                width={20}
                                height={20}
                                fit='cover'
                            />
                            <Image
                                src={level5}
                                width={20}
                                height={20}
                                fit='cover'
                            />
                        </div>
                        <ProgressBar
                            percent={50}
                            style={{
                                '--track-color': '#00a9b540',
                                '--fill-color': '#00a9b5',
                                '--track-width': '4px',
                            }}
                        />
                        <div className='levelCount'>
                            <span>500</span>
                            <span>640</span>
                        </div>
                    </div>
                </LevelCard>
                <TeamBox>
                    <Title img={team} name="My team" weight="bold" />
                    <CurrentSuccessors>
                        <div>
                            <div className='title'>Current successors</div>
                            <div className='count'><span>513</span><span>people</span></div>
                        </div>
                        <Button onClick={() => setShowInivate(true)} radius="10" size="18" content="Invitation" color="#fff" background="#00B578" height={40} width={90} className='rightBox' />
                    </CurrentSuccessors>
                    <RankingTeam >
                        <RankingTeamItem style={{ marginBottom: "10px" }}>
                            <span>Ranking of Team </span>
                            <span style={{ color: "#00B578" }}>See more</span>
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
                    <SuccessorsList>
                            <div onClick={()=>toSuccessorList('first')}>
                                <span>1st level successor</span>
                                <div><span>367</span><TeamOutline /></div>
                            </div>
                            <div>
                                <span>2nd level successor</span>
                                <div><span>146</span><TeamOutline /></div>
                            </div>
                    </SuccessorsList>
                </TeamBox>
                <div className="noMore">No more successors </div>
            </TeamsContBox>
            <Inivite showInivate={showInivate} setShowInivate={setShowInivate}/>
        </TeamsBox>
    )
}


export default TeamsPage;