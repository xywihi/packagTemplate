import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { Image, ProgressBar } from 'antd-mobile';
import { TeamsBox, TeamsContBox, TeamsContBoxTop, LevelCard, TeamBox, CurrentSuccessors, RankingTeam, SuccessorsList, RankingTeamItem, } from './styled';
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
import { getTeams } from '@/api';
import { teamDataSlice } from '@/store';
import Skeletons from "@/common/skeletons";
import { t } from 'i18next';

const TeamsPage = ({teamData, userInfo, handleUpdateData}) => {
    const [showInivate, setShowInivate] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const history = useHistory();
    useEffect(() => {
        getTeams().then(res => {
            handleUpdateData(res)
            setIsFinish(true)
        })
    }, [])
    let toSuccessorList = (level) => {
        history.push('/team/list', { level })
    }
    return (
        teamData ?
            <TeamsBox>
                <div className='top'>
                    <TopNav back={null} left={<span>LOGO</span>} right="English" />
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
                        <div>{t('t_timeJoin')}: {userInfo.created_at.split(' ')[0]}</div>
                        <div>{t('t_allEarn')}: 21456.00 USDT≈MYR0.00</div>
                    </div>
                </TeamsContBoxTop>
                <TeamsContBox>
                    <LevelCard>
                        <div className="topCont">
                            <div>
                                <div>
                                    <span className='count'>+{teamData.y_count}</span>
                                    <span >{t('t_people')}</span>
                                </div>
                                <div className='des'>{t('t_quantity')}</div>

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
                        <Title img={team} name={t('t_team')} weight="bold" />
                        <CurrentSuccessors>
                            <div>
                                <div className='title'>{t('t_successors')}</div>
                                <div className='count'><span>{teamData.total}</span><span>{t('t_people')}</span></div>
                            </div>
                            <Button onClick={() => setShowInivate(true)} radius="10" size="18" content={t('t_invitation')} color="#fff" background="#00B578" height={40} width={90} className='rightBox' />
                        </CurrentSuccessors>
                        <RankingTeam >
                            <RankingTeamItem style={{ marginBottom: "10px" }}>
                                <span style={{ fontWeight:'bold' }}>{t('t_ranking')}</span>
                                <span style={{ color: "#00B578",fontSize:12 }}>{t('t_seeMore')}</span>
                            </RankingTeamItem>
                            <RankingTeamItem style={{ color: "#B58E0F" }}>
                                <span>ID</span>
                                <span>{t('t_earnings')}</span>
                            </RankingTeamItem>
                            {teamData.ranking.map(item => (<RankingTeamItem key={item.user_id}>
                                <div className='id'><span>{item.user.phone}</span></div>
                                <div className="money">{item.total_award}</div>
                            </RankingTeamItem>))}
                        </RankingTeam>
                        <SuccessorsList>
                            {teamData.level_list.map(item => (
                                <div key={item[0].user_id} onClick={() => toSuccessorList(item[0].level)}>
                                    <span>{item[0].level} {t('t_levelSuccessor')}</span>
                                    <div><span>{item.length}</span><TeamOutline /></div>
                                </div>
                            ))}
                        </SuccessorsList>
                    </TeamBox>
                    <div className="noMore">{t('t_noMore')}</div>
                </TeamsContBox>
                <Inivite showInivate={showInivate} setShowInivate={setShowInivate} />
            </TeamsBox> :
            <Skeletons/>
    )
}

const getStoreData=(state)=>{
    return {
        teamData:state.teamData.data,
        userInfo:state.counter.userInfo,
    }
  }
  const dispatchAction=(dispatch)=>{
    return {
        handleUpdateData:(data)=>dispatch(teamDataSlice.actions.getdata(data)),
      
    }
  }
  export default connect(getStoreData,dispatchAction)(TeamsPage) ;