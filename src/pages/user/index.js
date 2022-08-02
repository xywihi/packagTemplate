import React, { useState, useCallback } from 'react';
import LevelCard from './components/levelCard';
import grass_icon1 from '@/assets/icons/grass_icon1.png';
import grass_icon2 from '@/assets/icons/grass_icon2.png';
import xianrenzhang_icon from '@/assets/icons/xianrenzhang_icon.png';
import assets from '@/assets/icons/assets.png';
import history from '@/assets/icons/history.png';
import { Image } from 'antd-mobile';
import {
    RechargeBox,
    RechargeContent,
    AssetsBox,
    HistoryBox,
    AssetsCard,
    HistoryItem,
    HistoryList,
    HistoryContentBox,
} from './styled';
import Title from "@/common/title";
import { NavBar, DatePicker, InfiniteScroll, DotLoading } from 'antd-mobile';
import { DownFill, ClockCircleOutline, BillOutline } from 'antd-mobile-icons'
import Button from "@/common/Button";
import { mockRequest } from './data.js'
const UserPage = () => {
    const [visible, setVisible] = useState(false);
    const [dateYear, setDateYear] = useState(new Date());
    const cards = [
        [grass_icon1, grass_icon2, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon1],
    ];
    const histories = [
        { day: '5-21', time: '12:45', money: '129.00', id: 'a' },
        { day: '5-18', time: '17:21', money: '300.00', id: 'b' },
        { day: '5-12', time: '11:31', money: '1009.00', id: 'c' },
        { day: '5-06', time: '09:11', money: '2109.00', id: 'd' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'e' },
        { day: '5-12', time: '12:45', money: '300.00', id: 'f' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'g' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'h' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'i' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'j' },
        { day: '5-21', time: '12:45', money: '129.00', id: 'aa' },
        { day: '5-18', time: '17:21', money: '300.00', id: 'bb' },
        { day: '5-12', time: '11:31', money: '1009.00', id: 'cc' },
        { day: '5-06', time: '09:11', money: '2109.00', id: 'dd' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'ee' },
        { day: '5-12', time: '12:45', money: '300.00', id: 'ff' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'gg' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'hh' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'ii' },
        { day: '5-12', time: '12:45', money: '129.00', id: 'jj' },
    ];
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    let handleRecharge = () => {
        console.log('recharge')
    }
    let handleWithdraw = () => {
        console.log('withdraw')
    }
    
    async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...append])
    console.log(data,append)
    setHasMore(append.length > 0)
  }
    return (
        <RechargeBox>
            <div className='top'>
                <NavBar left={<span>LOGO</span>} right={<span>English</span>}></NavBar>
            </div>
            <RechargeContent>
                <AssetsBox>
                    <Title img={assets} name="My assets" weight="bold" right={<span style={{ color: "#00B578", fontWeight: 500 }}>Detail</span>} />
                    <AssetsCard>
                        <div className='price'>
                            <span>137.00</span>
                            <span>USDT</span>
                        </div>
                        <div className='btns'>
                            <Button content="Recharge" color="#fff" background="#00B578" height={38} width={90} className='rightBox' onClick={handleRecharge} />
                            <Button content="Withdraw" color="#fff" background="#4D4D4D" height={38} width={90} className='rightBox' onClick={handleWithdraw} />
                        </div>
                    </AssetsCard>
                </AssetsBox>
                <HistoryBox>
                    <Title className="historyTitle" img={history} name="History " weight="bold" right={<div onClick={() => setVisible(true)}><span><DownFill />{dateYear.toDateString().split(' ')[1]}</span><span><DownFill />{dateYear.getFullYear()}</span></div>} />
                    <HistoryContentBox>
                        <HistoryList>
                            <HistoryItem style={{ color: "#B6B6B6" }}>
                                <div><ClockCircleOutline /><span>Time</span></div>
                                <div><BillOutline /><span>Money</span></div>
                            </HistoryItem>
                            {histories.map(item => (<HistoryItem key={item.id}>
                                <div className='time'><span>{item.day}</span><span>{item.time}</span></div>
                                <div className="money">{item.money}</div>
                            </HistoryItem>))}

                        </HistoryList>
                        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} children={(hasMore,failed,retry)=>(failed ? <div>Error</div> : hasMore ? <div>Loading<DotLoading color='#00B578' /></div> :<div>Not more data</div>)}/>
                    </HistoryContentBox>
                </HistoryBox>
            </RechargeContent>
            <DatePicker
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                precision='month'
                onConfirm={val => {
                    setDateYear(val)
                }}
            />
        </RechargeBox>
    )
}


export default UserPage;