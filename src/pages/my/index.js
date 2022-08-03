import React from 'react';
import { Image, NavBar } from 'antd-mobile';
import { MyBox, MyContBoxTop, MyContBox, AssetsBox, AssetsCard, EarningCard, InfoBox, InfoContent, InfoItem } from './styled';
import avtor from "@/assets/images/avtor.png";
import money from "@/assets/icons/money.png";
import info from "@/assets/icons/info.png";
import grass_icon1 from '@/assets/icons/grass_icon1.png';
import grass_icon2 from '@/assets/icons/grass_icon2.png';
import { SetOutline, BankcardOutline, MailFill } from 'antd-mobile-icons';
import {
    useHistory,
} from 'react-router-dom';
import Title from "@/common/title";
import Button from "@/common/Button";
const TeamsPage = () => {
    const history = useHistory();
    const cards = [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon2];
    let toSuccessorList = (level) => {
        history.push('/team/list', { level })
    }
    let handleRecharge = () => {
        console.log('recharge')
    }
    let handleWithdraw = () => {
        console.log('withdraw')
    }
    return (
        <MyBox>
            <div className='top'>
                <NavBar back={null} left={<span>LOGO</span>} right={<SetOutline />}></NavBar>
            </div>
            <MyContBoxTop>
                <div className='userInfo'>
                    <Image
                        src={avtor}
                        width={50}
                        height={50}
                        fit='cover'
                        style={{ borderRadius: 50 }}
                    />
                    <div className='userInf'>
                        <div>Jack</div>
                        <div><span>ID: MS215467391</span><span>xxx coin: 382644</span></div>
                    </div>
                </div>
                <div>
                    <div className='levelInfo'>
                        <div className="icons">
                            {cards.map((item, index) => <Image
                                src={item}
                                width={21}
                                height={21}
                                fit='cover'
                                key={index}
                            />)}
                        </div>
                        <div className="level">
                            4th class environmentalist
                        </div>
                    </div>
                    <div className='date'>Term of validity:May,12,2023</div>
                </div>
            </MyContBoxTop>
            <MyContBox>
                <AssetsBox>
                    <Title img={money} name="My assets" weight="bold" right={<span style={{ color: "#00B578", fontWeight: 500 }}>Details</span>} />
                    <AssetsCard>
                        <div className='price'>
                            <span>137.00</span>
                            <span>USDT</span>
                        </div>
                        <div className='btns'>
                            <Button radius="10" content="Recharge" color="#fff" background="#00B578" height={38} width={90} className='rightBox' onClick={handleRecharge} />
                            <Button radius="10" content="Withdraw" color="#fff" background="#4D4D4D" height={38} width={90} className='rightBox' onClick={handleWithdraw} />
                        </div>
                    </AssetsCard>
                    <EarningCard>
                        <Title name={<span style={{ color: '#fff' }}>Earnings</span>} weight="bold" right={<span style={{ color: "#00B578", fontWeight: 500 }}>Earnings Details</span>} />
                        <div className='bottomContent'>
                            <div>
                                <div>21456.00</div>
                                <div>Total</div>
                            </div>
                            <div>
                                <div>367.00</div>
                                <div>Today's</div>
                            </div>
                            <div>
                                <div>647.00</div>
                                <div>Yesterday's</div>
                            </div>
                        </div>
                    </EarningCard>
                </AssetsBox>
                <InfoBox>
                    <Title img={info} name="My Info" weight="bold" right={<span style={{ color: "#00B578", fontWeight: 500 }}>Edit</span>} />
                    <InfoContent>
                        <InfoItem>
                            <MailFill />
                            <span>msdgjk@gamil.com</span>
                        </InfoItem>
                        <InfoItem>
                            <BankcardOutline />
                            <span>13247843522</span>
                        </InfoItem>
                    </InfoContent>
                </InfoBox>
            </MyContBox>
        </MyBox>
    )
}


export default TeamsPage;