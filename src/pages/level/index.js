import React from 'react';
import LevelCard from './components/levelCard';
import grass_icon1 from '@/assets/icons/grass_icon1.png';
import grass_icon2 from '@/assets/icons/grass_icon2.png';
import xianrenzhang_icon from '@/assets/icons/xianrenzhang_icon.png';
import sun from '@/assets/icons/sun.png';
import { Image } from 'antd-mobile';
import {
    LevelBox,
    LevelContentBox,
    AuthorLevel,
    InfoCard
} from './styled';
import Title from "@/common/title";
import TopNav from "@/common/TopNav";
import { LeftOutline } from 'antd-mobile-icons'
import {
    useHistory,
  } from 'react-router-dom';
const UserPage = () => {
    const cards = [
        [grass_icon1, grass_icon2, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon2, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon2, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon2],
        [grass_icon1, grass_icon1, grass_icon1, grass_icon1, grass_icon1],
    ];
    const history = useHistory()
    let toBack=()=>{
        history.goBack();
    }
    return (
        <LevelBox>
            <div className='top'>
                <TopNav back={null}  left={<span style={{ fontWeight: 'bold' }}><LeftOutline onClick={toBack}/>Recharge</span>}  right="English"/>
            </div>
            <AuthorLevel>
                <Image
                    src={sun}
                    width={30}
                    height={30}
                    fit='cover'
                    className='sun'
                />
                <InfoCard >

                    <div className='author'>
                        <Image
                            src={grass_icon1}
                            width={30}
                            height={30}
                            fit='cover'
                        />
                        <div className="icons">
                            {cards[3].map((item, index) => <Image
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
                    <div className='des'>The higher the environmental protection level, the higher the income, and the richer the rights and interests!</div>
                </InfoCard>
            </AuthorLevel>
            <LevelContentBox>
                <Title img={xianrenzhang_icon} name="Environmental protection level" weight="bold" />
                {cards.map((item, index) => <LevelCard key={index} icons={item} index={index} />)}
            </LevelContentBox>
        </LevelBox>
    )
}


export default UserPage;